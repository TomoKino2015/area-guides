# Area Guides - 画像提案・ジャンプリンクのルール

このドキュメントは、area-guidesプロジェクトで画像を提案・管理する際のルールを定義します。  
AIは画像を勝手に外部APIで取得せず、**「こういう画像を探してね」＋各サイトのジャンプリンクを吐き出す**のがゴールです。

## 基本方針

- **AIは画像を直接ダウンロードしない**
- **画像検索サイトへのジャンプリンクを生成する**
- 人間がリンクから画像を選んでダウンロードし、`public/images/wards/{slug}/` に配置する
- 配置後、`content/area/{slug}.yml` の `assets` ブロックに登録する

## 画像提案のフォーマット

各セクションごとに、以下のような表形式で画像提案を出力します：

| セクション | slug | storage_path | 推奨ファイル名 | keyword_ja | description | photo_ac_url | unsplash_url | google_images_url |
|-----------|------|--------------|----------------|------------|-------------|--------------|--------------|-------------------|
| Hero | shibuya | public/images/wards/shibuya/ | hero-main.jpg | 渋谷 スクランブル交差点 夜景 | Shibuya Scramble Crossing at night, showing the vibrant urban atmosphere | [URL] | [URL] | [URL] |
| Gallery 1 | shibuya | public/images/wards/shibuya/ | street-daikanyama-01.jpg | 代官山 カフェ 通り | Daikanyama's tree-lined streets with stylish cafes | [URL] | [URL] | [URL] |

### フィールドの説明

#### slug
- **エリアのslug**（例: `shibuya`, `setagaya`, `minato`）
- 東京23区のフォルダ名に揃える
- このslugに対応するフォルダが `public/images/wards/{slug}/` に存在する前提

#### storage_path
- **画像ファイルの配置先パス**
- 常に `public/images/wards/{slug}/` で始める
- 例: `public/images/wards/shibuya/`, `public/images/wards/setagaya/`

#### 推奨ファイル名
- **AIが提案するファイル名のパターン**
- 人間がファイル名を悩まないように、AI側で具体的なファイル名を提案する
- パターン例:
  - Hero: `hero-main.jpg`
  - Map: `map-main.jpg`
  - Streets: `street-01.jpg`, `street-02.jpg`...
  - Spots: `spot-sangenjaya-01.jpg`（サブエリア名を含める場合）
  - Gallery: `gallery-01.jpg`, `gallery-02.jpg`...
- 人間はこの提案に従ってリネームするか、そのまま使用するかを判断するだけ

#### keyword_ja
- **日本語キーワード**で画像検索用のクエリを指定
- 例: 「世田谷 カフェ 通り」「渋谷 スクランブル交差点 夜景」「代官山 ブティック 街並み」
- 具体的で、そのエリアの特徴を表すキーワードを選ぶ

#### description
- その画像で伝えたい意図を説明
- 英語または日本語どちらでも良いが、**一貫させる**
- UX的に「なぜこの画像が必要か」が分かるように書く

#### photo_ac_url
- **PhotoAC**（写真AC）の検索URL
- ベーステンプレート:
  ```
  https://www.photo-ac.com/main/search?by_ai=0&q={keyword_ja}&srt=dlrank&nq=&exclude_ai=on&orientation=all&sizesec=all&creator=&ngcreator=&qid=&color=all&model_count=-1&age=all&mdlrlrsec=all&prprlrsec=all
  ```
- `{keyword_ja}` をURLエンコードして埋める
- 例: `keyword_ja` = 「渋谷 スクランブル交差点」の場合
  ```
  https://www.photo-ac.com/main/search?by_ai=0&q=%E6%B8%8B%E8%B0%B7%20%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%96%E3%83%AB%E4%BA%A4%E5%B7%AE%E7%82%B9&srt=dlrank&nq=&exclude_ai=on&orientation=all&sizesec=all&creator=&ngcreator=&qid=&color=all&model_count=-1&age=all&mdlrlrsec=all&prprlrsec=all
  ```

#### unsplash_url
- **Unsplash**の検索URL
- ベーステンプレート:
  ```
  https://unsplash.com/ja/s/%E5%86%99%E7%9C%9F/{keyword_en_or_slug}
  ```
- `{keyword_en_or_slug}` は英語キーワードまたはslug形式
- 例: `keyword_en` = "shibuya-scramble-crossing" の場合
  ```
  https://unsplash.com/ja/s/%E5%86%99%E7%9C%9F/shibuya-scramble-crossing
  ```
- **注意**: Unsplashは日本固有の写真が弱いので、補助的に使用

#### google_images_url
- **Google画像検索**のURL
- ベーステンプレート:
  ```
  https://www.google.com/search?udm=2&tbm=isch&q={keyword_encoded}
  ```
- `{keyword_encoded}` は `keyword_ja` をURLエンコードしたもの
- 例: `keyword_ja` = 「渋谷 スクランブル交差点」の場合
  ```
  https://www.google.com/search?udm=2&tbm=isch&q=%E6%B8%8B%E8%B0%B7+%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%96%E3%83%AB%E4%BA%A4%E5%B7%AE%E7%82%B9
  ```

## セクションごとの推奨画像数

### Heroセクション
- **推奨**: 1枚
- **用途**: エリアLPのメイン画像
- **推奨サイズ**: 横長（16:9 または 21:9）
- **例**: 「渋谷 スクランブル交差点 夜景」「世田谷 下北沢 商店街」

### Mapセクション
- **推奨**: 1枚
- **用途**: エリアマップ表示
- **推奨サイズ**: 正方形または横長（1:1 または 4:3）
- **例**: 「渋谷区 地図」「世田谷区 マップ」

