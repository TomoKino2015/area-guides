# 杉並区（suginami）G1〜G7 データ構造 + 通勤SoT 0→1 セットアップ

※このプロンプトは「杉並区だけ」を対象にした 0→1 セットアップ用です。  
うまくいったら後で 23区共通フローに拡張する前提。

## 前提・絶対ルール

- **既存の以下は壊さない / 振る舞いを変えないこと：**
  - `content/area/shibuya.yml`
  - `content/area/setagaya.yml`
  - `content/area/setagaya_sample.yml`
  - `/`, `/setagaya`, `/areas/shibuya`, `/areas/setagaya_sample` の表示

- **23区用の既存のドラフト `*.draft.yml` も削除・リネームしないこと**

- **今回「書き込み対象にして良い」のは、原則として以下のみ：**
  - `docs/` 配下の新規 or 追記
  - `data/` 配下の新規 or 追記
  - `content/area/suginami.draft.yml`（必要なら新規作成）

- **READ ONLY で構造を参照して良いパス：**
  - `docs/area-guides-bmad-brief.md`
  - `docs/area-guides-change-log.md`
  - `content/area/setagaya_sample.yml`
  - `content/area/setagaya.yml`
  - `content/area/shibuya.yml`
  - `data/rent-2025q1.ts`
  - `docs/data-homes-rent-2025q1.md`

## ゴール（今回やること）

1. **HOMES から取得済みの「杉並区の駅・路線・主要駅アクセス情報 JSON」** を SoT としてプロジェクト内に保存する。

2. その JSON をもとに、`data/commute-2025q1.ts`（通勤情報の SoT）を新規作成する。

3. `content/area/suginami.draft.yml` を G1〜G7 のスキーマで 0→1 で整備し、
   - G4「お金＆アクセス（賃料 ＋ 主要駅アクセス）」だけは、必ず SoT（賃料 + 通勤 JSON）を元に埋める。
   - それ以外（G1, G2, G3, G5, G6, G7）は、最小限のコピーで OK（ドラフト用）。

---


## 事前確認ステップ（READ ONLY）

以下のファイルを READ ONLY で開いて、構造とスキーマだけ確認してください（このステップでは変更しないこと）：

1. `docs/area-guides-bmad-brief.md`
   - G1〜G7 の定義
   - 「4-2. 区別 × 間取り別賃料データのSoT」セクション

2. `content/area/setagaya_sample.yml`
   - G1〜G7 の実際の YAML スキーマ（MVP 版）
   - 特に `money_and_access` / `commute_times` / `rent_by_type` 周りの構造

3. `data/rent-2025q1.ts`
   - `WardSlug`, `RentByFloorPlan`, `WardRentMap` の型定義
   - `getRentByWard` などのユーティリティ

4. `content/area/suginami.draft.yml` の存在を確認：
   - 存在する場合：現在のキー構造を確認し、G1〜G7 にマージする前提にする。
   - 存在しない場合：後のステップで新規作成する。

**ここまでのステップでは絶対に書き込みを行わないこと。**

---

## STEP 1: HOMES 通勤 JSON を docs/ にアーカイブ保存

以下の JSON はユーザーが Atlas から取得したもので、元データとして信用してよい前提です。  
これを **生データのアーカイブ** として `docs/` 配下に保存してください。

- **ファイル名**: `docs/data-homes-commute-2025q1-suginami.md`

このファイルに含める内容：

1. **見出しとメタ情報**
   - タイトル例: `# HOMES 通勤データ (杉並区, 2025-Q1)`
   - ソース URL 一覧
   - 取得日 (`retrieved_at`)
   - 利用目的（G4: money_and_access / commute_times 用 SoT）

2. **JSON の完全コピー**
   - 下記の JSON を ` ```json ... ``` ` のコードブロックとしてそのまま貼る
   - ここでは編集・加工しないこと

### 【貼り付ける JSON】

