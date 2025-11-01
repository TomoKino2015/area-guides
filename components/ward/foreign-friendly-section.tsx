"use client"

import { Language } from "@/lib/i18n"

export function ForeignFriendlySection({ language }: { language: Language }) {
  return (
    <section className="section-card animate-on-scroll">
      <h2 className="section-heading">
        {language === "ja" ? "外国人も暮らしやすいポイント" : "Foreign Friendly Features"}
      </h2>

      <div className="space-y-4 text-[0.95rem] leading-relaxed text-gray-800">
        <div>
          <div className="font-semibold text-[#00c4a7]">
            {language === "ja" ? "英語対応の賃貸サポート" : "English-Friendly Leasing"}
          </div>
          <p className="text-gray-700">
            {language === "ja"
              ? "家具付き・保証人不要プランなど、外国籍でも借りやすい賃貸サービスが充実。"
              : "Furnished and no-guarantor plans are widely available, making leasing easier for non-Japanese residents."}
          </p>
        </div>

        <div>
          <div className="font-semibold text-[#00c4a7]">
            {language === "ja" ? "英語で相談できる窓口" : "English Support Desks"}
          </div>
          <p className="text-gray-700">
            {language === "ja"
              ? "英語対応の仲介会社や入居手続きサポートがあり、初めての日本生活でも安心。"
              : "Real-estate agencies and move-in concierge services offer English support for smooth relocation."}
          </p>
        </div>

        <div>
          <div className="font-semibold text-[#00c4a7]">
            {language === "ja" ? "コミュニティとのつながり" : "Community Connections"}
          </div>
          <p className="text-gray-700">
            {language === "ja"
              ? "インターナショナルスクール・英語対応病院・ママグループなど、暮らしを支えるコミュニティが揃っています。"
              : "International schools, English-speaking clinics, and expat parent groups help you settle quickly."}
          </p>
        </div>
      </div>
    </section>
  )
}




