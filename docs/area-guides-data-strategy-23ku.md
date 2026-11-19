# 23区エリアガイド データ戦略（Data Strategy for 23 Wards）

## 1. 概要（Overview）

### 設計思想

BMADエリアガイドでは、「データ」と「ストーリー」を明確に分離し、四半期ごとの更新を効率化することを目指しています。

- **データ（SoT）**: 数値・事実・構造化情報を一元管理
- **ストーリー（YAML）**: AI生成テキストと人間の編集を組み合わせたコンテンツ
- **UI（コンポーネント）**: データとストーリーを組み合わせて表示する23区共通のレイアウト

### 3層アーキテクチャ

```
Layer A: SoT（Source of Truth）
  ↓ 参照・補完
Layer B: YAML（G1〜G7ストーリー）
  ↓ 読み込み・表示
Layer C: UI（DefaultAreaLanding など）
```

**Layer A（SoT）**: 構造化データの真実の源
- `data/rent-2025q1.ts` - 賃料データ
- `data/commute-2025q1.ts` - 通勤データ
- 将来的に追加予定: events, foreign-friendly など

**Layer B（YAML）**: ストーリーとメタデータ
- `content/area/{slug}.yml` - 各エリアのG1〜G7構造
- SoTを参照しつつ、AI生成テキストで補完

**Layer C（UI）**: 23区共通コンポーネント
- `components/areas/DefaultAreaLanding.tsx` - 汎用LPレイアウト
- `components/areas/CommuteTable.tsx` - 通勤テーブル
- データ駆動で、slugによる分岐なし

---

## 2. Layer A: SoT の設計方針

### 2.1 既存のSoT

#### `data/rent-2025q1.ts`（賃料データ）

**責任範囲**:
- 東京23区すべての間取り別平均賃料（1R, 1K, 1DK, 1LDK, 2K, 2DK, 2LDK, 3DK, 3LDK）
- 単位: 円 / 月
- 四半期ごとの更新（ファイル名: `rent-{year}q{quarter}.ts`）

**持たないもの**:
- サブエリア別の賃料（YAML側で管理）
- 賃料の説明文やコメント（YAML側で管理）

**データソース**:
- 元データ: `docs/data-homes-rent-2025q1.md`（人間がHOMESから取得）
- 更新頻度: 四半期ごと

**運用フロー**:
1. 人間がHOMESから新しい四半期の賃料表を取得
2. `docs/data-homes-rent-{year}q{quarter}.md` に生データを保存
3. AIが `data/rent-{year}q{quarter}.ts` を更新（または新規作成）
4. AIが対象エリアの `content/area/{slug}.yml` の `rent_by_type` を更新
5. UIコンポーネントが自動的に最新のYAMLデータを表示

#### `data/commute-2025q1.ts`（通勤データ）

**責任範囲**:
- 各区の代表駅（`isRepresentative: true`）の通勤情報
- 主要駅（新宿、渋谷、東京、品川）への所要時間と路線情報
- 代表駅は最大4駅まで（UI崩れ防止）

**持たないもの**:
- 非代表駅の詳細情報（必要に応じてYAML側で補完）
- 通勤時間の説明文（YAML側で管理）

**データソース**:
- 元データ: `docs/data-homes-commute-2025q1-{ward}.md`（人間がHOMESから取得）
- 更新頻度: 四半期ごと（または必要に応じて）

**運用フロー**:
1. 人間がHOMESから新しい四半期の通勤データを取得（またはAtlasでスクレイピング）
2. `docs/data-homes-commute-2025q1-{ward}.md` に生データを保存
3. AIが `data/commute-2025q1.ts` を更新（新しい区を追加）
4. UIコンポーネントがSoTから代表駅データを自動取得・表示

**現在の状態**:
- 杉並区（suginami）のみデータあり
- 他の22区は `undefined` として定義済み

---

### 2.2 これから追加したいSoTの候補

#### `data/events-2025q1.ts`（イベントデータ）

**想定する責任範囲**:
- 各区の年間イベント・祭り・文化行事の基本情報
- イベント名、開催月、開催場所、公式URL
- 年によって変動する可能性があるため、四半期ごとの更新を検討

