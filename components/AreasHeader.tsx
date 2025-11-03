import Link from "next/link";

export default function AreasHeader() {
  return (
    <nav style={{ padding: "8px 16px", borderBottom: "1px solid #eee" }}>
      <Link href="/" style={{ marginRight: 16, fontWeight: 600, textDecoration: "none" }}>
        AtHearth
      </Link>
      <Link href="/areas" style={{ textDecoration: "none" }}>
        23 Areas
      </Link>
    </nav>
  );
}

