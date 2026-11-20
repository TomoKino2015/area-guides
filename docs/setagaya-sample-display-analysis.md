# `/areas/setagaya_sample` 表示内容の原因分析レポート

## 実行モード確認

✅ **READ ONLYモードで分析のみ実施**  
- ファイルの編集・作成・削除・移動は一切行っていません
- コード・YAML・画像・docsの変更は一切ありません

---

## 1. ルーティングとデータロードの流れ

### フロー図

```
/areas/setagaya_sample にアクセス
    ↓
app/(marketing)/areas/[slug]/page.tsx
    ↓
loadAreaYaml("setagaya_sample")
    ↓
lib/area-loader.ts: loadAreaYaml()
    ↓
content/area/setagaya_sample.yml を読み込み
    ↓
YAML.parse() でパース
    ↓
areaData オブジェクトを整形
    ↓
slug === "setagaya_sample" の条件分岐
    ↓
<ShibuyaStoryLanding area={areaData} />
    ↓
components/areas/ShibuyaStoryLanding.tsx でレンダリング
```

### 重要なポイント

1. **正しいYAMLファイルを読み込んでいる**
   - `loadAreaYaml("setagaya_sample")` は `content/area/setagaya_sample.yml` を読み込む
   - `shibuya.yml` は読み込まれていない

2. **データの整形ロジック**
   - `app/(marketing)/areas/[slug]/page.tsx` の31行目で `...yaml` により、YAMLの全フィールドが `areaData` に展開される
   - そのため、`setagaya_sample.yml` のすべてのキーが `ShibuyaStoryLanding` に渡される

3. **コンポーネントの選択**
   - 40-42行目で `slug === "setagaya_sample"` の場合、`ShibuyaStoryLanding` が使用される
   - これは意図的な設計（テスト用にストーリー型レイアウトを使用）

---

## 2. `ShibuyaStoryLanding.tsx` が参照しているフィールドのマッピング

### UIセクション → YAMLフィールド対応表

| UIセクション | YAMLフィールド | フォールバック / デフォルト | 備考 |
|---|---|---|---|
| **Hero タイトル** | `area.titleEn` | `yaml.title.en` → `yaml.locales.en.title` → `yaml.title` → `slug` | ✅ 正しく表示 |
| **Hero 日本語タイトル** | `area.titleJa` | `yaml.title.ja` → `yaml.locales.ja.title` → `yaml.title` → `""` | ✅ 正しく表示 |
| **Hero サブコピー（タグライン）** | `subtitle` (118-126行目) | `hero.tagline.en/ja` (setagaya_sample) → `subtitle.en/ja` → `""` | ✅ 正しく表示（`hero.tagline.en` から取得） |
| **Hero 概要（リード）** | `overview` (125行目) | `hero.lead.en/ja` (setagaya_sample) → `overview.en/ja` → `""` | ✅ 正しく表示（`hero.lead.en` から取得） |
| **Hero タグ** | `who_it_fits.tags` (197-204行目) | `who_it_fits.tags` (setagaya_sample) → `tags` → `[]` | ✅ 正しく表示 |
| **Who This Area Fits** | `whoItFits` (129-137行目) | `who_it_fits.description.en/ja` (setagaya_sample) → `who_it_fits.en/ja` → `[]` | ⚠️ **問題あり**: `description` が文字列なので、配列として扱われていない |
| **Who This Area Fits - 住民の声** | `sampleResidents` (149-151行目) | `who_it_fits.sample_residents` (setagaya_sample) → `[]` | ✅ 正しく表示されるはず |
| **Lifestyle & Amenities** | `life` (269-347行目) | `life` (setagaya_sample) → `lifestyle.en/ja` → 非表示 | ✅ 正しく表示（`life` から取得） |
| **Foreign-Friendly Guide** | `foreignFriendly` (364-391行目) | `foreign_friendly` (setagaya_sample) → 非表示 | ✅ 正しく表示 |
| **Popular Neighborhoods** | `subareas` (394-431行目) | `subareas` → `[]` | ✅ 正しく表示 |
| **Average Rent Prices** | `rentData` (438-527行目) | `rent_by_type` → `null` | ⚠️ **問題あり**: `rent_by_type` の構造が期待と異なる |
| **Access to Major Stations** | `commuteTimes` (530-559行目) | `commute_times` → `[]` | ✅ 正しく表示 |
| **FAQ** | `faqItems` (565-585行目) | `faq` → `[]` | ⚠️ **問題あり**: `setagaya_sample.yml` に `faq` がない |
| **Events Timeline** | `events` (588-624行目) | `events.items` (setagaya_sample) → `events` → `[]` | ⚠️ **問題あり**: `events.items` の構造が期待と異なる |
| **CTA Section** | `closing` (629-647行目) | `closing` (setagaya_sample) → `money_and_access.cta` → `cta` → 固定文言 | ✅ 正しく表示（`closing` から取得） |

