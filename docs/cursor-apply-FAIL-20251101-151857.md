# ビルド失敗レポート

**時刻:** $(date +"%Y-%m-%d %H:%M:%S")
**ステータス:** ❌ 失敗（ロールバック完了）

## エラー要約

```
Error: Failed to collect configuration for /areas/shibuya
TypeError: s.createContext is not a function
```

**発生ファイル:** `app/(marketing)/areas/shibuya/page.mdx` (既存ファイル)

**原因:** 既存のMDXファイルが`@mdx-js/react`のクライアントコンポーネント機能を使用しているが、Server Componentとして扱われている。

## 作成したファイル（ロールバック済み）

- `app/(marketing)/areas/page.tsx` - 削除済み
- `components/AreasHeader.tsx` - 削除済み
- `content/area/shibuya.draft.yml` - 削除済み
- `docs/MERGE_TODO.md` - 削除済み

## 対応案

### 1. 既存MDXファイルの修正（優先）
`app/(marketing)/areas/shibuya/page.mdx` の `"use client"` ディレクティブを削除、またはMDXコンポーネント設定を修正。

### 2. MDX設定の見直し
`next.config.mjs` のMDX設定を確認し、`mdx-components.tsx`の設定を見直す。

### 3. 新規ファイルのみで動作確認
既存の`shibuya/page.mdx`を一時的にリネームし、新規作成ファイルのみでビルド確認。

## 次のステップ

1. 既存の`shibuya/page.mdx`を修正するか、一時的に移動
2. 再度4ファイルを作成してビルド検証
3. 成功後、既存ファイルを適切な形式に修正
