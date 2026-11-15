# StackPick AdSense recovery — working plan

## Objective

Improve the usefulness, originality, trust signals and navigability of StackPick before requesting another AdSense review. This is a quality project, not a page-count exercise. Approval is not guaranteed.

## Guardrails

- Preserve existing public URLs, canonical URLs, analytics, visual identity and affiliate strategy unless an audited issue requires a change.
- Do not invent hands-on testing, customer reviews, author credentials, traffic, pricing or product capabilities.
- Clearly distinguish vendor-published facts from StackPick analysis and editorial recommendations.
- Link material plan, feature and policy claims to current primary sources; record when each source was checked.
- Consolidate genuinely overlapping pages only after checking search intent, backlinks, internal links and redirect/canonical implications.
- Do not manufacture traffic, engagement or user feedback.

## Phase 1 — route and directory integrity

Completed on the recovery branch:

- Compared `app/best/page.tsx` directory links with the source of every static `app/best/**/page.tsx` route.
- Removed the duplicate AI Meeting Assistant Pricing directory entry.
- Confirmed that the seven route files absent from the directory are intentional `permanentRedirect` aliases, not standalone guide pages. They should not be added as separate directory entries.
- Added `npm run check:best-directory` to detect duplicate entries, content routes missing from the directory and directory links without a content route. Intentional permanent-redirect aliases are excluded.

Baseline before the change: 110 directory entries, 109 unique links and 116 static route files. Of those route files, 109 are content pages and seven are redirect aliases.

Expected after the change: 109 unique directory entries matching the 109 content routes, with seven redirect aliases intentionally excluded.

## Phase 2 — initial source audit findings (in progress)

The following is a source-level review of representative routes, not a claim that all 109 pages have been fully verified or that the live rendered pages have been browser-tested.

### Shared comparison template

- The shared `ComparisonArticle` template supplies a consistent overview matrix, product-by-product free-plan/trade-off blocks, a verdict, related guides and direct vendor links.
- It does not itself provide page-specific source citations, a verification date, a named human reviewer, or an article-specific decision framework. Those elements must come from each page's own content where appropriate; a shared layout cannot substitute for original editorial substance.
- Replaced the generic "Independent research" label with a clearer disclosure: "Desk research · Hands-on testing is only claimed when explicitly described · Verify current pricing with each provider." This aligns the page-level wording with the existing About and How We Verify disclosures. It does not claim that every fact on every page has been freshly rechecked.

### Representative route findings

| Route | Source-level observation | Initial classification |
|---|---|---|
| `/best/web-hosting` | Five vendors and useful renewal-price framing, but the inspected page has no page-specific source/date block or extra decision checklist. Several factual statements (including backup cadence and support/reliability positioning) need current primary-source evidence or qualification. | Improve |
| `/best/pos-systems` | Four providers and a useful processing-fee decision angle, but the inspected page has no dated source block or original cost scenario. The percentage-point example and contract assertions need source support and a clear market/region scope. | Improve |
| `/best/hr-software` | Distinguishes HR from payroll and differentiates four vendors, but the inspected page has no dated source block or detailed workflow checklist. US employee-count guidance and international payroll claims need explicit geography and official-source support. | Improve |
| `/best/cloud-storage` | Includes a distinct collaboration, external-sharing, recovery and data-exit checklist; useful original decision guidance is present. Free storage figures and product capability statements still need dated primary-source links. | Keep / verify |
| `/best/form-builders` | Includes a lead handoff checklist and a practical mobile submission test. The article should keep its advice distinct from generic feature summaries and attach dated evidence to plan limits. | Keep / verify |
| `/best/n8n-workflow-examples` | Provides multiple operational workflow examples, failure-path checks and an explicit statement that the blueprints are not claimed to have been run by StackPick. This is a stronger example of page-specific utility. | Keep / verify |
| `/best/time-tracking-software-pricing` | Includes official vendor pricing links, a stated verification date and cost modelling. Recheck prices and calculations before release because pricing is volatile. | Keep / refresh |

### Next audit actions

1. Complete a route-by-route inventory of all 109 content pages and record page-specific evidence, useful unique sections, date/source coverage, regional scope and overlap.
2. Prioritize pages that rely on broad assertions or current pricing without dated primary-source evidence.
3. Add original scenarios, decision thresholds, migration/checklist guidance or worked calculations only where they genuinely help the stated reader.
4. Review overlapping pages by search intent and distinct reader need before considering consolidation or noindex.
5. Do not infer that a page is thin solely because it uses the shared template; assess its complete page-specific content and rendered experience.

## Phase 2 — content quality audit

Audit every guide and profile with a consistent rubric:

1. Search intent and intended reader are explicit.
2. The page contributes original synthesis, decision criteria, examples or workflow guidance beyond vendor copy.
3. Product-specific differences are concrete and accurate.
4. Pricing, free-plan caps, regional availability and feature claims have current primary-source support.
5. Limitations, exclusions, migration costs and reasons not to choose an option are explained.
6. The page is meaningfully distinct from related StackPick pages.
7. Links, metadata, canonical URL and structured data are correct.

Classify each URL as keep, improve, consolidate, noindex or investigate. Do not make mass noindex or deletion changes based on similarity alone.

## Phase 3 — software catalogue

Inspect the source of truth and every public profile. Expand only where a profile can be supported by useful, researched detail. Prioritize category coverage and meaningful product fit over reaching an arbitrary catalogue size.

## Phase 4 — trust and transparency

Verify author/editor identity, editorial methodology, source standards, correction contact, affiliate disclosure, privacy policy, terms and contact details. Never imply testing or expertise that cannot be substantiated.

## Phase 5 — technical and experience review

Check mobile layouts, navigation, broken internal/external links, indexability, sitemap, robots directives, canonicals, structured data, performance and accessibility. Review Search Console coverage and analytics using current first-party data where available.

## Phase 6 — release and review gate

Run lint, build and all content-integrity checks. Review representative pages on production, verify redirects and analytics, then prepare a final issue register. Request AdSense review only after material issues are resolved. Google makes the approval decision.

## Official guidance

- [AdSense: Make sure your site's pages are ready](https://support.google.com/adsense/answer/7299563)
- [AdSense: What to do when your site is not ready to show ads](https://support.google.com/adsense/answer/12176698)
- [AdSense: Your account wasn't approved](https://support.google.com/adsense/answer/81904)
- [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
