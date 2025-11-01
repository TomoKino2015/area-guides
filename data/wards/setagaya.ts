import { WardData } from "@/types/ward";

/**
 * 世田谷区の完全なデータ - 元のsetagaya-guide.tsxの全コンテンツを含む
 */
export const setagayaData: WardData = {
  slug: "setagaya",
  name: {
    ja: "世田谷区",
    en: "Setagaya"
  },
  tagline: {
    ja: "緑とカフェと子育ての街。都心すぎず郊外すぎないちょうどいい生活圏。",
    en: "Green, family-friendly, relaxed — close to central Tokyo without the chaos."
  },
  overview: {
    ja: "東京23区の南西部に位置する世田谷区。都会の利便性と郊外の静けさが理想的に融合したエリアです。特に三軒茶屋、下北沢、二子玉川、成城学園前の4大エリアは、それぞれ異なる魅力を持ち、若手ビジネスパーソンからクリエイター、外国人居住者まで、多様な人々を惹きつけています。",
    en: "Setagaya sits on the west side of Tokyo's 23 wards, offering an ideal fusion of urban convenience and suburban serenity. Four major areas—Sangenjaya, Shimokitazawa, Futako-Tamagawa, and Seijo-Gakuen-mae—each have their own unique charm, attracting diverse residents from young professionals to creatives and international residents."
  },
  stats: {
    population: 940000,
    areaKm2: 58.05,
    densityPerKm2: 16200,
    foreignersRatioText: {
      ja: "外国人居住者が約2.5%を占め、国際的なコミュニティが形成されています",
      en: "International residents make up approximately 2.5% of the population, forming a vibrant international community"
    }
  },
  housing: {
    rentAverageNoteJa: "主要エリアの賃料相場は12万円〜16万円程度（1R/1K/1DK、35-40㎡）。エリアによって特徴が異なり、三軒茶屋・二子玉川はやや高め、下北沢・成城学園前・経堂は手頃な価格帯となっています。",
    rentAverageNoteEn: "Average rent in major areas ranges from ¥120,000 to ¥160,000 (1R/1K/1DK, 35-40㎡). Sangenjaya and Futako-Tamagawa tend to be slightly higher, while Shimokitazawa, Seijo-Gakuen-mae, and Kyodo offer more affordable options.",
    areas: [
      {
        name: { ja: "三軒茶屋", en: "Sangenjaya" },
        rent: "13-16万円",
        toShinjuku: "25分",
        toShibuya: "10分",
        incomeTarget: "500万円~"
      },
      {
        name: { ja: "下北沢", en: "Shimokitazawa" },
        rent: "12-15万円",
        toShinjuku: "15分",
        toShibuya: "7分",
        incomeTarget: "470万円~"
      },
      {
        name: { ja: "二子玉川", en: "Futako-Tamagawa" },
        rent: "13-16万円",
        toShinjuku: "35分",
        toShibuya: "20分",
        incomeTarget: "500万円~"
      },
      {
        name: { ja: "成城学園前", en: "Seijo-Gakuen-mae" },
        rent: "12-15万円",
        toShinjuku: "20分",
        toShibuya: "25分",
        incomeTarget: "470万円~"
      },
      {
        name: { ja: "経堂", en: "Kyodo" },
        rent: "11-14万円",
        toShinjuku: "20分",
        toShibuya: "22分",
        incomeTarget: "450万円~"
      },
      {
        name: { ja: "自由が丘", en: "Jiyugaoka" },
        rent: "14-17万円",
        toShinjuku: "30分",
        toShibuya: "15分",
        incomeTarget: "520万円~"
      }
    ],
    byRoomType: [
      {
        type: { ja: "ワンルーム", en: "Studio" },
        avgRent: "12.39万円",
        avgSize: "25.2㎡",
        features: { ja: "単身者向け・コンパクト設計", en: "For singles, compact design" }
      },
      {
        type: { ja: "1K", en: "1K" },
        avgRent: "12.88万円",
        avgSize: "28.5㎡",
        features: { ja: "効率的な空間利用", en: "Efficient space utilization" }
      },
      {
        type: { ja: "1DK", en: "1DK" },
        avgRent: "14.57万円",
        avgSize: "33.9㎡",
        features: { ja: "カップル向け・キッチン独立", en: "For couples, separate kitchen" }
      },
      {
        type: { ja: "1LDK", en: "1LDK" },
        avgRent: "18.08万円",
        avgSize: "40.6㎡",
        features: { ja: "カップル向け・広めのリビング", en: "For couples, spacious living room" }
      },
      {
        type: { ja: "2K", en: "2K" },
        avgRent: "12.86万円",
        avgSize: "38.4㎡",
        features: { ja: "小家族向け・収納スペース充実", en: "For small families, ample storage" }
      },
      {
        type: { ja: "2DK", en: "2DK" },
        avgRent: "12.98万円",
        avgSize: "44.3㎡",
        features: { ja: "小家族向け・キッチン独立型", en: "For small families, separate kitchen" }
      },
      {
        type: { ja: "2LDK", en: "2LDK" },
        avgRent: "21.00万円",
        avgSize: "54.7㎡",
        features: { ja: "ファミリー向け・広々リビング", en: "For families, spacious living area" }
      }
    ]
  },
  highlights: [
    {
      title: {
        ja: "交通アクセス",
        en: "Transportation"
      },
      points: [
        {
          ja: "渋谷まで7〜20分、新宿まで15〜35分の好立地",
          en: "7-20 minutes to Shibuya, 15-35 minutes to Shinjuku"
        },
        {
          ja: "東急田園都市線、小田急小田原線、京王線など複数路線が利用可能",
          en: "Multiple train lines including Tokyu Den-en-toshi, Odakyu, and Keio"
        },
        {
          ja: "都心へのアクセスと住環境のバランスが絶妙",
          en: "Perfect balance between central Tokyo access and residential comfort"
        }
      ]
    },
    {
      title: {
        ja: "生活環境",
        en: "Living Environment"
      },
      points: [
        {
          ja: "緑豊かな公園が多数（等々力渓谷、砧公園、駒沢オリンピック公園など）",
          en: "Abundant green spaces (Todoroki Valley, Kinuta Park, Komazawa Olympic Park)"
        },
        {
          ja: "個性的な商店街と大型商業施設の両方が充実",
          en: "Mix of unique shopping streets and large commercial facilities"
        },
        {
          ja: "家族向けから単身者向けまで多様な住宅タイプ",
          en: "Diverse housing options from family homes to singles apartments"
        }
      ]
    },
    {
      title: {
        ja: "文化・エンターテインメント",
        en: "Culture & Entertainment"
      },
      points: [
        {
          ja: "下北沢のサブカルチャー、三軒茶屋の若者文化",
          en: "Shimokitazawa's subculture and Sangenjaya's youth scene"
        },
        {
          ja: "ライブハウス、劇場、ギャラリーが点在",
          en: "Live music venues, theaters, and galleries throughout"
        },
        {
          ja: "年間を通じて様々なイベントやフェスティバル開催",
          en: "Year-round events and festivals"
        }
      ]
    }
  ],
  international: {
    points: [
      {
        ja: "清泉インターナショナルスクール、セントメリーズインターナショナルスクール、ブリティッシュスクール東京昭和校など教育施設が充実",
        en: "International schools including Seisen, St. Mary's, and British School in Tokyo Showa Campus"
      },
      {
        ja: "東京医療センター、二子玉川ライズクリニックなど英語・中国語対応の医療施設",
        en: "Medical facilities with English and Chinese support including Tokyo Medical Center and Futako-Tamagawa Rise Clinic"
      },
      {
        ja: "英語対応カフェ・レストランが多数（三軒茶屋、下北沢、二子玉川エリア）",
        en: "Many English-friendly cafes and restaurants (Sangenjaya, Shimokitazawa, Futako-Tamagawa)"
      },
      {
        ja: "成城石井など輸入食材が豊富なスーパーマーケット",
        en: "Supermarkets with abundant imported products like Seijo Ishii"
      },
      {
        ja: "世田谷区国際交流センターで定期的な交流イベント開催",
        en: "Regular international exchange events at Setagaya International Exchange Center"
      },
      {
        ja: "家具付き物件、英語対応可能な管理会社・保証人不要プランも増加中",
        en: "Growing availability of furnished apartments, English-speaking property managers, and no-guarantor plans"
      }
    ]
  },
  events: [
    {
      name: {
        ja: "世田谷ボロ市",
        en: "Setagaya Boroichi (Flea Market)"
      },
      description: {
        ja: "400年以上の歴史を持つ伝統的な市。古着や骨董品、食べ物の屋台など約700店舗が軒を連ねます。英語の案内マップも用意されています。",
        en: "A traditional market with over 400 years of history. About 700 stalls offer vintage clothing, antiques, and food. English guide maps are available."
      },
      month: 1,
      category: "festival"
    },
    {
      name: {
        ja: "桜新町ねぶた祭り",
        en: "Sakura-Shinmachi Nebuta Festival"
      },
      description: {
        ja: "青森の伝統的なねぶた祭りを東京で体験できる貴重なイベント。外国人参加者も多く、一緒に踊ることができます。",
        en: "Experience Aomori's traditional Nebuta Festival in Tokyo. Many international participants join and dance together."
      },
      month: 8,
      category: "festival"
    },
    {
      name: {
        ja: "三茶de大道芸",
        en: "Sancha Street Performance Festival"
      },
      description: {
        ja: "国内外のパフォーマーによる大道芸が三軒茶屋の街中で繰り広げられます。言葉の壁を超えて楽しめるイベントです。",
        en: "Street performers from Japan and abroad showcase their talents throughout Sangenjaya. An event that transcends language barriers."
      },
      month: 10,
      category: "festival"
    },
    {
      name: {
        ja: "世田谷国際交流カフェ",
        en: "Setagaya International Exchange Cafe"
      },
      description: {
        ja: "外国人と日本人が自由に交流できるカフェスタイルのイベント。英語、中国語、韓国語など様々な言語で会話を楽しめます。毎月第2日曜日 14:00-16:00開催。",
        en: "A casual cafe-style event where international residents and Japanese locals can freely interact. Conversations in English, Chinese, Korean, and other languages. Held on the 2nd Sunday of every month, 14:00-16:00."
      },
      month: 0,
      category: "community"
    },
    {
      name: {
        ja: "下北沢カレーフェスティバル",
        en: "Shimokitazawa Curry Festival"
      },
      description: {
        ja: "下北沢の個性的なカレー店が集結する食のイベント。各店舗の自慢のカレーを食べ比べできます。",
        en: "A food event featuring Shimokitazawa's unique curry restaurants. Sample and compare signature curries from various shops."
      },
      month: 10,
      category: "food"
    }
  ],
  attractions: [
    {
      name: {
        ja: "下北沢",
        en: "Shimokitazawa"
      },
      description: {
        ja: "個性的な店が並ぶサブカルチャーの発信地。古着屋、ライブハウス、カフェが集まり、クリエイティブな雰囲気が魅力。",
        en: "A hub of subculture with unique shops. Vintage clothing stores, live music venues, and cafes create a creative atmosphere."
      },
      category: "shopping",
      image: "/images/shimokitazawa.webp"
    },
    {
      name: {
        ja: "二子玉川",
        en: "Futako-Tamagawa"
      },
      description: {
        ja: "都会と自然が調和する住環境。二子玉川ライズなどの大型商業施設と多摩川の自然が共存。",
        en: "Where urban living meets nature. Large commercial facilities like Futako-Tamagawa Rise coexist with the Tamagawa River's natural beauty."
      },
      category: "shopping",
      image: "/images/futakotamagawa.webp"
    },
    {
      name: {
        ja: "等々力渓谷",
        en: "Todoroki Valley"
      },
      description: {
        ja: "東京23区内唯一の渓谷。約1kmの遊歩道で都会の喧騒を忘れる自然散策が楽しめます。",
        en: "The only valley within Tokyo's 23 wards. A 1km walking path offers a natural escape from the urban bustle."
      },
      category: "park",
      image: "/images/todoroki-valley.jpeg"
    },
    {
      name: {
        ja: "砧公園",
        en: "Kinuta Park"
      },
      description: {
        ja: "広大な芝生広場と桜の名所。春には家族連れで賑わい、ピクニックやスポーツを楽しめます。",
        en: "Expansive lawn areas and famous cherry blossom spot. Popular with families in spring for picnics and sports."
      },
      category: "park",
      image: "/images/kinuta-park.webp"
    },
    {
      name: {
        ja: "セント・メアリーズ・インターナショナルスクール",
        en: "St. Mary's International School"
      },
      description: {
        ja: "世田谷区にある国際教育施設。外国人家族にとって重要な教育拠点となっています。",
        en: "An international education facility in Setagaya. A crucial educational hub for international families."
      },
      category: "culture",
      image: "/images/st-marys.jpeg"
    },
    {
      name: {
        ja: "三茶de大道芸会場",
        en: "Sancha Street Performance Venue"
      },
      description: {
        ja: "毎年10月に開催される大道芸フェスティバルの会場。国内外のパフォーマーが集結します。",
        en: "Venue for the annual street performance festival in October. Performers from around the world gather here."
      },
      category: "culture",
      image: "/images/daidogei.jpeg"
    },
    {
      name: {
        ja: "世田谷国際交流センター",
        en: "Setagaya International Exchange Center"
      },
      description: {
        ja: "国際交流イベントや言語交換会が定期的に開催される施設。外国人居住者のコミュニティ拠点。",
        en: "Facility hosting regular international exchange events and language exchanges. A community hub for international residents."
      },
      category: "culture",
      image: "/images/exchange.jpeg"
    }
  ],
  images: {
    hero: "/images/setagaya-map.png",
    map: "/images/setagaya-map.png"
  }
};