```json
{
  "ward_slug": "suginami",
  "ward_name_ja": "杉並区",
  "source_meta": {
    "urls": [
      "https://www.homes.co.jp/chintai/tokyo/suginami-city/",
      "https://www.homes.co.jp/life/cl-trend/cm-ranking/70178/",
      "https://www.homes.co.jp/life/cl-spot/cm-city/36601/"
    ],
    "retrieved_at": "2025-11-05T00:00:00Z"
  },
  "commute_summary": {
    "text_ja": "杉並区は23区西側に位置し、JR中央線快速やJR中央・総武線、京王線、京王井の頭線、西武新宿線、東京メトロ丸ノ内線、東京メトロ東西線といった複数路線が走ります。これらの路線は新宿・渋谷・東京・品川といった都心主要駅への直通運行が多く、本数も多いため通勤やお出かけに便利です。記事では荻窪駅や高円寺駅など主要駅から新宿へ約6〜11分、東京へ約20〜30分、渋谷へ約17〜25分、品川へ約30〜40分と短時間でアクセスできることが紹介されています。また、丸ノ内線沿線の方南町駅や東高円寺駅は商店街やスーパーが充実し、家族連れにも暮らしやすい街とされています。",
    "main_lines": [
      "JR中央線快速",
      "JR中央・総武線",
      "京王線",
      "京王井の頭線",
      "西武新宿線",
      "東京メトロ丸ノ内線",
      "東京メトロ東西線"
    ]
  },
  "stations": [
    {
      "name_ja": "荻窪",
      "name_en": "Ogikubo",
      "is_representative": true,
      "lines": [
        "JR中央線",
        "JR中央・総武線",
        "東京メトロ丸ノ内線"
      ],
      "role": "治安が良く深夜まで営業するスーパーや大型商業施設がそろう区内最大のターミナル駅。",
      "description_ja": "荻窪駅はJR中央線・中央総武線と東京メトロ丸ノ内線が利用でき、駅周辺にはカフェやコンビニ、ルミネ荻窪などの商業施設が集まっています。子どもと遊べる公園が駅徒歩圏内に複数あり、ファミリー層にも人気です。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 11,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 25,
          "route_summary": "JR中央総武線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 22,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 37,
          "route_summary": "JR中央総武線で直通",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "高円寺",
      "name_en": "Koenji",
      "is_representative": true,
      "lines": [
        "JR中央線",
        "JR中央・総武線"
      ],
      "role": "活気あるサブカルチャーの街でイベントや祭りが多く、買い物環境も豊富。",
      "description_ja": "高円寺駅はJR中央線とJR中央・総武線が通り、スーパーやリサイクルショップが多い賑やかなエリアです。イベントやお祭りが積極的に開催され、老若男女問わず住みやすい街とされています。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 6,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 17,
          "route_summary": "JR中央線で新宿乗換→JR山手線",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 20,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 30,
          "route_summary": "JR中央総武線で直通",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "西荻窪",
      "name_en": "Nishi-Ogikubo",
      "is_representative": true,
      "lines": [
        "JR中央線",
        "JR中央・総武線"
      ],
      "role": "緑や自然が多く飲食店や教育施設も充実した、通勤・買い物ともに便利な駅。",
      "description_ja": "西荻窪駅はJR中央線とJR中央・総武線が利用でき、周辺には飲食店や教育施設、病院などが多く生活利便性が高いエリアです。夜遅くまで営業するスーパーもあり、仕事帰りに買い物がしやすいのが特徴です。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 13,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 27,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 27,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 40,
          "route_summary": "JR中央線で新宿乗換→JR山手線",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "阿佐ケ谷",
      "name_en": "Asagaya",
      "is_representative": true,
      "lines": [
        "JR中央線",
        "JR中央・総武線"
      ],
      "role": "交通の便がよく、公園や小学校、病院が近い子育て向けの街。",
      "description_ja": "阿佐ケ谷駅はJR中央線とJR中央・総武線が通り、終電が遅くまであるのが特徴です。飲食店や居酒屋、公園や学校、病院が1km圏内にそろっており、バス路線も充実しているためファミリーにも適したエリアです。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 8,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 23,
          "route_summary": "JR中央総武線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 22,
          "route_summary": "JR中央線快速で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 35,
          "route_summary": "JR中央総武線で直通",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "新高円寺",
      "name_en": "Shin-Koenji",
      "is_representative": false,
      "lines": [
        "東京メトロ丸ノ内線"
      ],
      "role": "飲食店や商店街が充実し、仕事帰りの外食や買い物が楽しめる駅。",
      "description_ja": "新高円寺駅は東京メトロ丸ノ内線が通る駅で、駅周辺には飲食店や居酒屋が多く賑わいがあります。商店街もあるため、日常の買い物も便利に済ませられます。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 9,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 21,
          "route_summary": "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 28,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 34,
          "route_summary": "東京メトロ丸ノ内線で新宿乗換→JR山手線",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "方南町",
      "name_en": "Honancho",
      "is_representative": false,
      "lines": [
        "東京メトロ丸ノ内線"
      ],
      "role": "商店街が賑わい教育施設も多いファミリー向けエリア。",
      "description_ja": "方南町駅は東京メトロ丸ノ内線の駅で、駅周辺には新築マンションや飲食店が豊富にあります。中学校や学習塾が多く、近くに大きな公園も整備されているためファミリー世帯に人気です。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 11,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 23,
          "route_summary": "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 30,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 39,
          "route_summary": "東京メトロ丸ノ内線で新宿乗換→JR山手線",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "東高円寺",
      "name_en": "Higashi-Koenji",
      "is_representative": false,
      "lines": [
        "東京メトロ丸ノ内線"
      ],
      "role": "深夜まで営業するスーパーがあり静かな住宅街が広がる駅。",
      "description_ja": "東高円寺駅は東京メトロ丸ノ内線が通り、駅周辺には飲食店や深夜営業のスーパーが充実しています。閑静な住宅街が広がり、都心へのアクセスを気にする人にも向いています。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 7,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 19,
          "route_summary": "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 26,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 32,
          "route_summary": "東京メトロ丸ノ内線で新宿乗換→JR山手線",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "南阿佐ケ谷",
      "name_en": "Minami-Asagaya",
      "is_representative": false,
      "lines": [
        "東京メトロ丸ノ内線"
      ],
      "role": "終電が遅くまであるほか深夜営業のスーパーがあり、低層住宅が多いファミリー向けエリア。",
      "description_ja": "南阿佐ケ谷駅は東京メトロ丸ノ内線の駅で、終電が遅くまで運行しているほか、深夜まで営業するスーパーがあります。低層マンションや一戸建てが多く、静かで暮らしやすいと評判の住宅街です。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 11,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 22,
          "route_summary": "東京メトロ丸ノ内線で新宿三丁目乗換→JRまたは地下鉄",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 30,
          "route_summary": "東京メトロ丸ノ内線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 36,
          "route_summary": "東京メトロ丸ノ内線で新宿乗換→JR山手線",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "下井草",
      "name_en": "Shimo-Igusa",
      "is_representative": false,
      "lines": [
        "西武新宿線"
      ],
      "role": "自然や公園が多くファミリー層が多く住むエリア。",
      "description_ja": "下井草駅は西武新宿線が通る駅で、周辺に自然や公園が多いため、子どもと時間を過ごしたいファミリーに適しています。バス路線も豊富で車を持たなくても暮らしやすい環境です。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 23,
          "route_summary": "西武新宿線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 30,
          "route_summary": "西武新宿線で高田馬場乗換→JR山手線",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 46,
          "route_summary": "西武新宿線で高田馬場乗換→JR山手線→東京方面",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 43,
          "route_summary": "西武新宿線で高田馬場乗換→JR山手線",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "上井草",
      "name_en": "Kami-Igusa",
      "is_representative": false,
      "lines": [
        "西武新宿線"
      ],
      "role": "閑静な住宅街が広がり公園やスポーツ施設が豊富な子育て向けエリア。",
      "description_ja": "上井草駅は西武新宿線が乗り入れており、駅周辺には閑静な住宅街が広がっています。日用品や食料品の買い物が便利で、公園やスポーツセンター、ゴルフセンターなどもあり、子育て世帯に人気です。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 27,
          "route_summary": "西武新宿線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 34,
          "route_summary": "西武新宿線で高田馬場乗換→JR山手線",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": 50,
          "route_summary": "西武新宿線で高田馬場乗換→JR山手線→東京方面",
          "source": "article",
          "note": null
        },
        {
          "to": "品川",
          "time_min": 47,
          "route_summary": "西武新宿線で高田馬場乗換→JR山手線",
          "source": "article",
          "note": null
        }
      ]
    },
    {
      "name_ja": "八幡山",
      "name_en": "Hachimanyama",
      "is_representative": false,
      "lines": [
        "京王線"
      ],
      "role": "治安が良く、スーパーや日用品店が集まる静かな住宅地で自然も楽しめる。",
      "description_ja": "八幡山駅は京王線の駅で、新宿まで直通約15分、渋谷へは乗り換え1回で約15分と都心へのアクセスが良好です。駅周辺には交番が二つあり治安が良く、スーパーや日用品店も充実しています。また徒歩圏に芦花公園があり、自然も楽しめます。",
      "to_major_hubs": [
        {
          "to": "新宿",
          "time_min": 15,
          "route_summary": "京王線で直通",
          "source": "article",
          "note": null
        },
        {
          "to": "渋谷",
          "time_min": 15,
          "route_summary": "京王線で明大前乗換→京王井の頭線",
          "source": "article",
          "note": null
        },
        {
          "to": "東京",
          "time_min": null,
          "route_summary": null,
          "source": "article",
          "note": "記事内に記載なし"
        },
        {
          "to": "品川",
          "time_min": null,
          "route_summary": null,
          "source": "article",
          "note": "記事内に記載なし"
        }
      ]
    }
  ]
}
```

