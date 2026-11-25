# 世田谷区 HeroSection 修正設計書

**日付**: 2025-11-01  
**目的**: HeroSection のフィールド名不一致を修正して、正しく表示されるようにする

---

## 1. 現状の問題点

### 1.1 フィールド不一致の詳細

**HeroSection が参照しているフィールド**:
- `data.title` (行27) → **存在しない**
- `data.description` (行30) → **存在しない**
- `data.updatedAt` (行33) → **存在しない**

**WardData 型に実際に存在するフィールド**:
- `name: { ja: string; en: string }` - 区名
- `tagline: { ja: string; en: string }` - 短いキャッチコピー
- `overview: { ja: string; en: string }` - 概要説明

### 1.2 setagayaData の実際の値

```typescript
name: {
  ja: "世田谷区",
  en: "Setagaya"
}

tagline: {
  ja: "緑とカフェと子育ての街。都心すぎず郊外すぎないちょうどいい生活圏。",
  en: "Green, family-friendly, relaxed — close to central Tokyo without the chaos."
}

overview: {
  ja: "東京23区の南西部に位置する世田谷区。都会の利便性と郊外の静けさが理想的に融合したエリアです。特に三軒茶屋、下北沢、二子玉川、成城学園前の4大エリアは、それぞれ異なる魅力を持ち、若手ビジネスパーソンからクリエイター、外国人居住者まで、多様な人々を惹きつけています。",
  en: "Setagaya sits on the west side of Tokyo's 23 wards, offering an ideal fusion of urban convenience and suburban serenity. Four major areas—Sangenjaya, Shimokitazawa, Futako-Tamagawa, and Seijo-Gakuen-mae—each have their own unique charm, attracting diverse residents from young professionals to creatives and international residents."
}
```

---

## 2. 設計方針

### 2.1 表示マッピング

**見出し（h1）**:
- **使用フィールド**: `data.name[language]`
- **理由**: 区名を表示するのが最も適切
- **例**: ja → "世田谷区", en → "Setagaya"

**サブコピー（メインのテキスト）**:
- **使用フィールド**: `data.tagline[language]`
- **理由**: tagline は短いキャッチコピーで、Hero セクションのメインメッセージとして適切
- **例**: ja → "緑とカフェと子育ての街...", en → "Green, family-friendly..."

**概要文（追加テキスト）**:
- **使用フィールド**: `data.overview[language]`（オプション）
- **理由**: overview は詳細な説明文。Hero セクションに含めるかはデザイン次第だが、現時点では tagline のみで十分
- **今後の拡張**: 必要に応じて overview を追加表示することも可能

**更新日時**:
- **使用フィールド**: なし（WardData 型に `updatedAt` フィールドが存在しない）
- **方針**: この段階では表示しない
- **将来の拡張**: WardData 型に `updatedAt` フィールドが追加された場合に表示を検討

### 2.2 言語切り替えロジック

**既存の `t()` 関数を維持**:
- `t()` 関数は `{ ja, en }` オブジェクトから適切な言語のテキストを抽出する
- この関数は既に正しく実装されているため、そのまま使用

### 2.3 コンポーネント構造

```
HeroSection
  ├─ h1: data.name[language] （区名）
  ├─ p: data.tagline[language] （キャッチコピー）
  └─ button: 言語切り替えボタン（既存のまま）
```

---

## 3. 修正内容

### 3.1 変更ファイル

**変更対象**: `components/ward/hero-section.tsx` のみ

### 3.2 変更箇所

1. **行27**: `{t(data.title)}` → `{t(data.name)}`
2. **行30**: `{t(data.description)}` → `{t(data.tagline)}`
3. **行32-34**: `updatedAt` の表示部分を削除（またはコメントアウト）

### 3.3 修正後の構造

```tsx
<h1>{t(data.name)}</h1>
<p>{t(data.tagline)}</p>
{/* updatedAt は WardData 型に存在しないため表示しない */}
```

---

## 4. 影響範囲

### 4.1 影響を受けるページ

- ✅ `/setagaya` - `app/[ward]/page.tsx` 経由
- ✅ `/areas/setagaya` - `app/(marketing)/areas/[slug]/page.tsx` 経由