### 重要な発見

#### ⚠️ 問題1: `who_it_fits` の表示が不完全

**コード（129-137行目）:**
```typescript
if (isSetagayaSample && area.who_it_fits && "description" in area.who_it_fits) {
  const desc = area.who_it_fits.description?.en || area.who_it_fits.description?.ja || "";
  if (desc) whoItFits = [desc];  // ← 文字列を配列に変換
}
```

**YAML（45-53行目）:**
```yaml
who_it_fits:
  description:
    ja: |
      若手ビジネスパーソンからクリエイター、子育てファミリーまで、
      幅広いライフスタイルに対応できるエリアです。
      都心へのアクセスが良く、緑豊かな環境と個性的な街の文化が魅力です。
    en: |
      From young professionals to creators and families with children,
      Setagaya accommodates diverse lifestyles.
      ...
```

**問題点:**
- `description` は複数段落の長文だが、1つの配列要素として表示される
- UIでは各段落が別々のカードとして表示される想定だが、現在は1つのカードに全テキストが詰め込まれる

#### ⚠️ 問題2: `rent_by_type` の構造不一致

**コード（453-521行目）が期待する構造:**
```typescript
rentData["1K"]?.typical  // または min/max
rentData["1LDK"]?.typical
```

**setagaya_sample.yml（329-349行目）の実際の構造:**
```yaml
rent_by_type:
  "1R":
    avg: 100500  # ← typical ではなく avg
  "1K":
    avg: 103300  # ← typical ではなく avg
```

**問題点:**
- コードは `typical`, `min`, `max` を期待しているが、YAMLには `avg` しかない
- そのため、`rentData["1K"].typical` が `undefined` になり、「N/A」と表示される

#### ⚠️ 問題3: `events` の構造不一致

**コード（588-624行目）が期待する構造:**
```typescript
events.map((event) => {
  event.name?.en || event.name?.ja
  event.description?.en || event.description?.ja
})
```

**setagaya_sample.yml（266-297行目）の実際の構造:**
```yaml
events:
  items:  # ← ネストされている
    - id: "setagaya-boroichi"
      name:
        ja: "世田谷ボロ市"
        en: "Setagaya Boroichi"
```

**問題点:**
- コードは `area.events` を直接配列として扱っているが、YAMLでは `events.items` にネストされている
- そのため、`area.events` は `{ items: [...] }` というオブジェクトになり、`map` できない

#### ⚠️ 問題4: `faq` フィールドが存在しない

**コード（565-585行目）:**
```typescript
const faqItems = (area.faq || []).map(...)
```

**setagaya_sample.yml:**
- `faq` フィールドが存在しない

**問題点:**
- FAQセクションが表示されない（空配列のため）

---

## 3. `setagaya_sample.yml` の中身とG1〜G7の整合性チェック

### G1: Meta & Hero

