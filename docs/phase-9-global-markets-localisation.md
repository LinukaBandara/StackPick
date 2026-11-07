# Phase 9 — Global markets and localisation foundation

## Delivered

### Market and currency registry
- Add `lib/markets.ts` as the single source of supported market display metadata.
- Initial market settings: United States (USD), United Kingdom (GBP), Canada (CAD), Australia (AUD), Sri Lanka (LKR), India (INR) and Singapore (SGD).
- Each market has an ISO country code, ISO currency code, locale tag, language label and a country-specific verification reminder.
- Add `getMarket` with a safe US default for unknown market codes.
- Add `formatSourcePrice` to format a known source amount and currency with `Intl.NumberFormat`.

### Regional pricing safeguards
- Currency formatting is not foreign-exchange conversion.
- Do not transform a USD vendor price into a purported local quote.
- Do not infer vendor availability, payment eligibility, taxes, data residency or feature access from the visitor's selected market.
- A market setting is a browsing preference, not evidence that a vendor serves that country.
- Show a regional price only after a source for that market and billing currency has been checked and recorded.

### Public market guide
- Add `/markets` with a query-string market selection (for example `/markets?market=LK`).
- Explain local billing currency and the country-specific checks buyers should make.
- Add the page to the site footer and XML sitemap.
- Keep the page indexable and canonical at `/markets`; query-string selections are not separate SEO landing pages.

### Translation-ready UI foundation
- Add `lib/i18n.ts` with locale types, support checks and small UI dictionaries for English and Sinhala.
- English remains the canonical site language.
- The dictionary is a foundation only: it does not claim that the complete catalogue, editorial pages, metadata, legal content or navigation has been translated.
- Do not publish locale-prefixed pages or hreflang alternates until full-page translations are reviewed and canonical routing is implemented.

## Deliberately not claimed

- No current regional vendor prices have been added to product profiles.
- No FX rates or converted prices are shown.
- No software availability is marked verified by country.
- No vendor-specific payment methods, taxes, support regions or data residency have been inferred.
- Market selection currently applies to the markets guide; it does not yet personalise the recommendation ranking or alter profile prices.
- Full locale routing and translated editorial content remain a later release after translation review and SEO implementation.

## Follow-up data requirements

Before enabling country-specific price and availability badges, maintain evidence per vendor and market:
- country and currency;
- official regional pricing/availability source URL;
- plan and billing interval;
- amount and whether tax is included;
- checked date and reviewer;
- explicit availability status (available, unavailable, restricted or unknown).

Unknown must remain unknown. Expired or missing evidence must not be presented as current.
