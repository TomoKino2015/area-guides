import { notFound } from "next/navigation";
import { loadAreaYaml, loadWardRich } from "@/lib/area-loader";
import WardPageClient from "@/app/[ward]/ward-page-client"; // 完全なLP（言語切り替え付き）

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1) YAMLがあって、かつ完全に整備されている場合のみYAML優先表示
  // （overview、stats、housingなどが存在する場合のみ）
  const yaml = loadAreaYaml(slug);
  const isYamlComplete = yaml && (
    (yaml.locales?.ja?.title || yaml.locales?.en?.title || yaml.title) &&
    (yaml.locales?.ja?.overview || yaml.locales?.en?.overview || yaml.overview) &&
    (yaml.stats || yaml.housing)
  );

  if (isYamlComplete) {
    // ここは"最小ビュー"のままでもOK。後で AreaTemplate に差し替える
    const titleEn = yaml?.locales?.en?.title ?? yaml?.title ?? slug;
    const titleJa = yaml?.locales?.ja?.title ?? yaml?.title ?? "";

    return (
      <main style={{ padding: 16, maxWidth: 960, margin: "0 auto" }}>
        <h1>{titleEn}</h1>
        <div style={{ opacity: 0.7 }}>{titleJa}</div>
        <hr />
        <p>
          Rendered from <code>content/area/{slug}.yml</code>. (YAML-first)
        </p>
      </main>
    );
  }

  // 2) YAMLが未整備なら、既存の rich データでそのまま表示
  const ward = loadWardRich(slug);
  if (ward) {
    // WardPageClient が受け取る props 名は既存に合わせる（ward）
    return <WardPageClient ward={ward} />;
  }

  // 3) どちらも無ければ 404
  notFound();
}

