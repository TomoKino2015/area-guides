# 設計サマリ（A4 1枚）

## スタック

Next.js(Typescript, App Router, MDX), Zod, （将来）Meilisearch, Vitest/Cypress



## データ/ファイル

/content/area/*.yml → スキーマ検証 → /app/(marketing)/[area]/page.mdx を生成

frontmatter: { title, locale, status, publishAt, tags, faq[] }



## 境界

当面は静的生成。将来API化で公開スケジュール/索引拡張。



## セキュリティ/権限

admin=true でPreview。公開判定は status + publishAt。



## 可観測性

CTAクリック / 予約CV をイベントで計測。



## テスト

Zodユニット、MDX生成インテグレーション、E2E最小（/shibuya表示）。



## リリース

Draft→Publishedの段階公開。Feature Flagで機能ON/OFF。

