# Area Guides BMAD Brief (v0)

## 1. ゴール

東京23区のエリアガイド LP を、四半期ごとに数字とテキストだけ入れ替えて更新できるようにする。  
UI やコードではなく「データ」と「ルール」を育てることを目的とする。

## 2. 対象ページ

/          … 既存の世田谷区 LP（v0 が作ったリッチ版）  
/setagaya  … 新システムの世田谷ページ  
/areas     … 23区の一覧ページ  
/areas/[slug] … 各エリアの LP エントリページ

## 3. 人が主に触るファイル

data/wards/*.ts          … 各区の詳細データ（世田谷は setagaya.ts）  
content/area/*.yml       … 一覧や LP で使う変数（quarter、賃料、CTA など）  
docs/area-guides-bmad-brief.md … この指示書ファイル

### 3-0. 画像運用ルール

- **画像はすべて `public/images/wards/{slug}/` 以下に置く**
  - `slug` は東京23区のフォルダ名に揃える（例: `setagaya`, `shibuya`, `minato` など）
  - 23区のフォルダは `public/images/wards/` 配下に事前に作成済み

- **既存画像は今すぐ移動しない（崩壊防止）**
  - 既存の `public/images/` 直下の画像ファイルは現状のまま維持
  - 将来「整理したくなったタイミング」で、AI主導で安全に移動する方針

- **人間の役割を最小化**
  - 人間は「どの区のフォルダに投げるか」だけを意識すればいい設計
  - ファイル名はAIが提案し、人間は必要に応じてリネームするだけ
  - 将来的にはAIが `mv` コマンドを生成して自動リネームも可能にする

## 3-1. データの真実の源（Source of Truth）

### 現時点の方針

**将来的には `content/area/*.yml` に一本化する方針**ですが、当面は以下のルールで運用します：

- **世田谷（Setagaya）**:  
  - `data/wards/setagaya.ts` が詳細データの SoT（Source of Truth）  
  - `content/area/setagaya.yml` は「LP用の変数（メタ・CTA・画像・賃料）」として補完的に使用

- **渋谷以降の新規エリア**:  
  - 最初から `content/area/{slug}.yml` を SoT に寄せる  
  - `data/wards/` には原則として追加しない

### 重要なルール

**SoTのルールを変えるときは、まずこのファイル（`docs/area-guides-bmad-brief.md`）を更新してから、実装に手をつけること。**  
コードを先に変更してからルールを後付けするのは禁止です。

### 3-2. 23区のYAML箱の初期化と運用

**`content/area/{slug}.yml`（または `.draft.yml`）は、東京23区ぶんが最初から存在する前提で運用する。**

- 東京23区すべてについて、`content/area/` 配下に最低限のキー構造を持つYAMLファイルが存在する
- 既存のファイル（`shibuya.yml`、`setagaya.yml`）は上書きせず、不足しているキーだけを安全にマージする
- 新規作成する場合は `{slug}.draft.yml` として作成し、完成したら `{slug}.yml` にマージする

**AI にタスクを出すとき、人間は基本的に slug を1つ指定するだけでよい。**

- 人間は「この区のデータを更新してほしい」という意図を、slug 1つで伝えれば十分
- AI は、指定された slug に対応する YAML ファイルを自動的に特定し、作業を開始する

**AI は、その slug の YAML に対して、すでに用意された「箱（空フィールド）」を埋めていく形で提案する。**

- 各 YAML ファイルには、必要なすべてのキーが事前に定義されている（値は `null` や空配列でも可）
- AI は既存のキー構造を壊さず、空フィールドに適切な値を提案する
- 新しいキーを追加する場合は、まずこのファイル（`docs/area-guides-bmad-brief.md`）にルールを追記してから実装する

**新しい区を追加する、という概念は当面ない（23区固定）。**

- 東京23区以外のエリアを追加する場合は、別途ルールを定義する必要がある
- 現時点では、23区のYAMLファイルを更新・充実させることに集中する

## 4. 定期的に更新したい変数

・四半期ごとの平均賃料  
・人気エリアランキング  
・主要駅までの所要時間（各停 / 急行）  
・イベントやフェスの情報  
・ページ上部と下部の CTA 文言  
・主要画像のパス（マップ、街の写真など）  
・ライフスタイル情報（飲食、ショッピング、公園、教育、医療）

## 4-2. 区別 × 間取り別賃料データのSoT（Source of Truth）

### 基本方針

東京23区の間取り別平均賃料は、**`data/rent-2025q1.ts` をSoT（真実の源）として一元管理**します。

- **SoTファイル**: `data/rent-2025q1.ts`
- **元データ**: `docs/data-homes-rent-2025q1.md`（人間がHOMESから取得した生データ）
- **更新頻度**: 四半期ごと（人間がHOMESから表をコピペ）
- **AIの役割**: 
  - SoTファイルの構造化・更新
  - `content/area/*.yml` の `rent_by_type` への反映
  - UIコンポーネントへのバインド
- **人間の役割**: 
  - 新しい四半期の生データを `docs/data-homes-rent-2025q1.md` に貼るだけ
  - 必要に応じて `data/rent-{year}q{quarter}.ts` のファイル名を更新

### データ構造

- 単位: 円 / 月（YAMLに反映する際も円単位で統一）
- 間取りキー: `1R`, `1K`, `1DK`, `1LDK`, `2K`, `2DK`, `2LDK`, `3DK`, `3LDK`
- データがない間取り（「–」）は、SoTファイルでも省略可能

### 運用フロー

1. 人間がHOMESから新しい四半期の賃料表を取得
2. `docs/data-homes-rent-{year}q{quarter}.md` に生データを保存
3. AIが `data/rent-{year}q{quarter}.ts` を更新（または新規作成）
4. AIが対象エリアの `content/area/{slug}.yml` の `rent_by_type` を更新
5. UIコンポーネントが自動的に最新のYAMLデータを表示

### 注意事項

- 既存のYAML構造（`rent_by_type.types[]` 形式や `rent_by_type["1K"]` 形式）は維持する
- SoTから値を反映する際は、既存の構造を壊さないように注意する
- 23区すべてに一括反映する前に、まず数区でパターンを固める

## 4-1. 画像とアセット管理

### 基本方針

各エリアの画像は **YAML側でメタデータ管理** する方針です。  
`public/images/` に直接ファイルを置くだけでは不十分で、**必ず `content/area/{slug}.yml` の `assets` ブロックにパスとaltテキストを登録してから使用**してください。

### 推奨フィールド構造

`content/area/{slug}.yml` に以下のような `assets` ブロックを追加します：

```yaml
assets:
  hero:
    path: "/images/{slug}/{slug}-hero.jpg"
    alt:
      en: "Descriptive alt text in English"
      ja: "日本語での説明文"
  map:
    path: "/images/{slug}/{slug}-map.png"
    alt:
      en: "Area map description"
      ja: "エリアマップの説明"
  gallery:
    - path: "/images/{slug}/{slug}-gallery-01.webp"
      alt:
        en: "Gallery image description"
        ja: "ギャラリー画像の説明"
      caption:  # 任意
        en: "Optional caption"
        ja: "任意のキャプション"
```

### ルール

- **画像ファイルを `public/images/` に直置きするだけは禁止**  
  必ず YAML にパスとaltを登録してから使うこと。

- AIが新しい画像を追加する際も、このルールに従って：
  1. 画像ファイルを適切な場所に配置（命名規則に従う）
  2. `content/area/{slug}.yml` の `assets` ブロックに追加
  3. `alt` テキストを英語・日本語両方で記入

- 画像の用途（hero/map/gallery）は、ファイル名とYAMLの構造の両方で明確にすること。

詳細な命名規則とワークフローは `docs/area-guides-assets-guidelines.md` を参照してください。

## 5. 参考データソース

・既存の data/wards/setagaya.ts（世田谷の元データ）  
・既存の data/wards その他のファイル（今後追加していく）  
・SUUMO、HOME'S などの賃料データ  
・社内で持っている e-housing ブログの JSON など

## 6. 更新フロー（人間 + AI 共通ルール）

1. まずこの指示書（このファイル）を読んで、ルールが合っているか確認する。  
2. ルールを変えたいときは、コードではなくこのファイルを先に修正する。  
3. その上で、data/wards/*.ts と content/area/*.yml の該当フィールドだけを更新する。  
4. 更新後に /setagaya、/areas、/areas/setagaya などをブラウザで確認する。  
5. 問題があればこのファイルの「ゴール」や「変数の定義」を見直してから、再度 AI に指示を出す。

## 7. 今後の拡張メモ

・まずは日本語と英語だけ対応する。  
・将来は韓国語、中国語、ベトナム語などを追加するが、そのときも基本ルールはこのファイルに追記する。  
・BMAD のエージェントは必ずこのファイルを最初に読む前提でプロンプトを設計する。

## 7-1. プロンプトと指示書の場所

### ファイルの役割分担

- **人間が読む長めの説明・運用ルール**  
  → `docs/area-guides-bmad-brief.md`（このファイル）

- **AIエージェントが直接読むJSON/スキーマ**  
  → `bmad/prompts/area-variables.schema.json`  
  → `bmad/prompts/*.json` / `*.schema.json`

- **個別タスク用の「コピペ実行プロンプト」**  
  → `docs/area-guides-*.prompt.md` にまとめる  
  → 例: `docs/area-guides-reference-article-prompt.md`（参考記事からエリアガイドを生成する際のプロンプトテンプレート）

- **画像提案・ジャンプリンクのルール**  
  → `docs/area-guides-prompt-images.md`（画像提案のフォーマット・検索サイトのURLテンプレート）

### 使い方

- AIエージェントは、まず `docs/area-guides-bmad-brief.md` を読んで全体ルールを把握する
- その後、必要に応じて `bmad/prompts/area-variables.schema.json` でスキーマを確認する
- 特定のタスク（例：参考記事からコンテンツ生成）を行う場合は、対応する `docs/area-guides-*.prompt.md` を参照する

## 8. 他区への横展開時の注意点（Shibuya実装を元に）

### 8.1 参考ブログ記事の扱い

・参考ブログ（e-housing など）の文章はそのままコピペしない。  
・内容だけを参考にして、独自の文章に書き換える。  
・スキーマ（`bmad/prompts/area-variables.schema.json`）に無いフィールドを勝手に増やさない。  
・増やしたい場合は、まずこのファイル（`docs/area-guides-bmad-brief.md`）にメモしてから提案する。

### 8.2 データの信頼性

・賃料データは必ず SUUMO、HOME'S などの信頼できる不動産サイトから確認する。  
・参考ブログの数値は「推定値」として扱い、可能な限り公式データソースで検証する。  
・検証できない数値は `null` または `TODO` コメントとして残す。

### 8.3 アクセス時間の確認

・主要駅への所要時間は、JR東日本や東京メトロの公式サイトで確認する。  
・各停と急行の両方を記載する場合は、実際の時刻表を参照する。  
・路線名（`line` フィールド）も正確に記載する。

### 8.4 サブエリアの選定

・サブエリア（`subareas`）は、その区で実際に人気があるエリアを選ぶ。  
・参考ブログに載っていても、実際の居住エリアとして一般的でない場合は除外する。  
・各サブエリアの説明は、そのエリアの特徴を簡潔に伝える。

### 8.5 イベント・祭りの情報

・イベント情報は、区の公式サイトや観光協会の情報を優先する。  
・年によって変動する可能性があるイベントは、その旨をコメントで明記する。  
・月（`month` フィールド）は、実際の開催月を確認してから記載する。

### 8.6 ファイル命名規則

#### YAMLファイル

・YAMLファイル名は `{区名のローマ字}.yml`（例: `shibuya.yml`、`setagaya.yml`）。  
・ドラフト段階の場合は `{区名}.draft.yml` として保存し、完成したら `{区名}.yml` にマージする。

#### 画像ファイル

・画像ファイルの配置場所：`public/images/{slug}/`  
  例: `public/images/setagaya/`, `public/images/shibuya/`

・ファイル名のパターン：
  - `{slug}-hero.{ext}`（例: `setagaya-hero.jpg`）  
  - `{slug}-map.{ext}`（例: `setagaya-map.png`）  
  - `{slug}-gallery-01.{ext}`, `{slug}-gallery-02.{ext}` など連番（例: `shibuya-gallery-01.webp`）

・AIが新しい画像を提案するときも、このルールに従ってファイル名を付け、  
  対応する `content/area/{slug}.yml` の `assets.*` にパスとaltを必ず追加すること。

・既存の画像ファイルは、移行が完了するまで現状のままでも構いませんが、  
  新規追加分は必ずこの命名規則に従ってください。

### 8.7 実装後の確認

・`/areas/{slug}` にアクセスして、表示が正しいか確認する。  
・既存の `/setagaya` や `/areas` の動作が壊れていないか確認する。  
・ビルドエラーがないか `pnpm build` で確認する。

## 9. AIへの重要な指示

### 9.1 画像に関するタスク

**画像に関するタスクを行うときは、必ず `docs/area-guides-prompt-images.md` を参照し、このルールに従って提案・修正を行うこと（人間にファイル名を考えさせない）。**

- AIは画像提案テーブルに `slug` と `storage_path` を必ず含める

## 10. データ構造のグルーピング（G1〜G7）とデータソース

### データソースの分類

各フィールドは、以下の3つのカテゴリに分類されます：

- **① AIだけ**: AIが自動生成できるフィールド（ラベル、要約など）
- **② 参考テキストからAI整形**: 既存のテキストや参考記事を基にAIが整形・要約
- **③ 人間 or 外部API**: 人間が手で入力するか、外部APIから取得する必要があるフィールド（数値、URL、画像ファイルなど）

### グルーピング（setagaya_sampleを例に）

- **G1: Meta & Hero** - メタ情報とヒーローセクション
  - `meta.quarter`, `meta.updated_at` → ③
  - `hero.tagline`, `hero.lead` → ②
  - `assets.hero.path`, `assets.map.path` → ③

- **G2: Who It Fits** - ターゲット層の説明
  - `who_it_fits.tags` → ①
  - `who_it_fits.description` → ②
  - `who_it_fits.sample_residents` → ①/②

- **G3: Subareas** - サブエリアの説明
  - `subareas[].name` → ③（固有名詞）
  - `subareas[].description` → ②
  - `subareas[].hero_image.path` → ③

- **G4: Money & Access** - 賃料とアクセス情報
  - `money_and_access.subarea_rent_table.*` → ③
  - `money_and_access.unit_rent_stats.*` → ③
  - `money_and_access.cta.*.url` → ③

- **G5: Life** - 生活環境（買い物、飲食、公園、教育・医療）
  - `life.*.summary` → ②
  - `life.*.spots[].name` → ③（固有名詞）
  - `life.*.spots[].note` → ②

- **G6: Foreign Friendly** - 外国人向け情報
  - `foreign_friendly.summary` → ②
  - `foreign_friendly.bullets` → ①/②

- **G7: Events & Closing** - イベントとクロージング
  - `events[].name` → ③（固有名詞）
  - `events[].description` → ②
  - `events[].hero_image.path` → ③
  - `closing.text` → ①
  - `closing.extra_links[].url` → ③

### 運用上の注意

- ③のフィールドは、YAMLに `null` やコメントで「人間が埋める」ことを明示する
- ②のフィールドは、参考記事や既存テキストを基にAIが整形するが、コピペは禁止
- ①のフィールドは、AIが自動生成できるが、一貫性を保つためにテンプレートやルールを参照する
- `storage_path` は常に `public/images/wards/{slug}/` で始める
- ファイル名のパターンはAI側で提案する（例: `hero-main.jpg`, `map-main.jpg`, `street-01.jpg` など）
- 人間は「どの区のフォルダに投げるか」と「AIが提案した名前にリネームするか」だけを判断すればよい


