# Area Guides - Reference Article Prompt (v0)

## 目的

競合や参考ブログの記事をもとに、

- 23区エリアガイド LP のコンテンツを
- `docs/area-guides-bmad-brief.md` のルールに従って
- YAML（`content/area/{slug}.yml`）と React コンポーネントに落とし込むための実行プロンプト。

## 使い方（人間がやること）

1. Cursor / Claude のプロンプト欄に、このファイルの「実行テンプレート」部分をコピーする
2. その下に「参考にしたい記事の本文」をペーストする（URLだけでなく、重要な本文も入れる）
3. 実行結果として：
   - YAML の差分案
   - 必要なコンポーネントの修正案
   - `docs/` に追記するべきメモ
   を出させる

## 実行テンプレート（ここをコピペする）

```
【前提】

- 必ず最初に `docs/area-guides-bmad-brief.md` を開いて読み、要点を3〜5行で要約してから作業を始めること。
- 競合コンテンツのコピペは禁止。意味だけ参考にして AtHearth 独自の文章に書き換えること。

【今回の対象エリア】

- このセッションでは ward_slug = "{ここに shibuya や setagaya などを入れる}" を対象として作業する。
- 対象ページ: `/areas/{slug}`

【手順】

1. `content/area/{slug}.yml` を開き、現在のフィールド構造と内容を確認する
2. `components/areas/{Slug}StoryLanding.tsx`（存在すれば）を開き、どのフィールドがどこで使われているかを把握する
3. （このプロンプトの下に貼った）参考記事を読み、「構造」と「重要な論点」を箇条書きで整理する
4. `docs/` 配下に `{slug}-notes-from-reference.md` を作成し、上記の整理結果を書き出す
5. `docs/area-guides-bmad-brief.md` のルールに反しない範囲で、
   - overview
   - who_it_fits
   - subareas[].description
   - faq
   - events
   - lifestyle（必要なら）
   のテキストを、競合と同等以上にリッチになるよう書き換え案を作る（英語・日本語両方）
6. `content/area/{slug}.yml` に対して、安全な差分（before → after）を提示する
7. 最後に、「`/areas/{slug}` を開いたときにどんな情報量・構成になるか」を3〜5行でまとめて報告する

【制約】

- 賃料や所要時間などの数値は、既存の YAML の値を勝手に変更しない（別途、人間が更新する前提）。
- `/` および `/setagaya` の挙動には触れない。
- 英語・日本語どちらか一方だけ極端に長くしない。
```

## 使用例：Shibuya の場合

### コンテキスト

- リポジトリ: area-guides
- 対象ルート: `/areas/shibuya`
- 今の状態:
  - レイアウト・UI はかなり良い（この「Shibuya Story」パターンは A/B テスト用に残したい）
  - ただし、コンテンツ量が少なく、競合（E-Housing の Shibuya ガイド）と比べて情報が薄い
- 目的:
  - UI はほぼそのままに、コンテンツだけを「E-Housing の Shibuya 記事と同等以上の情報量」に増やす
  - ただし、競合記事の文章は一切コピペしない。構成や論点だけ参考にして、全部書き換える
  - SEO 的にも使えるレベルのテキスト量にする
  - BMAD 指示書: `docs/area-guides-bmad-brief.md` を必ず最初に読んでから作業すること

### ゴール

1. `content/area/shibuya.yml` を、競合記事並みにリッチな YAML に拡張する
2. `components/areas/ShibuyaStoryLanding.tsx` を、その YAML を全部使って表示できる Story 型 LP にする
3. `/areas/shibuya` の UI / レイアウトテイストは今の良い感じを維持しつつ、セクション数とテキスト量だけ増やす
4. Setagaya テンプレや `/setagaya` / `/areas` の挙動は一切壊さない

### 先に読んでほしいファイル

1. `docs/area-guides-bmad-brief.md`
2. `content/area/shibuya.yml`
3. `components/areas/ShibuyaStoryLanding.tsx`
4. `app/(marketing)/areas/[slug]/page.tsx`（Shibuya のデータの渡し方を確認するだけ）

