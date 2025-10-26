"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, MessageCircle, Home, ShoppingCart, Utensils, Users, Check, User } from "lucide-react"

export function InternationalLivingSection({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <div className="section-card animate-on-scroll">
      <div className="section-icon">
        <Globe size={24} />
      </div>
      <h2 className="section-title">
        <Globe size={20} />
        外国人向け生活環境ガイド
      </h2>
      <p className="mb-4">
        世田谷区は東京の中でも外国人居住者に人気のエリアです。言語サポート、国際的なコミュニティ、そして充実した生活環境が整っています。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <Home className="text-[#00c4a7]" size={18} />
            外国人向け物件の特徴
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>家具付き物件が多数あり、すぐに生活をスタートできます</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>英語対応可能な管理会社・大家さんの物件も増加中</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>保証人不要プランや多言語サポート付きの契約オプションあり</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/rent?area=setagaya&furnished=true"
                className="cta-button inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                家具付き物件を見る
              </Link>
            </div>
          )}
        </div>

        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <ShoppingCart className="text-[#00c4a7]" size={18} />
            国際的な買い物環境
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>成城石井、ナチュラルローソンなど輸入食材が豊富なスーパー</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>二子玉川ライズには国際ブランドショップが多数</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>下北沢には個性的な輸入雑貨店やビンテージショップが集中</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/area-guide/setagaya/shopping"
                className="cta-button inline-flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                ショッピング情報
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <Utensils className="text-[#00c4a7]" size={18} />
            英語対応レストラン＆カフェ
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>英語メニュー完備のカフェが三軒茶屋・下北沢に多数</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>各国料理（イタリアン、メキシカン、タイ料理など）のレストラン</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>外国人シェフが経営する本格的な料理店も点在</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/area-guide/setagaya/dining"
                className="cta-button inline-flex items-center gap-2"
              >
                <Utensils size={16} />
                飲食店情報
              </Link>
            </div>
          )}
        </div>

        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <Users className="text-[#00c4a7]" size={18} />
            国際コミュニティ
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>定期的な国際交流イベントが各地域で開催</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>外国人向け日本語教室や文化体験プログラム</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>多言語対応の区役所窓口サービス（英語・中国語など）</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/community/international"
                className="cta-button inline-flex items-center gap-2"
              >
                <Users size={16} />
                コミュニティ情報
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-author">
          <User size={18} />
          Emma（イギリス出身、二子玉川在住3年）
        </div>
        <p>
          "初めは言葉の壁に不安がありましたが、アットハースのサポートで理想的な物件を見つけることができました。二子玉川は外国人にも住みやすく、英語対応のお店も多いので安心です。多摩川沿いのジョギングが日課になっています。"
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4">外国人向け物件の一例</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="家具付きアパートメントの例"
              width={400}
              height={250}
              className="rounded-lg object-cover"
            />
            <p className="text-sm text-center mt-2 text-gray-600">二子玉川の家具付き1LDKアパートメント</p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="外国人に人気のキッチン設備"
              width={400}
              height={250}
              className="rounded-lg object-cover"
            />
            <p className="text-sm text-center mt-2 text-gray-600">外国人に人気の広めのキッチン設備</p>
          </div>
        </div>
      </div>

      {!hideCta && (
        <div className="mt-8 text-center">
          <Link
            href="https://www.athearth.com/contact/foreigner-support"
            className="bg-[#00c4a7] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#00a38c] transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            外国人向け物件相談（英語対応可）
          </Link>
        </div>
      )}
    </div>
  )
}