---

## STEP 2: data/commute-2025q1.ts の作成（通勤 SoT）

1. **`data/commute-2025q1.ts` を新規作成してください。**

2. **型定義の方針：**
   - `WardSlug` は `data/rent-2025q1.ts` のものを再利用するか、同じ union 型をここにも定義してよい。
   - 駅・路線・所要時間のための型を定義する（例）：
     ```typescript
     type MajorHub = "新宿" | "渋谷" | "東京" | "品川";
     
     interface CommuteTime {
       to: MajorHub;
       timeMin: number | null;
       routeSummary: string | null;
       source: "article";
       note?: string | null;
     }
     
     interface StationCommute {
       nameJa: string;
       nameEn: string;
       isRepresentative: boolean;
       lines: string[];
       role: string | null;
       descriptionJa: string | null;
       toMajorHubs: CommuteTime[];
     }
     
     interface WardCommuteData {
       wardSlug: WardSlug;
       wardNameJa: string;
       mainLines: string[];
       summaryJa: string;
       stations: StationCommute[];
       quarter: "2025-Q1";
       source: "homes.co.jp";
     }
     ```
   - 必要に応じて名前は変えてよいが、情報の粒度は JSON と同等にすること。

3. **`const COMMUTE_2025Q1: Record<WardSlug, WardCommuteData | undefined>` のようなマップを定義し、**
   - 現時点では `suginami` だけエントリを追加すること。
   - JSON の値を型に合わせて詰める（`null` の扱い注意）。