その上で、ユーザーが直前のメッセージで貼り付けている E-Housing の Shibuya City ガイド記事を「参考記事」として扱ってください。

### YAML で増やしてほしいフィールド（例）

スキーマ (`bmad/prompts/area-variables.schema.json`) の範囲で、以下のような情報を詰めてほしい。

既存フィールドを壊さずに中身をリッチにする方向で。

- **overview**: 今より長い 2–3 パラグラフの概要（E-Housing のイントロを参考にしつつ完全に言い換え）
- **who_it_fits**: 既存のターゲットリストを少し整理・増量（Young professionals / Creatives / Families / International residents など）
- **subareas**: Daikanyama / Ebisu / Sendagaya / Omotesando / Yoyogi の description をもう少し厚くする。各 highlights に 3–4 bullet 入れる（fashion, cafes, greenery など）
- **lifestyle ブロック**（schema の許す範囲で）:
  - dining（ハイライト3–5件：高級〜カジュアルまで）
  - cafes_bars
  - international_groceries
  - healthcare
  - education
  - parks
  - safety
  - いずれも E-Housing の構成を真似しつつ文章はすべて書き換えること
- **faq**: 質問数を増やし、回答もより詳細に
- **events**: 各イベントの説明を2文程度に拡張

上記はあくまで例なので、実際にはスキーマ内で許されるフィールド名を使ってください。

スキーマにないフィールドを増やしたい場合は、`docs/area-guides-bmad-brief.md` の「拡張メモ」に追記する形でコメントだけ残す（実際のスキーマ変更は行わない）。

### ShibuyaStoryLanding.tsx に求めること

- 現在の Hero / Who it fits / Subareas / Rent / Access / FAQ / Events / CTA の構成とテイストは維持する
- そこに以下のセクションを「自然に挿し込む」形で増やす：
  1. **Overview**（長めのイントロ：2–3パラグラフ）
  2. **Lifestyle セクション**
     - Dining & Nightlife
     - Cafes & Bars
     - International groceries
     - Parks & Green
     - Healthcare & Education
     - Safety
  3. **Accessibility 詳細セクション**（既存の Access セクションを拡張）
  4. **Conclusion**（最後の一段落）
- レイアウトは `/areas/shibuya` を基準に、shadcnっぽいシンプルな Card / Grid / Stack で十分。デザインを大きく変えない。
- 文言はすべて `shibuya.yml` 側から読み込むようにして、コンポーネント側には生テキストをハードコードしない。

### コピー・著作権まわりの注意（重要）

- 参考ブログ（E-Housing）の文章をそのままコピペしないこと
- 一文単位でも似すぎないように、構成だけ真似して中身は全部書き直す
- 数字（家賃・人口・所要時間など）は、必要なら同じ値を使ってよいが、note で「出典：参考ブログ」「本番前に公式データで再確認」と明記

### 出力の期待値

1. 更新済みの:
   - `content/area/{slug}.yml`
   - `components/areas/{Slug}StoryLanding.tsx`（存在する場合）
2. 簡単な変更サマリ:
   - どのフィールドを増やしたか
   - どのセクションが UI に追加されたか
3. 影響範囲:
   - `/areas/{slug}` のみが変わり、`/areas` 一覧や `/setagaya` には影響がないことを確認

コードを書いたら `pnpm dev` / `pnpm build` の実行結果も確認し、エラーがあればレポートの中で教えてください。

## テンプレートの使い分け

このプロンプトテンプレートを使うことで：

- **Shibuya = Story型・リッチ版**
- **Setagaya = データ＋ローカル感ゴリゴリ版**

という 2テンプレートがちゃんと分かれてくる。

そのあとで「どっちを23区の標準にするか」とか、「渋谷版をベースに港区・中央区」「世田谷版をベースに練馬・杉並」みたいな分け方も検討できる。

## 次のステップ

1. 上のプロンプトを Cursor に投げて `/areas/{slug}` を増量
2. スクショ撮って、A: Setagaya（`/`）と B: Shibuya（`/areas/shibuya`）を並べて見比べ
3. 「この2パターンから標準テンプレどうするか」を決める

