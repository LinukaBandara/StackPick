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


## Production spot-check — 2026-11-12

A live page fetch provides additional evidence, but does not yet close the URL-level verification:

- `https://www.stackpick.tech/compare` returns a rendered StackPick comparison interface with a tool selector and explanatory comparison copy. The web inspection exposed page content but not the HTTP status, response headers, canonical tag, or robots metadata.
- `https://www.stackpick.tech/alternatives` returns a rendered alternatives-finder interface with a product selector. The inspection exposed page content but not the HTTP status, response headers, canonical tag, or robots metadata.
- The exact parameterized GSC examples (`/compare?tools=wave,xero`, `/alternatives?software=figma`) and the vendor portal could not be retrieved by the available browser inspection. Direct network access from the execution environment is unavailable.
- This differs from the repository-tree finding that the corresponding route files are absent on `main`. The live deployment may be running a different revision/configuration, or the routes may be supplied outside the inspected source tree. Do not infer that these live pages are 404s.

### Updated decision

Do not add redirects or remove noindex based only on the source-tree snapshot. The clean base routes are real user-facing finder interfaces; they should not be redirected away. The query URLs may be functional states of those interfaces, and whether they should be indexed is a separate canonical/indexing decision. Keep the vendor portal excluded unless its live purpose and access controls are confirmed.

### Remaining evidence needed

For one URL from each family, obtain the actual HTTP status, redirect chain, `X-Robots-Tag`, HTML `meta name="robots"`, canonical URL, and rendered content from a browser or deployment environment that can access the exact query URLs. Then inspect the remaining GSC URL list for consistent behavior before changing code.

## Updated status

- [x] Confirm clean `/compare` and `/alternatives` finder interfaces are live.
- [ ] Verify parameterized comparison and alternatives URL responses and metadata.
- [ ] Verify vendor portal status and access behavior.
- [ ] Reconcile live deployment revision with GitHub `main`.
- [ ] Make only evidence-backed canonical/noindex/redirect changes.


## URL-level classification from the supplied export — 2026-11-12

The original ZIP was re-opened and the exact sample URLs confirmed. Examples include:

- Comparison finder: `/compare?tools=wave,xero`, `/compare?tools=firebase,supabase`, `/compare?tools=monday,clickup`, and bare `/compare`.
- Alternatives finder: `/alternatives?software=figma`, `/alternatives?software=wordpress-com`, `/alternatives?software=freshbooks`, and bare `/alternatives`.
- Vendor portal: `/for-vendors/portal?software=freshbooks`, `/for-vendors/portal?software=figma`, and bare `/for-vendors/portal`.

These are query-driven finder/tool states, not the editorial comparison/alternatives article URLs. The current GSC issue is specifically a **noindex exclusion**, not a crawl error or proof of missing canonical editorial content.

### Recommended disposition

1. Keep query-parameter variants of `/compare` and `/alternatives` out of the index unless StackPick intentionally plans to create unique, substantial, stable landing pages for specific pairs/products. The current URL pattern creates a large combinatorial set and risks thin/duplicate search results.
2. Keep `/for-vendors/portal` out of the index. It is a vendor workflow, not a public editorial landing page.
3. Decide separately whether the two clean finder landing pages (`/compare` and `/alternatives`) should be indexable. If they are intended as search landing pages, they need unique editorial copy, self-referencing canonicals, and inclusion in the sitemap. If they are just interactive utilities, noindex is appropriate.
4. Do not redirect finder states to unrelated editorial pages. Do not remove noindex from all 91 URLs as a bulk fix.

### Access limitation and deployment ownership

The Vercel connector available in this session lists no linked Git projects and no StackPick production deployments for the authenticated Vercel team. Direct HTTP requests from the execution environment also fail at DNS resolution, and the browser inspection cannot expose response headers or the raw HTML metadata for the parameterized URLs. Therefore the actual deployed commit, response status, `X-Robots-Tag`, HTML robots meta, and canonical cannot be authoritatively verified here.

This means the production deployment may belong to a different Vercel account/team, or the deployment connection is not available to this session. No production code or SEO directives were changed. The only safe code action at this stage is to preserve the existing noindex behavior until the actual deployed source and headers can be inspected.

## Final audit disposition

- **59 comparison finder URLs:** retain noindex for query states; assess the clean finder landing page separately.
- **18 alternatives finder URLs:** retain noindex for query states; assess the clean finder landing page separately.
- **14 vendor portal URLs:** retain noindex and keep out of sitemap.
- **Production changes:** none recommended without access to the Vercel project/deployment that serves `www.stackpick.tech`.


## Route-level metadata verification — 2026-11-12

The actual route implementations were located on the feature branches that introduced the discovery and vendor workspace routes (not on the current default branch):

- `app/compare/page.tsx` explicitly sets `robots: { index: false, follow: true }`.
- `app/alternatives/page.tsx` explicitly sets `robots: { index: false, follow: true }`.
- `app/for-vendors/portal/page.tsx` explicitly sets `robots: { index: false, follow: false }`.
- The corresponding `app/sitemap.ts` includes the public `/for-vendors` partnerships page, but does not include `/compare`, `/alternatives`, or `/for-vendors/portal`.
- `app/robots.ts` allows crawling, which is necessary for Google to fetch these routes and observe their noindex directives.

### Final code assessment

The three route families are intentionally excluded from search indexing in the inspected discovery/vendor-marketplace source. The 91 GSC rows therefore match the route-level SEO policy; they are not evidence of a broken noindex implementation. No code change should remove these directives or add these routes to the sitemap. The query variants are interactive finder/workspace states, not distinct editorial landing pages.

The remaining check is deployment alignment: verify that the deployed revision serving `www.stackpick.tech` contains these same route files and metadata. Until that is confirmed, keep the production directives unchanged. This is a verified code-level decision, not a claim that the live Vercel deployment has been inspected.
