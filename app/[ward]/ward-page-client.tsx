"use client"

import React from "react"
import { useState } from "react"
import type { WardData, Language } from "@/types/ward"
import { WardGuideLayout } from "@/components/ward/ward-guide-layout"
import { LanguageSwitcher } from "@/components/common/language-switcher"

type WardPageClientProps = {
  ward: WardData
}

export default function WardPageClient({ ward }: WardPageClientProps) {
  // 言語切り替え状態（"ja" / "en"）
  const [language, setLanguage] = useState<Language>("ja")

  // onLanguageChange は WardGuideLayout にそのまま渡す
  function handleLanguageChange(next: Language) {
    setLanguage(next)
  }

  return (
    <main style={{ padding: "1rem 1rem 4rem 1rem" }}>
      {/* 言語スイッチャー。これは単体で独立表示される */}
      <div style={{ maxWidth: "900px", margin: "0 auto 1rem auto" }}>
        <LanguageSwitcher
          language={language}
          onChange={handleLanguageChange}
        />
      </div>

      {/* ここがLP本体 */}
      <WardGuideLayout
        data={ward}
        language={language}
        onLanguageChange={handleLanguageChange}
        hideCta={false}
      />
    </main>
  )
}