**持たないもの**:
- イベントの詳細説明文（YAML側でAI生成）
- イベント画像のパス（YAML側で管理）

**データソース**:
- 区の公式サイト、観光協会サイト
- Atlasでスクレイピング可能

**優先度**: 中（G7のEventsセクションで使用）

---

#### `data/foreign-friendly-2025q1.ts`（外国人向け情報）

**想定する責任範囲**:
- 英語対応医療機関のリスト（名称、住所、対応言語）
- インターナショナルスクールのリスト（名称、住所、レベル）
- 英語対応の行政サービス窓口情報
- 多言語対応の商業施設・レストラン情報（主要なもののみ）

**持たないもの**:
- 各施設の詳細説明文（YAML側でAI生成）
- 施設の画像（YAML側で管理）

**データソース**:
- 区の公式サイト（多言語対応情報）
- 医療機関・学校の公式サイト
- Atlasでスクレイピング可能

**優先度**: 高（G6のForeign-friendlyセクションで使用）

---

#### `data/faq-templates.ts`（FAQテンプレート）

**想定する責任範囲**:
- 23区共通で使えるFAQ質問のテンプレートリスト
- 例: 「この区は外国人に優しいですか？」「平均賃料は？」「アクセスはどうですか？」
- 各質問に対する「データ参照パターン」の定義
  - 例: 「平均賃料は？」→ `rent-2025q1.ts` から該当区のデータを参照

**持たないもの**:
- 実際の回答文（YAML側でAI生成、SoTデータを参照）

**データソース**:
- 人間が23区共通の質問パターンを定義
- 一度作成すれば、四半期ごとの更新は不要（データ参照先が変わるだけ）

**優先度**: 低（G7のFAQセクションで使用、ただしテンプレート化は後回しでも可）

---

### 2.3 Atlas / 外部ソースとの連携戦略

#### HOMES / SUUMO からのスクレイピング

**賃料データ**:
- **対象ページ**: HOMESの「23区別平均賃料」ページ
- **取得データ**: 区別 × 間取り別の平均賃料表
- **出力形式**: Markdownテーブル（`docs/data-homes-rent-{year}q{quarter}.md`）
- **更新頻度**: 四半期ごと

**通勤データ**:
- **対象ページ**: HOMESの各区ページ（例: `https://www.homes.co.jp/chintai/tokyo/suginami-city/`）
- **取得データ**: 
  - 主要駅への通勤時間（新宿、渋谷、東京、品川）
  - 代表駅のリスト（最大4駅）
  - 路線情報
- **出力形式**: JSON（`docs/data-homes-commute-2025q1-{ward}.md` に埋め込み）
- **更新頻度**: 四半期ごと（または新規区追加時）

**Atlas用プロンプトの粒度感**:
- 1つのプロンプトで「1区の通勤データ」を取得する粒度が適切
- 23区すべてを一度に取得するのではなく、区ごとに実行する方が安全
- 出力は必ず `docs/` にアーカイブしてから、SoTファイルに反映

---

#### 区の公式サイトからのスクレイピング

**イベント情報**:
- **対象ページ**: 各区の公式サイト「イベント・祭り」ページ
- **取得データ**: イベント名、開催月、開催場所、公式URL
- **出力形式**: JSON（`docs/data-events-2025q1-{ward}.md` に埋め込み）
- **更新頻度**: 四半期ごと（または年1回）

**外国人向け情報**:
- **対象ページ**: 各区の公式サイト「多言語対応」「外国人向けサービス」ページ
- **取得データ**: 医療機関リスト、学校リスト、行政サービス情報
- **出力形式**: JSON（`docs/data-foreign-friendly-2025q1-{ward}.md` に埋め込み）
- **更新頻度**: 四半期ごと（または年1回）

---

## 3. Layer B: YAML（G1〜G7）の役割

### 3.1 G1: Meta & Hero

**SoT参照**:
- なし（メタ情報は人間が決める）

**AI生成テキスト**:
- `hero.tagline` - エリアの特徴を1文で表現
- `hero.lead` - エリアの概要を2〜3パラグラフで説明

