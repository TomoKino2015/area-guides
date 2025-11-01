"use client"

import { DollarSign, Home, Info } from "lucide-react"
import type { WardData } from "@/types/ward"
import type { Language } from "@/lib/i18n"
import { t } from "@/lib/i18n"

interface HousingSectionProps {
  data: WardData
  language: Language
}

export function HousingSection({ data: ward, language }: HousingSectionProps) {
  if (!ward.housing.areas && !ward.housing.byRoomType) {
    return null
  }

  return (
    <>
      {/* 主要エリアの賃料相場 */}
      {ward.housing.areas && ward.housing.areas.length > 0 && (
        <div className="section-card animate-on-scroll" style={{ marginTop: "2rem" }}>
          <div className="section-icon">
            <DollarSign size={24} />
          </div>
          <h2 className="section-title">
            <DollarSign size={20} />
            {language === "ja" ? "主要エリアの賃料相場と特徴" : "Rent by Major Area"}
          </h2>
          <p className="content-item">
            <Info size={18} />
            {language === "ja" 
              ? "データ基準: 35-40㎡、1ルーム・1K・1DKの平均値（2025年2月時点）" 
              : "Data: 35-40㎡, Studio/1K/1DK average (Feb 2025)"}
          </p>
          <table className="area-table">
            <thead>
              <tr>
                <th>{language === "ja" ? "エリア" : "Area"}</th>
                <th>{language === "ja" ? "賃料" : "Rent"}</th>
                <th>{language === "ja" ? "新宿まで" : "To Shinjuku"}</th>
                <th>{language === "ja" ? "渋谷まで" : "To Shibuya"}</th>
                <th>{language === "ja" ? "年収目安" : "Income Target"}</th>
              </tr>
            </thead>
            <tbody>
              {ward.housing.areas.map((area, index) => (
                <tr key={index}>
                  <td>{t(area.name, language)}</td>
                  <td>{area.rent}</td>
                  <td>{area.toShinjuku}</td>
                  <td>{area.toShibuya}</td>
                  <td>{area.incomeTarget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 住宅タイプと平均家賃 */}
      {ward.housing.byRoomType && ward.housing.byRoomType.length > 0 && (
        <div className="section-card animate-on-scroll" style={{ marginTop: "2rem" }}>
          <div className="section-icon">
            <Home size={24} />
          </div>
          <h2 className="section-title">
            <Home size={20} />
            {language === "ja" ? "住宅タイプと平均家賃" : "Rent by Room Type"}
          </h2>
          <p className="content-item">
            <Info size={18} />
            {language === "ja"
              ? `データ基準: ${t(ward.name, language)}全体の平均、2025年2月現在、管理費込み`
              : `Data: ${t(ward.name, language)} average, Feb 2025, including management fees`}
          </p>
          <table className="area-table">
            <thead>
              <tr>
                <th>{language === "ja" ? "住宅タイプ" : "Room Type"}</th>
                <th>{language === "ja" ? "平均月額家賃" : "Avg Monthly Rent"}</th>
                <th>{language === "ja" ? "平均面積" : "Avg Size"}</th>
                <th>{language === "ja" ? "特徴" : "Features"}</th>
              </tr>
            </thead>
            <tbody>
              {ward.housing.byRoomType.map((room, index) => (
                <tr key={index}>
                  <td>{t(room.type, language)}</td>
                  <td>{room.avgRent}</td>
                  <td>{room.avgSize}</td>
                  <td>{t(room.features, language)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

