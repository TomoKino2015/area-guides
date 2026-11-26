# Area Guides 画像アセット管理ガイドライン

このドキュメントは、area-guidesプロジェクトにおける画像ファイルの命名規則と管理方法を定義します。  
BMAD METHODに沿って、AIが自動的に画像を追加・管理できるようにするためのルールです。

## 1. 画像ファイルの配置場所

### 基本ルール
- **ルートディレクトリ**: `public/images/{slug}/`  
  例: `public/images/setagaya/`, `public/images/shibuya/`

- 各エリアごとに専用ディレクトリを作成し、その中に画像を配置する

### ディレクトリ構造（推奨）
```
public/images/
├── setagaya/
│   ├── setagaya-hero.jpg
│   ├── setagaya-map.png
│   └── setagaya-gallery-01.webp
│   └── setagaya-gallery-02.webp
├── shibuya/
│   ├── shibuya-hero.jpg
│   ├── shibuya-map.png
│   └── shibuya-gallery-01.webp
│   └── shibuya-gallery-02.webp
└── ...
```

## 2. ファイル命名規則

### 基本パターン
- `{slug}-{purpose}.{ext}`

### 用途別の命名規則

#### Hero画像
- パターン: `{slug}-hero.{ext}`
- 例: `setagaya-hero.jpg`, `shibuya-hero.jpg`
- 用途: エリアLPのヒーローセクション用のメイン画像

#### マップ画像
- パターン: `{slug}-map.{ext}`
- 例: `setagaya-map.png`, `shibuya-map.png`
- 用途: エリアマップ表示用

#### ギャラリー画像
- パターン: `{slug}-gallery-{連番}.{ext}`
- 例: `setagaya-gallery-01.webp`, `setagaya-gallery-02.webp`
- 用途: 写真ハイライトセクション用
- 連番は2桁（01, 02, 03...）で統一

### ファイル拡張子
- 推奨: `.jpg`, `.jpeg`, `.png`, `.webp`
- 用途に応じて選択：
  - `.jpg` / `.jpeg`: 写真向け
  - `.png`: マップやロゴ向け（透過が必要な場合）
  - `.webp`: 高品質・軽量な画像向け（推奨）

## 3. YAMLでのメタデータ管理

### 必須ルール
**画像ファイルを `public/images/` に配置するだけでは不十分です。**  
**必ず `content/area/{slug}.yml` の `assets` ブロックにパスとaltテキストを登録してから使用してください。**

### 推奨フィールド構造

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

## 4. AIが画像を追加する際のワークフロー

### ステップ1: 画像ファイルの配置
1. `public/images/{slug}/` ディレクトリを作成（存在しない場合）
2. 画像ファイルを命名規則に従って配置
   - `{slug}-hero.{ext}`
   - `{slug}-map.{ext}`
   - `{slug}-gallery-{連番}.{ext}`

### ステップ2: YAMLの更新
1. `content/area/{slug}.yml` を開く
2. `assets` ブロックを追加または更新：
   - `assets.hero.path` を設定
   - `assets.hero.alt` を英語・日本語両方で記入
   - `assets.map`, `assets.gallery` も同様に更新

### ステップ3: 検証
1. `bmad/prompts/area-variables.schema.json` に基づいてバリデーション
2. 画像ファイルの存在確認（`public/images/{slug}/` に実際にファイルがあるか）
3. `alt` テキストの存在確認（アクセシビリティ）

### ステップ4: 確認
1. `/areas/{slug}` ページで画像が正しく表示されることを確認
2. 画像のaltテキストが正しく設定されていることを確認

## 5. 既存画像の移行

### 現状
- `public/images/` 直下に画像ファイルが配置されている
- 例: `public/images/setagaya-map.png`, `public/images/shimokitazawa.webp`

### 移行方針
- **今すぐ全ファイルをリネームしなくてよい**
- あくまで「これから増える分のルール」として運用
- 既存分の移行は別タスクに切り出す

### 移行時の手順（将来）
1. `public/images/{slug}/` ディレクトリを作成
2. 既存画像を命名規則に従ってリネームして移動
3. `content/area/{slug}.yml` の `assets` ブロックを更新
4. コード内の画像パス参照を更新（必要に応じて）

## 6. 禁止事項

### ❌ やってはいけないこと
- 画像ファイルを `public/images/` に直置きするだけ（YAMLに登録しない）
- 命名規則に従わないファイル名（例: `image1.jpg`, `photo.png`）
- `alt` テキストを英語・日本語のどちらか一方だけ記入する
- 画像ファイルを配置したが、YAMLの `assets` ブロックに登録しない

### ✅ やるべきこと
- 画像ファイルを配置したら、必ずYAMLの `assets` ブロックに登録
- 命名規則に従ってファイル名を付ける
- `alt` テキストを英語・日本語両方で記入
- 画像の用途（hero/map/gallery）を明確にする

## 7. 参考資料

- `docs/area-guides-bmad-brief.md` - BMAD指示書（画像管理の基本方針）
- `bmad/prompts/area-variables.schema.json` - スキーマ定義（`assets` フィールドの構造）
- `docs/area-guides-automation-plan.md` - 自動化計画（画像管理の自動化アイデア）