| フィールド | YAML内の状態 | UIで使用されているか | 備考 |
|---|---|---|---|
| `meta.quarter` | ✅ "2025-Q1" | ❌ 未使用 | UIには表示されていない |
| `meta.updated_at` | ✅ "2025-02-01" | ❌ 未使用 | UIには表示されていない |
| `meta.reading_time_minutes` | ✅ 5 | ❌ 未使用 | UIには表示されていない |
| `hero.tagline.en/ja` | ✅ あり | ✅ 使用中 | `subtitle` として表示 |
| `hero.lead.en/ja` | ✅ あり（長文） | ✅ 使用中 | `overview` として表示 |
| `assets.hero.path` | ✅ "/images/setagaya-map.png" | ✅ 使用中 | 背景画像として使用 |
| `assets.map.path` | ✅ "/images/setagaya-map.png" | ❌ 未使用 | UIには表示されていない |

### G2: Who It Fits

| フィールド | YAML内の状態 | UIで使用されているか | 備考 |
|---|---|---|---|
| `who_it_fits.tags` | ✅ 4つ | ✅ 使用中 | Heroセクションのタグとして表示 |
| `who_it_fits.description.en/ja` | ✅ あり（長文） | ⚠️ 部分的に使用 | 1つのカードに全テキストが詰め込まれる |
| `who_it_fits.sample_residents` | ✅ 2件 | ✅ 使用中 | Who It Fitsセクション内で表示 |

### G3: Subareas

| フィールド | YAML内の状態 | UIで使用されているか | 備考 |
|---|---|---|---|
| `subareas[].name.en/ja` | ✅ 3件 | ✅ 使用中 | Popular Neighborhoodsセクションで表示 |
| `subareas[].description.en/ja` | ✅ あり | ✅ 使用中 | 各サブエリアカード内で表示 |
| `subareas[].highlights` | ✅ あり | ✅ 使用中 | Badgeとして表示 |
| `subareas[].cons` | ✅ あり | ❌ 未使用 | UIには表示されていない |
| `subareas[].hero_image.path` | ✅ あり | ❌ 未使用 | UIには表示されていない |

### G4: Money & Access

| フィールド | YAML内の状態 | UIで使用されているか | 備考 |
|---|---|---|---|
| `money_and_access.subarea_rent_table` | ✅ あり | ❌ 未使用 | UIには表示されていない |
| `money_and_access.unit_rent_stats` | ✅ あり（9件） | ❌ 未使用 | UIには表示されていない |
| `money_and_access.cta` | ✅ あり | ⚠️ 部分的に使用 | CTAセクションで使用（`closing` が優先） |
| `rent_by_type` | ✅ あり（`avg` 形式） | ⚠️ 構造不一致 | `typical/min/max` を期待しているが `avg` しかない |

### G5: Life

| フィールド | YAML内の状態 | UIで使用されているか | 備考 |
|---|---|---|---|
| `life.shopping.summary_en/ja` | ✅ あり | ✅ 使用中 | Lifestyle & Amenitiesセクションで表示 |
| `life.shopping.spots` | ✅ 2件 | ✅ 使用中 | リストとして表示 |
| `life.dining.summary_en/ja` | ✅ あり | ✅ 使用中 | Lifestyle & Amenitiesセクションで表示 |
| `life.dining.spots` | ✅ 2件 | ✅ 使用中 | リストとして表示 |
| `life.parks.summary_en/ja` | ✅ あり | ✅ 使用中 | Lifestyle & Amenitiesセクションで表示 |
| `life.parks.spots` | ✅ 2件 | ✅ 使用中 | リストとして表示 |
| `life.education_and_medical.summary_en/ja` | ✅ あり | ✅ 使用中 | Lifestyle & Amenitiesセクションで表示 |
| `life.education_and_medical.spots` | ✅ 2件 | ✅ 使用中 | リストとして表示 |

### G6: Foreign Friendly

| フィールド | YAML内の状態 | UIで使用されているか | 備考 |
|---|---|---|---|
| `foreign_friendly.summary_en/ja` | ✅ あり | ✅ 使用中 | Foreign-Friendly Guideセクションで表示 |
| `foreign_friendly.bullets_en/ja` | ✅ 4件 | ✅ 使用中 | リストとして表示 |