**両方とも同じ `WardPageClient` → `WardGuideLayout` → `HeroSection` を使用するため、同じ修正で両方に反映される**

### 4.2 影響を受けない部分

- ✅ `data/wards/setagaya.ts` - 変更なし
- ✅ `types/ward.ts` - 変更なし
- ✅ `data/index.ts` - 変更なし
- ✅ `lib/area-loader.ts` - 変更なし
- ✅ 他のセクション（コメントアウト中） - 影響なし

---

## 5. 期待される結果

### 5.1 `/setagaya` ページ

- **見出し**: "世田谷区" (ja) / "Setagaya" (en)
- **サブコピー**: "緑とカフェと子育ての街..." (ja) / "Green, family-friendly..." (en)
- **言語切り替え**: 正常に動作
- **その他のセクション**: コメントアウト中なので表示されない

### 5.2 `/areas/setagaya` ページ

- **見出し**: "世田谷区" (ja) / "Setagaya" (en)
- **サブコピー**: "緑とカフェと子育ての街..." (ja) / "Green, family-friendly..." (en)
- **言語切り替え**: 正常に動作
- **その他のセクション**: コメントアウト中なので表示されない

---

## 6. 変更サマリ

### 6.1 修正ファイル

- **ファイル**: `components/ward/hero-section.tsx`
- **変更行数**: 3箇所（行27, 30, 32-34）

### 6.2 具体的な変更

1. **行27**: `data.title` → `data.name`
   - 見出しを区名に変更

2. **行30**: `data.description` → `data.tagline`
   - サブコピーを tagline に変更

3. **行32-34**: `updatedAt` 表示部分を削除
   - WardData 型に存在しないため表示しない

### 6.3 効果

- ✅ `/setagaya` と `/areas/setagaya` の両方で HeroSection が正しく表示される
- ✅ データ構造とコンポーネントの整合性が取れる
- ✅ 世田谷区のデータを変更せずに済む
- ✅ 他のセクションへの影響なし（コメントアウト中）

---

## 7. 動作確認結果

### 7.1 確認方法

`pnpm dev` を実行し、以下のURLを確認:
- `http://localhost:3000/setagaya`
- `http://localhost:3000/areas/setagaya`

### 7.2 確認項目

- [ ] 見出しに "世田谷区" (ja) / "Setagaya" (en) が表示される
- [ ] サブコピーに tagline が表示される
- [ ] 言語切り替えボタンが動作する
- [ ] エラーが発生しない
- [ ] 型エラーが発生しない

### 7.3 確認結果

**修正完了**: 2025-11-01

**修正内容**:
- ✅ `components/ward/hero-section.tsx` の行27: `data.title` → `data.name`
- ✅ `components/ward/hero-section.tsx` の行30: `data.description` → `data.tagline`
- ✅ `components/ward/hero-section.tsx` の行32-34: `updatedAt` 表示部分を削除

**型チェック結果**:
- ✅ HeroSection コンポーネント自体の型エラーなし
- ⚠️ `Language` 型が `types/ward.ts` に定義されていない（既存の問題、今回の修正範囲外）
- ⚠️ `LanguageSwitcher` の props 不一致（既存の問題、今回の修正範囲外）

**修正の効果**:
- ✅ `/setagaya` と `/areas/setagaya` の両方で HeroSection が正しく表示される見込み
- ✅ データ構造とコンポーネントの整合性が取れた
- ✅ 世田谷区のデータ (`data/wards/setagaya.ts`) は変更していない

**動作確認（期待値）**:
- `/setagaya` ページ: 見出しに "世田谷区" (ja) / "Setagaya" (en)、サブコピーに tagline が表示される
- `/areas/setagaya` ページ: 同様に HeroSection が正しく表示される
- 言語切り替えボタンが正常に動作する

**注意事項**:
- `Language` 型の定義が `types/ward.ts` に存在しないため、型エラーが発生する可能性がありますが、これは既存の問題です
- 今回の修正（フィールド名の変更）は完了しており、HeroSection の表示は正しく動作する見込みです

---

**設計完了日**: 2025-11-01  
**設計者**: AI Assistant

