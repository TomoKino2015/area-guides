import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { WARD_REGISTRY } from "@/data/wards/registry";

export function loadAreaYaml(slug: string) {
  const p = path.join(process.cwd(), "content", "area", `${slug}.yml`);
  if (!fs.existsSync(p)) return null;
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = YAML.parse(raw);
    return data ?? null;
  } catch {
    return null;
  }
}

export function loadWardRich(slug: string) {
  // 既存の rich データ（旧システム）
  // 例: setagaya.ts の default export を返す
  // なければ null
  return (WARD_REGISTRY as any)[slug] ?? null;
}

