import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Calendar, CheckCircle2, DollarSign, MapPin, Train } from "lucide-react";

type AreaData = {
  slug: string;
  titleEn: string;
  titleJa?: string;
  summary?: string;
  subtitle?: { en?: string; ja?: string };
  tags?: string[];
  overview?: { en?: string; ja?: string };
  who_it_fits?: 
    | { en?: string[]; ja?: string[] } // 既存形式
    | { 
        tags?: string[]; 
        description?: { en?: string; ja?: string };
        sample_residents?: Array<{
          name: string;
          profile_ja?: string;
          profile_en?: string;
          quote_ja?: string;
          quote_en?: string;
        }>;
      }; // setagaya_sample形式
  lifestyle?: { en?: string; ja?: string };
  life?: {
    shopping?: { summary_ja?: string; summary_en?: string; spots?: Array<{ name: string; type?: string; note_ja?: string; note_en?: string }> };
    dining?: { summary_ja?: string; summary_en?: string; spots?: Array<{ name: string; type?: string; note_ja?: string; note_en?: string }> };
    parks?: { summary_ja?: string; summary_en?: string; spots?: Array<{ name: string; type?: string; note_ja?: string; note_en?: string }> };
    education_and_medical?: { summary_ja?: string; summary_en?: string; spots?: Array<{ name: string; type?: string; note_ja?: string; note_en?: string }> };
  };
  foreign_friendly?: {
    summary_ja?: string;
    summary_en?: string;
    bullets_ja?: string[];
    bullets_en?: string[];
  };
  closing?: {
    text_ja?: string;
    text_en?: string;
    extra_links?: Array<{
      label_ja?: string;
      label_en?: string;
      url?: string | null;
      line_ids?: string[];
    }>;
  };
  inventory_snapshot?: {
    updated_at?: string;
    source_label?: string;
    method_note?: string;
    denominator?: {
      label?: string;
      value?: number;
      unit?: string;
    };
    highlights?: Array<{
      label_en?: string;
      label_ja?: string;
      value?: number | null;
      display_value?: string;
      unit?: string;
      ratio?: number | string | null;
      note_en?: string;
      note_ja?: string;
    }>;
    budget_table?: {
      title_en?: string;
      title_ja?: string;
      rows?: Array<{
        label?: string;
        total?: number | null;
        expat_friendly?: number | null;
        note_en?: string;
        note_ja?: string;
      }>;
    };
  };
  money_and_access?: {
    cta?: {
      primary?: { label_ja?: string; label_en?: string; url?: string | null };
      secondary?: { label_ja?: string; label_en?: string; url?: string | null };
    };
    unit_rent_stats?: {
      quarter?: string;
      source?: string;
      rows?: Array<{
        type: string;
        avg_rent_jpy?: number;
        avg_size_sqm?: number | null;
        note_ja?: string;
        note_en?: string;
      }>;
    };
    subarea_rent_table?: {
      data_source?: string | null;
      rows?: Array<{
        subarea_id: string;
        rent_min_man?: number;
        rent_max_man?: number;
        to_shinjuku_minutes?: number;
        to_shibuya_minutes?: number;
        income_hint_man?: number;
      }>;
    };
  };
  hero?: {
    tagline?: { en?: string; ja?: string };
    lead?: { en?: string; ja?: string };
  };
  assets?: {
    hero?: { path?: string; alt?: { en?: string; ja?: string } };
    map?: { path?: string; alt?: { en?: string; ja?: string } };
  };
  meta?: {
    quarter?: string;
    updated_at?: string;
    reading_time_minutes?: number;
    status?: string;
  };
  subareas?: Array<{
    id?: string;
    name: { en?: string; ja?: string };
    description: { en?: string; ja?: string };
    highlights?: string[];
    cons?: string[];
    hero_image?: { path?: string; alt?: { en?: string; ja?: string } };
  }>;
  rent_by_type?: {
    quarter?: string;
    source?: string;
    "1R"?: RentBucket;
    "1K"?: RentBucket;
    "1DK"?: RentBucket;
    "1LDK"?: RentBucket;
    "2K"?: RentBucket;
    "2DK"?: RentBucket;
    "2LDK"?: RentBucket;
    "3DK"?: RentBucket;
    "3LDK"?: RentBucket;
    "4LDK"?: RentBucket;
  };
  commute_times?: Array<{
    destination: string;
    minutes: number;
    type?: "express" | "local";
    line?: string;
  }>;
  events?: 
    | Array<{
        id?: string;
        name: { en?: string; ja?: string };
        month?: number | string;
        description?: { en?: string; ja?: string };
        hero_image?: { path?: string; alt?: { en?: string; ja?: string } };
      }>
    | {
        items?: Array<{
          id?: string;
          name: { en?: string; ja?: string };
          month?: number | string;
          description?: { en?: string; ja?: string };
          hero_image?: { path?: string; alt?: { en?: string; ja?: string } };
        }>;
      };
  faq?: Array<{
    q: string | { en?: string; ja?: string };
    a: string | { en?: string; ja?: string };
  }>;
  cta?: {
    text?: { en?: string; ja?: string };
    url?: string;
  };
  [key: string]: any;
};

