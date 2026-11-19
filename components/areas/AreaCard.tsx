import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type AreaCardProps = {
  slug: string;
  titleEn: string;
  titleJa: string;
  summary?: string;
};

/**
 * エリアカードコンポーネント
 * /areas ページの一覧グリッドで使用
 */
export function AreaCard({ slug, titleEn, titleJa, summary }: AreaCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{titleEn}</CardTitle>
        <p className="text-sm text-muted-foreground">{titleJa}</p>
      </CardHeader>
      <CardContent className="flex-1">
        {summary ? (
          <p className="text-sm text-muted-foreground line-clamp-2">{summary}</p>
        ) : (
          <p className="text-sm text-muted-foreground italic">Coming soon</p>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/areas/${slug}`}>View area guide</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}


