import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { WARD_REGISTRY } from "@/data/wards/registry";

export function loadAreaYaml(slug: string) {
  if (slug.includes("_sample") && process.env.AREA_GUIDES_ENABLE_DRAFTS !== "true") {
    return null;
  }

  // まず通常の .yml ファイルを試す
  const p = path.join(process.cwd(), "content", "area", `${slug}.yml`);
  if (fs.existsSync(p)) {
    try {
      const raw = fs.readFileSync(p, "utf8");
      const data = YAML.parse(raw);
      return data ?? null;
    } catch {
      return null;
    }
  }

  if (process.env.AREA_GUIDES_ENABLE_DRAFTS !== "true") {
    return null;
  }

  // ローカル確認時だけ .draft.yml を試す
  const draftP = path.join(process.cwd(), "content", "area", `${slug}.draft.yml`);
  if (fs.existsSync(draftP)) {
    try {
      const raw = fs.readFileSync(draftP, "utf8");
      const data = YAML.parse(raw);
      return data ?? null;
    } catch {
      return null;
    }
  }

  return null;
}

export function loadWardRich(slug: string) {
  // 既存の rich データ（旧システム）
  // 例: setagaya.ts の default export を返す
  // なければ null
  return (WARD_REGISTRY as any)[slug] ?? null;
}
