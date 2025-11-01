# Area/ライフスタイルLP自動生成（MDX+i18n）— PRD（MVP）

## 目的

自然検索流入と内覧予約CVを増やす。KPI: 週次新規LP数 / LP→予約CVR / 作成工数(分/本)



## ペルソナ

英語話者の在留/渡航予定者。釣り広告NG、確実性と英語サポート重視。



## 機能要件（MVP）

- YAML→MDX変換でLP生成（/app/(marketing)/[area]/page.mdx）

- Frontmatter: title, locale(en|ja), status(Draft|Published), publishAt(ISO), tags[], faq[{q,a}]

- 目次(TOC)自動生成、Viewing予約CTA、en/ja切替

- Draftは一覧に出さない、Publishedのみ公開



## 非機能/運用

- i18n拡張容易、ビルド時間最小、ESLint/TSエラーゼロ

- 計測: PV/CTAクリック/予約CVイベント



## 受入基準

- /shibuya でHero+TOC+CTA表示

- Draftは一覧非表示、Publishedのみ表示

- `pnpm dev` でビルドエラー無し（後日Next.js側を用意）



## リスク/代替

- 翻訳品質 → 当面は手動en/ja、後で自動化差し替え

- TOC/MDXプラグイン競合 → 最小構成から開始

