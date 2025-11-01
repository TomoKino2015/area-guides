"use client"

import Image from "next/image"
import { Language } from "@/lib/i18n"

export function PhotoHighlightsSection({ language }: { language: Language }) {
  return (
    <section className="section-card animate-on-scroll">
      <h2 className="section-heading">
        {language === "ja" ? "主要エリアの風景" : "Neighborhood Snapshots"}
      </h2>

      <div className="area-images-grid">
        <div className="area-image-block">
          <Image
            src="/images/shimokitazawa.webp"
            alt="Shimokitazawa street"
            width={600}
            height={400}
            className="area-image"
          />
          <div className="area-image-caption">
            <div className="font-semibold">
              {language === "ja" ? "下北沢の商店街" : "Shimokitazawa streets"}
            </div>
            <div className="text-xs text-gray-600">
              {language === "ja"
                ? "個性的な店が並ぶ文化の発信地"
                : "Independent shops, vintage, live houses, subculture energy"}
            </div>
          </div>
        </div>

        <div className="area-image-block">
          <Image
            src="/images/futakotamagawa.webp"
            alt="Futakotamagawa riverside"
            width={600}
            height={400}
            className="area-image"
          />
          <div className="area-image-caption">
            <div className="font-semibold">
              {language === "ja" ? "二子玉川の多摩川沿い" : "Futakotamagawa riverside"}
            </div>
            <div className="text-xs text-gray-600">
              {language === "ja"
                ? "都会と自然が調和する住環境"
                : "Riverfront cycling, upscale shopping, very livable for families"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



