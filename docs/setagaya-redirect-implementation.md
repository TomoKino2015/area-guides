# ルーティング構造とリダイレクト実装レポート

**日付**: 2025-11-01  
**目的**: `/areas/setagaya` から `/` へのリダイレクト実装

---

## 1. 現状のルーティング構造

### 1.1 `/` ルート（既存のリッチLP）

**ファイル**: `app/page.tsx`

**特徴**:
- **Client Component** (`"use client"`)
- v0が作成した既存のコンポーネントを使用
  - `SetagayaAreaGuide` / `SetagayaAreaGuideEnglish`
  - `InternationalLivingSection` / `InternationalLivingSectionEnglish`
  - `EventsFestivalsSection` / `EventsFestivalsSectionEnglish`
  - `ConsolidatedCtaSection`
- 言語切り替え機能付き（useState で管理）
- **完全なLP**（複数のセクション）

**重要なポイント**:
- ✅ **既存の実装を絶対に壊してはいけない**
- ✅ このルートは変更しない

### 1.2 `/areas/[slug]` ルート（23 Areas用）

**ファイル**: `app/(marketing)/areas/[slug]/page.tsx`

**特徴**:
- **Server Component**
- 現在の処理フロー:
  1. YAMLが完全に整備されている場合 → YAML優先表示（最小ビュー）
  2. YAMLが未整備の場合 → `loadWardRich()` でrichデータを取得して `WardPageClient` を表示
  3. どちらも無い場合 → 404

**現在の表示内容**:
- YAMLが完全な場合: タイトルとサマリのみの簡易表示
- richデータの場合: `WardPageClient` → `WardGuideLayout` → `HeroSection` のみ（他のセクションはコメントアウト）

### 1.3 `/setagaya` ルート（旧システム）

**ファイル**: `app/[ward]/page.tsx`

**特徴**:
- **Server Component**
- `getWardData("setagaya")` でデータを取得
- `WardPageClient` を使用
- 現在は `HeroSection` のみ表示（他のセクションはコメントアウト）

**関係性**:
- `/setagaya` と `/areas/setagaya` は別のルート
- どちらも `WardPageClient` を使うが、`/` は全く別の実装を使用

---

## 2. 実装方針

### 2.1 要件

- `/areas/setagaya` にアクセスしたら `/` にリダイレクト
- `/` の実装は一切変更しない
- 他の slug（例: `shibuya`）は現在の挙動を維持

### 2.2 実装方法

**最小変更で実装**:
- `app/(marketing)/areas/[slug]/page.tsx` の先頭で `slug === "setagaya"` をチェック
- `next/navigation` の `redirect()` を使用して `/` にリダイレクト
- それ以外の slug は既存の処理をそのまま実行

### 2.3 変更ファイル

**変更対象**: `app/(marketing)/areas/[slug]/page.tsx` のみ

**変更内容**:
- 先頭に `redirect` の import を追加
- `slug === "setagaya"` の場合に `redirect("/")` を実行

---

## 3. 実装内容

### 3.1 コード変更

```typescript
import { redirect } from "next/navigation";  // 追加
import { notFound } from "next/navigation";
// ... 既存の import はそのまま

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 世田谷のみ既存のLPにリダイレクト
  if (slug === "setagaya") {
    redirect("/");
  }

  // それ以外の slug は既存の処理をそのまま実行
  // ... 既存のコード
}
```

### 3.2 影響範囲

**影響を受けるページ**:
- ✅ `/areas/setagaya` → `/` にリダイレクトされる

**影響を受けないページ**:
- ✅ `/` - 変更なし
- ✅ `/areas/shibuya` - 現在の挙動を維持
- ✅ `/areas/[その他のslug]` - 現在の挙動を維持
- ✅ `/setagaya` - 変更なし（別ルート）

---

## 4. 期待される動作

### 4.1 `/areas/setagaya` にアクセスした場合

1. `app/(marketing)/areas/[slug]/page.tsx` が実行される
2. `slug === "setagaya"` を検出
3. `redirect("/")` が実行される
4. `/` にリダイレクトされる
5. `app/page.tsx` がレンダリングされる（既存のリッチLP）

### 4.2 `/areas/shibuya` にアクセスした場合

1. `app/(marketing)/areas/[slug]/page.tsx` が実行される
2. `slug !== "setagaya"` なので、既存の処理が実行される
3. YAMLまたはrichデータを読み込んで表示

---

## 5. 実装完了後の確認事項

- [x] `/areas/setagaya` にアクセスしたら `/` にリダイレクトされる
- [x] `/` の表示が正常（既存のLPが表示される）
- [x] `/areas/shibuya` は現在の挙動を維持している
- [x] エラーが発生しない

---

## 6. 実装完了サマリ

**実装完了日**: 2025-11-01

**変更ファイル**:
- `app/(marketing)/areas/[slug]/page.tsx` のみ

**変更内容**:
1. 行1: `redirect` を `next/navigation` から import に追加
2. 行8-11: `slug === "setagaya"` の場合に `redirect("/")` を実行する処理を追加

**変更行数**: 3行追加（import 1行、条件分岐 3行）

**動作確認**:
- ✅ `/areas/setagaya` → `/` にリダイレクトされる（期待通り）
- ✅ `/` の既存実装は変更なし（安全）
- ✅ `/areas/shibuya` は既存の挙動を維持（他のslugにも影響なし）
- ✅ リンターエラーなし

**実装者**: AI Assistant

