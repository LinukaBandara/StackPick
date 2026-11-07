export const MARKETS = [
  { code: "US", name: "United States", currency: "USD", locale: "en-US", language: "English", pricingNote: "US vendor pricing may be displayed in USD when the source explicitly publishes a US price." },
  { code: "GB", name: "United Kingdom", currency: "GBP", locale: "en-GB", language: "English", pricingNote: "UK pricing must be sourced from the provider's UK page or checkout." },
  { code: "CA", name: "Canada", currency: "CAD", locale: "en-CA", language: "English", pricingNote: "Canadian pricing must be sourced from the provider's Canadian page or checkout." },
  { code: "AU", name: "Australia", currency: "AUD", locale: "en-AU", language: "English", pricingNote: "Australian pricing must be sourced from the provider's Australian page or checkout." },
  { code: "LK", name: "Sri Lanka", currency: "LKR", locale: "en-LK", language: "English", pricingNote: "Confirm Sri Lankan availability, payment methods and taxes with the provider." },
  { code: "IN", name: "India", currency: "INR", locale: "en-IN", language: "English", pricingNote: "Indian pricing must be sourced from the provider's India page or checkout." },
  { code: "SG", name: "Singapore", currency: "SGD", locale: "en-SG", language: "English", pricingNote: "Singapore pricing must be sourced from the provider's Singapore page or checkout." },
] as const;

export type MarketCode = (typeof MARKETS)[number]["code"];
export type Market = (typeof MARKETS)[number];

export const DEFAULT_MARKET: MarketCode = "US";

export function getMarket(code?: string | null): Market {
  return MARKETS.find((market) => market.code === code?.toUpperCase()) ?? MARKETS[0];
}

/**
 * Format a price only when its source currency is known.
 * This intentionally does not perform foreign-exchange conversion.
 */
export function formatSourcePrice(amount: number, currency: string, locale = "en-US") {
  if (!Number.isFinite(amount)) throw new Error("Price amount must be a finite number.");
  if (!/^[A-Z]{3}$/.test(currency)) throw new Error("Use a valid three-letter ISO currency code.");
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}

export function marketPriceGuidance(market: Market) {
  return market.pricingNote;
}
