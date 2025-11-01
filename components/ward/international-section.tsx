"use client"

import { Globe, Check } from "lucide-react"
import type { WardData } from "@/types/ward"
import type { Language } from "@/lib/i18n"
import { t } from "@/lib/i18n"

interface InternationalSectionProps {
  data: WardData
  language: Language
}

export function InternationalSection({ data: ward, language }: InternationalSectionProps) {
  if (!ward.international || ward.international.points.length === 0) {
    return null
  }

  return (
    <div className="section-card animate-on-scroll" style={{ marginTop: "2rem" }}>
      <div className="section-icon">
        <Globe size={24} />
      </div>
      <h2 className="section-title">
        <Globe size={20} />
        {language === "ja" ? "外国人向け生活環境" : "International Living Environment"}
      </h2>
      
      <p className="mb-4">
        {language === "ja"
          ? `${t(ward.name, language)}は東京の中でも外国人居住者に人気のエリアです。言語サポート、国際的なコミュニティ、そして充実した生活環境が整っています。`
          : `${t(ward.name, language)} is a popular area for international residents in Tokyo, offering language support, an international community, and a well-developed living environment.`}
      </p>

      <div className="space-y-3">
        {ward.international.points.map((point, index) => (
          <div key={index} className="content-item">
            <Check size={18} />
            {t(point, language)}
          </div>
        ))}
      </div>
    </div>
  )
}

