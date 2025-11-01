"use client"

import { Globe } from "lucide-react"
import type { Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-4 right-4 z-10">
      <button
        onClick={() => onLanguageChange(language === "ja" ? "en" : "ja")}
        className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all"
        aria-label={language === "ja" ? "Switch to English" : "日本語に切り替える"}
      >
        <Globe size={18} color="#00c4a7" />
        <span>{language === "ja" ? "English" : "日本語"}</span>
      </button>
    </div>
  )
}



