# 東京23区エリアガイド / Tokyo 23 Wards Area Guide

東京23区の賃貸物件情報と生活環境ガイドを提供するNext.jsアプリケーション。

A Next.js application providing rental property information and living environment guides for Tokyo's 23 wards.

## 🏗️ プロジェクト構造 / Project Structure

```
area-guides/
├── app/                          # Next.js App Router
│   ├── [ward]/                   # 動的ルーティング（各区のページ）
│   │   └── page.tsx             # 区別詳細ページ
│   ├── layout.tsx               # ルートレイアウト
│   ├── page.tsx                 # トップページ
│   └── globals.css              # グローバルスタイル
│
├── components/                   # Reactコンポーネント
│   ├── common/                  # 共通コンポーネント
│   │   └── language-switcher.tsx # 言語切り替え
│   ├── ward/                    # エリアガイド専用コンポーネント
│   │   ├── ward-guide-layout.tsx  # メインレイアウト
│   │   ├── ward-styles.tsx        # スタイル定義
│   │   ├── hero-section.tsx       # ヒーローセクション
│   │   ├── highlights-section.tsx # ハイライト
│   │   ├── attractions-section.tsx # スポット紹介
│   │   ├── international-section.tsx # 国際生活情報
│   │   └── events-section.tsx     # イベント情報
│   ├── ui/                      # shadcn/ui コンポーネント
│   └── [legacy components]      # 既存コンポーネント（段階的に移行）
│
├── data/                        # データ層（新規）
│   ├── wards/                   # 各区のデータファイル
│   │   └── setagaya.ts         # 世田谷区データ
│   └── index.ts                # データアクセス関数
│
├── types/                       # TypeScript型定義
│   ├── ward.ts                 # WardData インターフェース
│   └── index.ts                # 型エクスポート
│
├── lib/                         # ユーティリティ関数
│   ├── i18n.ts                 # 国際化ヘルパー
│   └── utils.ts                # 汎用ユーティリティ
│
└── public/                      # 静的アセット
    └── images/                  # 画像ファイル
```

## 🚀 技術スタック / Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Analytics**: Vercel Analytics

## 📦 セットアップ / Setup

### 前提条件 / Prerequisites

- Node.js 18以上
- pnpm (推奨) または npm

### インストール / Installation

```bash
# リポジトリのクローン
git clone https://github.com/TomoKino2015/area-guides.git
cd area-guides

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

開発サーバーは `http://localhost:3000` で起動します。

## 🗺️ データ駆動アーキテクチャ / Data-Driven Architecture

### WardData インターフェース

各区のデータは `types/ward.ts` で定義された `WardData` インターフェースに従います：

```typescript
export interface WardData {
  slug: string                    // URL識別子（例: "setagaya"）
  name: { ja: string; en: string } // 区名
  tagline: { ja: string; en: string } // キャッチコピー
  overview: { ja: string; en: string } // 概要
  stats: { ... }                  // 統計データ
  housing: { ... }                // 住宅情報
  highlights: Array<{ ... }>      // ハイライト
  international: { ... }          // 国際対応情報
  events: WardEvent[]             // イベント
  attractions: WardAttraction[]   // スポット
  images: { hero?: string; map?: string } // 画像
}
```

### 新しい区の追加方法 / Adding a New Ward

1. **データファイルの作成**

```bash
# data/wards/ に新しいファイルを作成
touch data/wards/shibuya.ts
```

2. **データの定義**

```typescript
// data/wards/shibuya.ts
import type { WardData } from "@/types/ward"

export const shibuyaData: WardData = {
  slug: "shibuya",
  name: { ja: "渋谷区", en: "Shibuya Ward" },
  // ... 他のデータを記入
}
```

3. **データのインポート**

```typescript
// data/index.ts に追加
import { shibuyaData } from "./wards/shibuya"

export const wardData: Record<string, WardData> = {
  setagaya: setagayaData,
  shibuya: shibuyaData, // 追加
}
```

4. **画像の配置**

```bash
# public/images/ に画像を配置
cp your-images/* public/images/
```

5. **ビルド確認**

```bash
pnpm build
```

これだけで、`/shibuya` のURLが自動的に生成されます！

## 🌐 多言語対応 / Internationalization

### 言語の切り替え

- クライアントサイドで動的に日本語/英語を切り替え
- `lib/i18n.ts` のヘルパー関数を使用
- すべてのテキストは `{ ja: "...", en: "..." }` 形式で管理

### 翻訳ヘルパー関数

```typescript
import { t, formatNumber, formatCurrency } from "@/lib/i18n"

// 翻訳
const translated = t(ward.name, language)

// 数値フォーマット
const formatted = formatNumber(12345, language)

// 通貨フォーマット
const yen = formatCurrency(150000, language)
```

## 🎨 スタイリング / Styling

### カラーテーマ

```css
--athearth-main: #00c4a7     /* メインカラー */
--athearth-base: #ffffff      /* ベース（背景） */
--athearth-accent: #f08080    /* アクセント */
--athearth-sub1: #f2e6d9      /* サブ1 */
--athearth-sub2: #6c757d      /* サブ2（テキスト） */
```

### レスポンシブデザイン

- モバイルファースト設計
- 768px、1024px のブレークポイント
- グリッドレイアウトは自動的に1カラムに変更

## 📝 開発ワークフロー / Development Workflow

### ブランチ戦略

```
main          - 本番環境
develop       - 開発環境
feature/*     - 新機能開発
ward/*        - 新しい区の追加
```

### コミットメッセージ規約

```
feat: 新機能追加
fix: バグ修正
data: データ追加・更新
style: スタイル変更
docs: ドキュメント更新
refactor: リファクタリング
```

## 🚢 デプロイ / Deployment

### Vercelへのデプロイ（推奨）

```bash
# Vercel CLIのインストール
pnpm i -g vercel

# デプロイ
vercel
```

### ビルド

```bash
pnpm build
pnpm start
```

## 📊 今後の拡張予定 / Future Enhancements

### Phase 1: データの拡充
- [ ] 残り22区のデータ追加
- [ ] 賃料データのAPI連携
- [ ] 画像の最適化

### Phase 2: 機能追加
- [ ] 区の比較機能
- [ ] 検索・フィルタリング
- [ ] インタラクティブマップ
- [ ] ユーザーレビュー

### Phase 3: CMS統合
- [ ] Contentful/Sanity導入
- [ ] 非技術者によるコンテンツ更新
- [ ] 画像CDN最適化

### Phase 4: SEO最適化
- [ ] メタデータの動的生成
- [ ] 構造化データ（Schema.org）
- [ ] サイトマップ自動生成
- [ ] OGP画像生成

## 🤝 コントリビューション / Contributing

新しい区のデータ追加や機能改善のプルリクエストを歓迎します！

1. フォーク
2. フィーチャーブランチ作成 (`git checkout -b feature/new-ward`)
3. コミット (`git commit -m 'feat: add Shibuya ward data'`)
4. プッシュ (`git push origin feature/new-ward`)
5. プルリクエスト作成

## 📄 ライセンス / License

© 2025 AtHearth Inc. All Rights Reserved.

## 📞 お問い合わせ / Contact

- Website: https://www.athearth.com
- GitHub: https://github.com/TomoKino2015/area-guides

---

**作成者**: AtHearth Development Team  
**最終更新**: 2025年2月








