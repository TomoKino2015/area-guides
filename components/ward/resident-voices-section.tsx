"use client"

import { Language } from "@/lib/i18n"

export function ResidentVoicesSection({ language }: { language: Language }) {
  return (
    <section className="section-card animate-on-scroll">
      <h2 className="section-heading">
        {language === "ja" ? "住民の声" : "What Residents Say"}
      </h2>

      <div className="space-y-4 text-[0.95rem] leading-relaxed text-gray-800">

        <div>
          <div className="font-semibold">
            {language === "ja"
              ? "三軒茶屋在住 Sarah（28歳・IT企業勤務）"
              : "Sarah, 28 (Tech), lives in Sangenjaya"}
          </div>
          <p className="italic text-gray-700">
            {language === "ja"
              ? "「渋谷まで10分という便利さが決め手でした。休日は世田谷公園でヨガをしたり、キャロットタワーの図書館で過ごしたり。都会なのに意外とゆとりのある暮らしができています。」"
              : `"Being 10 minutes from Shibuya was the deciding factor. On weekends I do yoga in Setagaya Park or read at the Carrot Tower library. It feels urban, but not stressful."`}
          </p>
        </div>

        <div>
          <div className="font-semibold">
            {language === "ja"
              ? "下北沢在住 Tom（32歳・フリーランス）"
              : "Tom, 32 (Freelance), lives in Shimokitazawa"}
          </div>
          <p className="italic text-gray-700">
            {language === "ja"
              ? "「新宿・渋谷どちらにもアクセスが良く、家賃も手頃です。カフェでの作業が多い仕事なので、クリエイティブな雰囲気の下北沢はぴったり。」"
              : `"Great access to both Shinjuku and Shibuya, and rent is reasonable. I work from cafes a lot, so Shimokita's creative vibe just fits me."`}
          </p>
        </div>

        <div>
          <div className="font-semibold">
            {language === "ja"
              ? "二子玉川在住 Maria（35歳・マーケティング）"
              : "Maria, 35 (Marketing), lives in Futakotamagawa"}
          </div>
          <p className="italic text-gray-700">
            {language === "ja"
              ? "「多摩川沿いのサイクリングが週末の楽しみです。ライズが便利すぎて、生活のほとんどがこのエリアで完結します。」"
              : `"Weekend cycling by the river is my reset. With Futakotamagawa Rise so close, I barely need to leave the neighborhood."`}
          </p>
        </div>

        <div>
          <div className="font-semibold">
            {language === "ja"
              ? "成城学園前在住 James（45歳・大学教授）"
              : "James, 45 (Professor), lives near Seijogakuen-mae"}
          </div>
          <p className="italic text-gray-700">
            {language === "ja"
              ? "「静かで緑が多く、教育環境が整っているので家族で安心して暮らせます。インターナショナルスクールも近いのがありがたい。」"
              : `"Calm, green, very family-friendly. Access to international schools nearby made it an easy choice for us."`}
          </p>
        </div>

      </div>
    </section>
  )
}



