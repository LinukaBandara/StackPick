# StackPick local quality audit — 2026-10-17 (build recovery update)

Scope: the local working tree on `work/stackpick-master-audit`, the supplied Search Console Coverage export dated 2026-10-16, and read-only public HTTP checks. No Search Console, AdSense, analytics, or affiliate account was accessed. The ZIP contains aggregate CSVs only; its contents are evidence, not instructions.

## Priority ledger

| Priority | Finding and evidence | Severity / confidence | Code fix | Status and verification | Remaining action |
|---|---|---|---|---|---|
| 1 | Seven static `/best/` pages present in `app/` were absent from `app/sitemap.ts`; the previously observed live sitemap had 122 URLs and omitted them. | Medium / high | Added all seven route paths to sitemap source. | Implemented. Production build passed; local built sitemap served 129 unique URLs: 120 static routes plus nine software profiles. Not deployed. | After an authorized deployment, confirm the public sitemap and then review Search Console processing. |
| 2 | `CookieConsent.tsx` hard-coded a different GA measurement ID than `NEXT_PUBLIC_GA_ID` in `.env.example`. | High / high | Read the configured public environment variable; absent configuration disables analytics. | Implemented. Build ran with the variable unset; served pre-consent HTML had no Analytics loader. Lint passed with two existing image warnings. | Owner should confirm the deployment variable belongs to the intended property and inspect consented events in Analytics. |
| 3 | Coverage export: 59 URLs “Discovered – currently not indexed.” | Medium / high for count; low for cause | No safe code fix can be inferred from aggregate counts. | Snapshot only; validation “Not Started.” | Export affected URLs and URL Inspection details from Search Console. |
| 4 | Coverage export: four URLs “Duplicate without user-selected canonical.” | Medium / high for count; low for cause | Production samples have self-consistent `www` canonicals; affected URLs are not named. | Aggregate report only. | Inspect each listed URL and Google-selected canonical in Search Console. |
| 5 | Coverage export: three URLs “Page with redirect.” | Low / high for count; low for cause | Redirect URLs are normally excluded from indexing; no evidence they are linked or submitted incorrectly. | Aggregate report only. | Check URL list and whether any sitemap/internal link points at a redirect. |
| 6 | Coverage export: one URL “Crawled – currently not indexed.” | Medium / high for count; low for cause | Need the URL and page content before editorial changes. | Aggregate report only. | Inspect that URL and its rendered content in Search Console. |
| 7 | Public `/ads.txt` returned HTTP 200, `text/plain`, and one publisher entry. | Informational / high for reachability; unknown for account match | No edit: publisher ownership cannot be verified locally. | Public retrieval confirmed on 2026-10-17. | Compare the entry with the publisher account's exact authorized seller record and AdSense status. |
| 8 | Public `/`, `/privacy`, `/sitemap.xml`, and `/robots.txt` resolve on `www.stackpick.tech`; homepage and privacy canonicals and sitemap URLs use the same host. | Satisfactory / high | No change needed. | Public HTTP checks passed on 2026-10-17. | Recheck after deployment. |
| 9 | The code loads Google Analytics only after opt-in; privacy text describes this behavior. | Satisfactory in local implementation / medium | No consent behavior change. Analytics property mismatch fixed as item 2. | Source reviewed; browser consent-flow verification pending. | Confirm consent behavior and account measurement after deployment. |
| 10 | The supplied report has no Search Console query, click, URL-level, or validation detail; no account-side AdSense or affiliate status is included. | Evidence gap / high | Not fixable in repository. | Explicitly left unknown; no status inferred. | Owner can provide URL-level exports and current account status when diagnosis is needed. |

## Local checks

