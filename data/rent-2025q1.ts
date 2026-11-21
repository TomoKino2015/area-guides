/**
 * 2025 Q1 HOMES 賃料データ（単位: 円 / 月）
 * 元データ: docs/data-homes-rent-2025q1.md
 * 
 * このファイルは、東京23区の間取り別平均賃料のSoT（真実の源）です。
 * 四半期ごとに更新し、content/area/*.yml の rent_by_type に反映します。
 */

export type FloorPlanKey =
  | "1R"
  | "1K"
  | "1DK"
  | "1LDK"
  | "2K"
  | "2DK"
  | "2LDK"
  | "3DK"
  | "3LDK";

export type RentByFloorPlan = {
  [plan in FloorPlanKey]?: {
    avgMonthlyRentJpy: number; // 円単位（例: 10.05万円 → 100500円）
    source: "homes.co.jp";
    year: 2025;
    quarter: "Q1";
    note?: string;
  };
};

export type WardSlug =
  | "chiyoda"
  | "chuo"
  | "minato"
  | "shinjuku"
  | "bunkyo"
  | "taito"
  | "sumida"
  | "koto"
  | "shinagawa"
  | "meguro"
  | "ota"
  | "setagaya"
  | "shibuya"
  | "nakano"
  | "suginami"
  | "toshima"
  | "kita"
  | "arakawa"
  | "itabashi"
  | "nerima"
  | "adachi"
  | "katsushika"
  | "edogawa";

export type WardRentMap = {
  [slug in WardSlug]: RentByFloorPlan;
};

export const RENT_2025Q1: WardRentMap = {
  chiyoda: {
    "1R": { avgMonthlyRentJpy: 148400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 135500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 168800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 226900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 172700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 240200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 381000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 250000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 633600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  chuo: {
    "1R": { avgMonthlyRentJpy: 138300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 125100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 163700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 225100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 176300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 230200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 296900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 283700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 383900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  minato: {
    "1R": { avgMonthlyRentJpy: 168900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 142100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 174400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 282700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 192200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 308000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 448900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 482000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 488100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  shinjuku: {
    "1R": { avgMonthlyRentJpy: 120500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 122700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 158900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 228800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 158500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 216200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 313600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 210600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 392400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  bunkyo: {
    "1R": { avgMonthlyRentJpy: 118600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 114900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 152900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 205700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 133800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 208700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 284200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 337900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  taito: {
    "1R": { avgMonthlyRentJpy: 111000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 116300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 140800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 185300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 138400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 202000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 245500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 227300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 294700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  sumida: {
    "1R": { avgMonthlyRentJpy: 102600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 106800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 133300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 177100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 146900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 192600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 232100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 196500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 300900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  koto: {
    "1R": { avgMonthlyRentJpy: 107700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 112600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 136900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 182100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 125300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 200900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 252400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 305900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  shinagawa: {
    "1R": { avgMonthlyRentJpy: 111200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 110400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 147300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 197500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 149500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 215700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 266300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 348400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  meguro: {
    "1R": { avgMonthlyRentJpy: 119600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 124500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 160500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 228800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 136700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 215100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 344200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 378200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  ota: {
    "1R": { avgMonthlyRentJpy: 92500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 92800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 121500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 165000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 115700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 181700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 223400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 262400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  setagaya: {
    "1R": { avgMonthlyRentJpy: 100500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 103300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 138000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 184000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 132600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 198800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 255300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 202100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 302300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  shibuya: {
    "1R": { avgMonthlyRentJpy: 151400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 135800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 174000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 254100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 186900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 223300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 379400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 459300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  nakano: {
    "1R": { avgMonthlyRentJpy: 83900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 102500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 134100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 173900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 137200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 176700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 226100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 180700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 284300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  suginami: {
    "1R": { avgMonthlyRentJpy: 81400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 95800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 124300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 169700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 119900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 144900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 232600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 281100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  toshima: {
    "1R": { avgMonthlyRentJpy: 98000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 107100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 139400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 178200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 130300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 189100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 257200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 200000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 327000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  kita: {
    "1R": { avgMonthlyRentJpy: 85100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 97700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 120700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 157800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 113200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 188000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 229200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 297300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  arakawa: {
    "1R": { avgMonthlyRentJpy: 89700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 97300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 124800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 177200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 120700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 157500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 228700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 238400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  itabashi: {
    "1R": { avgMonthlyRentJpy: 78400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 90600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 116400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 146000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 147900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 156400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 210000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 246200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  nerima: {
    "1R": { avgMonthlyRentJpy: 71000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 86800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 109800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 144600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 128300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 138900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 199800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 128900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 237800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  edogawa: {
    "1R": { avgMonthlyRentJpy: 70100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 79200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 105900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 163300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 101200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 108600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 212600, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 157400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 229300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  adachi: {
    "1R": { avgMonthlyRentJpy: 70900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 80100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 112500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 135400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 104900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 116900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 164500, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3DK": { avgMonthlyRentJpy: 127300, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 196800, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
  katsushika: {
    "1R": { avgMonthlyRentJpy: 74400, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1K": { avgMonthlyRentJpy: 80900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1DK": { avgMonthlyRentJpy: 97900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "1LDK": { avgMonthlyRentJpy: 130100, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2K": { avgMonthlyRentJpy: 100700, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2DK": { avgMonthlyRentJpy: 157200, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "2LDK": { avgMonthlyRentJpy: 162000, source: "homes.co.jp", year: 2025, quarter: "Q1" },
    "3LDK": { avgMonthlyRentJpy: 192900, source: "homes.co.jp", year: 2025, quarter: "Q1" },
  },
};

/**
 * 指定されたslugの賃料データを取得するヘルパー関数
 */
export function getRentByWard(slug: WardSlug): RentByFloorPlan | undefined {
  return RENT_2025Q1[slug];
}

/**
 * 指定されたslugと間取りの平均賃料を取得するヘルパー関数
 */
export function getRentByFloorPlan(
  slug: WardSlug,
  plan: FloorPlanKey
): number | undefined {
  return RENT_2025Q1[slug]?.[plan]?.avgMonthlyRentJpy;
}



