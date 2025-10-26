"use client"

import { SetagayaAreaGuide } from "@/components/setagaya-guide"
import { SetagayaAreaGuideEnglish } from "@/components/setagaya-guide-english"
import { InternationalLivingSection } from "@/components/international-living-section"
import { InternationalLivingSectionEnglish } from "@/components/international-living-section-english"
import { EventsFestivalsSection } from "@/components/events-festivals-section"
import { EventsFestivalsSectionEnglish } from "@/components/events-festivals-section-english"
import { ConsolidatedCtaSection } from "@/components/consolidated-cta-section"
import { useState } from "react"
import { Globe } from "lucide-react"

export default function Home() {
  const [language, setLanguage] = useState<"ja" | "en">("ja")

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
          className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all"
        >
          <Globe size={18} color="#00c4a7" />
          <span>{language === "ja" ? "English" : "日本語"}</span>
        </button>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {language === "ja" ? (
          <>
            {/* 日本語コンテンツ */}
            <SetagayaAreaGuide hideCta={true} />
            <div className="mt-8">
              <InternationalLivingSection hideCta={true} />
            </div>
            <div className="mt-8">
              <EventsFestivalsSection hideCta={true} />
            </div>
            {/* 集約されたCTAセクション */}
            <div className="mt-8">
              <ConsolidatedCtaSection language="ja" />
            </div>
          </>
        ) : (
          <>
            {/* 英語コンテンツ */}
            <SetagayaAreaGuideEnglish hideCta={true} />
            <div className="mt-8">
              <InternationalLivingSectionEnglish hideCta={true} />
            </div>
            <div className="mt-8">
              <EventsFestivalsSectionEnglish hideCta={true} />
            </div>
            {/* 集約されたCTAセクション */}
            <div className="mt-8">
              <ConsolidatedCtaSection language="en" />
            </div>
          </>
        )}
      </div>
    </main>
  )
}
