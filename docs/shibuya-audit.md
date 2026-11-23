# Shibuya Area Guide - 現状構造監査メモ

**作成日**: 2025-01-15  
**対象**: `/areas/shibuya` ページの実装状況

## 1. 使用されているYAMLフィールド

### 1.1 Heroセクションで使用
- `title.en` / `title.ja` - メインタイトル
- `subtitle.en` / `subtitle.ja` - サブタイトル
- `summary` - サマリー（現在は未使用）
- `tags[]` - タグバッジ表示

### 1.2 Overviewセクションで使用
- `overview.en` / `overview.ja` - エリアの概要説明（現在1段落）

### 1.3 Who It Fitsセクションで使用
- `who_it_fits.en[]` / `who_it_fits.ja[]` - ターゲットオーディエンスのリスト（現在5項目）

### 1.4 Subareasセクションで使用
- `subareas[].name.en` / `subareas[].name.ja` - サブエリア名
- `subareas[].description.en` / `subareas[].description.ja` - サブエリア説明（現在1-2文）
- `subareas[].highlights[]` - ハイライトタグ

### 1.5 Rentセクションで使用
- `rent_by_type.quarter` - 四半期情報
- `rent_by_type["1K"]` / `rent_by_type["1LDK"]` / `rent_by_type["2LDK"]` / `rent_by_type["3LDK"]` - 賃料データ（min/max/typical）

### 1.6 Accessセクションで使用
- `commute_times[].destination` - 目的地
- `commute_times[].minutes` - 所要時間
- `commute_times[].type` - 列車種別（express/local）
- `commute_times[].line` - 路線名

### 1.7 FAQセクションで使用
- `faq[].q.en` / `faq[].q.ja` - 質問
- `faq[].a.en` / `faq[].a.ja` - 回答（現在3件）

### 1.8 Eventsセクションで使用
- `events[].name.en` / `events[].name.ja` - イベント名
- `events[].month` - 開催月
- `events[].description.en` / `events[].description.ja` - イベント説明（現在1文）

### 1.9 CTAセクションで使用
- `cta.text.en` / `cta.text.ja` - CTAテキスト
- `cta.url` - CTAリンク先

## 2. 使用されていないYAMLフィールド（スキーマには存在）

- `shopping_dining` - スキーマに存在するが、UIで未使用
- `schools_healthcare` - スキーマに存在するが、UIで未使用
- `parks` - スキーマに存在するが、UIで未使用

## 3. 画面セクション構成（現在の順序）

1. **Hero Section** - タイトル、サブタイトル、タグ
2. **Overview Section** - エリア概要（1段落）
3. **Who It Fits Section** - ターゲットリスト（5項目）
4. **Subareas Section** - サブエリアカードグリッド（5エリア）
5. **Rent Section** - 賃料アコーディオン
6. **Access Section** - 主要駅へのアクセスカード（5路線）
7. **FAQ Section** - よくある質問（3件）
8. **Events Section** - 年間イベントタイムライン（3イベント）
9. **CTA Section** - コールトゥアクション

## 4. 改善の余地があるフィールド

### 4.1 テキスト量が少ないフィールド
- `overview` - 現在1段落。2-3段落に増やすとリッチになる
- `who_it_fits` - 各項目に「なぜ」の説明を追加できる
- `subareas[].description` - 各サブエリアの説明を2-3文に増やす
- `faq[].a` - 回答をより詳細にできる
- `events[].description` - イベント説明を2文程度に増やす

### 4.2 追加できるFAQ
- 治安・安全性について
- 外国人向けサービスの詳細
- 生活コスト（光熱費、食費など）
- 子育て環境
- ペット可物件の有無

## 5. 追加検討セクション

- **Lifestyle Section** - `shopping_dining`、`parks`、`schools_healthcare`を統合したライフスタイル説明セクション
- または各フィールドを個別セクションとして表示

## 6. 現在の情報量の評価

- **薄いと感じられる理由**:
  - Overviewが1段落のみ
  - FAQが3件のみ
  - Eventsの説明が1文のみ
  - サブエリアの説明が短い
  - ライフスタイル情報（飲食、公園、教育、医療）が表示されていない

- **改善後の想定**:
  - Overview: 2-3段落（約300-400語）
  - FAQ: 5件（治安、外国人向け、生活コスト、子育て、ペット）
  - Events: 各イベントの説明を2文に拡張
  - Subareas: 各説明を2-3文に拡張
  - Lifestyle: 新規セクション追加（shopping_dining + parks + schools_healthcareを統合）

