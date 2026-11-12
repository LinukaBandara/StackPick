# Google Search Console noindex coverage drilldown — 2026-11-12

## Snapshot

Source: Google Search Console Coverage Drilldown ZIP exported on 2026-11-12.

- Issue: **Excluded by 'noindex' tag**
- Affected URLs in the supplied table: **91**
- First non-zero day in the supplied chart: **2026-11-07**
- Last chart day: **2026-11-09**
- All listed URLs were last crawled on 2026-11-09 or 2026-11-10.
- The chart reports 0 affected pages from 2026-10-09 through 2026-11-06, then 91 on 2026-11-07, 2026-11-08 and 2026-11-09.

## URL groups

| URL family | Count | Initial handling |
| --- | ---: | --- |
| `/compare?tools=...` (including bare `/compare`) | 59 | Treat as legacy/query-driven comparison URLs until route and canonical behavior are verified. Prefer a permanent redirect to the matching editorial `/best/*-vs-*` page only when an exact equivalent exists. |
| `/alternatives?software=...` (including bare `/alternatives`) | 18 | Treat as legacy/query-driven alternatives URLs. Redirect only to a matching published `/best/*-alternatives*` page where the subject and intent match. Do not redirect every URL to the generic `/best` directory. |
| `/for-vendors/portal?software=...` (including bare portal) | 14 | Vendor portal is functional/account-oriented, not an SEO landing page. Keep it out of the index and ensure it is intentionally protected or returns an appropriate status for unavailable/private content. |

Total: 91 URLs.

## Repository review

- `app/sitemap.ts` lists public editorial routes and software profile routes. It does not list these query-driven URL families.
- `app/robots.ts` allows crawling; it does not disallow these paths.
- The checked repository paths `app/compare/page.tsx`, `app/alternatives/page.tsx`, and `app/for-vendors/portal/page.tsx` are not present at those exact paths on the default branch. This is not by itself proof that no route exists: route groups, rewrites, middleware, or deployed code may affect resolution.
- The current editorial site already has clean comparison and alternatives pages under `/best/*`; those are preferable canonical landing pages when a true one-to-one match exists.

## Safe remediation — do not bulk-remove noindex

1. Inspect representative URLs from each family in Search Console URL Inspection and with live HTTP responses. Record status code, rendered HTML robots meta, X-Robots-Tag, canonical, and final URL after redirects.
2. For each of the 59 comparison URLs, map the two tool slugs to an existing editorial comparison route. Add a 301 only for exact matches. If there is no useful equivalent, return 404/410 rather than a soft 404 or irrelevant redirect.
3. For each of the 18 alternatives URLs, map the software slug to an existing dedicated alternatives article. Redirect only exact matches; otherwise return 404/410.
4. Keep vendor portal URLs non-indexable. Do not add them to the sitemap or request indexing. Confirm authentication/privacy behavior and avoid exposing vendor data.
5. After deploying route handling, retest representative and edge-case URLs, confirm clean canonical destinations, then validate the affected issue in Search Console. Do not request indexing for the legacy query URLs.

## Important interpretation

A Search Console **noindex exclusion is not automatically an SEO defect**. For legacy query URLs, it may be the expected outcome if they are intentionally excluded or no longer supported. The 91 count is a URL count from this drilldown, not evidence that 91 valuable editorial pages are missing from Google's index.

## Status

- [x] Export parsed and grouped (91 URLs: 59 comparison, 18 alternatives, 14 vendor portal).
- [x] Sitemap and robots implementation reviewed on the default branch.
- [ ] Live response and rendered metadata verified for representative URLs.
- [ ] Exact legacy-to-editorial redirect map created.
- [ ] Route behavior implemented and tested.
- [ ] Search Console validation completed.

No production SEO directives were changed as part of this evidence-only audit.

## Follow-up repository verification — 2026-11-12

A recursive Git tree inspection of the current `main` branch (334 entries; tree response not truncated) confirms:

- There is no App Router route for `/compare`, `/alternatives`, or `/for-vendors/portal`.
- There is no root `middleware.ts` or `proxy.ts`.
- `next.config.js` contains security headers only; it defines no rewrites or redirects.
- `app/sitemap.ts` contains no entries for these legacy URL families.
- The app has a shared `app/not-found.tsx` page. In the absence of a matching route or rewrite, these paths should resolve through Next.js not-found handling, which emits a noindex directive for not-found responses.

### Decision

**Do not add blanket redirects or remove noindex.** The current source has no corresponding public pages to preserve, and there is no reliable URL-to-article mapping for all 77 query URLs (59 comparison + 18 alternatives). The vendor portal is also absent from this source tree.

The observed noindex state is therefore consistent with retired/nonexistent routes, rather than proof that 91 valuable editorial pages have been accidentally blocked. This is the safest repository-level outcome.

### Remaining production verification

The GitHub connector could inspect source but could not establish live HTTP status, rendered meta robots, or Vercel edge configuration for the exact affected URLs. Confirm representative URLs from the original GSC export using URL Inspection or a direct HTTP/browser check:

- If they return 404 with noindex, leave them retired; no code change is required.
- If an exact old URL has a genuinely equivalent current article, add a specific 301 mapping for that URL only.
- If any URL returns 200 with a noindex tag, inspect the deployed source/edge rules before changing it.
- Do not submit these legacy URLs to indexing.

## Updated status

- [x] Recursive route-tree inspection on `main`.
- [x] Confirm no route, middleware, proxy, rewrite, or sitemap entry for the legacy URL families.
- [x] Decide against unsafe blanket redirects or bulk noindex removal.
- [ ] Verify live status/meta for representative URLs from the exact GSC URL export.
- [ ] Add only evidence-backed one-to-one redirects, if any are found.
- [ ] Complete Search Console validation after any required production change.