### G7: Events & Closing

| フィールド | YAML内の状態 | UIで使用されているか | 備考 |
|---|---|---|---|
| `events.items[].name.en/ja` | ✅ 3件 | ⚠️ 構造不一致 | `events.items` ではなく `events` を期待 |
| `events.items[].description.en/ja` | ✅ あり | ⚠️ 構造不一致 | 同上 |
| `events.items[].month` | ✅ あり | ⚠️ 構造不一致 | 同上 |
| `closing.text_en/ja` | ✅ あり | ✅ 使用中 | CTAセクションで表示 |
| `closing.extra_links` | ✅ 1件 | ✅ 使用中 | ボタンとして表示 |
| `faq` | ❌ 存在しない | ❌ 未使用 | FAQセクションが表示されない |

### まとめ: YAMLに存在するがUIで未使用のフィールド

- `meta.quarter`, `meta.updated_at`, `meta.reading_time_minutes`
- `assets.map.path`
- `subareas[].cons`
- `subareas[].hero_image.path`
- `money_and_access.subarea_rent_table`
- `money_and_access.unit_rent_stats`
- `faq`（存在しない）

### まとめ: UIで使用されているが構造不一致のフィールド

- `rent_by_type`: `avg` 形式だが、コードは `typical/min/max` を期待
- `events`: `events.items` にネストされているが、コードは `events` を直接配列として期待
- `who_it_fits.description`: 長文が1つの配列要素として扱われている

---

## 4. 「なぜ今のような見え方になっているのか」の結論

### 原因の特定

**結論: B + D（ShibuyaStoryLanding.tsx に Shibuya専用の固定コピー / fallback が残っている + 構造不一致の複合）**

#### 主な原因

1. **構造不一致によるデータ未反映**
   - `rent_by_type`: `avg` 形式だが、コードは `typical/min/max` を期待 → 「N/A」表示
   - `events`: `events.items` にネストされているが、コードは `events` を直接配列として期待 → イベントが表示されない
   - `who_it_fits.description`: 長文が1つの配列要素として扱われ、段落分けされない

2. **Shibuya専用の固定文言が残っている**
   - CTAセクション（649-662行目）: `isSetagayaSample && closing` の条件分岐があるが、フォールバックで「Ready to Explore Shibuya?」という固定文言が残っている
   - ただし、実際には `closing` が存在するため、この固定文言は表示されない

3. **YAMLの構造がG1〜G7の定義と一致していない**
   - `setagaya_sample.yml` はG1〜G7の構造を持っているが、`ShibuyaStoryLanding.tsx` は元々Shibuya用に設計されている
   - そのため、一部のフィールド（`events.items`, `rent_by_type.avg`）が期待する構造と異なる

4. **FAQセクションが存在しない**
   - `setagaya_sample.yml` に `faq` フィールドがないため、FAQセクションが表示されない

### 詳細な原因分析

#### A. setagaya_sample.yml そのものが、ほぼShibuyaのテンプレをコピペした状態のままだから

**❌ これは原因ではない**

- `setagaya_sample.yml` は独自の構造（G1〜G7）を持っている
- 内容も世田谷区向けに書かれている（三軒茶屋、下北沢、二子玉川など）
- Shibuyaの内容（代官山、恵比寿、表参道など）は含まれていない

#### B. ShibuyaStoryLanding.tsx に Shibuya専用の固定コピー / fallback が残っているから

**✅ 部分的に原因**

- CTAセクションに「Ready to Explore Shibuya?」という固定文言が残っている（ただし実際には表示されない）
- `rent_by_type` の処理が `typical/min/max` 形式を前提としている
- `events` の処理が `events` を直接配列として期待している

#### C. `/areas/setagaya_sample` が、実は間違って `shibuya.yml` を読みに行っているから

**❌ これは原因ではない**

- `loadAreaYaml("setagaya_sample")` は正しく `content/area/setagaya_sample.yml` を読み込んでいる
- `shibuya.yml` は読み込まれていない