**人間入力**:
- `meta.quarter`, `meta.updated_at` - 更新日時
- `assets.hero.path`, `assets.map.path` - 画像パス

---

### 3.2 G2: Who It Fits

**SoT参照**:
- なし（ターゲット層はエリアの特性から判断）

**AI生成テキスト**:
- `who_it_fits.tags` - エリアの特徴タグ（例: "ファミリー", "都心アクセス良好"）
- `who_it_fits.description` - ターゲット層の説明文
- `who_it_fits.sample_residents` - フィクションの住民声（2件程度）

---

### 3.3 G3: Subareas

**SoT参照**:
- なし（サブエリアの選定はエリアの特性から判断）

**AI生成テキスト**:
- `subareas[].description` - サブエリアの説明文
- `subareas[].highlights` - サブエリアの特徴リスト

**人間入力**:
- `subareas[].name` - 固有名詞（駅名・エリア名）
- `subareas[].hero_image.path` - 画像パス

---

### 3.4 G4: Money & Access

**SoT参照（優先）**:
- `money_and_access.unit_rent_stats.*` - `data/rent-2025q1.ts` から自動反映
- `commute_times` - `data/commute-2025q1.ts` から自動補完（YAMLにない駅はSoTから取得）

**AI生成テキスト**:
- `money_and_access.unit_rent_stats.rows[].note_ja/en` - 間取り別の説明文
- `money_and_access.summary` - 賃料・アクセスの概要説明

**人間入力**:
- `money_and_access.cta.*.url` - CTAボタンのURL

**運用方針**:
- 賃料データはSoTを優先し、YAMLは補完的に使用
- 通勤データはYAMLとSoTをマージ（YAML優先、SoTで補完）

---

### 3.5 G5: Life & Amenities

**SoT参照**:
- 将来的に `data/life-amenities-2025q1.ts` を検討（優先度: 低）

**AI生成テキスト**:
- `life.*.summary` - 各カテゴリ（shopping/dining/parks/education_and_medical）の概要
- `life.*.spots[].note` - 各スポットの説明文

**人間入力**:
- `life.*.spots[].name` - 固有名詞（店名・施設名）

**運用方針**:
- 現時点ではAI生成テキスト + 人間入力の固有名詞で運用
- 将来的にSoT化する場合は、主要スポットのみを構造化データとして管理

---

### 3.6 G6: Foreign-Friendly

**SoT参照（将来的）**:
- `data/foreign-friendly-2025q1.ts` から以下を参照:
  - 英語対応医療機関のリスト
  - インターナショナルスクールのリスト
  - 多言語対応行政サービス情報

**AI生成テキスト**:
- `foreign_friendly.summary` - 外国人向けサービスの概要説明
- `foreign_friendly.bullets` - 箇条書きの説明文（SoTデータを参照しつつ生成）

**運用方針**:
- SoTが整備されるまでは、AI生成テキスト + 人間入力で運用
- SoTが整備されたら、SoTデータを参照しつつAIが説明文を生成

---

### 3.7 G7: Events & Closing

**SoT参照（将来的）**:
- `data/events-2025q1.ts` から以下を参照:
  - イベント名、開催月、開催場所、公式URL

**AI生成テキスト**:
- `events.items[].description` - イベントの詳細説明文（SoTデータを参照しつつ生成）
- `closing.text` - クロージングテキスト
- `faq[].a` - FAQの回答文（SoTデータを参照しつつ生成）

**人間入力**:
- `events.items[].hero_image.path` - イベント画像のパス
- `closing.extra_links[].url` - CTAボタンのURL

**運用方針**:
- SoTが整備されるまでは、AI生成テキスト + 人間入力で運用
- SoTが整備されたら、SoTデータを参照しつつAIが説明文を生成

---

## 4. Layer C: UI コンポーネント（DefaultAreaLanding など）

### 4.1 23区共通コンポーネントの原則

#### 原則1: slugによる分岐を増やさない

**禁止事項**:
```typescript
// ❌ 禁止: 区ごとのif分岐
if (slug === "suginami") {
  // 杉並専用の処理
} else if (slug === "shibuya") {
  // 渋谷専用の処理
}
```

