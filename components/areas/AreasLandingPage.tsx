import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AreaCard } from "./AreaCard";

type AreaData = {
  slug: string;
  titleEn: string;
  titleJa: string;
  summary?: string;
};

type AreasLandingPageProps = {
  areas: AreaData[];
};

/**
 * /areas ページのランディングページコンポーネント
 * Hero、エリア一覧、CTAセクションを含む
 */
export function AreasLandingPage({ areas }: AreasLandingPageProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tokyo 23 Wards Area Guides
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover the perfect neighborhood for your life in Tokyo.
          </p>
          <p className="text-base text-muted-foreground">
            東京23区のエリアガイド。あなたにぴったりの街を見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="#areas-list">エリア一覧を見る</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              {/* TODO: 既存のReadiness Checkページのパスに合わせる */}
              <Link href="/readiness">Readiness Checkを試す</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas List Section */}
      <section id="areas-list" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Area Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area) => (
            <AreaCard
              key={area.slug}
              slug={area.slug}
              titleEn={area.titleEn}
              titleJa={area.titleJa}
              summary={area.summary}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Find Your Perfect Home</h2>
          <p className="text-lg text-muted-foreground">
            エリアガイドを参考に、あなたにぴったりの物件を見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              {/* TODO: 既存の検索ページのパスに合わせる */}
              <Link href="/search">エリアから物件を探す</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              {/* TODO: 既存のReadiness Checkページのパスに合わせる */}
              <Link href="/readiness">Readiness Check</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


