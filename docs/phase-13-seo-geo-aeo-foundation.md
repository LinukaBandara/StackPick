# Phase 13 — Search, GEO and AEO foundation

**Working branch:** `growth/adsense-journey-readiness`  
**Started:** 7 November 2026  
**Status:** Technical cleanup and a crawlable full guide index committed; local validation and Search Console evidence still required.

## Objective

Improve StackPick's organic search performance and its chances of being accurately discovered, understood and cited by answer engines. Priority reader markets remain the US, UK, Canada and Australia. No ranking position, AI citation, traffic target or monetization approval is guaranteed.

## Findings from the current branch

1. **Duplicate directory destination found and removed.** The `/best` directory listed `/best/ai-meeting-assistant-pricing` twice with different descriptions. One duplicate card has been removed; the actual article route remains.
2. **No automated route-integrity gate existed.** Added `npm run audit:seo` and `scripts/audit-seo-routes.mjs` to detect duplicate directory entries, duplicate static sitemap paths, and directory/sitemap routes without a matching App Router page. The script must be run locally and any false positives reviewed before treating the audit as passed.
3. **Crawler-specific robots groups needed an explicit private-route rule.** The wildcard group disallowed `/admin/` and `/api/admin/`, but AI crawler groups had their own `allow: "/"` rule. Each AI crawler group now explicitly disallows those private paths too. This is a crawl directive, not an access-control mechanism; private routes must remain protected by authentication and authorization.
4. **A manual sitemap already exists.** `app/sitemap.ts` maintains a static route list and appends software profile routes. The generated output deduplicates the final route array, but the new audit checks the static list and route existence.
5. **Core site metadata and basic structured data already exist.** `app/layout.tsx` defines site-wide metadata and WebSite/Organization JSON-LD. Do not add schema merely to chase AI visibility; structured data must accurately describe visible page content.
6. **An editorial heuristic audit already exists.** `scripts/audit-content-quality.mjs` flags pages for human review. Its word counts and pattern checks are not quality scores and must not be used alone to noindex, delete or redirect articles.
7. **Market selection is currently a browsing preference.** `/markets?market=...` changes the selected market; it is not a set of unique country landing pages. Do not index thin query-parameter variants or create near-duplicate country pages without distinct local evidence.\n8. **The interactive `/best` directory exposed only its current 12-card page in the initial HTML.** Its pagination is client-side buttons rather than crawlable page links. The new `/guides` page now renders all 109 catalogue entries as ordinary server-rendered links, and all 109 guide destinations were confirmed in the static sitemap. This improves internal discovery without relying on crawlers to click JavaScript controls.

## Changes committed in this phase

- `app/best/page.tsx`: removed one duplicate AI Meeting Assistant Pricing directory entry.
- `scripts/audit-seo-routes.mjs`: added route and sitemap integrity checks.
- `package.json`: added the `audit:seo` script.
- `app/robots.ts`: explicitly disallowed private admin paths in each AI crawler group.\n- `lib/guides.ts`: extracted the single 109-entry guide catalogue shared by both directory pages.\n- `app/guides/page.tsx`: replaced the 19-item curated subset with a server-rendered index of all 109 guides.\n- `app/best/page.tsx`: now imports the shared guide catalogue.\n- `scripts/audit-seo-routes.mjs`: now audits the shared catalogue and verifies every guide destination is also in the static sitemap.
- `.github/workflows/phase-5-content-audit.yml`: now runs the route audit, internal-link check and content inventory on pushes to `main`/this working branch and pull requests targeting `main`, then uploads the CSV audit artifact.

## Local validation required

Run from the StackPick repository root:

```powershell
npm run audit:seo
npm run check:links
npm run audit:content
npm run lint
npm run build
```

Record the actual output. Do not mark the phase complete until the route audit and all existing checks pass, and any route exceptions are understood. The GitHub file edits have not been run through local Node, ESLint or Next.js build validation yet. The expanded GitHub Actions workflow has been committed, but no workflow run has appeared for the latest commit at the time of this note; do not treat CI as passed. Vercel deployment is currently unavailable due to the user's deployment limit, so continue with offline/source-level work until the limit resets.

## GEO/AEO answer-format improvements — 7 November 2026

- Added an optional `quickAnswer` field to the shared `ComparisonArticle` template. When supplied, it renders a visible, concise “Short answer” immediately below the article introduction; it is not hidden text or a schema-only claim.
- Added an individual short answer to eight priority guides: freelance invoicing workflow, freelance lead management, free vs paid software, small-team client project management, AI marketing tools, Calendly vs Google Calendar, Notion vs ClickUp, and Canva vs Adobe Express.
- The answers focus on decision criteria and caveats rather than unsupported universal winners. The article's full explanation, pricing caveats, evidence and bottom line remain in place.
- These are source edits on the working branch. They have not been run through ESLint, TypeScript or a production build because local validation has not yet been performed and Vercel deployment is currently unavailable.

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



## Technical release blockers confirmed during the 7 November 2026 content pass

The working branch was inspected through GitHub source files; local commands could not be run because the execution environment could not resolve GitHub/network access.

