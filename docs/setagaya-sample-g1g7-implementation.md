# `/areas/setagaya_sample` G1〜G7対応実装レポート

## 実装日
2025-02-01

## 目的
`/areas/setagaya_sample` を、Shibuya用MVPベースの中途半端な状態から、G1〜G7の構造に沿った「世田谷サンプルLP」に作り替える。

## 実装内容

### 1. 型定義の拡張 (`components/areas/ShibuyaStoryLanding.tsx`)

#### 追加した型定義

- **`money_and_access`**: `unit_rent_stats` と `subarea_rent_table` を追加
  - `unit_rent_stats.rows[]`: 間取り別賃料データ（`avg_rent_jpy`, `avg_size_sqm`, `note_ja/en`）
  - `subarea_rent_table.rows[]`: サブエリア別賃料・アクセスデータ

- **`rent_by_type`**: `avg` 形式に対応
  - 各間取り（`1R`, `1K`, `1DK`, `1LDK`, `2K`, `2DK`, `2LDK`, `3DK`, `3LDK`）に `avg?: number` を追加
  - 既存の `typical/min/max` 形式と併用可能

- **`events`**: `events.items` 構造に対応
  - Union型で `Array<Event>` または `{ items?: Array<Event> }` の両方に対応

- **`meta`**: メタ情報の型定義を追加
  - `quarter`, `updated_at`, `reading_time_minutes`, `status`

### 2. データ処理ロジックの修正

#### `who_it_fits.description` の段落分割

```typescript
// 段落（\n\n）で分割して配列に変換
whoItFits = desc.split(/\n\n+/).filter(p => p.trim().length > 0);
```

- 長文の `description` を `\n\n` で分割し、複数のカードとして表示
- 各段落が独立したカードとして表示される

#### `events` の構造対応

```typescript
if (isSetagayaSample && area.events && !Array.isArray(area.events) && "items" in area.events) {
  events = area.events.items || [];
} else if (Array.isArray(area.events)) {
  events = area.events;
}
```

- `setagaya_sample` の場合は `events.items` を参照
- Shibuyaの場合は既存の `events` 配列をそのまま使用

#### `rent_by_type` の `avg` 形式対応

```typescript
{rentData["1K"].typical
  ? `¥${rentData["1K"].typical.toLocaleString()}`
  : rentData["1K"].avg
    ? `¥${rentData["1K"].avg.toLocaleString()}`
    : rentData["1K"].min
      ? `¥${rentData["1K"].min.toLocaleString()}+`
      : "N/A"}
```

- `typical` → `avg` → `min` の順でフォールバック
- Shibuyaの既存ロジックは維持

### 3. UIセクションの改善

#### G1: Meta & Hero

- **メタ情報の表示**: Heroセクションに `meta.updated_at`, `meta.reading_time_minutes`, `meta.quarter` を表示
- **Hero画像**: `assets.hero.path` を使用（setagaya_sample専用）

#### G2: Who It Fits

- **段落分割**: `who_it_fits.description` を段落ごとに分割して表示
- **住民の声**: `sample_residents` をカード形式で表示（既存実装を維持）

#### G3: Subareas

- **consの表示**: `subareas[].cons` を「注意点」として表示（setagaya_sample専用）
- **highlights**: 既存のBadge表示を維持

#### G4: Money & Access

- **`unit_rent_stats` の表示**: setagaya_sample専用の賃料テーブル
  - 間取り別の平均賃料（`avg_rent_jpy`）
  - 平均面積（`avg_size_sqm`）
  - 備考（`note_ja/en`）
- **`rent_by_type` の改善**: `avg` 形式に対応し、「N/A」表示を解消

#### G5: Life

- **既存実装を維持**: `life.shopping`, `life.dining`, `life.parks`, `life.education_and_medical` の表示

#### G6: Foreign Friendly

- **既存実装を維持**: `foreign_friendly.summary` と `bullets` の表示

#### G7: Events & Closing

- **`events.items` の表示**: `events.items` 構造に対応
- **FAQの追加**: `setagaya_sample.yml` に3つのQ&Aを追加
- **Closing**: 既存実装を維持