### Galleryセクション（Photo Highlights）
- **推奨**: 3-5枚
- **用途**: エリアの特徴的な風景・スポット
- **推奨サイズ**: 正方形または縦長（1:1 または 3:4）
- **例**: 
  - 「代官山 カフェ 通り」
  - 「表参道 ショッピング ストリート」
  - 「代々木公園 緑」

### Subareasセクション
- **推奨**: 各サブエリアごとに1枚（最大5枚）
- **用途**: サブエリアの特徴を視覚的に伝える
- **推奨サイズ**: 横長（16:9）
- **例**: 
  - 「恵比寿 ガーデンプレイス」
  - 「千駄ヶ谷 スポーツ施設」

### Eventsセクション
- **推奨**: 主要イベントごとに1枚（最大3枚）
- **用途**: イベントの雰囲気を伝える
- **推奨サイズ**: 横長（16:9）
- **例**: 
  - 「渋谷 ハロウィン 祭り」
  - 「世田谷 ボロ市 祭り」

## AIの役割

### 1. UX設計
- 「どのセクションにどんな写真を置くと UX 的に効くか」を設計
- エリアの特徴を視覚的に伝えるために必要な画像を提案
- セクションごとの推奨画像数を考慮

### 2. キーワード選定
- 各画像に適切な `keyword_ja` を選定
- エリアの特徴を表す具体的なキーワードを選ぶ
- 検索結果が適切な画像になるように配慮

### 3. URL生成
- 上記3サイト（PhotoAC, Unsplash, Google画像検索）へのジャンプリンクを**具体的に埋めた状態で**出力
- URLエンコードを正しく行う
- 人間がクリックしてすぐに検索結果を見られるようにする

### 4. 説明文の作成
- 各画像の `description` を記入
- 「なぜこの画像が必要か」が分かるように説明
- 英語または日本語で一貫させる

## 人間の役割

1. AIが提案したジャンプリンクから画像を選ぶ
2. 選んだ画像をダウンロード
3. `public/images/wards/{slug}/` に配置
   - AIが提案した `storage_path` と `推奨ファイル名` を確認
   - 例: `public/images/wards/shibuya/hero-main.jpg`
   - 必要に応じて、AIが提案したファイル名にリネーム（将来的にはAIが `mv` コマンドを生成）
4. `content/area/{slug}.yml` の `assets` ブロックに登録
   - `path`: `/images/wards/{slug}/{ファイル名}` の形式で記入
   - 例: `/images/wards/shibuya/hero-main.jpg`
   - `alt`: 英語・日本語両方で記入

### 運用フロー（具体例）

1. **AIが提案**: 「Shibuya / hero / `public/images/wards/shibuya/hero-main.jpg` を推奨」
2. **人間が実行**: 写真ポータルから画像をダウンロード
3. **人間が配置**: `public/images/wards/shibuya/` に入れて、必要なら `hero-main.jpg` にリネーム
4. **AIまたは人間がYAML更新**: `content/area/shibuya.yml` の `assets.hero.path` を `/images/wards/shibuya/hero-main.jpg` に設定

**つまり：**
- 「ファイル名を考える」のはAIの仕事
- 人間は「どの区フォルダに入れるか」と「AIが提案した名前にリネームするか」だけで済む

詳細は `docs/area-guides-assets-guidelines.md` を参照してください。

## 使用例

### 例: 渋谷のHero画像を提案する場合

```
【セクション】Hero
【slug】shibuya
【storage_path】public/images/wards/shibuya/
【推奨ファイル名】hero-main.jpg
【keyword_ja】渋谷 スクランブル交差点 夜景
【description】Shibuya Scramble Crossing at night, showcasing the vibrant urban energy and iconic Tokyo atmosphere
【photo_ac_url】https://www.photo-ac.com/main/search?by_ai=0&q=%E6%B8%8B%E8%B0%B7%20%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%96%E3%83%AB%E4%BA%A4%E5%B7%AE%E7%82%B9%20%E5%A4%9C%E6%99%AF&srt=dlrank&nq=&exclude_ai=on&orientation=all&sizesec=all&creator=&ngcreator=&qid=&color=all&model_count=-1&age=all&mdlrlrsec=all&prprlrsec=all
【unsplash_url】https://unsplash.com/ja/s/%E5%86%99%E7%9C%9F/shibuya-scramble-crossing-night
【google_images_url】https://www.google.com/search?udm=2&tbm=isch&q=%E6%B8%8B%E8%B0%B7+%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%96%E3%83%AB%E4%BA%A4%E5%B7%AE%E7%82%B9+%E5%A4%9C%E6%99%AF
【YAMLでのpath】/images/wards/shibuya/hero-main.jpg
```

## 注意事項

- **画像の著作権を尊重する**
  - PhotoACは無料素材サイトだが、利用規約を確認する
  - Unsplashも利用規約を確認する
  - Google画像検索の結果は、各サイトの利用規約に従う

- **画像の品質**
  - 高解像度（最低1920px幅）を推奨
  - WebP形式を推奨（ファイルサイズが小さい）

- **画像の配置後**
  - 必ず `content/area/{slug}.yml` の `assets` ブロックに登録する
  - `alt` テキストを英語・日本語両方で記入する
  - `/areas/{slug}` ページで画像が正しく表示されることを確認する

## 関連ドキュメント

- `docs/area-guides-bmad-brief.md` - プロジェクト全体のルール（画像管理の基本方針）
- `docs/area-guides-assets-guidelines.md` - 画像ファイルの命名規則と管理方法
- `bmad/prompts/area-variables.schema.json` - スキーマ定義（`assets` フィールドの構造）

