# Area Guides プロジェクト構造ロジックツリー

## プロジェクト構造

```
area-guides/
├── 📁 app/                          # Next.js App Router（ページルーティング）
│   ├── (marketing)/                 # マーケティング用ルートグループ
│   │   ├── areas/
│   │   │   ├── [slug]/              # 動的ルート: /areas/{slug}
│   │   │   │   └── page.tsx         # エリア個別LP（Shibuya/Default）
│   │   │   └── page.tsx             # エリア一覧ページ (/areas)
│   │   └── setagaya/
│   │       └── page.tsx             # 旧Setagayaページ（未使用？）
│   ├── [ward]/                      # 旧システム用動的ルート
│   │   ├── page.tsx                 # Wardページ（旧システム）
│   │   └── ward-page-client.tsx     # Wardページクライアントコンポーネント
│   ├── page.tsx                     # ルートページ (/ = Setagaya LP)
│   ├── layout.tsx                   # ルートレイアウト（AreasHeader含む）
│   └── globals.css                  # グローバルスタイル
│
├── 📁 components/                   # Reactコンポーネント
│   ├── areas/                       # エリアLP用コンポーネント（新システム）
│   │   ├── ShibuyaStoryLanding.tsx  # Shibuya専用ストーリー型LP
│   │   ├── DefaultAreaLanding.tsx   # 汎用エリアLP（Shibuya以外）
│   │   ├── AreaCard.tsx             # エリアカード（未使用？）
│   │   └── AreasLandingPage.tsx     # エリア一覧ページ（未使用？）
│   ├── ward/                        # Ward用コンポーネント（旧システム）
│   │   ├── ward-guide-layout.tsx    # Ward LPレイアウト
│   │   ├── hero-section.tsx         # Heroセクション
│   │   ├── attractions-section.tsx  # 観光スポット
│   │   ├── events-section.tsx       # イベント
│   │   ├── faq-section.tsx          # FAQ
│   │   ├── foreign-friendly-section.tsx  # 外国人向け情報
│   │   ├── highlights-section.tsx   # ハイライト
│   │   ├── housing-section.tsx      # 住宅情報
│   │   ├── international-section.tsx # 国際情報
│   │   ├── photo-highlights-section.tsx  # 写真ハイライト
│   │   ├── resident-voices-section.tsx  # 住民の声
│   │   ├── target-audience-section.tsx  # ターゲット
│   │   ├── transport-lines-section.tsx  # 交通路線
│   │   └── ward-styles.tsx          # Ward用スタイル
│   ├── setagaya-guide.tsx           # Setagaya LP（日本語）
│   ├── setagaya-guide-english.tsx   # Setagaya LP（英語）
│   ├── international-living-section.tsx  # 国際生活セクション（日本語）
│   ├── international-living-section-english.tsx  # 国際生活セクション（英語）
│   ├── events-festivals-section.tsx  # イベント・祭り（日本語）
│   ├── events-festivals-section-english.tsx  # イベント・祭り（英語）
│   ├── consolidated-cta-section.tsx  # 統合CTAセクション
│   ├── AreasHeader.tsx              # ヘッダーコンポーネント
│   ├── common/
│   │   └── language-switcher.tsx    # 言語切替コンポーネント
│   └── ui/                          # shadcn/uiコンポーネント（50+ファイル）
│       ├── card.tsx
│       ├── button.tsx
│       ├── badge.tsx
│       ├── table.tsx
│       ├── accordion.tsx
│       └── ... (その他)
│
├── 📁 content/                      # コンテンツデータ（YAML）
│   └── area/                        # エリアデータ（新システム）
│       ├── setagaya.yml             # Setagayaデータ
│       ├── shibuya.yml              # Shibuyaデータ（公開版）
│       └── shibuya.draft.yml        # Shibuyaデータ（ドラフト）
│
├── 📁 data/                         # データ定義（TypeScript）
│   ├── wards/                       # Wardデータ（旧システム）
│   │   ├── registry.ts              # Ward登録レジストリ
│   │   ├── _template.ts             # Wardテンプレート
│   │   ├── setagaya.ts              # Setagayaデータ（旧）
│   │   └── setagaya-full.ts         # Setagayaデータ（フル版）
│   ├── index.ts                     # データエクスポート
│   └── WARD_LIST.md                 # Wardリストドキュメント
│
├── 📁 lib/                          # ユーティリティ・ローダー
│   ├── area-loader.ts               # エリアデータローダー（YAML読み込み）
│   ├── content/
│   │   └── area.schema.ts           # エリアスキーマ定義（未使用？）
│   ├── i18n.ts                      # 国際化ユーティリティ
│   └── utils.ts                     # 汎用ユーティリティ
│
├── 📁 bmad/                         # BMAD用プロンプト・スキーマ
│   └── prompts/
│       ├── area-variables.schema.json  # エリア変数スキーマ（JSON Schema）
│       └── dev.md                    # 開発用メモ
│
├── 📁 docs/                         # ドキュメント
│   ├── area-guides-bmad-brief.md    # BMAD指示書（最重要）
│   ├── area-guides-reference-article-prompt.md  # 参考記事用プロンプト
│   ├── architecture.md              # アーキテクチャドキュメント
│   ├── areas-slug-404-fix.md        # 404修正メモ
│   ├── setagaya-audit.md            # Setagaya監査メモ
│   ├── shibuya-audit.md             # Shibuya監査メモ
│   ├── shibuya-notes-from-ehousing.md  # e-housing記事からのメモ
│   └── _bak/                        # バックアップ
│
├── 📁 public/                       # 静的ファイル
│   └── images/                      # 画像ファイル
│       ├── setagaya-map.png         # Setagayaマップ
│       ├── shimokitazawa.webp       # 下北沢写真
│       ├── futakotamagawa.webp      # 二子玉川写真
│       ├── todoroki-valley.jpeg     # 等々力渓谷
│       ├── st-marys.jpeg            # セントメアリーズ
│       ├── daidogei.jpeg            # 大道芸
│       ├── exchange.jpeg            # 国際交流
│       └── kinuta-park.webp         # 砧公園
│
├── 📁 types/                        # TypeScript型定義
│   ├── index.ts                     # 共通型
│   └── ward.ts                      # Ward型
│
├── 📁 hooks/                        # React Hooks
│   ├── use-mobile.ts                # モバイル判定
│   └── use-toast.ts                 # トースト通知
│
├── 📁 scripts/                      # スクリプト
│   └── seed-area-content.ts         # エリアコンテンツシード
│
├── 📁 i18n/                         # 国際化メッセージ
│   └── messages.ts                  # メッセージ定義
│
├── 📁 styles/                       # スタイル（未使用？）
│   └── globals.css
│
├── package.json                     # 依存関係
├── pnpm-lock.yaml                   # ロックファイル
├── next.config.mjs                  # Next.js設定
├── tailwind.config.ts               # Tailwind設定
├── tsconfig.json                    # TypeScript設定
├── components.json                  # shadcn/ui設定
└── README.md                        # プロジェクト説明
```

