"use client"

import { Language } from "@/lib/i18n"

export function TransportLinesSection({ language }: { language: Language }) {
  return (
    <section className="section-card animate-on-scroll">
      <h2 className="section-heading">
        {language === "ja" ? "主要路線と駅" : "Main Train Lines"}
      </h2>

      <div className="space-y-4 text-[0.95rem] leading-relaxed text-gray-800">

        <div>
          <div className="font-semibold text-[#00c4a7]">
            {language === "ja" ? "東急田園都市線" : "Tokyu Den-en-toshi Line"}
          </div>
          <div className="text-gray-700">
            {language === "ja"
              ? "渋谷、池尻大橋、三軒茶屋、駒沢大学、桜新町、用賀、二子玉川。渋谷〜二子玉川は約20分。"
              : "Shibuya → Sangenjaya → Futakotamagawa in ~20 min. Popular for young professionals."}
          </div>
        </div>

        <div>
          <div className="font-semibold text-[#00c4a7]">
            {language === "ja"
              ? "小田急小田原線"
              : "Odakyu Odawara Line"}
          </div>
          <div className="text-gray-700">
            {language === "ja"
              ? "下北沢、経堂、成城学園前など。新宿〜成城学園前は急行で約20分。"
              : "Shimokitazawa, Kyodo, Seijogakuen-mae. ~20 min to Shinjuku by express."}
          </div>
        </div>

        <div>
          <div className="font-semibold text-[#00c4a7]">
            {language === "ja" ? "京王線" : "Keio Line"}
          </div>
          <div className="text-gray-700">
            {language === "ja"
              ? "明大前〜千歳烏山エリアは新宿アクセス良好（約15分）。"
              : "Great access to Shinjuku (~15 min) from areas like Meidaimae and Chitose-Karasuyama."}
          </div>
        </div>
      </div>
    </section>
  )
}



