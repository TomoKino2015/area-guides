/**
 * 2025 Q1 HOMES 通勤データ（駅・路線・主要駅アクセス情報）
 * 元データ: docs/data-homes-commute-2025q1-suginami.md
 * 
 * このファイルは、G4: money_and_access / commute_times 用のSoT（真実の源）です。
 * 四半期ごとに更新し、content/area/*.yml の commute_times や money_and_access.commute_table に反映します。
 * 
 * 将来的に、東京23区すべての通勤データをここに追加していく想定です。
 */

import type { WardSlug } from "./rent-2025q1";

export type MajorHub = "新宿" | "渋谷" | "東京" | "品川";

export interface CommuteTime {
  to: MajorHub;
  timeMin: number | null;
  routeSummary: string | null;
  source: "article";
  note?: string | null;
}

export interface StationCommute {
  nameJa: string;
  nameEn: string;
  isRepresentative: boolean;
  lines: string[];
  role: string | null;
  descriptionJa: string | null;
  toMajorHubs: CommuteTime[];
}

export interface WardCommuteData {
  wardSlug: WardSlug;
  wardNameJa: string;
  mainLines: string[];
  summaryJa: string;
  stations: StationCommute[];
  quarter: "2025-Q1";
  source: "homes.co.jp";
}

export const COMMUTE_2025Q1: Record<WardSlug, WardCommuteData | undefined> = {
  chiyoda: undefined,
  chuo: undefined,
  minato: undefined,
  shinjuku: undefined,
  bunkyo: undefined,
  taito: undefined,
  sumida: undefined,
  koto: undefined,
  shinagawa: undefined,
  meguro: undefined,
  ota: undefined,
  setagaya: undefined,
  shibuya: undefined,
  nakano: undefined,
  suginami: {
    wardSlug: "suginami",
    wardNameJa: "杉並区",
    mainLines: [
      "JR中央線快速",
      "JR中央・総武線",
      "京王線",
      "京王井の頭線",
      "西武新宿線",
      "東京メトロ丸ノ内線",
      "東京メトロ東西線",
    ],
    summaryJa:
      "杉並区は23区西側に位置し、JR中央線快速やJR中央・総武線、京王線、京王井の頭線、西武新宿線、東京メトロ丸ノ内線、東京メトロ東西線といった複数路線が走ります。これらの路線は新宿・渋谷・東京・品川といった都心主要駅への直通運行が多く、本数も多いため通勤やお出かけに便利です。記事では荻窪駅や高円寺駅など主要駅から新宿へ約6〜11分、東京へ約20〜30分、渋谷へ約17〜25分、品川へ約30〜40分と短時間でアクセスできることが紹介されています。また、丸ノ内線沿線の方南町駅や東高円寺駅は商店街やスーパーが充実し、家族連れにも暮らしやすい街とされています。",
    stations: [
      {
        nameJa: "荻窪",
        nameEn: "Ogikubo",
        isRepresentative: true,
        lines: ["JR中央線", "JR中央・総武線", "東京メトロ丸ノ内線"],
        role: "治安が良く深夜まで営業するスーパーや大型商業施設がそろう区内最大のターミナル駅。",
        descriptionJa:
          "荻窪駅はJR中央線・中央総武線と東京メトロ丸ノ内線が利用でき、駅周辺にはカフェやコンビニ、ルミネ荻窪などの商業施設が集まっています。子どもと遊べる公園が駅徒歩圏内に複数あり、ファミリー層にも人気です。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 11,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 25,
            routeSummary: "JR中央総武線で直通",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 22,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 37,
            routeSummary: "JR中央総武線で直通",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "高円寺",
        nameEn: "Koenji",
        isRepresentative: true,
        lines: ["JR中央線", "JR中央・総武線"],
        role: "活気あるサブカルチャーの街でイベントや祭りが多く、買い物環境も豊富。",
        descriptionJa:
          "高円寺駅はJR中央線とJR中央・総武線が通り、スーパーやリサイクルショップが多い賑やかなエリアです。イベントやお祭りが積極的に開催され、老若男女問わず住みやすい街とされています。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 6,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 17,
            routeSummary: "JR中央線で新宿乗換→JR山手線",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 20,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 30,
            routeSummary: "JR中央総武線で直通",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "西荻窪",
        nameEn: "Nishi-Ogikubo",
        isRepresentative: true,
        lines: ["JR中央線", "JR中央・総武線"],
        role: "緑や自然が多く飲食店や教育施設も充実した、通勤・買い物ともに便利な駅。",
        descriptionJa:
          "西荻窪駅はJR中央線とJR中央・総武線が利用でき、周辺には飲食店や教育施設、病院などが多く生活利便性が高いエリアです。夜遅くまで営業するスーパーもあり、仕事帰りに買い物がしやすいのが特徴です。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 13,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 27,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 27,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 40,
            routeSummary: "JR中央線で新宿乗換→JR山手線",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "阿佐ケ谷",
        nameEn: "Asagaya",
        isRepresentative: true,
        lines: ["JR中央線", "JR中央・総武線"],
        role: "交通の便がよく、公園や小学校、病院が近い子育て向けの街。",
        descriptionJa:
          "阿佐ケ谷駅はJR中央線とJR中央・総武線が通り、終電が遅くまであるのが特徴です。飲食店や居酒屋、公園や学校、病院が1km圏内にそろっており、バス路線も充実しているためファミリーにも適したエリアです。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 8,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 23,
            routeSummary: "JR中央総武線で直通",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 22,
            routeSummary: "JR中央線快速で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 35,
            routeSummary: "JR中央総武線で直通",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "新高円寺",
        nameEn: "Shin-Koenji",
        isRepresentative: false,
        lines: ["東京メトロ丸ノ内線"],
        role: "飲食店や商店街が充実し、仕事帰りの外食や買い物が楽しめる駅。",
        descriptionJa:
          "新高円寺駅は東京メトロ丸ノ内線が通る駅で、駅周辺には飲食店や居酒屋が多く賑わいがあります。商店街もあるため、日常の買い物も便利に済ませられます。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 9,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 21,
            routeSummary: "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 28,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 34,
            routeSummary: "東京メトロ丸ノ内線で新宿乗換→JR山手線",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "方南町",
        nameEn: "Honancho",
        isRepresentative: false,
        lines: ["東京メトロ丸ノ内線"],
        role: "商店街が賑わい教育施設も多いファミリー向けエリア。",
        descriptionJa:
          "方南町駅は東京メトロ丸ノ内線の駅で、駅周辺には新築マンションや飲食店が豊富にあります。中学校や学習塾が多く、近くに大きな公園も整備されているためファミリー世帯に人気です。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 11,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 23,
            routeSummary: "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 30,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 39,
            routeSummary: "東京メトロ丸ノ内線で新宿乗換→JR山手線",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "東高円寺",
        nameEn: "Higashi-Koenji",
        isRepresentative: false,
        lines: ["東京メトロ丸ノ内線"],
        role: "深夜まで営業するスーパーがあり静かな住宅街が広がる駅。",
        descriptionJa:
          "東高円寺駅は東京メトロ丸ノ内線が通り、駅周辺には飲食店や深夜営業のスーパーが充実しています。閑静な住宅街が広がり、都心へのアクセスを気にする人にも向いています。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 7,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 19,
            routeSummary: "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 26,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 32,
            routeSummary: "東京メトロ丸ノ内線で新宿乗換→JR山手線",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "南阿佐ケ谷",
        nameEn: "Minami-Asagaya",
        isRepresentative: false,
        lines: ["東京メトロ丸ノ内線"],
        role: "終電が遅くまであるほか深夜営業のスーパーがあり、低層住宅が多いファミリー向けエリア。",
        descriptionJa:
          "南阿佐ケ谷駅は東京メトロ丸ノ内線の駅で、終電が遅くまで運行しているほか、深夜まで営業するスーパーがあります。低層マンションや一戸建てが多く、静かで暮らしやすいと評判の住宅街です。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 11,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 22,
            routeSummary: "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 30,
            routeSummary: "東京メトロ丸ノ内線で直通",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 36,
            routeSummary: "東京メトロ丸ノ内線で新宿乗換→JR山手線",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "下井草",
        nameEn: "Shimo-Igusa",
        isRepresentative: false,
        lines: ["西武新宿線"],
        role: "自然や公園が多くファミリー層が多く住むエリア。",
        descriptionJa:
          "下井草駅は西武新宿線が通る駅で、周辺に自然や公園が多いため、子どもと時間を過ごしたいファミリーに適しています。バス路線も豊富で車を持たなくても暮らしやすい環境です。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 23,
            routeSummary: "西武新宿線で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 30,
            routeSummary: "西武新宿線で高田馬場乗換→JR山手線",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 46,
            routeSummary: "西武新宿線で高田馬場乗換→JR山手線→東京方面",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 43,
            routeSummary: "西武新宿線で高田馬場乗換→JR山手線",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "上井草",
        nameEn: "Kami-Igusa",
        isRepresentative: false,
        lines: ["西武新宿線"],
        role: "閑静な住宅街が広がり公園やスポーツ施設が豊富な子育て向けエリア。",
        descriptionJa:
          "上井草駅は西武新宿線が乗り入れており、駅周辺には閑静な住宅街が広がっています。日用品や食料品の買い物が便利で、公園やスポーツセンター、ゴルフセンターなどもあり、子育て世帯に人気です。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 27,
            routeSummary: "西武新宿線で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 34,
            routeSummary: "西武新宿線で高田馬場乗換→JR山手線",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: 50,
            routeSummary: "西武新宿線で高田馬場乗換→JR山手線→東京方面",
            source: "article",
            note: null,
          },
          {
            to: "品川",
            timeMin: 47,
            routeSummary: "西武新宿線で高田馬場乗換→JR山手線",
            source: "article",
            note: null,
          },
        ],
      },
      {
        nameJa: "八幡山",
        nameEn: "Hachimanyama",
        isRepresentative: false,
        lines: ["京王線"],
        role: "治安が良く、スーパーや日用品店が集まる静かな住宅地で自然も楽しめる。",
        descriptionJa:
          "八幡山駅は京王線の駅で、新宿まで直通約15分、渋谷へは乗り換え1回で約15分と都心へのアクセスが良好です。駅周辺には交番が二つあり治安が良く、スーパーや日用品店も充実しています。また徒歩圏に芦花公園があり、自然も楽しめます。",
        toMajorHubs: [
          {
            to: "新宿",
            timeMin: 15,
            routeSummary: "京王線で直通",
            source: "article",
            note: null,
          },
          {
            to: "渋谷",
            timeMin: 15,
            routeSummary: "京王線で明大前乗換→京王井の頭線",
            source: "article",
            note: null,
          },
          {
            to: "東京",
            timeMin: null,
            routeSummary: null,
            source: "article",
            note: "記事内に記載なし",
          },
          {
            to: "品川",
            timeMin: null,
            routeSummary: null,
            source: "article",
            note: "記事内に記載なし",
          },
        ],
      },
    ],
    quarter: "2025-Q1",
    source: "homes.co.jp",
  },
  toshima: undefined,
  kita: undefined,
  arakawa: undefined,
  itabashi: undefined,
  nerima: undefined,
  adachi: undefined,
  katsushika: undefined,
  edogawa: undefined,
};