## データフロー

### 新システム（YAMLベース）
```
content/area/{slug}.yml
  ↓ (lib/area-loader.ts で読み込み)
app/(marketing)/areas/[slug]/page.tsx
  ↓ (条件分岐)
components/areas/ShibuyaStoryLanding.tsx または DefaultAreaLanding.tsx
```

### 旧システム（TypeScriptベース）
```
data/wards/{slug}.ts
  ↓ (lib/area-loader.ts で読み込み)
app/[ward]/page.tsx
  ↓
app/[ward]/ward-page-client.tsx
  ↓
components/ward/ward-guide-layout.tsx
  ↓
components/ward/*-section.tsx (各種セクション)
```

### Setagaya LP（特殊）
```
app/page.tsx (ルート)
  ↓
components/setagaya-guide.tsx (日本語)
components/setagaya-guide-english.tsx (英語)
  ↓
components/international-living-section.tsx
components/events-festivals-section.tsx
components/consolidated-cta-section.tsx
```

## BMAD METHODとの整合性チェック

### ✅ 良い点

1. **データとロジックの分離**
   - `content/area/*.yml` でデータ管理
   - `bmad/prompts/area-variables.schema.json` でスキーマ定義
   - `docs/area-guides-bmad-brief.md` でルール定義

2. **プロンプト管理**
   - `bmad/prompts/` にスキーマとプロンプトを配置
   - `docs/area-guides-reference-article-prompt.md` で再利用可能なプロンプトテンプレート

3. **ドラフト管理**
   - `{slug}.draft.yml` でドラフト段階を管理

### ⚠️ 改善が必要な点

#### 1. **データの二重管理**
**問題**: `data/wards/*.ts`（旧システム）と `content/area/*.yml`（新システム）が並存

**影響**:
- Setagayaは両方に存在（`data/wards/setagaya.ts` と `content/area/setagaya.yml`）
- どちらが「真実の源」か不明確
- BMAD的には「1つのデータソース」が理想

**推奨対応**:
- 段階的に `data/wards/*.ts` を廃止し、`content/area/*.yml` に統一
- または、`data/wards/*.ts` を `content/area/*.yml` の生成元として明確化

#### 2. **画像のメタデータ管理不足**
**問題**: `public/images/` に直接配置されているが、YAMLに画像パスのメタデータがない

**現在の実装**:
```typescript
// app/(marketing)/areas/page.tsx
function getAreaImage(slug: string): string | null {
  const possibleExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  for (const ext of possibleExtensions) {
    const imagePath = path.join(process.cwd(), "public", "images", `${slug}${ext}`);
    if (fs.existsSync(imagePath)) {
      return `/images/${slug}${ext}`;
    }
  }
  return null;
}
```

