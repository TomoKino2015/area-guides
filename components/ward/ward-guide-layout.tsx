// components/ward/ward-guide-layout.tsx
import React from "react"
import type { WardData, Language } from "@/types/ward"

// まずはHeroSectionだけ残して他は使わない
import { HeroSection } from "@/components/ward/hero-section"

// 他セクションは一旦コメントアウト
// import { TargetAudienceSection } from "@/components/ward/target-audience-section"
// import { HighlightsSection } from "@/components/ward/highlights-section"
// import { HousingSection } from "@/components/ward/housing-section"
// import { ResidentVoicesSection } from "@/components/ward/resident-voices-section"
// import { PhotoHighlightsSection } from "@/components/ward/photo-highlights-section"
// import { TransportLinesSection } from "@/components/ward/transport-lines-section"
// import { InternationalSection } from "@/components/ward/international-section"
// import { ForeignFriendlySection } from "@/components/ward/foreign-friendly-section"
// import { EventsSection } from "@/components/ward/events-section"
// import { FaqSection } from "@/components/ward/faq-section"
// import { ConsolidatedCtaSection } from "@/components/consolidated-cta-section"

import { WardStyles } from "@/components/ward/ward-styles"

export interface WardGuideLayoutProps {
  data: WardData
  language: Language
  onLanguageChange?: (lang: Language) => void
  hideCta?: boolean
}

export function WardGuideLayout({
  data,
  language,
  onLanguageChange,
}: WardGuideLayoutProps) {
  if (!data) {
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        data is undefined in WardGuideLayout
      </div>
    )
  }

  return (
    <>
      <WardStyles />

      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          fontFamily: "system-ui, sans-serif",
          lineHeight: 1.5,
          padding: "2rem 1rem 4rem",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "green",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          WardGuideLayout render OK (stage1 ONLY HeroSection)
        </div>

        <section
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "2rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "green",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            STEP1 HeroSection
          </div>

          {/* HeroSection が爆発するならここで落ちる */}
          <HeroSection
            data={data}
            language={language}
            onLanguageChange={onLanguageChange}
          />
        </section>
      </article>
    </>
  )
}

export default WardGuideLayout
