// app/[ward]/page.tsx
import { getWardData, getAllWardSlugs } from "@/data"
import WardPageClient from "./ward-page-client"

export async function generateStaticParams() {
  const slugs = getAllWardSlugs()
  return slugs.map((slug) => ({ ward: slug }))
}

export default async function WardPage({ 
  params 
}: { 
  params: Promise<{ ward: string }> 
}) {
  const { ward: wardSlug } = await params
  const ward = getWardData(wardSlug)

  if (!ward) {
    // TODO: 本当は notFound() 呼ぶけど、今は雑にnullチェックしておく
    return (
      <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
        <p>エリアが見つかりませんでした。</p>
      </main>
    )
  }

  return <WardPageClient ward={ward} />
}
