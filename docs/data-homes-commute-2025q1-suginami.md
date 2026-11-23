# HOMES 通勤データ (杉並区, 2025-Q1)

## メタ情報

- **ソース**: HOMES (homes.co.jp)
- **取得日**: 2025-11-05T00:00:00Z
- **利用目的**: G4: money_and_access / commute_times 用 SoT（Source of Truth）

## ソースURL

- https://www.homes.co.jp/chintai/tokyo/suginami-city/
- https://www.homes.co.jp/life/cl-trend/cm-ranking/70178/
- https://www.homes.co.jp/life/cl-spot/cm-city/36601/

## データ

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



