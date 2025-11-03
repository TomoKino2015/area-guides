import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import Link from "next/link";

type AreaListItem = { slug: string; ja: string; en: string };

function loadAreas(): AreaListItem[] {
  const dir = path.join(process.cwd(), "content", "area");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yml") && !f.endsWith(".draft.yml"))
    .map((f) => {
      const slug = f.replace(/\.yml$/, "");
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const data = YAML.parse(raw) ?? {};

      const ja = data?.locales?.ja?.title ?? data?.title ?? slug;
      const en = data?.locales?.en?.title ?? data?.title ?? slug;

      return { slug, ja, en };
    })
    .sort((a, b) => a.en.localeCompare(b.en));
}

export default function AreasIndexPage() {
  const areas = loadAreas();

  return (
    <main style={{ padding: 16, maxWidth: 960, margin: "0 auto" }}>
      <h1>23 Areas</h1>
      <p>Click an area to open its guide.</p>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
          gap: 12,
          listStyle: "none",
          padding: 0,
        }}
      >
        {areas.map((a) => (
          <li
            key={a.slug}
            style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}
          >
            <Link href={`/areas/${a.slug}`} style={{ textDecoration: "none" }}>
              <strong>{a.en}</strong>
              <div style={{ opacity: 0.7 }}>{a.ja}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