4. **ヘルパー関数を 1〜2 個用意する：**
   - `getCommuteByWard(ward: WardSlug): WardCommuteData | undefined`
   - `getRepresentativeStations(ward: WardSlug): StationCommute[]` のようなもの

5. **コメントで明記：**
   - このファイルが「G4: money_and_access / commute_times 用の SoT」であること
   - 未来の 22 区分もここに追加していく想定であること

---

## STEP 3: content/area/suginami.draft.yml を G1〜G7 スキーマで整備

1. **`content/area/suginami.draft.yml` があれば開き、なければ新規作成。**

2. **ベースとなるスキーマは `setagaya_sample.yml` と BMAD brief の G1〜G7 定義を組み合わせてください。**
   - キー構造は `setagaya_sample.yml` に揃える（G1〜G7 が分かる形）
   - ただし `status` は `"Draft"` とする

3. **各 G の方針：**

### G1: 基本情報（meta / hero / overview）

- `slug: "suginami"`
- `title` / `title.en` / `title.ja` など、`setagaya_sample.yml` と同じキー構造で設定
- 例: 「杉並区エリアガイド2025」「Suginami Area Guide 2025」
- `hero`:
  - `tagline` / `lead` を、HOMES の「杉並区紹介文」を参考に短く生成してよい
  - 2〜3 文以内に抑えること
