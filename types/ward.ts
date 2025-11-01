export interface WardAttraction {
  name: { ja: string; en: string };
  description: { ja: string; en: string };
  category: string; // e.g. "park", "shopping", "culture", etc.
  image: string;    // path under /public/images/...
}

export interface WardEvent {
  name: { ja: string; en: string };
  description: { ja: string; en: string };
  month: number; // 1-12, or 0 for "monthly"
  category: string; // e.g. "festival", "local market"
}

export interface WardData {
  slug: string; // "setagaya"
  name: { ja: string; en: string };
  tagline: { ja: string; en: string }; // short hero copy
  overview: { ja: string; en: string };

  // demographics / stats
  stats: {
    population?: number;
    areaKm2?: number;
    densityPerKm2?: number;
    foreignersRatioText?: { ja: string; en: string };
  };

  // housing / cost of living snapshot
  housing: {
    rentAverageNoteJa?: string;
    rentAverageNoteEn?: string;
    // Optional: detailed area-by-area rent data
    areas?: Array<{
      name: { ja: string; en: string };
      rent: string; // e.g. "13-16万円"
      toShinjuku: string;
      toShibuya: string;
      incomeTarget: string;
    }>;
    // Optional: by room type
    byRoomType?: Array<{
      type: { ja: string; en: string };
      avgRent: string;
      avgSize: string;
      features: { ja: string; en: string };
    }>;
  };

  // lifestyle / selling points (why live here)
  highlights: Array<{
    title: { ja: string; en: string };
    points: Array<{ ja: string; en: string }>;
  }>;

  // international friendliness (schools, expat support, etc.)
  international: {
    points: Array<{ ja: string; en: string }>;
  };

  // recurring/annual events
  events: WardEvent[];

  // notable attractions / areas
  attractions: WardAttraction[];

  // images specific to this ward (hero, map, etc.)
  images: {
    hero?: string;
    map?: string;
  };
}

