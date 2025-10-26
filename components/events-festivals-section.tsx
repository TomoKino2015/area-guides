"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Music, Sparkles, Cherry, Star } from "lucide-react"

export function EventsFestivalsSection({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <div className="section-card animate-on-scroll">
      <div className="section-icon">
        <Calendar size={24} />
      </div>
      <h2 className="section-title">
        <Calendar size={20} />
        国際交流イベント・お祭り情報
      </h2>
      <p className="mb-4">
        世田谷区では年間を通じて様々な国際交流イベントや伝統的なお祭りが開催されています。地域コミュニティに参加したり、日本文化を体験したりする絶好の機会です。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Sparkles size={18} />
            季節のお祭り
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">世田谷ボロ市</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎年1月15-16日、12月15-16日</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>世田谷区世田谷4-1-1（世田谷線 宮の坂駅）</span>
              </div>
              <p className="text-sm">
                400年以上の歴史を持つ伝統的な市。古着や骨董品、食べ物の屋台など約700店舗が軒を連ねます。英語の案内マップも用意されています。
              </p>
            </div>

            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">三茶de大道芸</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎年10月中旬の週末</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>三軒茶屋駅周辺</span>
              </div>
              <p className="text-sm">
                国内外のパフォーマーによる大道芸が三軒茶屋の街中で繰り広げられます。言葉の壁を超えて楽しめるイベントです。
                <a
                  href="https://arttown.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4a7] hover:underline ml-1"
                >
                  詳細はこちら
                </a>
              </p>
            </div>

            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">桜新町ねぶた祭り</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎年8月上旬</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>桜新町駅周辺</span>
              </div>
              <p className="text-sm">
                青森の伝統的なねぶた祭りを東京で体験できる貴重なイベント。外国人参加者も多く、一緒に踊ることができます。
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Users size={18} />
            国際交流イベント
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">世田谷国際交流カフェ</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎月第2日曜日 14:00-16:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>世田谷区国際交流センター（三軒茶屋）</span>
              </div>
              <p className="text-sm">
                外国人と日本人が自由に交流できるカフェスタイルのイベント。英語、中国語、韓国語など様々な言語で会話を楽しめます。
                <a
                  href="https://komazawa-comorevi.com/magazine/4628/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4a7] hover:underline ml-1"
                >
                  詳細はこちら
                </a>
              </p>
            </div>

            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">Language Exchange Meetup</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎週金曜日 19:00-21:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>下北沢のカフェ（詳細はウェブサイトで確認）</span>
              </div>
              <p className="text-sm">
                言語交換を目的としたカジュアルな集まり。日本語を学びたい外国人と英語などを学びたい日本人が集まります。
              </p>
            </div>

            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">世田谷インターナショナルフェスティバル</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎年11月第3週末</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>世田谷区民会館（世田谷区世田谷4-21-27）</span>
              </div>
              <p className="text-sm">
                世界各国の文化紹介、料理、パフォーマンス、ワークショップなどが楽しめる国際交流の祭典。多言語対応のボランティアも常駐。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Cherry size={18} />
            季節のイベント
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">桜の花見</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>3月下旬〜4月上旬</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>砧公園、羽根木公園、等々力渓谷など</span>
              </div>
              <p className="text-sm">
                日本の春の風物詩。世田谷区内には桜の名所が多数あり、外国人向けの花見ガイドツアーも開催されています。
                <a
                  href="https://www.gltjp.com/ja/directory/item/10118/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4a7] hover:underline ml-1"
                >
                  詳細はこちら
                </a>
              </p>
            </div>

            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">紅葉狩り</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>11月中旬〜12月上旬</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>等々力渓谷、砧公園</span>
              </div>
              <p className="text-sm">
                秋の紅葉を楽しむ日本の伝統。特に等々力渓谷は都心にいながら自然の紅葉を楽しめる貴重なスポットです。
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Music size={18} />
            文化体験プログラム
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">外国人のための茶道体験</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎月第1土曜日 13:00-15:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>成城ホール（成城学園前駅）</span>
              </div>
              <p className="text-sm">
                英語での説明付き茶道体験。日本の伝統文化を気軽に体験できるプログラムです。要予約。
              </p>
            </div>

            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">Cooking Together</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>毎月第3土曜日 11:00-14:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>三軒茶屋コミュニティキッチン</span>
              </div>
              <p className="text-sm">
                外国人と日本人が一緒に料理を作るイベント。毎回異なる国の料理を学びます。英語と日本語の両方で進行。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Star className="text-[#00c4a7]" size={18} />
          イベント写真
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Image
              src="/images/daidogei.jpeg"
              alt="三茶de大道芸の様子"
              width={300}
              height={200}
              className="rounded-lg object-cover h-[200px]"
            />
            <p className="text-sm text-center mt-2 text-gray-600">三茶de大道芸のパフォーマンス</p>
          </div>
          <div>
            <Image
              src="/images/exchange.jpeg"
              alt="国際交流カフェの様子"
              width={300}
              height={200}
              className="rounded-lg object-cover h-[200px]"
            />
            <p className="text-sm text-center mt-2 text-gray-600">世田谷での文化交流イベント</p>
          </div>
          <div>
            <Image
              src="/images/kinuta-park.webp"
              alt="砧公園の桜"
              width={300}
              height={200}
              className="rounded-lg object-cover h-[200px]"
            />
            <p className="text-sm text-center mt-2 text-gray-600">砧公園の美しい桜並木</p>
          </div>
        </div>
      </div>

      {!hideCta && (
        <div className="mt-8 text-center">
          <Link
            href="https://www.athearth.com/events/calendar"
            className="bg-[#00c4a7] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#00a38c] transition-colors inline-flex items-center gap-2"
          >
            <Calendar size={20} />
            イベントカレンダーを見る
          </Link>
        </div>
      )}
    </div>
  )
}
