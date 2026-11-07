export const SUPPORTED_LOCALES = ["en", "si"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

const MESSAGES = {
  en: {
    findSoftware: "Find software",
    software: "Software",
    comparisons: "Comparisons",
    guides: "Guides",
    markets: "Markets",
    viewAllSoftware: "Explore software profiles",
    regionalPricing: "Regional pricing",
  },
  si: {
    findSoftware: "මෘදුකාංග සොයන්න",
    software: "මෘදුකාංග",
    comparisons: "සසඳීම්",
    guides: "මාර්ගෝපදේශ",
    markets: "වෙළඳපොළ",
    viewAllSoftware: "මෘදුකාංග පැතිකඩ බලන්න",
    regionalPricing: "කලාපීය මිල ගණන්",
  },
} satisfies Record<Locale, Record<string, string>>;

/**
 * Translation-ready UI dictionary.
 * English remains the canonical site language until a complete locale route
 * and translated editorial corpus are reviewed and released.
 */
export function getMessages(locale: string = "en") {
  const normalized = locale.toLowerCase().split("-")[0] as Locale;
  return MESSAGES[normalized] ?? MESSAGES.en;
}

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale.toLowerCase().split("-")[0] as Locale);
}