**推奨事項**:
```typescript
// ✅ 推奨: データ駆動で処理
const commuteRows = yamlCommuteRows || sotCommuteRows;
```

**理由**:
- 23区すべてで同じロジックを維持することで、保守性が向上
- 新しい区を追加する際にコード変更が不要

---

#### 原則2: データが無いセクションは静かに非表示

**実装パターン**:
```typescript
{area.who_it_fits && (
  <Card>
    {/* G2: Who It Fits */}
  </Card>
)}
```

**理由**:
- YAMLにデータがなくても、ページが壊れない
- データが追加されれば自動的に表示される

---

#### 原則3: SoT / YAML を入れ替えるだけで23区すべてに展開可能

**実装パターン**:
```typescript
// YAMLとSoTのデータをマージ
const commuteRows = (() => {
  if (yamlCommuteRows && yamlCommuteRows.length > 0) {
    // YAML優先、SoTで補完
    const yamlStations = new Set(yamlCommuteRows.map((r) => r.station));
    const additionalRows = sotCommuteRows.filter(
      (r) => !yamlStations.has(r.station)
    );
    return [...yamlCommuteRows, ...additionalRows];
  } else if (sotCommuteRows.length > 0) {
    // YAMLが無い場合はSoTのみ
    return sotCommuteRows;
  }
  return undefined;
})();
```

**理由**:
- 新しい区を追加する際は、SoTにデータを追加するだけでUIが自動的に表示される
- YAMLは補完的に使用し、SoTが優先される

---

### 4.2 既存コンポーネント

#### `DefaultAreaLanding.tsx`

**役割**:
- 23区共通のエリアLPレイアウト
- G1〜G7の全セクションを表示

**データソース**:
- `content/area/{slug}.yml` - YAMLデータ
- `data/rent-2025q1.ts` - 賃料SoT（間接参照）
- `data/commute-2025q1.ts` - 通勤SoT（直接参照）

**特徴**:
- slugによる分岐なし
- データが無いセクションは非表示
- SoTとYAMLの自動マージ

---

#### `CommuteTable.tsx`

**役割**:
- 23区共通の通勤テーブル表示
- 駅ごとに1行、主要駅（新宿/渋谷/東京/品川）ごとに1列

**データソース**:
- `CommuteRow[]` - `DefaultAreaLanding` から渡される

**特徴**:
- 代表駅フィルタリング対応（オプション）
- データが無い場合は非表示

---

## 5. Atlas / 外部ソースとの連携戦略

### 5.1 Atlas用スクレイピングプロンプトの粒度感

#### 粒度1: 1区の通勤データ取得

**プロンプト例**:
```
HOMESの以下のページから、{ward_name}の通勤データを取得してください：
- https://www.homes.co.jp/chintai/tokyo/{ward_slug}-city/

取得データ:
- 代表駅（最大4駅）のリスト
- 各代表駅から主要駅（新宿、渋谷、東京、品川）への所要時間
- 路線情報

出力形式: JSON（docs/data-homes-commute-2025q1-{ward_slug}.md に埋め込み）
```

**実行単位**: 1区ずつ（23回実行で23区すべてを取得）

---

#### 粒度2: 1区のイベントデータ取得

**プロンプト例**:
```
{ward_name}の公式サイトから、年間イベント・祭りの情報を取得してください：
- {ward_official_site_url}/events/

取得データ:
- イベント名（日本語・英語）
- 開催月
- 開催場所
- 公式URL

出力形式: JSON（docs/data-events-2025q1-{ward_slug}.md に埋め込み）
```

**実行単位**: 1区ずつ（23回実行で23区すべてを取得）

---

#### 粒度3: 1区の外国人向け情報取得

**プロンプト例**:
```
{ward_name}の公式サイトから、外国人向け情報を取得してください：
- {ward_official_site_url}/foreign-residents/
- {ward_official_site_url}/multilingual-services/

取得データ:
- 英語対応医療機関のリスト（名称、住所、対応言語）
- インターナショナルスクールのリスト（名称、住所、レベル）
- 多言語対応行政サービス情報

出力形式: JSON（docs/data-foreign-friendly-2025q1-{ward_slug}.md に埋め込み）
```

