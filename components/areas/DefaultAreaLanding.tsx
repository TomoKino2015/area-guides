import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CommuteTable, type CommuteRow } from "./CommuteTable";
import { getRepresentativeStations, getRepresentativeCommuteRows } from "@/data/commute-2025q1";
import type { WardSlug } from "@/data/rent-2025q1";

type AreaData = {
  slug: string;
  titleEn: string;
  titleJa?: string;
  summary?: string;
  meta?: {
    status?: string;
  };
  status?: string;
  hero?: {
    tagline?: {
      ja?: string;
      en?: string;
    };
    lead?: {
      ja?: string;
      en?: string;
    };
  };
  who_it_fits?: {
    tags?: string[];
    description?: {
      ja?: string;
      en?: string;
    };
    sample_residents?: Array<{
      name?: string;
      profile_ja?: string;
      profile_en?: string;
      quote_ja?: string;
      quote_en?: string;
    }>;
  };
  subareas?: Array<{
    id?: string;
    name?: {
      ja?: string;
      en?: string;
    };
    description?: {
      ja?: string;
      en?: string;
    };
    highlights?: string[];
    cons?: string[];
  }>;
  money_and_access?: {
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
    summary?: {
      ja?: string;
      en?: string;
    };
  };
  commute_times?: Array<{
    destination: string;
    minutes: number | null;
    type?: string;
    line?: string | null;
    station?: string;
  }>;
  life?: {
    shopping?: {
      summary_ja?: string;
      summary_en?: string;
      spots?: Array<{
        name?: string;
        type?: string;
        note_ja?: string;
        note_en?: string;
      }>;
    };
    dining?: {
      summary_ja?: string;
      summary_en?: string;
      spots?: Array<{
        name?: string;
        type?: string;
        note_ja?: string;
        note_en?: string;
      }>;
    };
    parks?: {
      summary_ja?: string;
      summary_en?: string;
      spots?: Array<{
        name?: string;
        type?: string;
        note_ja?: string;
        note_en?: string;
      }>;
    };
    education_and_medical?: {
      summary_ja?: string;
      summary_en?: string;
      spots?: Array<{
        name?: string;
        type?: string;
        note_ja?: string;
        note_en?: string;
      }>;
    };
  };
  foreign_friendly?: {
    summary_ja?: string;
    summary_en?: string;
    bullets_ja?: string[];
    bullets_en?: string[];
  };
  events?: {
    items?: Array<{
      id?: string;
      name?: {
        ja?: string;
        en?: string;
      };
      month?: number;
      description?: {
        ja?: string;
        en?: string;
      };
    }>;
  };
  closing?: {
    text_ja?: string;
    text_en?: string;
    extra_links?: Array<{
      label_ja?: string;
      label_en?: string;
      url?: string | null;
    }>;
  };
  faq?: Array<{
    q?: {
      ja?: string;
      en?: string;
    };
    a?: {
      ja?: string;
      en?: string;
    };
  }>;
  [key: string]: any; // YAMLの他のフィールドも受け取れるように
};

/**
 * 汎用エリアランディングページコンポーネント（23区共通）
 * G1〜G7の全セクションを表示
 */
