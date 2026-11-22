import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

/**
 * 主要駅の型定義（23区共通）
 */
export type MajorHub = "新宿" | "渋谷" | "東京" | "品川";

/**
 * 主要駅の順序（固定）
 */
const MAJOR_HUBS: MajorHub[] = ["新宿", "渋谷", "東京", "品川"];

/**
 * YAMLから来る通勤データの行（destination は英語表記の可能性がある）
 */
export type CommuteRow = {
  station: string; // "Koenji" など
  destination: string; // "Shinjuku" または "新宿" など
  minutes: number | null;
  line?: string | null;
  type?: string;
};

/**
 * 駅ごとにグループ化したデータ構造
 */
type StationGrouped = {
  station: string;
  byHub: Record<MajorHub, CommuteRow | undefined>;
};

/**
 * 英語表記の目的地を日本語表記にマッピング
 */
function normalizeDestination(dest: string): MajorHub | null {
  const mapping: Record<string, MajorHub> = {
    "Shinjuku": "新宿",
    "Shibuya": "渋谷",
    "Tokyo": "東京",
    "Shinagawa": "品川",
    "新宿": "新宿",
    "渋谷": "渋谷",
    "東京": "東京",
    "品川": "品川",
  };
  return mapping[dest] || null;
}

/**
 * 通勤データを行ごとにグループ化
 */
function groupByStation(rows: CommuteRow[]): StationGrouped[] {
  const grouped: Record<string, StationGrouped> = {};

  rows.forEach((row) => {
    const station = row.station;
    const hub = normalizeDestination(row.destination);

    // 主要駅以外はスキップ
    if (!hub) return;

    if (!grouped[station]) {
      grouped[station] = {
        station,
        byHub: {
          新宿: undefined,
          渋谷: undefined,
          東京: undefined,
          品川: undefined,
        },
      };
    }

    grouped[station].byHub[hub] = row;
  });

  return Object.values(grouped);
}

interface CommuteTableProps {
  title?: string;
  rows: CommuteRow[];
  /**
   * 代表駅だけに絞りたい場合の駅名リスト（オプション）
   * 例: ["Koenji", "Ogikubo"]
   */
  representativeStations?: string[];
}

/**
 * 23区共通の通勤テーブルコンポーネント
 * 
 * 駅ごとに1行にまとめ、主要駅（新宿/渋谷/東京/品川）への所要時間を横並びで表示します。
 * 
 * @example
 * ```tsx
 * <CommuteTable
 *   title="Access to Major Stations"
 *   rows={area.commute_times}
 *   representativeStations={["Koenji", "Ogikubo"]}
 * />
 * ```
 */
export function CommuteTable({
  title = "Access to Major Stations",
  rows,
  representativeStations,
}: CommuteTableProps) {
  // 安全ガード: データが空の場合は何も表示しない
  if (!rows || rows.length === 0) {
    return null;
  }

  // 駅ごとにグループ化
  const grouped = groupByStation(rows);

  // 代表駅でフィルタ（オプション）
  const filtered = representativeStations
    ? grouped.filter((g) => representativeStations.includes(g.station))
    : grouped;

  // フィルタ後も空の場合は何も表示しない
  if (filtered.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Station</TableHead>
              {MAJOR_HUBS.map((hub) => (
                <TableHead key={hub} className="text-right">
                  {hub}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row.station}>
                <TableCell className="font-medium">{row.station}</TableCell>
                {MAJOR_HUBS.map((hub) => {
                  const cell = row.byHub[hub];
                  if (!cell || cell.minutes == null) {
                    return (
                      <TableCell key={hub} className="text-right">
                        —
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={hub} className="text-right">
                      <div>
                        {cell.minutes} min
                        {cell.line && (
                          <span className="block text-xs text-muted-foreground mt-1">
                            {cell.line}
                          </span>
                        )}
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}



