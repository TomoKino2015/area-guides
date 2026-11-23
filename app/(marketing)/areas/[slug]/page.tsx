import { redirect, notFound } from "next/navigation";
import { loadAreaYaml, loadWardRich } from "@/lib/area-loader";
import WardPageClient from "@/app/[ward]/ward-page-client"; // 完全なLP（言語切り替え付き）
import { ShibuyaStoryLanding } from "@/components/areas/ShibuyaStoryLanding";
import { DefaultAreaLanding } from "@/components/areas/DefaultAreaLanding";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 世田谷のみ既存のLPにリダイレクト
  if (slug === "setagaya") {
    redirect("/");
  }

  // YAMLを読み込む
  const yaml = loadAreaYaml(slug);
  
  if (yaml) {
    // titleの取得（スキーマ形式: title.en/ja または既存形式: locales.en.title）
    const titleEn = yaml?.title?.en ?? yaml?.locales?.en?.title ?? yaml?.title ?? slug;
    const titleJa = yaml?.title?.ja ?? yaml?.locales?.ja?.title ?? yaml?.title ?? "";

    // エリアデータを整形
    const areaData = {
      slug,
      titleEn,
      titleJa: titleJa && titleJa !== titleEn ? titleJa : undefined,
      summary: yaml?.locales?.en?.summary ?? yaml?.locales?.ja?.summary ?? undefined,
      tags: yaml?.tags,
      faq: yaml?.faq,
      ...yaml, // その他のYAMLフィールドも渡す
    };

    // Shibuya専用のストーリー型レイアウト
    if (slug === "shibuya") {
      return <ShibuyaStoryLanding area={areaData} />;
    }

    // setagaya_sampleもストーリー型レイアウトを使用（テスト用）
    if (slug === "setagaya_sample") {
      return <ShibuyaStoryLanding area={areaData} />;
    }

    // その他のエリアは汎用レイアウト
    return <DefaultAreaLanding area={areaData} />;
  }

  // YAMLがなければ rich データを試す
  const ward = loadWardRich(slug);
  if (ward) {
    // WardPageClient が受け取る props 名は既存に合わせる（ward）
    return <WardPageClient ward={ward} />;
  }

  // どちらも無ければ 404
  notFound();
}

