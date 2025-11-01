"use client"

import { Language } from "@/lib/i18n"

export function FaqSection({ language }: { language: Language }) {
  return (
    <section className="section-card animate-on-scroll">
      <h2 className="section-heading">
        {language === "ja" ? "よくある質問（FAQ）" : "Frequently Asked Questions"}
      </h2>

      <div className="space-y-4 text-[0.95rem] leading-relaxed text-gray-800">
        <div>
          <h3 className="font-semibold text-[#00c4a7]">
            {language === "ja"
              ? "世田谷区で外国人でも部屋を借りられますか？"
              : "Can non-Japanese residents rent in Setagaya?"}
          </h3>
          <p className="text-gray-700">
            {language === "ja"
              ? "英語対応の不動産会社や保証人不要プラン、家具付きプランなどが充実しており、外国籍でもスムーズに賃貸契約できます。"
              : "Yes. Many agencies offer English support, furnished options, and no-guarantor plans, making it straightforward for non-Japanese residents."}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#00c4a7]">
            {language === "ja"
              ? "渋谷や新宿までどのくらいで行けますか？"
              : "How long does it take to reach Shibuya or Shinjuku?"}
          </h3>
          <p className="text-gray-700">
            {language === "ja"
              ? "田園都市線・小田急線・京王線を利用すれば、渋谷・新宿ともにおおむね20〜30分圏内です。"
              : "Using the Den-en-toshi, Odakyu, or Keio lines, you can reach Shibuya and Shinjuku in roughly 20–30 minutes."}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#00c4a7]">
            {language === "ja"
              ? "どのエリアが人気ですか？"
              : "Which neighborhoods are most popular?"}
          </h3>
          <p className="text-gray-700">
            {language === "ja"
              ? "三軒茶屋・下北沢・二子玉川・成城学園前など、ライフスタイルに合わせて選べる多彩なエリアがあります。"
              : "Sangenjaya, Shimokitazawa, Futakotamagawa, and Seijogakuen-mae are favorites, each offering different vibes and conveniences."}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#00c4a7]">
            {language === "ja"
              ? "家賃の目安は？"
              : "What is the average rent?"}
          </h3>
          <p className="text-gray-700">
            {language === "ja"
              ? "1R〜1DKで12〜16万円前後、1LDKで18万円前後、2LDKで21万円前後が目安です（エリアや築年数により異なります）。"
              : "Studios to 1DKs average ¥120k–160k, 1LDKs around ¥180k, and 2LDKs about ¥210k, depending on location and building age."}
          </p>
        </div>
      </div>
    </section>
  )
}




