"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import type { WardData } from "@/types/ward"
import type { Language } from "@/lib/i18n"
import { t } from "@/lib/i18n"

interface AttractionsSectionProps {
  data: WardData
  language: Language
}

export function AttractionsSection({ data: ward, language }: AttractionsSectionProps) {
  if (!ward.attractions || ward.attractions.length === 0) {
    return null
  }

  return (
    <div className="section-card animate-on-scroll" style={{ marginTop: "2rem" }}>
      <div className="section-icon">
        <MapPin size={24} />
      </div>
      <h2 className="section-title">
        <MapPin size={20} />
        {language === "ja" ? "おすすめスポット" : "Must-Visit Spots"}
      </h2>
      
      <div className="area-images-grid">
        {ward.attractions.slice(0, 6).map((attraction, index) => (
          <div key={index}>
            <Image
              src={attraction.image}
              alt={t(attraction.name, language)}
              width={500}
              height={300}
              className="area-image"
              style={{ objectFit: "cover", height: "250px" }}
            />
            <h3 className="font-bold mt-2">{t(attraction.name, language)}</h3>
            <p className="area-image-caption">{t(attraction.description, language)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