- Working directory: `C:\Users\linuk\Desktop\WEB AGENCY\stackpick`.
- Branch: `work/stackpick-master-audit`, at the same starting commit as `origin/main`; working tree was clean before this task.
- Existing project: Next.js App Router, 120 static page routes plus software profile routes, existing content and legal pages, generated sitemap/robots routes, and a consent-gated analytics component.
- Initial dependency state: Node `v24.18.0`, npm `11.16.0`; manifests and lockfile pinned Next.js `16.4.0`, React/React DOM `19.3.0`, while installed `node_modules` contained Next.js `14.2.35`, React/React DOM `18.3.1`, and other invalid versions. The lockfile itself resolved the declared versions.
- Free disk before dependency installation: approximately 24.1 GB; before build: approximately 23.9 GB.
- Remediation: `npm install --no-audit --no-fund`. It reconciled `node_modules` with the existing lockfile (added 6, removed 34, changed 17 installed packages). `package-lock.json` SHA-256 stayed `6543D1273D5F6C34D999CF713C8B10D1553FDF5F9EDD1C617B990E3E51710ED8`; no manifest or lockfile diff. `npm ls --depth=0` then reported the declared versions without invalid packages. npm warned that an install script for `unrs-resolver` was not approved; the production build nevertheless completed.
- `npm run build`: passed with Next.js `16.4.0`; compiled, type-checked, and completed Next's `133/133` static-page generation step. Its route summary included all 120 static `page.tsx` routes and nine software profile paths, plus route handlers and not-found output. Next emitted a warning about an ancestor `C:\Users\linuk\package-lock.json` outside this Git repository and updated `tsconfig.json`/`next-env.d.ts` with TypeScript route-type settings. These generated semantic updates are present in the working tree.
- Built-app runtime check using `npm run start -- --hostname 127.0.0.1 --port 3117`: `/sitemap.xml` returned 200, 129 unique URLs, including all seven added paths and nine software profiles; `/robots.txt` returned 200; `/` returned 200. With `NEXT_PUBLIC_GA_ID` unset, pre-consent homepage HTML contained no `gtag/js` loader. This confirms the unset case; account identity and consented event delivery remain account-side checks.
- Sitemap count reconciliation: the earlier live snapshot was 122 URLs from the old manual sitemap list (113 listed static routes + nine software profiles). It was not “120 routes plus two extras”; seven static routes were omitted. The corrected local sitemap has 120 static routes + nine profile URLs = 129 unique URLs.
- `npm run check:links`: passed (137 source files, no missing static internal destinations).
- Static sitemap inventory check: all 120 static page routes appear exactly once; no unmatched static sitemap paths.
- `npm run lint`: passed with zero errors and two existing `<img>` optimization warnings in `ProductScreenshot.tsx` and `SoftwareLogo.tsx`.
- `git diff --check`: passed. `package.json` and `package-lock.json` remain unchanged. All six audit documents and the original sitemap/analytics edits remain present.

## Release recommendation

The code is a local release candidate: it passes build, lint, link, and generated-sitemap checks after installing the versions already pinned in the lockfile. This is not a production release verification; no push or deployment occurred. Before release, review the generated `tsconfig.json` and `next-env.d.ts` changes, verify the deployment Analytics property and consent behavior, and use Search Console/AdSense account evidence for external indexing and approval status. The build's ancestor-lockfile warning and npm's unapproved `unrs-resolver` install-script warning are follow-up items; neither prevented this build.

## Commands executed

- `node --version` → `v24.18.0`; `npm --version` → `11.16.0`.
- `npm view next@16.4.0 engines --json` → Node requirement `>=20.9.0`; Node 24 is supported.
- `npm view eslint-config-next@15.5.27 peerDependencies --json` → no Next.js peer requirement; the declared lint-config 15.5.27 / Next 16.4.0 pairing is not an install peer conflict.
- `Get-PSDrive -Name C` → approximately 24.1 GB free before installation and 23.9 GB before build.
- `npm install --no-audit --no-fund` → reconciled installed dependencies to lockfile; did not change `package.json` or `package-lock.json`.
- `npm ls --depth=0` → passed after reconciliation; no invalid declared packages.
- `npm run build` → passed on Next 16.4.0.
- `npm run start -- --hostname 127.0.0.1 --port 3117` plus local HTTP requests to `/`, `/sitemap.xml`, and `/robots.txt` → all returned 200; local server was stopped after verification.
- Browser consent/network verification used two local production builds: one compiled with the synthetic `NEXT_PUBLIC_GA_ID=G-TEST000000`, one with the variable unset. A local reverse proxy applied a restrictive CSP (`script-src`/`connect-src` limited to self) and sent CSP reports only to a local endpoint; no Analytics request was allowed to reach Google. The browser was inspected through DOM state, Resource Timing entries, and CSP reports. No real visitor data or production Analytics ID was used.
- Synthetic-ID browser results: before consent, no Analytics script/resource appeared. Accepting consent added the synthetic `gtag.js` script and queued `js`/`config`; the browser's CSP report explicitly recorded the script request as blocked. Revoking consent persisted `false`, set `ga-disable-G-TEST000000` to `true`, and queued `consent update` with `analytics_storage: denied`. The loader element remains in the current document after revocation, but the disabled flag and denied consent are applied; after refresh, no loader or Analytics resource appears. Accepting persisted across refresh before revocation.
- Unset-ID browser results: before and after accepting, and after refresh, no `gtag.js` element, Google Analytics resource, or gtag queue appeared. The accepted preference persisted. Source uses only `process.env.NEXT_PUBLIC_GA_ID || ""`; no hard-coded fallback measurement ID is present.
- Test limitation: the strict test CSP intentionally prevented the external Analytics library from executing. The browser confirmed that the app queues the expected config/deny commands and that the loader is blocked; this did not test Google's live library or any account-side data receipt.
- `npm run check:links` → passed.
- `npm run lint` → passed with two `<img>` warnings.
- `git diff --check` → passed.
- Python route inventory check → all 120 static source routes listed once; local generated sitemap contains 129 unique URLs (120 static + nine profile URLs).