type RentBucket = {
  min?: number;
  max?: number;
  typical?: number;
  avg?: number;
  median?: number;
  count?: number;
};

function formatNumber(value: number | null | undefined) {
  if (typeof value !== "number") return "Limited";
  return value.toLocaleString();
}

function formatYen(value: number | null | undefined) {
  if (typeof value !== "number") return "N/A";
  return `¥${value.toLocaleString()}`;
}

function getRentLabel(bucket?: RentBucket) {
  if (!bucket) return "N/A";
  return formatYen(bucket.median ?? bucket.typical ?? bucket.avg ?? bucket.min);
}

function getRentSubLabel(bucket?: RentBucket) {
  if (!bucket) return "";
  if (bucket.count) return `${bucket.count.toLocaleString()} AtHearth rooms`;
  if (bucket.min && bucket.max) return `${formatYen(bucket.min)} - ${formatYen(bucket.max)}`;
  return "";
}

/**
 * Shibuya専用のストーリー型ランディングページ
 * 体験重視のレイアウトで、読み物として楽しめる構成
 * 
 * 注意: このコンポーネントは content/area/shibuya.yml からデータを読み込みます。
 * YAMLファイルが存在しない、またはデータが不足している場合は、該当セクションが表示されません。
 */
export function ShibuyaStoryLanding({ area }: { area: AreaData }) {
  const isSetagayaSample = area.slug === "setagaya_sample";
  
  // YAMLデータから取得（フォールバック付き）
  // setagaya_sampleの場合は新しい構造（hero.tagline, hero.lead）を優先
  const heroTagline = isSetagayaSample && area.hero?.tagline 
    ? (area.hero.tagline.en || area.hero.tagline.ja || "")
    : "";
  const heroLead = isSetagayaSample && area.hero?.lead
    ? (area.hero.lead.en || area.hero.lead.ja || "")
    : "";
  
  const overview = heroLead || area.overview?.en || area.overview?.ja || "";
  const subtitle = heroTagline || area.subtitle?.en || area.subtitle?.ja || "";
  
  // who_it_fitsの処理（setagaya_sampleの場合は新しい構造に対応）
  let whoItFits: string[] = [];
  if (isSetagayaSample && area.who_it_fits && "description" in area.who_it_fits) {
    // 新しい構造: who_it_fits.description（段落分割）
    const desc = area.who_it_fits.description?.en || area.who_it_fits.description?.ja || "";
    if (desc) {
      // 段落（\n\n）で分割して配列に変換
      whoItFits = desc.split(/\n\n+/).filter(p => p.trim().length > 0);
    }
  } else if (area.who_it_fits && ("en" in area.who_it_fits || "ja" in area.who_it_fits)) {
    // 既存の配列形式
    whoItFits = (area.who_it_fits.en || area.who_it_fits.ja || []) as string[];
  }
  
  const lifestyle = area.lifestyle?.en || area.lifestyle?.ja || "";
  const subareas = area.subareas || [];
  const rentData = area.rent_by_type;
  const inventorySnapshot = area.inventory_snapshot;
  const inventoryHighlights = inventorySnapshot?.highlights || [];
  const budgetRows = inventorySnapshot?.budget_table?.rows || [];
  const commuteTimes = area.commute_times || [];
  
  // eventsの処理（setagaya_sampleの場合はevents.itemsに対応）
  let events: Array<{
    id?: string;
    name: { en?: string; ja?: string };
    month?: number | string;
    description?: { en?: string; ja?: string };
    hero_image?: { path?: string; alt?: { en?: string; ja?: string } };
  }> = [];
  if (isSetagayaSample && area.events && !Array.isArray(area.events) && "items" in area.events) {
    events = area.events.items || [];
  } else if (Array.isArray(area.events)) {
    events = area.events;
  }
  
  // setagaya_sampleの新しい構造に対応
  const life = isSetagayaSample ? area.life : null;
  const foreignFriendly = isSetagayaSample ? area.foreign_friendly : null;
  const closing = isSetagayaSample ? area.closing : null;
  const sampleResidents = isSetagayaSample && area.who_it_fits && "sample_residents" in area.who_it_fits
    ? (area.who_it_fits.sample_residents || [])
    : [];
  
  // FAQの構造を正規化（文字列またはオブジェクトの両方に対応）
  const faqItems = (area.faq || []).map((item) => ({
    q: typeof item.q === "string" ? item.q : item.q?.en || item.q?.ja || "",
    a: typeof item.a === "string" ? item.a : item.a?.en || item.a?.ja || "",
  }));

  // CTAのテキストを取得（setagaya_sampleの場合は新しい構造に対応）
  let ctaText = "Search Properties";
  let ctaUrl = "/search";
  if (isSetagayaSample && area.money_and_access?.cta) {
    ctaText = area.money_and_access.cta.primary?.label_en || area.money_and_access.cta.primary?.label_ja || ctaText;
    ctaUrl = area.money_and_access.cta.primary?.url || ctaUrl;
  } else {
    ctaText = area.cta?.text?.en || area.cta?.text?.ja || ctaText;
    ctaUrl = area.cta?.url || ctaUrl;
  }
  const heroImagePath = area.assets?.hero?.path || "/images/shibuya.jpg";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${heroImagePath}')` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
              {area.titleEn}
            </h1>
            {area.titleJa && (
              <p className="text-2xl md:text-3xl text-slate-200 font-medium">{area.titleJa}</p>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            {/* メタ情報（setagaya_sample専用） */}
            {isSetagayaSample && area.meta && (
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
                {area.meta.updated_at && (
                  <span>Updated: {area.meta.updated_at}</span>
                )}
                {area.meta.reading_time_minutes && (
                  <span>Reading time: {area.meta.reading_time_minutes} min</span>
                )}
                {area.meta.quarter && (
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    {area.meta.quarter}
                  </Badge>
                )}
              </div>
            )}
            {/* setagaya_sampleの場合はwho_it_fits.tagsを表示 */}
            {(isSetagayaSample && area.who_it_fits && "tags" in area.who_it_fits && area.who_it_fits.tags && area.who_it_fits.tags.length > 0) || (area.tags && area.tags.length > 0) ? (
              <div className="flex flex-wrap gap-2 justify-center pt-6">
                {(isSetagayaSample && area.who_it_fits && "tags" in area.who_it_fits && area.who_it_fits.tags ? area.who_it_fits.tags : area.tags || []).map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-700/80 text-slate-200 px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Intro Story Section */}
      {overview && (
        <section className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed whitespace-pre-line">
              {overview}
            </p>
          </div>
        </section>
      )}

      {/* AtHearth Inventory Snapshot */}
      {inventorySnapshot && (
        <section className="container mx-auto px-4 py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
              <div>
                <p className="text-sm font-semibold text-[#00c4a7]">
                  {inventorySnapshot.source_label || "AtHearth inventory snapshot"}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  What the Current Inventory Says
                </h2>
              </div>
              {inventorySnapshot.updated_at && (
                <Badge variant="outline" className="w-fit text-slate-600">
                  As of {inventorySnapshot.updated_at}
                </Badge>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {inventorySnapshot.denominator?.value && (
                <Card className="border-[#00c4a7]/30 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-sm text-slate-500">
                      {inventorySnapshot.denominator.label || "Displayable rooms"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-slate-900">
                      {formatNumber(inventorySnapshot.denominator.value)}
                    </p>
                    <p className="text-sm text-slate-500">
                      {inventorySnapshot.denominator.unit || "rooms"}
                    </p>
                  </CardContent>
                </Card>
              )}

              {inventoryHighlights.slice(0, 5).map((item) => (
                <Card key={item.label_en || item.label_ja} className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-sm text-slate-500">
                      {item.label_en || item.label_ja}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-slate-900">
                        {item.display_value || formatNumber(item.value)}
                      </p>
                      {item.ratio && (
                        <p className="text-sm font-semibold text-[#00c4a7]">
                          {typeof item.ratio === "number" ? `${item.ratio}%` : item.ratio}
                        </p>
                      )}
                    </div>
                    {(item.note_en || item.note_ja) && (
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {item.note_en || item.note_ja}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {budgetRows.length > 0 && (
              <Card className="mt-6 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BarChart3 className="text-[#00c4a7]" size={22} />
                    {inventorySnapshot.budget_table?.title_en || "Budget Reality Check"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] text-left text-sm">
                      <thead className="border-b text-slate-500">
                        <tr>
                          <th className="py-2 pr-4 font-semibold">Budget band</th>
                          <th className="py-2 pr-4 font-semibold">All matching rooms</th>
                          <th className="py-2 pr-4 font-semibold">Foreign-applicant negotiable</th>
                          <th className="py-2 font-semibold">Reading</th>
                        </tr>
                      </thead>
                      <tbody>
                        {budgetRows.map((row) => (
                          <tr key={row.label} className="border-b last:border-0">
                            <td className="py-3 pr-4 font-semibold text-slate-900">{row.label}</td>
                            <td className="py-3 pr-4 text-slate-700">{formatNumber(row.total)}</td>
                            <td className="py-3 pr-4 text-slate-700">
                              {formatNumber(row.expat_friendly)}
                            </td>
                            <td className="py-3 text-slate-600">{row.note_en || row.note_ja}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {inventorySnapshot.method_note && (
                    <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                      {inventorySnapshot.method_note}
                    </p>
                  )}
                  {ctaUrl && (
                    <div className="mt-5">
                      <Button asChild className="bg-[#00c4a7] hover:bg-[#00a38c] text-white">
                        <Link href={ctaUrl}>{ctaText}</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Who It Fits Section */}
      {whoItFits.length > 0 && (
        <section className="container mx-auto px-4 py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              {isSetagayaSample ? "Who This Area Fits" : "Who Is Shibuya For?"}
            </h2>
            <div className="grid gap-4 md:gap-6">
              {whoItFits.map((item, idx) => (
                <Card key={idx} className="border-l-4 border-l-[#00c4a7] shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-[#00c4a7] mt-1 flex-shrink-0" size={24} />
                      <p className="text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* setagaya_sampleの場合はsample_residentsも表示 */}
            {isSetagayaSample && sampleResidents.length > 0 && (
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {sampleResidents.map((resident: { name: string; profile_ja?: string; profile_en?: string; quote_ja?: string; quote_en?: string }, idx: number) => (
                  <Card key={idx} className="shadow-sm">
                    <CardContent className="pt-6">
                      <p className="text-slate-700 italic mb-3">
                        "{resident.quote_en || resident.quote_ja}"
                      </p>
                      <div className="text-sm text-slate-600">
                        <p className="font-semibold">{resident.name}</p>
                        <p>{resident.profile_en || resident.profile_ja}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Lifestyle Section */}
      {(lifestyle || (isSetagayaSample && life)) && (
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Lifestyle & Amenities
            </h2>
            {isSetagayaSample && life ? (
              <div className="space-y-6">
                {life.shopping && (
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">Shopping</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-3">{life.shopping.summary_en || life.shopping.summary_ja}</p>
                      {life.shopping.spots && life.shopping.spots.length > 0 && (
                        <ul className="space-y-2">
                          {life.shopping.spots.map((spot: { name: string; note_ja?: string; note_en?: string }, idx: number) => (
                            <li key={idx} className="text-sm text-slate-600">
                              <span className="font-semibold">{spot.name}</span>: {spot.note_en || spot.note_ja}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                )}
                {life.dining && (
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">Dining</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-3">{life.dining.summary_en || life.dining.summary_ja}</p>
                      {life.dining.spots && life.dining.spots.length > 0 && (
                        <ul className="space-y-2">
                          {life.dining.spots.map((spot: { name: string; note_ja?: string; note_en?: string }, idx: number) => (
                            <li key={idx} className="text-sm text-slate-600">
                              <span className="font-semibold">{spot.name}</span>: {spot.note_en || spot.note_ja}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                )}
                {life.parks && (
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">Parks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-3">{life.parks.summary_en || life.parks.summary_ja}</p>
                      {life.parks.spots && life.parks.spots.length > 0 && (
                        <ul className="space-y-2">
                          {life.parks.spots.map((spot: { name: string; note_ja?: string; note_en?: string }, idx: number) => (
                            <li key={idx} className="text-sm text-slate-600">
                              <span className="font-semibold">{spot.name}</span>: {spot.note_en || spot.note_ja}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                )}
                {life.education_and_medical && (
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">Education & Medical</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-3">{life.education_and_medical.summary_en || life.education_and_medical.summary_ja}</p>
                      {life.education_and_medical.spots && life.education_and_medical.spots.length > 0 && (
                        <ul className="space-y-2">
                          {life.education_and_medical.spots.map((spot: { name: string; note_ja?: string; note_en?: string }, idx: number) => (
                            <li key={idx} className="text-sm text-slate-600">
                              <span className="font-semibold">{spot.name}</span>: {spot.note_en || spot.note_ja}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                      {lifestyle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Foreign Friendly Section (setagaya_sample only) */}
      {isSetagayaSample && foreignFriendly && (
        <section className="container mx-auto px-4 py-16 md:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Foreign-Friendly Guide
            </h2>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                {(foreignFriendly.summary_en || foreignFriendly.summary_ja) && (
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {foreignFriendly.summary_en || foreignFriendly.summary_ja}
                  </p>
                )}
                {(foreignFriendly.bullets_en || foreignFriendly.bullets_ja) && (
                  <ul className="space-y-3">
                    {(foreignFriendly.bullets_en || foreignFriendly.bullets_ja || []).map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#00c4a7] mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Subareas Section */}
      {subareas.length > 0 && (
        <section className="container mx-auto px-4 py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Popular Neighborhoods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subareas.map((subarea, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MapPin className="text-[#00c4a7]" size={20} />
                      {subarea.name?.en || subarea.name?.ja}
                    </CardTitle>
                    {subarea.name?.ja && subarea.name?.en && (
                      <CardDescription className="text-sm">{subarea.name.ja}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-4">
                      {subarea.description?.en || subarea.description?.ja}
                    </p>
                    {subarea.highlights && subarea.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {subarea.highlights.map((highlight, hIdx) => (
                          <Badge key={hIdx} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {/* setagaya_sampleの場合はconsも表示 */}
                    {isSetagayaSample && subarea.cons && subarea.cons.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-slate-200">
                        <p className="text-xs font-semibold text-slate-500 mb-1">注意点:</p>
                        <ul className="text-xs text-slate-600 space-y-1">
                          {subarea.cons.map((con, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-1">
                              <span className="text-slate-400">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rent & Access Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rent Section */}
            {(rentData || (isSetagayaSample && area.money_and_access?.unit_rent_stats)) && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <DollarSign className="text-[#00c4a7]" size={24} />
                    AtHearth Rent Medians
                    {(rentData?.quarter || area.money_and_access?.unit_rent_stats?.quarter) && (
                      <Badge variant="outline" className="ml-2 text-xs">
                        {rentData?.quarter || area.money_and_access?.unit_rent_stats?.quarter}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSetagayaSample && area.money_and_access?.unit_rent_stats?.rows ? (
                    // setagaya_sample専用: unit_rent_stats を使用
                    <div className="space-y-3">
                      {area.money_and_access.unit_rent_stats.rows.map((row, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-sm">{row.type}</p>
                            {row.avg_rent_jpy && (
                              <p className="text-lg font-bold text-[#00c4a7]">
                                ¥{row.avg_rent_jpy.toLocaleString()}
                              </p>
                            )}
                          </div>
                          {row.avg_size_sqm && (
                            <p className="text-xs text-slate-500">約 {row.avg_size_sqm}㎡</p>
                          )}
                          {(row.note_en || row.note_ja) && (
                            <p className="text-xs text-slate-600 mt-1">{row.note_en || row.note_ja}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : rentData ? (
                    <div className="grid grid-cols-2 gap-4">
                      {(["1K", "1LDK", "2LDK", "3LDK"] as const).map((layout) => {
                        const bucket = rentData[layout];
                        if (!bucket) return null;

                        return (
                          <div key={layout} className="p-3 bg-slate-50 rounded-lg">
                            <p className="font-semibold text-sm mb-1">{layout}</p>
                            <p className="text-lg font-bold text-[#00c4a7]">
                              {getRentLabel(bucket)}
                            </p>
                            {getRentSubLabel(bucket) && (
                              <p className="text-xs text-slate-500 mt-1">
                                {getRentSubLabel(bucket)}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                  <p className="text-xs text-slate-500 italic mt-4">
                    * Median listed rent plus management fee from the AtHearth sample. Current listings can differ.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Access Section */}
            {commuteTimes.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Train className="text-[#00c4a7]" size={24} />
                    Access to Major Stations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {commuteTimes.map((commute, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-semibold">{commute.destination}</p>
                          {commute.type && commute.line && (
                            <p className="text-xs text-slate-500 capitalize">
                              {commute.type} • {commute.line}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#00c4a7]">{commute.minutes}</p>
                          <p className="text-xs text-slate-500">min</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="container mx-auto px-4 py-16 md:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="bg-white rounded-lg px-4 border border-slate-200">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed whitespace-pre-line pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Events Timeline */}
      {events.length > 0 && (
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Annual Events & Festivals
            </h2>
            <div className="space-y-6">
              {events.map((event, idx) => (
                <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-4 md:gap-6">
                      {event.month && (
                        <div className="flex-shrink-0">
                          <Badge variant="outline" className="text-sm px-3 py-1 flex items-center gap-1">
                            <Calendar size={14} />
                            {event.month}
                          </Badge>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-slate-900">
                          {event.name?.en || event.name?.ja}
                        </h3>
                        {event.description && (
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {event.description?.en || event.description?.ja}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {isSetagayaSample && closing ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold">{closing.text_en || closing.text_ja}</h2>
              {closing.extra_links && closing.extra_links.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  {closing.extra_links.map((link: { label_ja?: string; label_en?: string; url?: string | null }, idx: number) => (
                    <Button
                      key={idx}
                      asChild
                      variant={idx === 0 ? "default" : "outline"}
                      size="lg"
                      className={idx === 0 ? "bg-[#00c4a7] hover:bg-[#00a38c] text-white px-8 py-6 text-lg" : "border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg"}
                    >
                      <Link href={link.url || "#"}>{link.label_en || link.label_ja}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Test the Search?</h2>
              <p className="text-lg md:text-xl text-slate-200">
                Start broad, then narrow by budget, applicant conditions, and must-have lifestyle details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" className="bg-[#00c4a7] hover:bg-[#00a38c] text-white px-8 py-6 text-lg">
                  <Link href={ctaUrl}>{ctaText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg">
                  <Link href="/readiness">Readiness Check</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
