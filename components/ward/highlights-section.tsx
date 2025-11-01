"use client"

import { Star, Check } from "lucide-react"
import type { WardData } from "@/types/ward"
import type { Language } from "@/lib/i18n"
import { t } from "@/lib/i18n"

interface HighlightsSectionProps {
  data: WardData
  language: Language
}

export function HighlightsSection({ data: ward, language }: HighlightsSectionProps) {
  return (
    <div className="section-grid" style={{ marginTop: "2rem" }}>
      {ward.highlights.map((highlight, index) => (
        <div key={index} className="section-card animate-on-scroll">
          <div className="section-icon">
            <Star size={24} />
          </div>
          <h2 className="section-title">
            <Star size={20} />
            {t(highlight.title, language)}
          </h2>
          <div className="space-y-3">
            {highlight.points.map((point, pointIndex) => (
              <div key={pointIndex} className="content-item">
                <Check size={18} />
                {t(point, language)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