Remaining non-build blockers are account-side verification and review of the generated TypeScript config files. The production site remains unchanged by this work.

## Subsequent editorial and verification update — 2026-10-17

- Refreshed six additional comparison routes using official provider sources: `/best/hubspot-vs-zoho-crm`, `/best/pipedrive-vs-zoho-crm`, `/best/clickup-vs-monday`, `/best/trello-vs-asana`, `/best/mailchimp-vs-brevo`, and `/best/mailchimp-vs-mailerlite`. Added specific free-tier constraints, plan/billing caveats, decision thresholds, and dated source links. No hands-on testing or deliverability testing is claimed.
- Re-reviewed `/best/ai-coding-assistants` against its local approved brief and QA checklist. Existing page already declares no completed benchmark and includes a repeatable task protocol; no fake results or guessed prices were added. Running the benchmark requires actual tool use and recorded outputs.
- `npm run build` passed on Next.js 16.4.0; generated all 133/133 static pages, including the edited routes. Next still warns about the ancestor `C:\Users\linuk\package-lock.json` outside this repository.
- `npm run check:links` passed across 137 source files with no missing destinations. `npm run lint` passed with zero errors and the two pre-existing `<img>` optimization warnings in `ProductScreenshot.tsx` and `SoftwareLogo.tsx`. `git diff --check` passed; Git printed only the existing `tsconfig.json` LF-to-CRLF working-copy notice.
- Final diff review is limited to the existing StackPick sitemap/consent/build-typing work, the six retained audit documents, and eleven comparison content pages (five prior + six additions). No credentials or production settings were added; no route was removed; no deployment or push occurred.
- External statuses remain unknown without account access: Search Console URL/query indexing evidence, exact AdSense rejection/ads.txt account diagnosis, consented analytics events under the real property, and affiliate approvals/tracking/terms.
- Production HTTP: homepage 200, sitemap 200 (122 `<loc>` URLs), robots 200, ads.txt 200, privacy page 200. Public checks do not establish Google indexing or account approval.

## Account access needed

Search Console: affected URL lists, URL Inspection canonical/indexing reasons, sitemap processing details, and validation states.

AdSense: current review/policy status, exact ads.txt match status, and publisher account confirmation.

Analytics: confirm configured property and inspect actual consented traffic/events.

Affiliate dashboards: application decisions, tracking-link status, rates, attribution, geography, and payout terms.

## Editorial implementation update — 2026-10-17

