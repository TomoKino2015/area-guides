# 移行ガイド / Migration Guide

既存の世田谷区専用ページから、データドリブンな23区対応システムへの移行ガイドです。

## 📋 目次

1. [現在の状態](#現在の状態)
2. [移行後の構造](#移行後の構造)
3. [移行手順](#移行手順)
4. [旧コンポーネントとの比較](#旧コンポーネントとの比較)
5. [テスト方法](#テスト方法)

---

## 現在の状態

### 既存ファイル（変更なし）
```
app/page.tsx                              # 既存のトップページ
components/setagaya-guide.tsx             # 世田谷ガイド（日本語）
components/setagaya-guide-english.tsx     # 世田谷ガイド（英語）
components/international-living-section.tsx
components/events-festivals-section.tsx
components/consolidated-cta-section.tsx
```

### 新規追加ファイル
```
✨ app/[ward]/page.tsx                    # 動的ルーティング
✨ types/ward.ts                          # 型定義
✨ data/wards/setagaya.ts                 # 世田谷データ
✨ data/index.ts                          # データアクセス
✨ lib/i18n.ts                            # 国際化ヘルパー
✨ components/ward/*                      # 再利用可能コンポーネント
✨ components/common/language-switcher.tsx
```

---

## 移行後の構造

### URL構造の変化

#### 現在
```
/ → 世田谷区専用ページ（言語切り替え可能）
```

#### 移行後（Option A: 既存ページ保持）
```
/              → ランディングページ（23区一覧）
/setagaya      → 世田谷区ページ（新システム）
/shibuya       → 渋谷区ページ（新システム）
/shinjuku      → 新宿区ページ（新システム）
... 他の区
```

#### 移行後（Option B: リダイレクト）
```
/              → /setagaya にリダイレクト（既存動作を保持）
/setagaya      → 世田谷区ページ
/shibuya       → 渋谷区ページ
...
```

---

## 移行手順

### Phase 1: 新システムの動作確認（現在完了）

1. ✅ 型定義の作成
2. ✅ データファイルの作成
3. ✅ 再利用可能コンポーネントの作成
4. ✅ 動的ルーティングの実装

**確認方法:**
```bash
pnpm dev
# http://localhost:3000/setagaya にアクセス
```

### Phase 2: 既存ページとの統合

#### Option A: 段階的移行（推奨）

既存の `/` ページはそのまま、新しい `/setagaya` を並行運用:

```typescript
// app/page.tsx は変更なし（既存の実装を保持）

// 新しい /setagaya は app/[ward]/page.tsx で処理
```

**メリット:**
- リスクが低い
- 既存ユーザーへの影響なし
- 新旧比較が容易

**デメリット:**
- 一時的に重複コンテンツ

#### Option B: 完全移行

既存の `/` を新システムに置き換え:

```typescript
// app/page.tsx を更新
"use client"

import { useState } from "react"
import { getWardData } from "@/data"
import { WardGuideLayout } from "@/components/ward/ward-guide-layout"
import { LanguageSwitcher } from "@/components/common/language-switcher"
import type { Language } from "@/lib/i18n"

export default function Home() {
  const [language, setLanguage] = useState<Language>("ja")
  // デフォルトで世田谷区を表示
  const setagayaData = getWardData("setagaya")!

  return (
    <main className="min-h-screen bg-gray-50">
      <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WardGuideLayout ward={setagayaData} language={language} />
      </div>
    </main>
  )
}
```

### Phase 3: 旧コンポーネントの削除（オプション）

新システムが安定したら、以下を削除可能:
```bash
rm components/setagaya-guide.tsx
rm components/setagaya-guide-english.tsx
rm components/international-living-section.tsx
rm components/international-living-section-english.tsx
rm components/events-festivals-section.tsx
rm components/events-festivals-section-english.tsx
```

**注意**: `consolidated-cta-section.tsx` は保持（新システムでも使用）

---

## 旧コンポーネントとの比較

### データの所在

| 項目 | 旧システム | 新システム |
|-----|----------|----------|
| 区名 | JSX内にハードコード | `data/wards/setagaya.ts` |
| 概要文 | JSX内にハードコード | `data/wards/setagaya.ts` |
| 統計データ | JSX内にハードコード | `data/wards/setagaya.ts` |
| イベント情報 | 別コンポーネント | `data/wards/setagaya.ts` |
| 国際情報 | 別コンポーネント | `data/wards/setagaya.ts` |
| 言語切り替え | コンポーネント複製 | データ駆動（単一コンポーネント） |

### コンポーネントのマッピング

| 旧コンポーネント | 新コンポーネント | 備考 |
|---------------|---------------|------|
| `SetagayaAreaGuide` | `WardGuideLayout` | データをpropsで受け取る |
| (言語ごとに複製) | `HeroSection` | 言語はprops |
| (埋め込み) | `HighlightsSection` | 独立コンポーネント |
| `InternationalLivingSection` | `InternationalSection` | データ駆動 |
| `EventsFestivalsSection` | `EventsSection` | データ駆動 |
| (埋め込み) | `AttractionsSection` | 新規追加 |

### スタイルの互換性

新システムは既存のスタイルを `ward-styles.tsx` にそのまま移植しているため、見た目は同じです。

---

## テスト方法

### 1. ビジュアル比較

```bash
# 開発サーバー起動
pnpm dev

# 既存ページ
# http://localhost:3000

# 新ページ
# http://localhost:3000/setagaya
```

**確認項目:**
- [ ] レイアウトが同じ
- [ ] 色・フォントが同じ
- [ ] アニメーションが動作
- [ ] 言語切り替えが動作
- [ ] 画像が表示される
- [ ] リンクが正しく動作

### 2. データの整合性

```typescript
// テストスクリプト例
import { getWardData } from "@/data"

const setagaya = getWardData("setagaya")
console.assert(setagaya?.name.ja === "世田谷区", "Name mismatch")
console.assert(setagaya?.attractions.length > 0, "No attractions")
console.assert(setagaya?.events.length > 0, "No events")
```

### 3. レスポンシブテスト

デバイスサイズでの確認:
- [ ] モバイル (375px)
- [ ] タブレット (768px)
- [ ] デスクトップ (1024px+)

### 4. パフォーマンステスト

```bash
# 本番ビルド
pnpm build

# Lighthouseスコア確認
# Chrome DevTools > Lighthouse
```

**目標スコア:**
- Performance: 90+
- Accessibility: 95+
- SEO: 95+

---

## ロールバック手順

問題が発生した場合の対処:

### Git履歴から復元
```bash
# 変更前のコミットに戻す
git log --oneline
git revert <commit-hash>
```

### 新ファイルのみ削除
```bash
rm -rf app/[ward]
rm -rf data
rm -rf types/ward.ts
rm -rf lib/i18n.ts
rm -rf components/ward
rm -rf components/common
```

既存ファイル（`app/page.tsx`など）は変更していないため、そのまま動作します。

---

## よくある質問 / FAQ

### Q1: 既存のURLは変わりますか？

A: いいえ。Option Aを選択すれば、`/` は既存のまま動作し、新しく `/setagaya` が追加されます。

### Q2: SEOへの影響は？

A: Option Aなら影響なし。Option Bの場合は301リダイレクトを設定すれば問題ありません。

### Q3: 既存データは移行されていますか？

A: はい。`data/wards/setagaya.ts` に既存の `setagaya-guide.tsx` のデータをすべて移行済みです。

### Q4: 新しい区を追加するのにどれくらい時間がかかりますか？

A: データ収集に2-3時間、データファイル作成に30分、画像準備に1時間程度が目安です。

### Q5: CMSと統合できますか？

A: はい。`data/index.ts` を修正してCMS APIからデータを取得するように変更可能です。

---

## サポート

問題が発生した場合:

1. GitHub Issuesで報告
2. `git diff` で変更を確認
3. `pnpm build` でエラーログを確認
4. 必要に応じてロールバック

---

**作成日**: 2025年2月  
**最終更新**: 2025年2月  
**担当**: AtHearth Development Team



