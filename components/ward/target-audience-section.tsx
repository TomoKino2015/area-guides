"use client"

import { Language } from "@/lib/i18n"

export function TargetAudienceSection({ language }: { language: Language }) {
  return (
    <section className="section-card animate-on-scroll">
      <h2 className="section-heading">
        {language === "ja"
          ? "世田谷区をおすすめする方"
          : "Who Setagaya Is Great For"}
      </h2>

      <ul className="list-disc pl-5 space-y-2 text-[0.95rem] leading-relaxed text-gray-800">
        <li>
          {language === "ja"
            ? "都心アクセス良好（渋谷・新宿まで20〜30分圏内）"
            : "Easy access to central Tokyo (Shibuya/Shinjuku in ~20–30 min)"}
        </li>
        <li>
          {language === "ja"
            ? "緑豊かな環境・静かな住宅街もありつつ、カフェや商店街の楽しさも欲しい"
            : "Quiet residential feel with parks, but still walkable cafés and shopping streets"}
        </li>
        <li>
          {language === "ja"
            ? "子育てしやすい落ち着いた生活圏を探しているファミリー"
            : "Families who want safe neighborhoods and parks"}
        </li>
        <li>
          {language === "ja"
            ? "外国人コミュニティや英語対応の病院・学校が欲しい"
            : "International residents who want English-friendly services and schools"}
        </li>
      </ul>
    </section>
  )
}