**BMAD的推奨**:
- `content/area/{slug}.yml` に `assets.images` フィールドを追加
- 画像の説明、altテキスト、用途（hero/map/gallery）をメタデータ化
- AIが画像を追加する際のルールを明確化

**推奨スキーマ追加**:
```yaml
assets:
  images:
    hero:
      path: "/images/shibuya-hero.jpg"
      alt:
        en: "Shibuya Scramble Crossing"
        ja: "渋谷スクランブル交差点"
    map:
      path: "/images/shibuya-map.png"
      alt:
        en: "Shibuya Ward Map"
        ja: "渋谷区マップ"
    gallery:
      - path: "/images/shibuya-1.jpg"
        alt:
          en: "Daikanyama streets"
          ja: "代官山の通り"
```

#### 3. **コンポーネントの分散**
**問題**: `components/areas/` と `components/ward/` が並存

**影響**:
- 新システムと旧システムのコンポーネントが混在
- 同じ機能が重複実装されている可能性

**推奨対応**:
- `components/ward/` を段階的に廃止
- または、`components/areas/` に統一し、`ward/` はエイリアスとして残す

#### 4. **プロンプトの分散**
**問題**: `bmad/prompts/` と `docs/` にプロンプト関連ファイルが分散

**現在**:
- `bmad/prompts/area-variables.schema.json` - スキーマ
- `bmad/prompts/dev.md` - 開発メモ
- `docs/area-guides-bmad-brief.md` - BMAD指示書
- `docs/area-guides-reference-article-prompt.md` - プロンプトテンプレート

**推奨対応**:
- `bmad/prompts/` にプロンプトテンプレートを集約
- `docs/` は運用ドキュメントに限定

#### 5. **画像ファイル命名規則の不明確さ**
**問題**: 画像ファイル名が `{slug}.{ext}` 形式に固定されている

**現在の実装**:
- `public/images/setagaya-map.png`
- `public/images/shimokitazawa.webp`
- 用途（map/gallery/hero）がファイル名から推測できない

**推奨対応**:
- 命名規則を明確化: `{slug}-{purpose}.{ext}`
- 例: `shibuya-hero.jpg`, `shibuya-map.png`, `shibuya-gallery-1.webp`
- YAMLの `assets.images` で管理

#### 6. **型定義の分散**
**問題**: `types/` と各コンポーネント内で型定義が分散

**現在**:
- `types/index.ts` - 共通型
- `types/ward.ts` - Ward型
- `components/areas/ShibuyaStoryLanding.tsx` 内に `AreaData` 型定義

**推奨対応**:
- `types/area.ts` を作成し、エリア関連の型を集約
- JSON Schemaから型を自動生成する仕組みを検討

## BMAD METHOD推奨構造（理想形）

```
area-guides/
├── 📁 content/                      # 唯一のデータソース
│   └── area/
│       ├── {slug}.yml               # エリアデータ（メイン）
│       └── {slug}.draft.yml         # ドラフト
│
├── 📁 bmad/                         # BMAD用リソース
│   ├── prompts/
│   │   ├── area-variables.schema.json  # スキーマ
│   │   ├── generate-area-guide.md     # 生成プロンプト
│   │   └── update-area-data.md         # 更新プロンプト
│   └── templates/
│       └── area-template.yml          # YAMLテンプレート
│
├── 📁 docs/                         # 運用ドキュメント
│   ├── area-guides-bmad-brief.md    # BMAD指示書
│   └── ... (監査メモ、実装メモなど)
│
├── 📁 public/
│   └── images/
│       └── area/                     # エリア画像を整理
│           ├── {slug}/
│           │   ├── hero.{ext}
│           │   ├── map.{ext}
│           │   └── gallery/
│           │       └── {index}.{ext}
│
└── 📁 lib/
    ├── area-loader.ts               # YAMLローダー
    └── area-types.ts                # 型定義（スキーマから生成）
```

## 優先度別改善提案

### 🔴 高優先度（BMAD自動化に必須）

1. **画像メタデータのYAML化**
   - `content/area/{slug}.yml` に `assets.images` フィールド追加
   - 画像の説明、altテキスト、用途をメタデータ化
   - AIが画像を追加する際のルールを明確化

2. **データソースの統一**
   - `data/wards/*.ts` を廃止し、`content/area/*.yml` に統一
   - または、`data/wards/*.ts` を `content/area/*.yml` の生成元として明確化

### 🟡 中優先度（運用効率化）

3. **プロンプトの集約**
   - `bmad/prompts/` にプロンプトテンプレートを集約
   - `docs/` は運用ドキュメントに限定

4. **型定義の集約**
   - `types/area.ts` を作成し、エリア関連の型を集約
   - JSON Schemaから型を自動生成する仕組みを検討

### 🟢 低優先度（コード整理）

5. **コンポーネントの統一**
   - `components/ward/` を段階的に廃止
   - `components/areas/` に統一

6. **画像ファイル命名規則の明確化**
   - `{slug}-{purpose}.{ext}` 形式に統一
   - YAMLの `assets.images` で管理

