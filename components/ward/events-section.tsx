"use client"

import { Calendar, MapPin } from "lucide-react"
import type { WardData } from "@/types/ward"
import type { Language } from "@/lib/i18n"
import { t, getMonthName } from "@/lib/i18n"

interface EventsSectionProps {
  data: WardData
  language: Language
}

export function EventsSection({ data: ward, language }: EventsSectionProps) {
  if (!ward.events || ward.events.length === 0) {
    return null
  }

  return (
    <div className="section-card animate-on-scroll" style={{ marginTop: "2rem" }}>
      <div className="section-icon">
        <Calendar size={24} />
      </div>
      <h2 className="section-title">
        <Calendar size={20} />
        {language === "ja" ? "年間イベント・お祭り" : "Annual Events & Festivals"}
      </h2>
      
      <div className="space-y-4">
        {ward.events.map((event, index) => (
          <div key={index} className="border-l-4 border-[#00c4a7] pl-4 py-2">
            <h3 className="font-bold text-lg">{t(event.name, language)}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar size={14} />
              <span>{getMonthName(event.month, language)}</span>
            </div>
            <p className="text-sm">{t(event.description, language)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