- `package.json` pins Next.js `16.4.2`, React `19.3.1`, ESLint `^8.57.0` and `eslint-config-next` `15.5.27`.
- `package-lock.json` is lockfileVersion 3 and resolves ESLint `8.57.1`, eslint-config-next `15.5.27`, Next `16.4.2` and TypeScript `5.9.3`.
- The repository has a legacy `.eslintrc.json`; no `eslint.config.mjs` was found. This is a framework/linter major-version mismatch that must be reconciled against the supported Next 16 lint configuration before treating lint results as authoritative.
- Do not change only `package.json` or hand-edit lockfile package versions. Regenerate the lockfile with the intended supported ESLint/config versions, then run `npm ci`, `npm run lint`, `npm run audit:seo`, `npm run check:links`, `npm run audit:content` and `npm run build` from a clean checkout.
- The working branch `growth/adsense-journey-readiness` is 435 commits ahead of `main` and 1 commit behind it at the time of comparison. Do not merge or rebase blindly; inspect the single new main commit and resolve the branch divergence deliberately.
- The latest audited content commit `39037609863b37a4637d98e2e4bf2c9d8a1394ae` reports a Vercel status failure whose target says the build-rate limit has been reached. This is a deployment quota failure, not evidence of a source build failure. No successful Vercel deployment or completed local build/lint/CI is claimed.

The next technical step is a coordinated ESLint/Next 16 toolchain alignment and clean-install validation, followed by the SEO/link/content audits. Keep the deployment blocked until the Vercel quota allows a new build.


## CI diagnosis and corrected toolchain assessment — 7 November 2026

- GitHub Actions run `42391795943` on commit `30d5755e` passed the SEO/content workflow: npm ci, audit-script syntax checks, route/sitemap audit, internal-link audit and content inventory all succeeded.
- GitHub Actions run `42391800943` on the same commit failed in the separate CI workflow at ESLint. The actual errors were malformed unterminated `pricingNote` string literals in `app/best/free-accounting-software/page.tsx` (line 19) and `app/best/web-hosting/page.tsx` (line 21). Dependency installation and production dependency audit succeeded; production audit reported zero vulnerabilities. Six moderate development-dependency findings remain in the nested minimatch dependency chain. The build step was skipped because lint failed.
- Fixed both missing closing quotes in commits `34c00a63` and `3bc2c04a`. New GitHub Actions runs were queued/in progress for those commits; their final results must be checked before calling the fix verified.
- Corrected the earlier toolchain diagnosis: the Next.js 16 upgrade guidance says `eslint-config-next@16` requires ESLint 9+, but an existing setup that does not use `eslint-config-next@16` may keep its compatible ESLint version. Therefore Next 16 + `eslint-config-next@15.5.27` + ESLint 8 is not automatically a version mismatch. Do not upgrade ESLint or rewrite the config solely to make major versions match. Reassess only if the existing config itself fails after source syntax is fixed.
- Current branch comparison: `growth/adsense-journey-readiness` is 460 commits ahead of `main` and 1 commit behind it. The one main-only commit was reviewed and its AdSense verification script change was mirrored in source, but the branch histories remain diverged. Keep the existing PR base and history under review; do not merge/rebase blindly.

Official Next.js guidance: https://nextjs.org/docs/app/api-reference/config/eslint and https://nextjs.org/docs/app/guides/upgrading/version-16.


## AdSense / CSP compatibility finding — 8 November 2026

A source review found a material integration conflict:

- `app/layout.tsx` injects the AdSense loader from `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`.
- `next.config.js` sends a Content-Security-Policy whose `script-src` currently permits only `'self'`, `'unsafe-inline'` and `https://www.googletagmanager.com`. It does not permit the AdSense loader host. Therefore a browser enforcing this response header can block the AdSense script even though the script tag is present in the HTML.
- Google AdSense's current CSP guidance says it supports strict nonce-based CSP and warns that the advertising domains change over time; a fixed allowlist can become stale. Google also recommends testing with report-only before enforcement. Source: https://support.google.com/adsense/answer/16283098
- Next.js 16 uses the `proxy.ts` convention (renamed from middleware). Its nonce approach requires generating a per-request nonce and forwarding CSP through the request so Next can attach it to framework scripts. Next.js documents that nonce CSP requires dynamic rendering. Source: https://nextjs.org/docs/app/guides/content-security-policy (and https://nextjs.org/docs/app/getting-started/proxy)
- The current build successfully generated 208 static pages. Converting every public route to request-time rendering solely to support an AdSense nonce could sacrifice static prerendering and CDN efficiency.

**Decision: do not add a superficial AdSense hostname to the current allowlist and call the integration fixed.** Before live ad serving, design and test a route-scoped or otherwise compatible strict-CSP approach, measure its effect on static generation, and verify the AdSense script plus all Next.js scripts under the resulting policy. Until that is implemented, treat AdSense code presence as a verification marker only; do not claim ads are operational. Keep the current CSP security header in place rather than removing it as a shortcut.

This is a source-level finding. A browser CSP violation report has not yet been captured from the live production response.