/**
 * 指定されたslugの通勤データを取得するヘルパー関数
 */
export function getCommuteByWard(
  ward: WardSlug
): WardCommuteData | undefined {
  return COMMUTE_2025Q1[ward];
}

/**
 * 指定されたslugの代表駅（isRepresentative: true）を取得するヘルパー関数
 */
export function getRepresentativeStations(
  ward: WardSlug
): StationCommute[] {
  const data = COMMUTE_2025Q1[ward];
  if (!data) return [];
  return data.stations.filter((station) => station.isRepresentative);
}

/**
 * 指定されたslugの代表駅の通勤データを CommuteRow[] 形式に変換するヘルパー関数
 * 最大4駅まで返す（23区共通仕様）
 */
export function getRepresentativeCommuteRows(
  ward: WardSlug,
  maxStations: number = 4
): Array<{
  station: string;
  destination: string;
  minutes: number | null;
  line: string | null;
  type?: string;
}> {
  const stations = getRepresentativeStations(ward).slice(0, maxStations);
  const rows: Array<{
    station: string;
    destination: string;
    minutes: number | null;
    line: string | null;
    type?: string;
  }> = [];

  stations.forEach((station) => {
    station.toMajorHubs.forEach((hub) => {
      rows.push({
        station: station.nameEn, // 英語表記で統一
        destination: hub.to, // 日本語表記（"新宿"など）
        minutes: hub.timeMin,
        line: hub.routeSummary,
        type: "rapid", // SoTからは詳細なtypeが無いのでデフォルト値
      });
    });
  });

  return rows;
}

