// 既存の rich データに触らず「場所だけ」教えるレジストリ
import { setagayaData } from "./setagaya";
// import { shibuyaData } from "./shibuya"; // あれば

export const WARD_REGISTRY = {
  setagaya: setagayaData,
  // shibuya: shibuyaData,
} as const;

export type WardSlug = keyof typeof WARD_REGISTRY;

