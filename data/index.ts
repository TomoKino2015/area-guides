import { setagayaData } from "./wards/setagaya"
import type { WardData } from "@/types/ward"

/**
 * All ward data indexed by slug
 */
export const wardData: Record<string, WardData> = {
  setagaya: setagayaData,
  // Add more wards here as they are created:
  // shibuya: shibuyaData,
  // shinjuku: shinjukuData,
  // etc.
}

/**
 * Get all ward slugs
 */
export function getAllWardSlugs(): string[] {
  return Object.keys(wardData)
}

/**
 * Get ward data by slug
 * @param slug - Ward slug (e.g., "setagaya")
 * @returns WardData or undefined if not found
 */
export function getWardData(slug: string): WardData | undefined {
  return wardData[slug]
}

/**
 * Get all ward data as an array
 */
export function getAllWardData(): WardData[] {
  return Object.values(wardData)
}

/**
 * Check if a ward slug exists
 */
export function wardExists(slug: string): boolean {
  return slug in wardData
}



