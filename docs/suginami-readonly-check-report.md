# 杉並区（suginami）エリアガイド 0→1 セットアップ - READ ONLY 確認レポート

## 確認日時
2025-02-XX（実行日）

## 1. 各ファイルの役割とポイント

### `docs/area-guides-bmad-brief.md`
**役割**: BMAD METHOD の指示書ファイル。プロジェクト全体のルールと運用方針を定義。

**杉並区セットアップに関連するポイント**:
- **G1〜G7 の定義**（セクション10）: データ構造のグルーピングとデータソース分類（① AIだけ / ② 参考テキストからAI整形 / ③ 人間 or 外部API）
- **4-2. 区別 × 間取り別賃料データのSoT**: `data/rent-2025q1.ts` が賃料データのSoTであること、運用フローの説明
- **3-2. 23区のYAML箱の初期化と運用**: 新規作成時は `{slug}.draft.yml` として作成し、完成したら `{slug}.yml` にマージする方針

### `content/area/setagaya_sample.yml`
**役割**: G1〜G7 構造の実装例（MVP版）。杉並区のYAML作成時のテンプレートとして参照。

**杉並区セットアップに関連するポイント**:
- **G4: Money & Access** の構造:
  - `money_and_access.unit_rent_stats`: 間取り別賃料の詳細データ（`avg_rent_jpy`, `avg_size_sqm`, `note`）
  - `money_and_access.subarea_rent_table`: サブエリア別の賃料・アクセス情報
  - `commute_times`: 主要駅へのアクセス時間（配列形式）
  - `rent_by_type`: 既存互換性のための間取り別賃料（`avg` 形式）
- **G1〜G7 の完全なキー構造**: `hero`, `who_it_fits`, `subareas`, `life`, `foreign_friendly`, `events`, `closing`, `faq` など

### `data/rent-2025q1.ts`
**役割**: 東京23区の間取り別平均賃料のSoT（真実の源）。2025-Q1のHOMESデータを構造化。

**杉並区セットアップに関連するポイント**:
- **`WardSlug` 型**: `"suginami"` が既に定義済み（45行目）
- **`RENT_2025Q1` マップ**: `suginami` の賃料データが既に存在（208-217行目）
  - 1R: 81,400円
  - 1K: 95,800円
  - 1DK: 124,300円
  - 1LDK: 169,700円
  - 2K: 119,900円
  - 2DK: 144,900円
  - 2LDK: 232,600円
  - 3LDK: 281,100円
- **ヘルパー関数**: `getRentByWard("suginami")` で賃料データを取得可能

### `content/area/suginami.draft.yml`
**役割**: 杉並区のエリアガイドYAML（ドラフト版）。現在はほぼ空のテンプレート状態。

**現状**:
- **存在**: ✅ 存在する
- **G1〜G7構造**: ⚠️ **一部のみ**。`setagaya_sample.yml` のような完全なG1〜G7構造にはなっていない
  - 存在するキー: `slug`, `title`, `meta`, `tags`, `overview`, `who_it_fits`, `subareas`, `rent_by_type`, `commute_times`, `events`, `faq`, `cta`, `sources`, `assets`
  - **不足しているキー**: `hero`（`tagline`, `lead`）, `life`（`shopping`, `dining`, `parks`, `education_and_medical`）, `foreign_friendly`, `money_and_access`（`unit_rent_stats`, `subarea_rent_table`）, `closing`
- **データの充実度**: ほぼ空（`null` または空配列）
- **構造の違い**: `commute_times` が `setagaya_sample.yml` とは異なる構造（オブジェクト形式 vs 配列形式）

### `data/commute-2025q1.ts`
**役割**: 通勤情報のSoT（真実の源）。駅・路線・主要駅アクセス情報を構造化。

**現状**: ❌ **まだ存在していない**（今回のセットアップで新規作成予定）

### `docs/area-guides-suginami-setup-prompt.md`
**役割**: 杉並区のG1〜G7 + 通勤SoT セットアップの詳細手順書。Cursor用プロンプトテンプレート。

**内容**:
- **前提・絶対ルール**: 既存ファイル（`shibuya.yml`, `setagaya.yml`, `setagaya_sample.yml`）を壊さないこと
- **STEP 1**: HOMES通勤JSONを `docs/data-homes-commute-2025q1-suginami.md` にアーカイブ保存
- **STEP 2**: `data/commute-2025q1.ts` を新規作成（通勤SoT）
- **STEP 3**: `content/area/suginami.draft.yml` をG1〜G7スキーマで整備（G4はSoTから反映）
- **STEP 4**: `/areas/suginami` の動作確認
- **STEP 5**: Change Log更新
- **STEP 6**: 確認用ターミナルコマンド

---

## 2. 杉並区まわりの現状

