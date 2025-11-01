/**
 * Internationalization utilities for multi-language support
 */

export type Language = "ja" | "en"

/**
 * Extract the correct language from a multilingual object
 * @param obj - Object with ja and en properties
 * @param lang - Language code
 * @returns The translated string
 */
export function t<T extends { ja: string; en: string }>(
  obj: T,
  lang: Language
): string {
  return obj[lang]
}

/**
 * Get translated text with fallback
 * @param obj - Object that may have ja and en properties
 * @param lang - Preferred language
 * @returns The translated string or empty string
 */
export function getTranslation(
  obj: any,
  lang: Language
): string {
  if (typeof obj === "object" && obj !== null) {
    return obj[lang] || obj.ja || obj.en || ""
  }
  return String(obj || "")
}

/**
 * Format a number according to locale
 * @param num - Number to format
 * @param lang - Language code
 * @returns Formatted number string
 */
export function formatNumber(num: number, lang: Language): string {
  const locale = lang === "ja" ? "ja-JP" : "en-US"
  return num.toLocaleString(locale)
}

/**
 * Format currency (JPY)
 * @param amount - Amount in yen
 * @param lang - Language code
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, lang: Language): string {
  const locale = lang === "ja" ? "ja-JP" : "en-US"
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Get month name
 * @param month - Month number (1-12, 0 for "monthly")
 * @param lang - Language code
 * @returns Month name
 */
export function getMonthName(month: number, lang: Language): string {
  if (month === 0) {
    return lang === "ja" ? "毎月" : "Monthly"
  }
  
  const date = new Date(2000, month - 1, 1)
  const locale = lang === "ja" ? "ja-JP" : "en-US"
  
  return date.toLocaleString(locale, { month: "long" })
}