- `overview`:
  - 1 パラグラフ程度の日本語概要（HOMES の紹介テキストを要約）
  - 数字や所要時間は、なるべく G4 側に譲り、ここでは「性格」中心に書くこと
  - （例：自然が多い・交通利便性・ファミリー多い 等）

### G2: Who it fits + 住民の声（軽め）

- `who_it_fits`:
  - `tags`: 3〜6 個程度（例: "ファミリー", "共働きカップル", "都心勤務だけど静かな環境が好き" など）
  - `description`: 杉並区が「どんな人に向いているか」を 2〜3 文で要約
  - `sample_residents`:
    - ここは一旦空配列 or 1〜2 件だけの簡易サンプルに留める
    - 実名・実在人物を使わないこと
    - 「テストデータ」であることが分かるような記述でもOK

### G3: ライフスタイル & 施設（Shopping / Dining / Parks / Education & Medical）

- 構造は `setagaya_sample.yml` の `life` セクションに揃える：
  - `shopping`, `dining`, `parks`, `education_and_medical` など
- 内容は Atlas / HOMES ではなく、既存の BMAD brief と一般的な杉並イメージから軽めに 1〜2 個ずつで良い
- 例：高円寺の商店街、荻窪のショッピング施設、善福寺公園 など
- ここではまだ SoT 化しない（カテゴリ①：AI が自動生成して良い領域）

### G4: Money & Access（賃料 + 主要駅アクセス）※今回のメイン

- **賃料部分：**
  - すでに存在する `data/rent-2025q1.ts` の `getRentByWard("suginami")` を利用する前提で、
  - `rent_by_type` などの構造を `setagaya_sample.yml` と同じ形に整える
  - 2025-Q1 の値を埋める（`quarter: "2025-Q1"`, `source: "homes.co.jp"`）

- **通勤・アクセス部分：**
  - 今回作成した `WardCommuteData`（`data/commute-2025q1.ts`）を利用することを前提に、
  - `commute_times` や `money_and_access.commute_table` のようなセクションに、
  - 代表駅（`isRepresentative: true` な駅）を中心としたテーブルを作る
  - カラム例：
    - `station_name`
    - `line_summary`（`lines` から生成）
    - `to_shinjuku_min`, `to_shibuya_min`, `to_tokyo_min`, `to_shinagawa_min`
  - 値が `null` の場合は、YAML では `null` にし、UI 側で「—」表示にできるようにする

- **区全体の一言サマリ：**
  - `commute_summary.text_ja` を短く要約して、G4 のリードに使う（2文程度）

### G5: Foreign-friendly / 国際対応

- 構造は `setagaya_sample.yml` の `foreign_friendly` に揃える
- 内容は簡易で良い：
  - 例：英語対応病院や、国際的な雰囲気のあるエリア（高円寺・荻窪など）を 1〜2 文でまとめる
- ここは SoT にせず、AI 生成テキスト（カテゴリ①）で OK

### G6: Events & Community

- `events` セクションは、現時点では構造だけ作って中身は 0〜1 件のサンプルで良い
- 後で HOMES 以外のソースや手入力で埋める前提
- 例：
  - 高円寺阿波踊り
  - 阿佐ヶ谷七夕まつり
- ただし、詳細な日付や URL などは `null` OK。「イベントタイトル / 概要だけ」は入れてもよい。

### G7: Closing / CTA

