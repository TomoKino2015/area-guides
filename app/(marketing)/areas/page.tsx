import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type AreaListItem = {
  slug: string;
  ja: string;
  en: string;
  summaryJa?: string;
  summaryEn?: string;
  status: "Published" | "Draft";
  tags: string[];
};

function loadAreas(): AreaListItem[] {
  try {
    const dir = path.join(process.cwd(), "content", "area");
    if (!fs.existsSync(dir)) {
      console.warn("Content directory does not exist:", dir);
      return [];
    }

    const enableDrafts = process.env.AREA_GUIDES_ENABLE_DRAFTS === "true";
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".yml"))
      .filter((f) => enableDrafts || (!f.endsWith(".draft.yml") && !f.includes("_sample")));

    if (files.length === 0) {
      console.warn("No YAML files found in:", dir);
      return [];
    }

    const areas = files
      .map((f): AreaListItem | null => {
        try {
          // ファイル名からslugを取得（.yml または .draft.yml を除去）
          const slug = f.replace(/\.draft\.yml$/, "").replace(/\.yml$/, "");
          const raw = fs.readFileSync(path.join(dir, f), "utf8");
          const data = YAML.parse(raw) ?? {};

          // YAMLのslugを優先、なければファイル名ベース
          const finalSlug = data?.slug || slug;

          // 旧/新スキーマ両対応でタイトル取得
          const jaTitle =
            (typeof data?.title === "object" && data?.title?.ja) ||
            data?.locales?.ja?.title ||
            data?.titleJa ||
            (typeof data?.title === "string" ? data.title : null) ||
            finalSlug;
          const enTitle =
            (typeof data?.title === "object" && data?.title?.en) ||
            data?.locales?.en?.title ||
            data?.titleEn ||
            (typeof data?.title === "string" ? data.title : null) ||
            finalSlug;

          const summaryJa =
            data?.locales?.ja?.summary ??
            data?.summaryJa ??
            "";
          const summaryEn =
            data?.locales?.en?.summary ??
            data?.summaryEn ??
            "";

          // status判定: meta.status または status を確認、なければ "Published" 扱い
          const status: "Published" | "Draft" =
            data?.meta?.status === "Draft" || data?.status === "Draft"
              ? "Draft"
              : "Published";

          const tags: string[] = Array.isArray(data?.tags) ? data.tags : [];

          return {
            slug: finalSlug,
            ja: String(jaTitle || finalSlug),
            en: String(enTitle || finalSlug),
            summaryJa: summaryJa || undefined,
            summaryEn: summaryEn || undefined,
            status,
            tags,
          };
        } catch (error) {
          console.error(`Error processing file ${f}:`, error);
          return null;
        }
      })
      .filter((item): item is AreaListItem => item !== null);

    // slug ごとに重複を解消（Published を優先、どちらも同じ status なら最初を採用）
    const uniqueBySlug = new Map<string, AreaListItem>();
    for (const area of areas) {
      const existing = uniqueBySlug.get(area.slug);
      if (!existing) {
        uniqueBySlug.set(area.slug, area);
        continue;
      }
      // 既存が Published の場合はそのまま
      if (existing.status === "Published") continue;
      // 新しい方が Published の場合は置き換え
      if (area.status === "Published") {
        uniqueBySlug.set(area.slug, area);
      }
      // どちらも Draft の場合は最初（既存）を優先
    }

    const uniqueAreas = Array.from(uniqueBySlug.values());

    // ソート: Published を上に、そのあと Draft
    // 各グループ内では title.ja → title.en → slug の順でソート
    return uniqueAreas.sort((a, b) => {
      // まず status でソート（Published が先）
      if (a.status !== b.status) {
        if (a.status === "Published") return -1;
        if (b.status === "Published") return 1;
      }

      // 同じ status 内では、title.ja → title.en → slug の順でソート
      const aSortKey = a.ja || a.en || a.slug;
      const bSortKey = b.ja || b.en || b.slug;
      return aSortKey.localeCompare(bSortKey);
    });
  } catch (error) {
    console.error("Error loading areas:", error);
    return [];
  }
}

function getAreaImage(slug: string): string | null {
  // setagaya_sampleの場合は areas/ 配下を確認
  if (slug === "setagaya_sample") {
    const possibleExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    for (const ext of possibleExtensions) {
      const heroPath = path.join(process.cwd(), "public", "images", "areas", slug, `hero${ext}`);
      if (fs.existsSync(heroPath)) {
        return `/images/areas/${slug}/hero${ext}`;
      }
    }
    return null;
  }

  // その他のエリアは既存のロジック（wards/ または images/ 直下）
  const possibleExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  // まず wards/ 配下を確認
  for (const ext of possibleExtensions) {
    const wardsPath = path.join(process.cwd(), "public", "images", "wards", slug, `hero-main${ext}`);
    if (fs.existsSync(wardsPath)) {
      return `/images/wards/${slug}/hero-main${ext}`;
    }
  }
  // 次に images/ 直下を確認（既存の互換性のため）
  for (const ext of possibleExtensions) {
    const imagePath = path.join(process.cwd(), "public", "images", `${slug}${ext}`);
    if (fs.existsSync(imagePath)) {
      return `/images/${slug}${ext}`;
    }
  }
  return null;
}

export default function AreasIndexPage() {
  let areas: AreaListItem[] = [];
  let error: string | null = null;

  try {
    areas = loadAreas();
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error";
    console.error("Failed to load areas:", e);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 m-4 rounded-lg shadow-sm">
          <p className="font-bold">Error loading areas:</p>
          <p>{error}</p>
        </div>
      )}

      {/* Hero セクション */}
      <section className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Tokyo 23 Wards Area Guides
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            東京23区のエリアガイド。気になるエリアから詳しい情報をチェックできます。
            <br className="hidden sm:block" />
            Discover the perfect neighborhood for your life in Tokyo.
          </p>
        </div>
      </section>

      {/* Area Cards */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        {areas.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <p className="text-lg text-muted-foreground mb-2">まだエリアが登録されていません。</p>
              <p className="text-sm text-muted-foreground">No areas available yet.</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">Area Guides</h2>
              <p className="text-sm text-slate-600">
                {areas.length} {areas.length === 1 ? "area" : "areas"} available
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => {
                const imageSrc = getAreaImage(area.slug);
                const isDraft = area.status === "Draft";

                const href =
                  area.slug === "setagaya"
                    ? "/"
                    : `/areas/${area.slug}`;

                return (
                  <Card
                    key={area.slug}
                    className="flex flex-col overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                  >
                    {/* 画像 */}
                    <div className="relative h-48 w-full bg-gradient-to-br from-slate-100 to-slate-200">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={`${area.en} area image`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          unoptimized
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-slate-400">
                          <div className="text-center">
                            <div className="text-4xl mb-2">📍</div>
                            <span className="text-sm">No image</span>
                          </div>
                        </div>
                      )}
                      {isDraft && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
                            Draft
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-3">
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-semibold text-slate-900">
                          {area.en}
                        </CardTitle>
                        <CardDescription className="text-sm text-slate-600">
                          {area.ja}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-3 pb-4">
                      {(area.summaryEn || area.summaryJa) && (
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {area.summaryEn || area.summaryJa}
                        </p>
                      )}

                      {area.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {area.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-slate-100 text-slate-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {area.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                              +{area.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="border-t border-slate-100 bg-slate-50/50 pt-4">
                      <Link href={href} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full text-sm font-medium hover:bg-[#00c4a7] hover:text-white hover:border-[#00c4a7] transition-colors"
                        >
                          View area guide →
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