### `content/area/suginami.draft.yml` の状態
- ✅ **存在する**
- ⚠️ **G1〜G7構造**: 一部のみ。`setagaya_sample.yml` のような完全な構造にはなっていない
  - 特に `money_and_access` セクションが存在しない
  - `life` セクションが存在しない
  - `foreign_friendly` セクションが存在しない
  - `closing` セクションが存在しない
- **データの充実度**: ほぼ空（`null` または空配列）
- **構造の違い**: `commute_times` が `setagaya_sample.yml` とは異なる構造

### `data/commute-2025q1.ts` の状態
- ❌ **まだ存在していない**（今回のセットアップで新規作成予定）

### 賃料データのSoT
- ✅ `data/rent-2025q1.ts` に `suginami` のデータが既に存在（208-217行目）
- ✅ `getRentByWard("suginami")` で取得可能

---

## 3. リスク・注意点

### 既存挙動を壊さないための注意点

1. **`setagaya_sample.yml` の構造を基準にする**
   - `suginami.draft.yml` は現在、`setagaya_sample.yml` とは異なる構造を持っている
   - 特に `commute_times` が配列形式（`setagaya_sample.yml`）ではなくオブジェクト形式（`suginami.draft.yml`）
   - **対応**: `setagaya_sample.yml` の構造に合わせて `suginami.draft.yml` を再構築する必要がある

2. **`money_and_access` セクションの追加**
   - `suginami.draft.yml` には `money_and_access` セクションが存在しない
   - `setagaya_sample.yml` には `money_and_access.unit_rent_stats` と `money_and_access.subarea_rent_table` が存在
   - **対応**: `setagaya_sample.yml` を参考に `money_and_access` セクションを追加する必要がある

3. **`rent_by_type` の構造の違い**
   - `suginami.draft.yml`: `rent_by_type.types[]` 形式（配列）
   - `setagaya_sample.yml`: `rent_by_type["1R"]` 形式（オブジェクト） + `avg` プロパティ
   - **対応**: `setagaya_sample.yml` の形式に合わせる必要がある（`avg` プロパティを使用）

4. **`commute_times` の構造の違い**
   - `suginami.draft.yml`: オブジェクト形式（`to_shinjuku`, `to_shibuya`, `to_tokyo`）
   - `setagaya_sample.yml`: 配列形式（`[{destination, minutes, type, line}]`）
   - **対応**: `setagaya_sample.yml` の配列形式に合わせる必要がある

5. **既存ページへの影響**
   - `/areas/shibuya`: `ShibuyaStoryLanding` コンポーネントを使用
   - `/areas/setagaya_sample`: `ShibuyaStoryLanding` コンポーネントを使用（`isSetagayaSample` フラグで分岐）
   - `/areas/suginami`: おそらく `DefaultAreaLanding` コンポーネントを使用（要確認）
   - **対応**: `DefaultAreaLanding` がどの構造を期待しているか確認し、`suginami.draft.yml` をそれに合わせる

6. **`data/commute-2025q1.ts` の新規作成**
   - `WardSlug` 型は `data/rent-2025q1.ts` から再利用可能
   - 型定義は `docs/area-guides-suginami-setup-prompt.md` のSTEP 2に記載されている
   - **対応**: プロンプトに従って型定義とデータ構造を作成する

7. **YAMLの互換性**
   - `setagaya_sample.yml` には既存互換性のための `commute_times`（配列形式）と `rent_by_type`（オブジェクト形式）の両方が存在
   - **対応**: `suginami.draft.yml` にも同様に両方の形式を含めることで、既存コンポーネントとの互換性を保つ

---

## 4. 次のステップ（実行時の注意点）

1. **`suginami.draft.yml` の構造を `setagaya_sample.yml` に合わせる**
   - `money_and_access` セクションを追加
   - `life` セクションを追加
   - `foreign_friendly` セクションを追加
   - `closing` セクションを追加
   - `commute_times` を配列形式に変更
   - `rent_by_type` をオブジェクト形式（`avg` プロパティ）に変更

2. **G4（Money & Access）のSoT反映**
   - `data/rent-2025q1.ts` から `suginami` の賃料データを取得し、`rent_by_type` と `money_and_access.unit_rent_stats` に反映
   - `data/commute-2025q1.ts`（新規作成）から代表駅のアクセス情報を取得し、`commute_times` と `money_and_access.commute_table` に反映

3. **既存コンポーネントとの互換性確認**
   - `app/(marketing)/areas/[slug]/page.tsx` が `suginami` をどのコンポーネントにルーティングするか確認
   - そのコンポーネントが期待するYAML構造を確認し、`suginami.draft.yml` をそれに合わせる

---

ここまでの確認結果に問題がなければ、「OK」とだけ返信してくれれば、STEP 1〜5（杉並区通勤JSONの保存〜YAMLドラフト整備）を実行します。