- Updated `app/best/quickbooks-vs-xero/page.tsx` after checking the official QuickBooks US pricing page and Xero US pricing page on 2026-10-17. The page now includes the QuickBooks listed $0 entry option and its limits (one user, no accountant access, two invoices/month, one connected bank), plus Xero US Early's $27/month price and 20-invoice/5-bill caps. It also lists Xero Growing/Established prices, explicitly scopes these figures to the US, adds a decision matrix, and clarifies who may outgrow each entry tier.
- The article remains desk-researched and expressly avoids claiming StackPick hands-on tested either product. Exact provider prices/promotions are volatile; page now labels its verification date and directs readers to live primary sources.
- Sources checked: `https://quickbooks.intuit.com/pricing/` and `https://www.xero.com/us/pricing-plans/`.
- Verification: `npm run build` passed, including static generation of `/best/quickbooks-vs-xero`; `npm run check:links` passed across 137 source files; `npm run lint` passed with two existing `<img>` optimization warnings and zero errors. Build emitted the existing warning about an ancestor `C:\Users\linuk\package-lock.json` outside the repository. No production page was changed or deployed.
- Next editorial step: refresh the remaining high-intent comparisons with the same primary-source and reader-decision standard, after prioritizing pages using Search Console URL/query exports. No live performance or AdSense effect is claimed.

### Second comparison refresh — 2026-10-17

- Updated `app/best/quickbooks-vs-freshbooks/page.tsx` after checking `https://quickbooks.intuit.com/pricing/` and `https://www.freshbooks.com/pricing`. Added current US pricing context; the $0 QuickBooks Free plan's two-invoice/month, one-user, one-bank and no-accountant-access limitations; FreshBooks Lite/Plus/Premium billable-client caps; and FreshBooks' explanation that archived clients count toward its cap. Added an entry-plan decision table and clearer conditions where each option may no longer fit.
- No hands-on testing is claimed. Prices and promotions are marked as time-sensitive; recommendations distinguish provider facts from fit guidance.
- Verification: `npm run build` passed and generated the static route, `npm run check:links` passed across 137 source files, and `npm run lint` passed with two existing `<img>` optimization warnings and zero errors. `git diff --check` run after this edit. Existing ancestor-lockfile build warning persists. No deployment or account-side status was checked.

### Third comparison refresh — 2026-10-17

- Updated `app/best/freshbooks-vs-wave/page.tsx` using FreshBooks pricing and Wave pricing/help center sources. Clarified dated US prices, FreshBooks' five/fifty/unlimited client tiers and archived-client counting, Wave Pro's subscription price and its reduced card fee limited to the first ten monthly transactions, plus Wave's US/Canada business eligibility.
- Kept the article desk-researched and disclosed time-sensitive price/payment facts. No hands-on test claim was added.
- Verification: `npm run build` passed and generated `/best/freshbooks-vs-wave`; internal-link check passed for 137 source files; lint passed with two existing `<img>` warnings and zero errors; `git diff --check` run after this edit. Existing ancestor-lockfile warning persists. No deployment or account-side verification.

### Fourth comparison refresh — 2026-10-17

- Updated `app/best/zoho-invoice-vs-wave/page.tsx` with verified Zoho US and Wave plan details. Clarified product scope (Zoho Invoice is invoicing-focused; Zoho Books has the listed banking/inventory/journal-entry features), Wave's US/Canada eligibility, Zoho's annual invoice cap, and Wave Pro's first-10-transactions fee condition. Added provider source links and a dated US pricing note.
- Renamed a section eyebrow from “head-to-head test” to “comparison method” to avoid implying the products were already hands-on tested. The page explicitly labels itself desk-researched.
- Verification: `npm run build` passed and generated `/best/zoho-invoice-vs-wave`; internal-link check passed (137 source files); lint passed with two existing `<img>` warnings and zero errors; `git diff --check` run after this edit. Existing ancestor-lockfile build warning persists. No deployment or account-side account verification.

### Fifth comparison refresh — 2026-10-17

- Updated `app/best/hubspot-vs-pipedrive/page.tsx` after checking HubSpot's free CRM page and Pipedrive's US pricing/plan documentation. Preserved HubSpot's 2-user/1,000-contact limits; clarified Pipedrive's 14-day trial, $14 Lite and $39 Growth seat prices on annual billing, and that email sync/automations require Growth. Added annual totals for three seats and clarified that the page is desk-researched, not a product benchmark.
- Verification: `npm run build` passed and generated `/best/hubspot-vs-pipedrive`; internal-link check passed (137 files); lint passed with two existing `<img>` warnings and zero errors. `git diff --check` run after documentation update. Existing ancestor-lockfile build warning persists. No deployment or account-side access.
