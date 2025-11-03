# マージTODO（後続作業）

## 後で実施する作業

### 1. ヘッダーナビ追加（任意）
- ファイル: `app/layout.tsx`
- 手順:
  1) 先頭に追加: `import AreasHeader from "@/components/AreasHeader";`
  2) `<body>`内の`{children}`の直前に: `<AreasHeader />`
- タイミング: `/areas`動作確認後

### 2. shibuya.yml の拡張
- ファイル: `content/area/shibuya.yml`
- 手順: `shibuya.draft.yml`の内容を必要分だけ手動マージ
- 注意: null は実データ確定まで据え置き

### 3. 他エリアの追加
- 例) Setagaya: `content/area/setagaya.yml` → `app/(marketing)/areas/setagaya/page.mdx`