export function DefaultAreaLanding({ area }: { area: AreaData }) {
  const isDraft = area?.meta?.status === "Draft" || area?.status === "Draft";
  const heroTagline = area?.hero?.tagline?.en || area?.hero?.tagline?.ja;
  const heroLead = area?.hero?.lead?.en || area?.hero?.lead?.ja;
  const rentStats = area?.money_and_access?.unit_rent_stats;
  const commuteTimes = area?.commute_times;

  // SoTから代表駅を取得（オプション）
  let representativeStations: string[] | undefined;
  try {
    const commuteData = getRepresentativeStations(area.slug as WardSlug);
    if (commuteData.length > 0) {
      representativeStations = commuteData.map((s) => s.nameEn);
    }
  } catch {
    // SoTにデータがない場合は undefined のまま（全駅表示）
  }

  // YAMLの commute_times を CommuteRow[] にマッピング
  const yamlCommuteRows: CommuteRow[] | undefined = commuteTimes?.map((ct) => ({
    station: ct.station || "",
    destination: ct.destination,
    minutes: ct.minutes ?? null,
    line: ct.line ?? null,
    type: ct.type,
  }));

  // SoTから代表駅の通勤データを取得（最大4駅）
  let sotCommuteRows: CommuteRow[] = [];
  try {
    const sotRows = getRepresentativeCommuteRows(area.slug as WardSlug, 4);
    sotCommuteRows = sotRows.map((row) => ({
      station: row.station,
      destination: row.destination,
      minutes: row.minutes,
      line: row.line,
      type: row.type,
    }));
  } catch {
    // SoTにデータがない場合は空配列のまま
  }

  // YAMLとSoTのデータをマージ（優先順位: YAML > SoT）
  // YAMLにない駅はSoTから補完
  const commuteRows: CommuteRow[] | undefined = (() => {
    if (yamlCommuteRows && yamlCommuteRows.length > 0) {
      // YAMLのデータがある場合
      const yamlStations = new Set(yamlCommuteRows.map((r) => r.station));
      // YAMLにない駅をSoTから追加
      const additionalRows = sotCommuteRows.filter(
        (r) => !yamlStations.has(r.station)
      );
      return [...yamlCommuteRows, ...additionalRows];
    } else if (sotCommuteRows.length > 0) {
      // YAMLのデータが無い場合はSoTのみ
      return sotCommuteRows;
    }
    return undefined;
  })();

  // 言語選択ヘルパー（簡易版：en優先、なければja）
  const getText = (obj: { en?: string; ja?: string } | string | undefined): string => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj.en || obj.ja || "";
  };

  // パラグラフ分割ヘルパー
  const splitParagraphs = (text: string | undefined): string[] => {
    if (!text) return [];
    return text.split(/\n\n+/).filter((p) => p.trim().length > 0);
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-12">
        {/* G1: Hero Section */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold">{area.titleEn}</h1>
            {isDraft && (
              <Badge variant="outline" className="text-xs">
                Draft
              </Badge>
            )}
          </div>
          {area.titleJa && area.titleJa !== area.titleEn && (
            <p className="text-xl text-muted-foreground mb-4">{area.titleJa}</p>
          )}
          {heroTagline && (
            <p className="text-lg text-slate-700 mb-4">{heroTagline}</p>
          )}
          {heroLead && (
            <div className="prose prose-lg max-w-none">
              {splitParagraphs(heroLead).map((para, idx) => (
                <p key={idx} className="text-muted-foreground mb-3">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* G2: Who It Fits */}
        {area.who_it_fits && (
          <Card>
            <CardHeader>
              <CardTitle>Who This Area Fits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {area.who_it_fits.tags && area.who_it_fits.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {area.who_it_fits.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              {area.who_it_fits.description && (
                <div className="prose max-w-none">
                  {splitParagraphs(
                    getText(area.who_it_fits.description)
                  ).map((para, idx) => (
                    <p key={idx} className="text-muted-foreground mb-3">
                      {para}
                    </p>
                  ))}
                </div>
              )}
              {area.who_it_fits.sample_residents &&
                area.who_it_fits.sample_residents.length > 0 && (
                  <div className="grid gap-4 md:grid-cols-2 mt-6">
                    {area.who_it_fits.sample_residents.slice(0, 2).map((resident, idx) => (
                      <Card key={idx} className="bg-slate-50">
                        <CardContent className="pt-6">
                          <p className="font-medium mb-2">{resident.name}</p>
                          <p className="text-sm text-muted-foreground mb-2">
                            {resident.profile_en || resident.profile_ja}
                          </p>
                          <p className="text-sm italic">
                            "{resident.quote_en || resident.quote_ja}"
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
            </CardContent>
          </Card>
        )}

        {/* G3: Subareas */}
        {area.subareas && area.subareas.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Popular Neighborhoods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {area.subareas.map((subarea, idx) => (
                  <Card key={idx} className="bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {getText(subarea.name) || `Subarea ${idx + 1}`}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {subarea.description && (
                        <p className="text-sm text-muted-foreground">
                          {getText(subarea.description)}
                        </p>
                      )}
                      {subarea.highlights && subarea.highlights.length > 0 && (
                        <div>
                          <p className="text-xs font-medium mb-1">Highlights:</p>
                          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                            {subarea.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {subarea.cons && subarea.cons.length > 0 && (
                        <div>
                          <p className="text-xs font-medium mb-1">Considerations:</p>
                          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                            {subarea.cons.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* G4: Money & Access */}
        {(rentStats || commuteRows) && (
          <div className="space-y-6">
            {area.money_and_access?.summary && (
              <p className="text-muted-foreground">
                {getText(area.money_and_access.summary)}
              </p>
            )}
            {rentStats && rentStats.rows && rentStats.rows.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Average Rent by Floor Plan</CardTitle>
                  {rentStats.quarter && rentStats.source && (
                    <CardDescription>
                      {rentStats.quarter} • Source: {rentStats.source}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Avg. Rent (JPY)</TableHead>
                        <TableHead className="text-right">Size (㎡)</TableHead>
                        <TableHead>Note</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rentStats.rows.map((row, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{row.type}</TableCell>
                          <TableCell className="text-right">
                            {row.avg_rent_jpy
                              ? `¥${row.avg_rent_jpy.toLocaleString()}`
                              : "—"}
                          </TableCell>
                          <TableCell className="text-right">
                            {row.avg_size_sqm ? `${row.avg_size_sqm}` : "—"}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {row.note_en || row.note_ja || "—"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
            {commuteRows && commuteRows.length > 0 && (
              <CommuteTable
                title="Access to Major Stations"
                rows={commuteRows}
              />
            )}
          </div>
        )}

        {/* G5: Life & Amenities */}
        {area.life && (
          <Card>
            <CardHeader>
              <CardTitle>Life & Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {area.life.shopping && (
                  <AccordionItem value="shopping">
                    <AccordionTrigger>Shopping</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      {area.life.shopping.summary_en ||
                        area.life.shopping.summary_ja ? (
                        <p className="text-sm text-muted-foreground">
                          {area.life.shopping.summary_en ||
                            area.life.shopping.summary_ja}
                        </p>
                      ) : null}
                      {area.life.shopping.spots &&
                        area.life.shopping.spots.length > 0 && (
                          <ul className="space-y-2">
                            {area.life.shopping.spots.map((spot, idx) => (
                              <li key={idx} className="text-sm">
                                <span className="font-medium">{spot.name}</span>
                                {(spot.note_en || spot.note_ja) && (
                                  <span className="text-muted-foreground ml-2">
                                    — {spot.note_en || spot.note_ja}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                    </AccordionContent>
                  </AccordionItem>
                )}
                {area.life.dining && (
                  <AccordionItem value="dining">
                    <AccordionTrigger>Dining</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      {area.life.dining.summary_en ||
                        area.life.dining.summary_ja ? (
                        <p className="text-sm text-muted-foreground">
                          {area.life.dining.summary_en ||
                            area.life.dining.summary_ja}
                        </p>
                      ) : null}
                      {area.life.dining.spots &&
                        area.life.dining.spots.length > 0 && (
                          <ul className="space-y-2">
                            {area.life.dining.spots.map((spot, idx) => (
                              <li key={idx} className="text-sm">
                                <span className="font-medium">{spot.name}</span>
                                {(spot.note_en || spot.note_ja) && (
                                  <span className="text-muted-foreground ml-2">
                                    — {spot.note_en || spot.note_ja}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                    </AccordionContent>
                  </AccordionItem>
                )}
                {area.life.parks && (
                  <AccordionItem value="parks">
                    <AccordionTrigger>Parks & Nature</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      {area.life.parks.summary_en ||
                        area.life.parks.summary_ja ? (
                        <p className="text-sm text-muted-foreground">
                          {area.life.parks.summary_en || area.life.parks.summary_ja}
                        </p>
                      ) : null}
                      {area.life.parks.spots &&
                        area.life.parks.spots.length > 0 && (
                          <ul className="space-y-2">
                            {area.life.parks.spots.map((spot, idx) => (
                              <li key={idx} className="text-sm">
                                <span className="font-medium">{spot.name}</span>
                                {(spot.note_en || spot.note_ja) && (
                                  <span className="text-muted-foreground ml-2">
                                    — {spot.note_en || spot.note_ja}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                    </AccordionContent>
                  </AccordionItem>
                )}
                {area.life.education_and_medical && (
                  <AccordionItem value="education">
                    <AccordionTrigger>Education & Medical</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      {area.life.education_and_medical.summary_en ||
                        area.life.education_and_medical.summary_ja ? (
                        <p className="text-sm text-muted-foreground">
                          {area.life.education_and_medical.summary_en ||
                            area.life.education_and_medical.summary_ja}
                        </p>
                      ) : null}
                      {area.life.education_and_medical.spots &&
                        area.life.education_and_medical.spots.length > 0 && (
                          <ul className="space-y-2">
                            {area.life.education_and_medical.spots.map(
                              (spot, idx) => (
                                <li key={idx} className="text-sm">
                                  <span className="font-medium">{spot.name}</span>
                                  {(spot.note_en || spot.note_ja) && (
                                    <span className="text-muted-foreground ml-2">
                                      — {spot.note_en || spot.note_ja}
                                    </span>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </CardContent>
          </Card>
        )}

        {/* G6: Foreign Friendly */}
        {area.foreign_friendly && (
          <Card>
            <CardHeader>
              <CardTitle>Foreign-Friendly Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(area.foreign_friendly.summary_en ||
                area.foreign_friendly.summary_ja) && (
                <p className="text-muted-foreground">
                  {area.foreign_friendly.summary_en ||
                    area.foreign_friendly.summary_ja}
                </p>
              )}
              {(area.foreign_friendly.bullets_en ||
                area.foreign_friendly.bullets_ja) && (
                <ul className="space-y-2 list-disc list-inside">
                  {(area.foreign_friendly.bullets_en ||
                    area.foreign_friendly.bullets_ja || []
                  ).map((bullet, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        )}

        {/* G7: Events & Community */}
        {area.events && area.events.items && area.events.items.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Events & Community</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {area.events.items.map((event, idx) => (
                  <div key={idx} className="border-l-2 border-slate-200 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">
                        {getText(event.name) || `Event ${idx + 1}`}
                      </h4>
                      {event.month && (
                        <Badge variant="outline" className="text-xs">
                          Month {event.month}
                        </Badge>
                      )}
                    </div>
                    {event.description && (
                      <p className="text-sm text-muted-foreground">
                        {getText(event.description)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* G7: FAQ */}
        {area.faq && area.faq.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {area.faq.map((item, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger>
                      {getText(item.q) || `Question ${idx + 1}`}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        {getText(item.a) || "No answer available."}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}

        {/* G7: Closing & CTA */}
        {area.closing && (
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle>Ready to Find Your Home?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(area.closing.text_en || area.closing.text_ja) && (
                <p className="text-muted-foreground">
                  {area.closing.text_en || area.closing.text_ja}
                </p>
              )}
              {area.closing.extra_links &&
                area.closing.extra_links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {area.closing.extra_links.map((link, idx) => {
                      const label = link.label_en || link.label_ja;
                      const url = link.url;
                      if (!label) return null;
                      if (!url) {
                        return (
                          <Button key={idx} variant="outline" disabled>
                            {label}
                          </Button>
                        );
                      }
                      return (
                        <Link key={idx} href={url}>
                          <Button variant="outline">{label}</Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
            </CardContent>
          </Card>
        )}

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Rendered from{" "}
            <code className="text-xs bg-muted px-2 py-1 rounded">
              content/area/{area.slug}.yml
            </code>
          </p>
        </div>
      </div>
    </main>
  );
}
