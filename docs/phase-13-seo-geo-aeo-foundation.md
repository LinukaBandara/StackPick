# Phase 13 — Search, GEO and AEO foundation

**Working branch:** `growth/adsense-journey-readiness`  
**Started:** 7 November 2026  
**Status:** Initial technical cleanup committed; local validation and Search Console evidence still required.

## Objective

Improve StackPick's organic search performance and its chances of being accurately discovered, understood and cited by answer engines. Priority reader markets remain the US, UK, Canada and Australia. No ranking position, AI citation, traffic target or monetization approval is guaranteed.

## Findings from the current branch

1. **Duplicate directory destination found and removed.** The `/best` directory listed `/best/ai-meeting-assistant-pricing` twice with different descriptions. One duplicate card has been removed; the actual article route remains.
2. **No automated route-integrity gate existed.** Added `npm run audit:seo` and `scripts/audit-seo-routes.mjs` to detect duplicate directory entries, duplicate static sitemap paths, and directory/sitemap routes without a matching App Router page. The script must be run locally and any false positives reviewed before treating the audit as passed.
3. **Crawler-specific robots groups needed an explicit private-route rule.** The wildcard group disallowed `/admin/` and `/api/admin/`, but AI crawler groups had their own `allow: "/"` rule. Each AI crawler group now explicitly disallows those private paths too. This is a crawl directive, not an access-control mechanism; private routes must remain protected by authentication and authorization.
4. **A manual sitemap already exists.** `app/sitemap.ts` maintains a static route list and appends software profile routes. The generated output deduplicates the final route array, but the new audit checks the static list and route existence.
5. **Core site metadata and basic structured data already exist.** `app/layout.tsx` defines site-wide metadata and WebSite/Organization JSON-LD. Do not add schema merely to chase AI visibility; structured data must accurately describe visible page content.
6. **An editorial heuristic audit already exists.** `scripts/audit-content-quality.mjs` flags pages for human review. Its word counts and pattern checks are not quality scores and must not be used alone to noindex, delete or redirect articles.
7. **Market selection is currently a browsing preference.** `/markets?market=...` changes the selected market; it is not a set of unique country landing pages. Do not index thin query-parameter variants or create near-duplicate country pages without distinct local evidence.

## Changes committed in this phase

- `app/best/page.tsx`: removed one duplicate AI Meeting Assistant Pricing directory entry.
- `scripts/audit-seo-routes.mjs`: added route and sitemap integrity checks.
- `package.json`: added the `audit:seo` script.
- `app/robots.ts`: explicitly disallowed private admin paths in each AI crawler group.

## Local validation required

Run from the StackPick repository root:

```powershell
npm run audit:seo
npm run check:links
npm run audit:content
npm run lint
npm run build
```

Record the actual output. Do not mark the phase complete until the route audit and all existing checks pass, and any route exceptions are understood.

## Next work sequence

### A. Technical search audit
- Reconcile App Router pages, the `/best` directory, software profiles, redirects and sitemap URLs.
- Inspect canonical URLs, index/noindex directives, metadata, pagination, redirects, robots, sitemap response and rendered HTML.
- Validate structured data against visible page content and remove unsupported or duplicated markup.
- Check mobile rendering, Core Web Vitals, image delivery, internal links, 404s and redirect chains.

### B. Search evidence and page prioritisation
- Obtain fresh Google Search Console exports for queries, pages, countries, indexing and sitemap status.
- Obtain Bing Webmaster Tools query/page/indexing evidence where available.
- Prioritise pages using impressions, average position, CTR, query intent, conversions and editorial quality—not word count alone.
- Preserve URLs unless evidence supports a carefully reviewed consolidation or redirect.

### C. GEO and AEO editorial improvements
- Make each important page answer its primary question directly near the top, then explain the conditions, trade-offs and exceptions.
- Add original analysis, verified current plan limits, clear market/currency/billing context, practical examples and direct primary-source links.
- Distinguish desk research from hands-on testing. Never invent testing, first-hand experience, prices, customer results or vendor support interactions.
- Build answer-friendly headings and comparison tables only where they genuinely help readers.
- Measure AI referrals and citation visibility where reliable reporting is available; do not use fake mentions, automated spam or unsupported `llms.txt`/schema tricks.

### D. Topical authority and international growth
- Strengthen existing topic clusters before expanding the article count.
- Create country-specific content only when the local search intent and evidence are genuinely different.
- Use real Search Console and Bing demand to choose the next pages; do not swap country names into generic templates.

## Official guidance

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google crawling and indexing: https://developers.google.com/search/docs/crawling-indexing
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google's generative AI Search guidance: https://developers.google.com/search/docs/appearance/ai-features

Google's current guidance says its generative Search features build on core Search systems and that unique, useful, non-commodity content and technical crawlability remain important. It does not require special GEO markup or an `llms.txt` file for Google Search AI features.

## Release status

These changes are on the working branch only. They have not been merged or deployed. No live Search Console or Bing exports were available during this initial code pass, so no ranking or traffic improvements are claimed.