### 4. YAMLファイルの更新 (`content/area/setagaya_sample.yml`)

#### 追加したフィールド

- **`faq`**: 3つのQ&Aを追加
  - 外国人向けの質問
  - 賃料に関する質問
  - アクセスに関する質問

## セクション構成マッピング

| Gグループ | UIセクション | YAMLフィールド | 備考 |
|---|---|---|---|
| **G1** | Hero | `hero.tagline`, `hero.lead`, `meta.*`, `assets.hero.path` | メタ情報を追加表示 |
| **G1** | Intro Story | `hero.lead` / `overview` | 既存実装を維持 |
| **G2** | Who This Area Fits | `who_it_fits.tags`, `who_it_fits.description`, `who_it_fits.sample_residents` | 段落分割を追加 |
| **G3** | Popular Neighborhoods | `subareas[]` | `cons` の表示を追加 |
| **G4** | Average Rent Prices | `money_and_access.unit_rent_stats` / `rent_by_type` | `avg` 形式に対応 |
| **G4** | Access to Major Stations | `commute_times` | 既存実装を維持 |
| **G5** | Lifestyle & Amenities | `life.*` | 既存実装を維持 |
| **G6** | Foreign-Friendly Guide | `foreign_friendly` | 既存実装を維持 |
| **G7** | Annual Events & Festivals | `events.items` | `events.items` 構造に対応 |
| **G7** | FAQ | `faq` | 新規追加 |
| **G7** | CTA Section | `closing` | 既存実装を維持 |

## Shibuya側での挙動維持

- **条件分岐**: `isSetagayaSample` フラグで setagaya_sample 専用の処理を分岐
- **既存ロジック**: Shibuya用の既存ロジックは全て維持
- **型の互換性**: Union型やオプショナルプロパティで既存データ構造との互換性を確保

## 修正された構造不一致

1. ✅ **`rent_by_type`**: `avg` 形式に対応し、「N/A」表示を解消
2. ✅ **`events`**: `events.items` 構造に対応し、イベントが正しく表示される
3. ✅ **`who_it_fits.description`**: 段落分割により、読みやすい表示に改善
4. ✅ **`faq`**: YAMLに追加し、FAQセクションが表示される

## 未使用フィールド（今後の拡張候補）

以下のフィールドはYAMLに存在するが、現在はUIで未使用：

- `money_and_access.subarea_rent_table`: サブエリア別賃料テーブル
- `assets.map.path`: マップ画像
- `subareas[].hero_image.path`: サブエリアの画像

これらは将来的に追加表示することが可能です。

## ビルド・リント確認

- ✅ TypeScript型チェック: `ShibuyaStoryLanding.tsx` にエラーなし
- ✅ YAML構文: `setagaya_sample.yml` にエラーなし
- ⚠️ 既存の型エラー: 他のファイル（`app/(marketing)/areas/page.tsx` など）に既存の型エラーあり（今回の変更とは無関係）

## 次のステップ（提案）

1. **サブエリア別賃料テーブルの表示**: `money_and_access.subarea_rent_table` をUIに追加
2. **マップ画像の表示**: `assets.map.path` を使用したマップセクションの追加
3. **サブエリア画像の表示**: `subareas[].hero_image.path` を使用した画像表示
4. **セクション順序の最適化**: G1〜G7の順序に完全に合わせる（現在は一部順序が異なる）

## まとめ

`/areas/setagaya_sample` は、G1〜G7の構造に沿った「世田谷サンプルLP」として、以下の改善を実現しました：

- ✅ 構造不一致の解消（`rent_by_type`, `events`, `who_it_fits.description`）
- ✅ G1〜G7の全セクションに対応
- ✅ Shibuya側の挙動を維持（A/Bテスト用に両パターンを保持）
- ✅ リッチなコンテンツの表示（FAQ、メタ情報、consなど）

これにより、`setagaya_sample` は Shibuya とは別パターンのA/Bテスト候補として機能するようになりました。



