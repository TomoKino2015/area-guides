# 世田谷区コンテンツ監査レポート

**日付**: 2025-11-01  
**対象**: `/setagaya` ページのレンダリング構造と `/areas` 周りの変更による影響調査

---

## 1. `/setagaya` ページのレンダリングフロー

### 1.1 ルーティング

- **URL**: `/setagaya`
- **ファイル**: `app/[ward]/page.tsx` (Server Component)
- **動的パラメータ**: `[ward]` = `"setagaya"`

### 1.2 データ取得フロー

```
app/[ward]/page.tsx
  ↓ getWardData("setagaya")
data/index.ts
  ↓ wardData["setagaya"]
data/wards/setagaya.ts
  ↓ setagayaData (WardData型)
```

**データソース**: `data/wards/setagaya.ts` の `setagayaData` オブジェクト

### 1.3 コンポーネント呼び出し階層

```
WardPage (Server Component)
  ↓ ward={setagayaData}
WardPageClient (Client Component)
  ↓ data={ward}, language={state}
WardGuideLayout
  ↓ data={ward}, language={state}
HeroSection
  ↓ data={ward}, language={state}
```

### 1.4 現在のセクション構成

**現在表示されているセクション**:
- ✅ `HeroSection` のみ（他のセクションはコメントアウト状態）

**コメントアウトされているセクション**:
- `TargetAudienceSection`
- `HighlightsSection`
- `HousingSection`
- `ResidentVoicesSection`
- `PhotoHighlightsSection`
- `TransportLinesSection`
- `InternationalSection`
- `ForeignFriendlySection`
- `EventsSection`
- `FaqSection`
- `ConsolidatedCtaSection`

### 1.5 ハードコードされているテキスト

#### `app/[ward]/page.tsx`
- 行21: `"エリアが見つかりませんでした。"` (404時のメッセージ)

#### `app/[ward]/ward-page-client.tsx`
- 行24: `padding: "1rem 1rem 4rem 1rem"` (スタイル)
- 行25: `maxWidth: "900px"` (スタイル)

#### `components/ward/ward-guide-layout.tsx`
- 行64: `"WardGuideLayout render OK (stage1 ONLY HeroSection)"` (デバッグメッセージ)
- 行83: `"STEP1 HeroSection"` (デバッグメッセージ)
- 行49: `maxWidth: "900px"` (スタイル)

#### `components/ward/hero-section.tsx`
- 行48: `"English"` / `"日本語"` (言語切り替えボタン)

### 1.6 世田谷専用の文章（データソース）

**すべてのテキストコンテンツは `data/wards/setagaya.ts` から取得**

- `name`: { ja: "世田谷区", en: "Setagaya" }
- `tagline`: { ja: "緑とカフェと子育ての街...", en: "Green, family-friendly..." }
- `overview`: { ja: "東京23区の南西部に位置する...", en: "Setagaya sits on the west side..." }
- `stats`: 人口、面積、密度、外国人比率など
- `housing`: 家賃情報、エリア別情報
- `highlights`: ハイライトポイント配列
- `international`: 国際的な情報
- `events`: イベント情報
- `attractions`: 観光スポット情報

**ハードコードされた世田谷固有のテキストは存在しない**（すべてデータ駆動）

---

## 2. `/areas` 周りの変更との依存関係

### 2.1 `/areas` の実装

**新規追加されたファイル**:
- `app/(marketing)/areas/[slug]/page.tsx`
- `app/(marketing)/areas/page.tsx`
- `lib/area-loader.ts`
- `data/wards/registry.ts`

### 2.2 データフローの違い

#### `/setagaya` のデータフロー
```
app/[ward]/page.tsx
  → data/index.ts
    → data/wards/setagaya.ts (setagayaData)
```

#### `/areas/setagaya` のデータフロー
```
app/(marketing)/areas/[slug]/page.tsx
  → lib/area-loader.ts (loadWardRich)
    → data/wards/registry.ts (WARD_REGISTRY)
      → data/wards/setagaya.ts (setagayaData)
```

### 2.3 依存関係の分析

**✅ 影響なし**

**理由**:
1. **ルーティングが完全に分離**: `/setagaya` と `/areas/setagaya` は別のルート
2. **データソースは同じ**: 両方とも `data/wards/setagaya.ts` の `setagayaData` を使用
3. **コンポーネントは共有**: 両方とも `WardPageClient` を使用
4. **データローダーは独立**: `data/index.ts` と `data/wards/registry.ts` は別のモジュール

**将来のリスク**:
- `data/index.ts` と `data/wards/registry.ts` の同期が取れなくなる可能性
- 現時点では両方とも `setagayaData` を参照しているため問題なし

---

## 3. 潜在的な問題点

### 3.1 HeroSection の型不一致

**場所**: `components/ward/hero-section.tsx`

**問題**:
- 行27: `data.title` を参照
- 行30: `data.description` を参照
- 行33: `data.updatedAt` を参照

**しかし `WardData` 型には以下が存在しない**:
- `title` フィールド
- `description` フィールド
- `updatedAt` フィールド

**存在するフィールド**:
- `name` (ja/en)
- `tagline` (ja/en)
- `overview` (ja/en)

**影響**: `HeroSection` が正しくレンダリングされない可能性が高い

### 3.2 データ構造の不一致

`HeroSection` が期待するデータ構造と `WardData` 型の定義が一致していない。

**修正が必要な箇所**（将来）:
- `components/ward/hero-section.tsx` の行27, 30, 33
- `data.title` → `data.name`
- `data.description` → `data.tagline` または `data.overview`
- `data.updatedAt` → 削除またはデータに追加

---

## 4. 結論

### 4.1 `/areas` 変更の影響

**✅ app/[ward] 系は今回の変更の影響を受けていない**

- `/setagaya` と `/areas/setagaya` は独立したルーティング
- データソースは同じだが、ローダー経路が異なる
- 直接的な依存関係はない

### 4.2 `/setagaya` ページの現在の状態

**セクション構成**:
- `HeroSection` のみ表示（ただし型不一致の可能性あり）
- 他のセクションはコメントアウト

**データソース**:
- ✅ `data/wards/setagaya.ts` から正常に取得
- ✅ 世田谷専用のデータはすべてデータ駆動
- ⚠️ `HeroSection` の型不一致により、実際の表示が崩れている可能性

---

## 5. 推奨事項（将来の修正）

1. **HeroSection の修正**: `data.title` → `data.name`, `data.description` → `data.tagline`
2. **WardData 型の拡張**: 必要に応じて `updatedAt` フィールドを追加
3. **データソースの統一**: `data/index.ts` と `data/wards/registry.ts` の同期メカニズムを検討

---

**監査完了日**: 2025-11-01  
**監査者**: AI Assistant  
**結果**: `/areas` 変更による影響なし、ただし `HeroSection` の型不一致あり