#### D. その複合

**✅ これが主な原因**

- `setagaya_sample.yml` はG1〜G7の構造を持っているが、`ShibuyaStoryLanding.tsx` は元々Shibuya用に設計されている
- そのため、構造不一致（`events.items`, `rent_by_type.avg`）が発生している
- 一部のフィールド（`who_it_fits.description`）が期待する形式と異なる

---

## 5. G1〜G7で再定義したリッチな世田谷コンテンツを反映させるための修正提案

### 修正が必要なファイルとレイヤー

#### レイヤー1: `components/areas/ShibuyaStoryLanding.tsx`

1. **`rent_by_type` の処理を修正**
   - 現在: `rentData["1K"].typical` を期待
   - 修正: `rentData["1K"].avg` も対応するように条件分岐を追加
   - 場所: 453-521行目

2. **`events` の処理を修正**
   - 現在: `area.events` を直接配列として扱う
   - 修正: `isSetagayaSample` の場合は `area.events.items` を参照するように条件分岐を追加
   - 場所: 143行目と588-624行目

3. **`who_it_fits.description` の処理を改善**
   - 現在: 長文を1つの配列要素として扱う
   - 修正: 段落（`\n\n`）で分割して複数のカードとして表示する
   - 場所: 129-137行目

4. **`faq` の処理を追加**
   - 現在: `area.faq` を参照するが、`setagaya_sample.yml` には存在しない
   - 修正: `setagaya_sample.yml` に `faq` フィールドを追加するか、またはFAQセクションを非表示にする

#### レイヤー2: `content/area/setagaya_sample.yml`

1. **`rent_by_type` の構造を統一**
   - 現在: `avg` 形式
   - 修正案A: `typical` 形式に変更（`avg` → `typical`）
   - 修正案B: `avg` と `typical` の両方を保持（互換性のため）

2. **`events` の構造を統一**
   - 現在: `events.items` にネスト
   - 修正案A: `events` を直接配列にする（`items` を削除）
   - 修正案B: コード側で `events.items` に対応する（推奨）

3. **`faq` フィールドを追加**
   - 現在: 存在しない
   - 修正: G1〜G7の定義に従って `faq` フィールドを追加

4. **`who_it_fits.description` の構造を検討**
   - 現在: 長文が1つの文字列
   - 修正案A: 段落ごとに配列に分割する
   - 修正案B: コード側で段落分割処理を追加（推奨）

### 推奨される修正順序

1. **最優先**: `ShibuyaStoryLanding.tsx` の構造不一致を修正
   - `events.items` への対応
   - `rent_by_type.avg` への対応
   - `who_it_fits.description` の段落分割

2. **次優先**: `setagaya_sample.yml` に不足しているフィールドを追加
   - `faq` フィールドの追加

3. **任意**: 未使用フィールドの活用
   - `money_and_access.subarea_rent_table` の表示
   - `money_and_access.unit_rent_stats` の表示
   - `subareas[].cons` の表示

---

## 6. 実行禁止の再確認

✅ **このタスクでは、一切ファイルを変更していません**

- ファイルの編集: ❌ 実施していません
- 新規ファイルの作成: ❌ 実施していません
- 削除やリネーム: ❌ 実施していません
- レポートのみをMarkdownで返しています

---

## まとめ

`/areas/setagaya_sample` が「まだShibuyaオリジンのMVPっぽい状態から抜け出せていない」主な原因は、**構造不一致**です。

- `setagaya_sample.yml` はG1〜G7の構造を持っているが、`ShibuyaStoryLanding.tsx` は元々Shibuya用に設計されている
- そのため、一部のフィールド（`events.items`, `rent_by_type.avg`）が期待する構造と異なり、データが正しく表示されない
- また、`who_it_fits.description` が長文のまま1つのカードに詰め込まれ、段落分けされていない

修正するには、`ShibuyaStoryLanding.tsx` で `setagaya_sample` 用の構造に対応する条件分岐を追加する必要があります。



