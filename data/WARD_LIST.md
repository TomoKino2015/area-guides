# 東京23区リスト / Tokyo 23 Wards List

## データ作成状況 / Data Status

| # | 区名（日本語） | Ward Name (English) | Slug | Status | Priority |
|---|--------------|---------------------|------|--------|----------|
| 1 | 世田谷区 | Setagaya | `setagaya` | ✅ Complete | High |
| 2 | 渋谷区 | Shibuya | `shibuya` | ⏳ Pending | High |
| 3 | 新宿区 | Shinjuku | `shinjuku` | ⏳ Pending | High |
| 4 | 港区 | Minato | `minato` | ⏳ Pending | High |
| 5 | 目黒区 | Meguro | `meguro` | ⏳ Pending | High |
| 6 | 杉並区 | Suginami | `suginami` | ⏳ Pending | Medium |
| 7 | 練馬区 | Nerima | `nerima` | ⏳ Pending | Medium |
| 8 | 大田区 | Ota | `ota` | ⏳ Pending | Medium |
| 9 | 中野区 | Nakano | `nakano` | ⏳ Pending | Medium |
| 10 | 豊島区 | Toshima | `toshima` | ⏳ Pending | Medium |
| 11 | 品川区 | Shinagawa | `shinagawa` | ⏳ Pending | Medium |
| 12 | 板橋区 | Itabashi | `itabashi` | ⏳ Pending | Low |
| 13 | 江東区 | Koto | `koto` | ⏳ Pending | Low |
| 14 | 足立区 | Adachi | `adachi` | ⏳ Pending | Low |
| 15 | 葛飾区 | Katsushika | `katsushika` | ⏳ Pending | Low |
| 16 | 江戸川区 | Edogawa | `edogawa` | ⏳ Pending | Low |
| 17 | 墨田区 | Sumida | `sumida` | ⏳ Pending | Low |
| 18 | 北区 | Kita | `kita` | ⏳ Pending | Low |
| 19 | 荒川区 | Arakawa | `arakawa` | ⏳ Pending | Low |
| 20 | 文京区 | Bunkyo | `bunkyo` | ⏳ Pending | Medium |
| 21 | 台東区 | Taito | `taito` | ⏳ Pending | Medium |
| 22 | 千代田区 | Chiyoda | `chiyoda` | ⏳ Pending | High |
| 23 | 中央区 | Chuo | `chuo` | ⏳ Pending | High |

## 優先順位の基準 / Priority Criteria

### High (高優先度)
- 外国人居住者が多い
- 主要ビジネス街・繁華街
- 賃貸需要が高い
- 例: 渋谷、新宿、港、千代田、中央、世田谷、目黒

### Medium (中優先度)
- 住宅エリアとして人気
- アクセスが良好
- 例: 杉並、練馬、中野、豊島、品川、文京、台東

### Low (低優先度)
- 都心から離れている
- 住宅中心エリア
- 例: 足立、葛飾、江戸川、北、荒川

## データ作成手順 / Data Creation Steps

1. `data/wards/_template.ts` をコピー
2. 区名でリネーム（例: `shibuya.ts`）
3. 以下の情報を収集して記入:
   - 基本情報（人口、面積、人口密度）
   - 主要エリアと賃料相場
   - 交通アクセス情報
   - 生活環境（買い物、飲食、公園など）
   - 国際対応施設（学校、病院、コミュニティ）
   - 年間イベント・お祭り
   - おすすめスポット
4. 画像を `public/images/[ward-slug]/` に配置
5. `data/index.ts` にインポートして追加
6. `pnpm build` でビルド確認

## 画像ガイドライン / Image Guidelines

各区につき以下の画像を用意:
- ヒーロー画像: 1200x600px
- マップ画像: 800x400px
- スポット画像: 各600x400px（最低3枚、推奨6枚）

形式: WebP または JPEG（最適化済み）

## データソース / Data Sources

- 人口統計: 東京都統計
- 賃料相場: AtHearth社内データ
- 施設情報: 各区公式サイト
- イベント情報: 各区観光協会、国際交流センター

---

**更新日**: 2025年2月  
**担当**: AtHearth Development Team



