import type { WardData } from "@/types/ward"

/**
 * テンプレート: 新しい区のデータファイル
 * 
 * 使い方:
 * 1. このファイルをコピーして、区名でリネーム（例: shibuya.ts）
 * 2. 以下のデータを実際の情報で置き換える
 * 3. data/index.ts にインポートして追加
 */

export const templateData: WardData = {
  slug: "your-ward-slug", // 例: "shibuya", "shinjuku"
  
  name: {
    ja: "区名",
    en: "Ward Name in English"
  },

  tagline: {
    ja: "この区を一言で表すキャッチコピー",
    en: "A catchy tagline for this ward"
  },

  overview: {
    ja: "区の概要を2-3文で記述。主要な特徴、位置、魅力などを含める。",
    en: "Overview of the ward in 2-3 sentences. Include main features, location, and attractions."
  },

  stats: {
    population: 0,        // 人口
    areaKm2: 0,          // 面積（km²）
    densityPerKm2: 0,    // 人口密度（人/km²）
    foreignersRatioText: {
      ja: "外国人居住者の割合や特徴",
      en: "Information about foreign residents"
    }
  },

  housing: {
    rentAverageNoteJa: "賃料相場の説明（日本語）。主要エリア、物件タイプ、価格帯などを含める。",
    rentAverageNoteEn: "Rent information (English). Include main areas, property types, and price ranges."
  },

  highlights: [
    {
      title: { 
        ja: "カテゴリー名1（例: 交通アクセス）", 
        en: "Category Name 1 (e.g., Transportation)" 
      },
      points: [
        { 
          ja: "特徴・メリット1", 
          en: "Feature/Benefit 1" 
        },
        { 
          ja: "特徴・メリット2", 
          en: "Feature/Benefit 2" 
        },
        { 
          ja: "特徴・メリット3", 
          en: "Feature/Benefit 3" 
        }
      ]
    },
    {
      title: { 
        ja: "カテゴリー名2（例: 生活環境）", 
        en: "Category Name 2 (e.g., Living Environment)" 
      },
      points: [
        { 
          ja: "特徴・メリット1", 
          en: "Feature/Benefit 1" 
        },
        { 
          ja: "特徴・メリット2", 
          en: "Feature/Benefit 2" 
        }
      ]
    }
  ],

  international: {
    points: [
      { 
        ja: "外国人向けの施設・サービス1", 
        en: "International facility/service 1" 
      },
      { 
        ja: "外国人向けの施設・サービス2", 
        en: "International facility/service 2" 
      },
      { 
        ja: "外国人向けの施設・サービス3", 
        en: "International facility/service 3" 
      }
    ]
  },

  events: [
    {
      name: { 
        ja: "イベント名", 
        en: "Event Name" 
      },
      description: { 
        ja: "イベントの説明（2-3文）", 
        en: "Event description (2-3 sentences)" 
      },
      month: 1, // 1-12 (0 = 毎月開催)
      category: "festival" // "festival", "community", "food", etc.
    }
  ],

  attractions: [
    {
      name: { 
        ja: "スポット名", 
        en: "Attraction Name" 
      },
      description: { 
        ja: "スポットの説明", 
        en: "Attraction description" 
      },
      category: "park", // "park", "shopping", "culture", "food"
      image: "/images/your-ward/attraction-name.jpg"
    }
  ],

  images: {
    hero: "/images/your-ward/hero.jpg",
    map: "/images/your-ward/map.png"
  }
}