**実行単位**: 1区ずつ（23回実行で23区すべてを取得）

---

### 5.2 スクレイピングの優先順位

**Phase 1（完了済み）**:
- ✅ 賃料データ（23区すべて）: `data/rent-2025q1.ts`
- ✅ 通勤データ（杉並のみ）: `data/commute-2025q1.ts`

**Phase 2（次に実施）**:
- 通勤データ（残り22区）: `data/commute-2025q1.ts` に追加
- 優先度: 高（G4のMoney & Accessセクションで必須）

**Phase 3（将来的）**:
- 外国人向け情報（23区すべて）: `data/foreign-friendly-2025q1.ts`
- 優先度: 中（G6のForeign-friendlyセクションで使用）

**Phase 4（将来的）**:
- イベントデータ（23区すべて）: `data/events-2025q1.ts`
- 優先度: 低（G7のEventsセクションで使用、年1回更新でも可）

---

## 6. 杉並（suginami）現在地の位置づけ

### 6.1 実装状況

#### Layer A（SoT）: ✅ 部分完了

**完了**:
- ✅ `data/rent-2025q1.ts` - 杉並の賃料データあり（23区すべて）
- ✅ `data/commute-2025q1.ts` - 杉並の通勤データあり（代表駅4駅）

**未完了**:
- ❌ `data/events-2025q1.ts` - 未作成（G7のEventsで使用予定）
- ❌ `data/foreign-friendly-2025q1.ts` - 未作成（G6のForeign-friendlyで使用予定）

---

#### Layer B（YAML）: ✅ MVP完了

**完了**:
- ✅ `content/area/suginami.draft.yml` - G1〜G7の全構造が定義済み
- ✅ G1（Meta & Hero）: タイトル、タグライン、リード文
- ✅ G2（Who It Fits）: タグ、説明、サンプル住民
- ✅ G3（Subareas）: 4エリア（荻窪、高円寺、西荻窪、阿佐ケ谷）
- ✅ G4（Money & Access）: 賃料テーブル、通勤テーブル（SoTから補完）
- ✅ G5（Life & Amenities）: Shopping/Dining/Parks/Education & Medical
- ✅ G6（Foreign-Friendly）: Summary、Bullets
- ✅ G7（Events & Closing）: Events、FAQ、Closing

**未完了（データ不足）**:
- ⚠️ G4の通勤データ: YAMLには2駅分のみ、SoTから4駅分を補完
- ⚠️ G5のスポット情報: 最小限のデータのみ（将来的にSoT化を検討）
- ⚠️ G6の外国人向け情報: AI生成テキストのみ（SoT未整備）
- ⚠️ G7のイベント情報: 最小限のデータのみ（SoT未整備）

---

#### Layer C（UI）: ✅ 23区共通実装完了

**完了**:
- ✅ `DefaultAreaLanding.tsx` - G1〜G7の全セクションを表示
- ✅ `CommuteTable.tsx` - 23区共通の通勤テーブル
- ✅ SoTとYAMLの自動マージロジック
- ✅ データが無いセクションの非表示処理
- ✅ slugによる分岐なし

**特徴**:
- 杉並専用のコードは一切なし
- 他の区でも同じコンポーネントで動作可能

---

### 6.2 ロードマップ上の位置

**現在地**: Phase 1完了 → Phase 2開始地点

**Phase 1（MVP）**: ✅ 完了
- 1区（杉並）のG1〜G7実装
- 賃料SoT（23区すべて）
- 通勤SoT（杉並のみ）
- 23区共通UIコンポーネント

**Phase 2（拡張）**: 🔄 進行中
- 通勤SoT（残り22区）の追加
- 他の区のYAML充実化

**Phase 3（最適化）**: 📋 計画中
- 外国人向け情報SoTの整備
- イベントデータSoTの整備
- 生活環境（G5）のSoT化検討

---

### 6.3 次のステップ

**短期（1〜2週間）**:
1. 通勤SoT（残り22区）の追加
   - AtlasでHOMESからスクレイピング
   - `data/commute-2025q1.ts` に追加
   - 各YAMLの `commute_times` は最小限でOK（SoTから補完）

