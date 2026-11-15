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
