# Area Guides Change Log

このファイルは、area-guidesプロジェクトの重要な変更履歴を記録します。

## 2025-02-01: HOMES 2025Q1 賃料データのSoT追加 + setagaya / shibuya / setagaya_sample への適用

- **SoTファイル作成**: `data/rent-2025q1.ts` を新規作成（23区すべての間取り別平均賃料を構造化）
- **元データ保存**: `docs/data-homes-rent-2025q1.md` にHOMESの生データをアーカイブ
- **YAML更新**: 
  - `content/area/setagaya.yml` の `rent_by_type` を2025Q1データで更新
  - `content/area/shibuya.yml` の `rent_by_type` を2025Q1データで更新
  - `content/area/setagaya_sample.yml` の `money_and_access.unit_rent_stats` と `rent_by_type` を2025Q1データで更新
- **ドキュメント更新**: `docs/area-guides-bmad-brief.md` に「4-2. 区別 × 間取り別賃料データのSoT」セクションを追加

## 2025-02-01: setagaya_sample テストエリアの追加

### 実施内容
- **テスト用エリア `setagaya_sample` を追加**
  - `content/area/setagaya_sample.yml` を作成（G1〜G7のMVPスキーマに準拠）
  - 既存のsetagayaのデータと画像を流用
  - `public/images/areas/setagaya_sample/` フォルダを作成（画像は人間が後で配置）

- **ルーティングとUIの接続**
  - `/areas/setagaya_sample` でShibuyaStoryLandingコンポーネントを使用
  - `/areas` 一覧ページに `setagaya_sample` カードを追加（3つ目として表示）
  - `ShibuyaStoryLanding.tsx` を拡張して新しいYAML構造（hero, who_it_fits, life, foreign_friendly, closing）に対応

- **TypeScript型定義の拡張**
  - `AreaData` 型を拡張して、setagaya_sampleの新しい構造に対応
  - 既存のShibuyaの動作は維持（後方互換性を確保）

### 目的
- 将来の23区共通フォーマットの検証
- 人間が手で入れる外部データ（画像、数値、URL）の箱の検証
- BMAD METHODに沿った運用ルールの確認

### 影響範囲
- `/areas/setagaya_sample` が新規追加
- `/areas` 一覧ページに `setagaya_sample` カードが表示される
- 既存の `/`, `/setagaya`, `/areas/shibuya` には影響なし

## 2025-01-XX

### 23区画像フォルダの初期構築

- `public/images/wards/` ディレクトリを作成
- 東京23区すべてのslugフォルダを作成：
  - chiyoda, chuo, minato, shinjuku, bunkyo, taito, sumida, koto, shinagawa, meguro, ota, setagaya, shibuya, nakano, suginami, toshima, kita, arakawa, itabashi, nerima, adachi, katsushika, edogawa
- 既存の画像ファイルは移動・削除せず、現状のまま維持（崩壊防止）

### 画像運用ルールの更新（人間にファイル名を決めさせない方針）

- `docs/area-guides-bmad-brief.md` に「3-0. 画像運用ルール」セクションを追加
  - 画像はすべて `public/images/wards/{slug}/` 以下に配置する方針を明文化
  - 人間の役割を「どの区のフォルダに投げるか」だけに最小化
  - ファイル名はAIが提案し、人間は必要に応じてリネームするだけ

- `docs/area-guides-prompt-images.md` の画像提案テーブルを拡張
  - `slug` と `storage_path` フィールドを追加
  - `推奨ファイル名` フィールドを追加（AIが具体的なファイル名を提案）
  - 運用フローを具体例付きで明文化
  - 使用例に `slug`, `storage_path`, `推奨ファイル名`, `YAMLでのpath` を追加

- `docs/area-guides-bmad-brief.md` に「9. AIへの重要な指示」セクションを追加
  - 画像に関するタスクでは必ず `docs/area-guides-prompt-images.md` を参照すること
  - 人間にファイル名を考えさせない方針を明文化

## 2025-01-XX

### 23区分の content/area YAML 箱の初期化

- 東京23区すべてについて、`content/area/` 配下に最低限のキー構造を持つYAMLファイルを整備
- 既存ファイル（`shibuya.yml`、`setagaya.yml`）には不足キーを安全にマージ
- 新規21区については `{slug}.draft.yml` として作成
- 各YAMLファイルには以下の必須キーを定義：
  - `slug`, `title`, `meta`, `tags`, `overview`, `who_it_fits`, `subareas`
  - `rent_by_type`, `commute_times`, `events`, `faq`, `cta`, `sources`, `assets`

### docs に「人間は slug だけ指定すればよい」という運用ルールを明文化

- `docs/area-guides-bmad-brief.md` に「3-2. 23区のYAML箱の初期化と運用」セクションを追加
- `docs/area-guides-reference-article-prompt.md` のプロンプトテンプレートを調整し、slug指定を明確化

## 2025-02-05: 杉並区通勤データ SoT の追加 + 杉並区 G1〜G7 ドラフト YAML の初期化

### 実施内容

- **通勤データのSoT追加**
  - `docs/data-homes-commute-2025q1-suginami.md` を追加（HOMESから取得した杉並区の駅・路線・主要駅アクセス情報の生JSONをアーカイブ）
  - `data/commute-2025q1.ts` を新規作成（通勤情報のSoT）
    - `MajorHub`, `CommuteTime`, `StationCommute`, `WardCommuteData` の型定義を追加
    - `COMMUTE_2025Q1` マップに `suginami` エントリを追加（代表駅4駅を含む全12駅のデータ）
    - `getCommuteByWard()`, `getRepresentativeStations()` ヘルパー関数を追加

- **杉並区YAMLのG1〜G7構造化**
  - `content/area/suginami.draft.yml` を G1〜G7 スキーマで初期化
    - G1: `hero`, `meta`, `overview` を追加（杉並区の概要を短く記述）
    - G2: `who_it_fits` を追加（タグ、説明、サンプル住民1件）
    - G3: `subareas` を追加（荻窪、高円寺、西荻窪、阿佐ケ谷の4エリア）
    - **G4: `money_and_access` を追加（今回のメイン）**
      - `unit_rent_stats`: `data/rent-2025q1.ts` のSoTから賃料データを反映（2025-Q1, homes.co.jp）
      - `commute_times`: `data/commute-2025q1.ts` のSoTから代表駅のアクセス時間を反映
      - 区全体の一言サマリを追加
    - G5: `life` を追加（shopping, dining, parks, education_and_medical の軽めのサンプル）
    - G6: `foreign_friendly` を追加（簡易テキスト）
    - G7: `events`（高円寺阿波踊り、阿佐ヶ谷七夕まつり）、`closing`, `faq` を追加
  - 既存互換性のため、`commute_times`（配列形式）と `rent_by_type`（オブジェクト形式）も追加

### 目的

- 通勤データのSoTを確立し、将来的に23区すべての通勤データを一元管理できる基盤を構築
- 杉並区のエリアガイドをG1〜G7構造で0→1で整備し、G4（お金＆アクセス）にSoTを反映するパターンを確立

### 影響範囲

- `/areas/suginami` がG1〜G7構造のデータを表示可能になる（UIコンポーネント側の対応は別途必要）
- 既存の `/`, `/setagaya`, `/areas/shibuya`, `/areas/setagaya_sample` の挙動に変更なし