- `closing` セクション：
  - 杉並区全体を一言でまとめる 2〜3 文
  - 「あなたに合う物件を探しましょう」系の CTA テキスト
- `cta`:
  - `eligibility_check_url` などがあれば既存のものを流用（Setagaya/Shibuya と整合性を保つ）
  - なければ `null` / TODO コメントで OK

---

## STEP 4: /areas/suginami の動作確認（READ ONLY チェック）

- コード側ではルーティングの変更は**しない**こと。
- `app/(marketing)/areas/[slug]/page.tsx` が既に `DefaultAreaLanding` を使う前提で動いていれば、
- `suginami.draft.yml` の存在により `/areas/suginami` が表示される想定
- 実際にビルド (`pnpm build`) or 開発サーバで `/areas/suginami` を開き、
- 最低限 G4 の賃料テーブルと主要駅アクセスが壊れていないことだけ確認する。
- コンポーネントや型エラーが出た場合は、`setagaya_sample` の実装と同じ方針で最小限修正してよいが、
- Shibuya / Setagaya / Setagaya_sample の挙動は変えないこと。

---

## STEP 5: Change Log の更新

`docs/area-guides-change-log.md` の末尾に、今回の変更を 1 セクション追記：

- **日付**: 2025-02-XX（実行日）
- **タイトル例**:
  - 「杉並区通勤データ SoT の追加（2025-Q1, HOMES）」
  - 「杉並区 G1〜G7 ドラフト YAML の初期化」
- **箇条書きで**:
  - `docs/data-homes-commute-2025q1-suginami.md` を追加したこと
  - `data/commute-2025q1.ts` に `suginami` エントリを追加したこと
  - `content/area/suginami.draft.yml` を G1〜G7 構造で初期化し、G4 に SoT を反映したこと
  - 既存ページに影響なしであること

---

## STEP 6: 変更後の目視確認用ターミナルコマンド

作業が終わったあと、人間が目視でチェックできるように、必ず次のコマンドを順番に実行してください。

### 1. 追加・更新されたファイルの存在確認

```bash
# 通勤データの生JSONアーカイブ
ls -lah docs | grep data-homes-commute-2025q1-suginami

# 通勤SoTのTSファイル
ls -lah data | grep commute-2025q1

# 杉並区のYAMLドラフト
ls -lah content/area | grep suginami
```

### 2. 中身ざっくり確認（先頭だけ表示）

```bash
# HOMES 通勤JSONアーカイブ（先頭40行）
sed -n '1,40p' docs/data-homes-commute-2025q1-suginami.md

# TS SoTの型と suginami エントリ（先頭80行）
sed -n '1,80p' data/commute-2025q1.ts

# 杉並区 YAML（先頭80行）
sed -n '1,80p' content/area/suginami.draft.yml
```

### 3. G4（お金＆アクセス）だけピンポイントで確認

```bash
# 杉並区 YAML の money_and_access 周辺
rg "money_and_access" -n content/area/suginami.draft.yml

# commute_times / rent_by_type の有無をチェック
rg "commute" -n content/area/suginami.draft.yml
rg "rent_by_type" -n content/area/suginami.draft.yml
```

### 4. 型チェック & ビルド確認

```bash
# TypeScript 型チェック（あれば）
pnpm lint

# ビルド
pnpm build
```

### 5. 画面での見え方確認用（開発サーバ）

```bash
# dev サーバ起動
pnpm dev

# ブラウザで開くURL（人間がやる）
# - http://localhost:3000/areas/suginami

# 確認ポイント（人間が目視）：
# - /areas/suginami が 500 にならずに表示されること
# - G4 の賃料テーブルに 2025-Q1 / homes.co.jp の情報が出ていること
# - 代表駅（荻窪・高円寺・西荻窪・阿佐ケ谷など）のアクセス時間が載っていること
# - 既存の /areas/shibuya /areas/setagaya_sample の表示は変わっていないこと
```

---

以上をすべて完了したら、実施内容のサマリと、`/areas/suginami` のスクリーンショット or 表示概要（どのセクションが埋まっているか）をレポートしてください。



