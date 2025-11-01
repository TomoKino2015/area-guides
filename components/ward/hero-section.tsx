import React from "react"
import type { WardData, Language } from "@/types/ward"

export function HeroSection({
  data,
  language,
  onLanguageChange,
}: {
  data: WardData
  language: Language
  onLanguageChange?: (lang: Language) => void
}) {
  // ✅ 言語オブジェクト対応: {ja, en} の場合でも安全にテキストを抽出
  const t = (obj: any) =>
    typeof obj === "string" ? obj : obj?.[language] || obj?.ja || ""

  return (
    <section
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {t(data.title)}
      </h1>
      <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
        {t(data.description)}
      </p>
      <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        {t(data.updatedAt)}
      </div>

      <button
        onClick={() =>
          onLanguageChange?.(language === "ja" ? "en" : "ja")
        }
        style={{
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "0.4rem 0.8rem",
          cursor: "pointer",
          fontSize: "0.9rem",
        }}
      >
        {language === "ja" ? "English" : "日本語"}
      </button>
    </section>
  )
}

export default HeroSection