2. 他の区のYAML充実化
   - 既存の `{slug}.draft.yml` を充実化
   - G1〜G7の構造は維持しつつ、テキストを追加

**中期（1〜2ヶ月）**:
1. 外国人向け情報SoTの整備
   - Atlasで区の公式サイトからスクレイピング
   - `data/foreign-friendly-2025q1.ts` を作成
   - G6のYAMLをSoT参照に切り替え

2. イベントデータSoTの整備
   - Atlasで区の公式サイトからスクレイピング
   - `data/events-2025q1.ts` を作成
   - G7のEventsセクションをSoT参照に切り替え

**長期（3ヶ月以降）**:
1. 生活環境（G5）のSoT化検討
   - 主要スポットのみを構造化データとして管理
   - `data/life-amenities-2025q1.ts` を作成（優先度: 低）

2. FAQテンプレートのSoT化
   - 23区共通の質問パターンを定義
   - `data/faq-templates.ts` を作成（優先度: 低）

---

## 7. 運用上の注意事項

### 7.1 SoT更新時のルール

1. **SoTファイルを更新する前に、必ず `docs/area-guides-data-strategy-23ku.md` を確認**
   - このドキュメントが「憲法」として機能する
   - 新しいSoTを追加する場合は、このドキュメントを先に更新

2. **生データは必ず `docs/` にアーカイブ**
   - `docs/data-homes-rent-{year}q{quarter}.md`
   - `docs/data-homes-commute-2025q1-{ward}.md`
   - 生データを失うと、SoTの検証ができなくなる

3. **SoT更新後は、関連するYAMLも更新**
   - `data/rent-2025q1.ts` 更新 → 対象エリアの `content/area/{slug}.yml` の `rent_by_type` も更新
   - `data/commute-2025q1.ts` 更新 → YAMLの `commute_times` は最小限でOK（SoTから補完）

---

### 7.2 YAML更新時のルール

1. **SoTがあるデータは、SoTを優先**
   - G4の賃料・通勤データはSoTを参照
   - YAMLは補完的に使用（SoTにないデータのみ）

2. **AI生成テキストは、参考記事をコピペしない**
   - 内容だけを参考にして、独自の文章に書き換える
   - `docs/area-guides-bmad-brief.md` の「8.1 参考ブログ記事の扱い」を参照

3. **新しいキーを追加する場合は、スキーマを先に更新**
   - `bmad/prompts/area-variables.schema.json` を更新
   - `docs/area-guides-bmad-brief.md` にルールを追記

---

### 7.3 UI更新時のルール

1. **slugによる分岐を増やさない**
   - 23区共通のロジックを維持
   - 区ごとの特殊処理が必要な場合は、データ構造で解決する

2. **データが無いセクションは静かに非表示**
   - `if (data) { ... }` パターンで実装
   - エラーを出さない

3. **SoTとYAMLの自動マージを維持**
   - `DefaultAreaLanding.tsx` のマージロジックを壊さない
   - 新しいSoTを追加する場合は、マージロジックも更新

---

## 8. まとめ

### 設計の核心

**「データ（SoT）」と「ストーリー（YAML）」を分離し、UIはデータ駆動で動作する**

この設計により、以下のメリットが得られます：

1. **四半期ごとの更新が効率化**
   - SoTを更新するだけで、23区すべてに反映可能
   - YAMLのテキストは、SoT更新時に自動的に最新データを参照

2. **新しい区の追加が容易**
   - SoTにデータを追加するだけで、UIが自動的に表示
   - YAMLは最小限のデータでOK（SoTから補完）

3. **保守性の向上**
   - slugによる分岐がないため、コードがシンプル
   - データ構造の変更が、UIへの影響を最小化

### 次のアクション

1. **通勤SoT（残り22区）の追加**（優先度: 高）
2. **外国人向け情報SoTの整備**（優先度: 中）
3. **イベントデータSoTの整備**（優先度: 低）

このドキュメントは、AtlasのプロンプトやCursorへの指示を設計する際の「憲法」として機能します。



