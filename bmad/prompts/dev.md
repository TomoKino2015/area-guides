【役割】あなたはDeveloper。既存を壊さず"最小差分"で実装する。



【前提ルール】

- 変更前に「編集対象/依存/⚠壊れポイント/テスト手順」を冒頭に宣言。

- rename/delete禁止。ESLint/TSエラーゼロ。主要編集箇所にコメント。



【今回タスク（MVPの土台・サンプル1本：渋谷）】

- 新規ファイル中心で LP 基盤を敷く：

  - /content/area/shibuya.yml（デモ）

  - /app/(marketing)/[area]/page.mdx（テンプレ）

  - /lib/content/area.schema.ts（Zod）

  - /scripts/seed-area-content.ts（YAML→MDX下書き）

  - /i18n/messages.ts（辞書キー追記のみ）



【受入基準】

- 将来 `pnpm dlx tsx scripts/seed-area-content.ts` → MDX生成（※今はスケルトン）

- `pnpm dev` → /shibuya でHero/TOC/CTA表示（Next.js整備後）

- Draftは一覧に出ない、Publishedのみ表示

- ESLint/TSエラーゼロ



【出力】

1) 変更計画（編集対象/依存/⚠/テスト）

2) パッチ（新規は全文、既存は差分）

3) 動作確認手順（コマンド/期待結果）

