# StackPick — AdSense and premium-ad readiness programme

**Working branch:** growth/adsense-journey-readiness  
**Baseline:** Phase 5–11 draft stack  
**Last reviewed:** 7 November 2026  
**Release status:** Not merged or deployed

This tracks the six workstreams required before another AdSense review and before applying to Journey by Mediavine. It separates code work from account-side actions and traffic evidence. Passing a checklist does not guarantee approval.

## 1. Complete the 109-guide quality audit

**Status: inventory, first editorial pass and eight-page primary-source checks complete; final route reconciliation and editorial sign-off remain.**

- Phase 5 inventory counted 109 guide/comparison routes, seven permanent redirects and the /best directory route.
- Seven redirect routes were removed from the sitemap.
- The related-guide map contains 100 topic clusters and 304 contextual links; every article route has at least two declared internal links.
- Eight priority pages were flagged for additional manual review: invoice clients as a freelancer; manage customer leads as a freelancer; free vs paid business software; manage client projects without a full-time team; AI marketing tools for small businesses; Calendly vs Google Calendar; Notion vs ClickUp; Canva vs Adobe Express.
- The first expansion pass has already added task-specific workflows and trade-offs to these pages. A second evidence pass now adds official plan facts and direct provider references to each of the eight flagged guides through a shared, page-specific evidence panel. Do not treat the source-word heuristic as a quality verdict.
- The live /best directory currently reports 110 guides while the Phase 5 branch inventory reports 109. Re-run the route inventory after the full PR stack is reconciled and explain the difference before declaring the audit final.

**Remaining gate:** manually verify the eight priority pages against their primary vendor sources, confirm that each page answers a distinct intent, and record keep/improve/consolidate decisions. Do not remove or redirect URLs based only on length or traffic.

## 2. Improve original comparisons, pricing evidence and practical analysis

**Status: foundational improvements and an eight-guide primary-source evidence pass are now in the branch; a broader editorial review is still required.**

- Keep comparisons task-led: state who each tool suits, who should not choose it, the practical constraint and switching cost.
- Prefer official pricing pages, plan documentation, help centres and terms over third-party summaries.
- Record market, currency, billing interval, standard price versus promotion, per-seat charges, usage caps, add-ons, taxes and payment fees when material.
- Do not quote temporary promotional prices as standard prices.
- Do not claim hands-on testing, customer outcomes, purchases or support interactions unless they actually occurred. Desk research must be labelled honestly.
- The eight priority pages now show current official plan limits and direct provider references, checked 7 November 2026. Recheck each provider before the next material article update. If an exact price or limit cannot be verified, keep uncertainty visible rather than guessing.

## 3. Strengthen author credibility and editorial transparency

**Status: methodology and trust foundations are in the Phase 5–11 branch; production is not yet aligned.**

- The branch includes an updated How We Verify page, editorial review policy, correction route, review dates and a more complete privacy policy describing accounts, reviews, vendor submissions, Supabase, consented analytics and advertising status.
- The live production privacy page still displays the old “No accounts” statement, while the current product includes account and community-review functionality. Release the reviewed Phase 5 trust changes before any AdSense resubmission.
- Keep commercial and editorial decisions separate. Affiliate links remain inactive until written programme approval and verified tracking URLs exist.
- Keep sponsored placements clearly labelled and never sell ranking, favourable verdicts or review removal.
- Re-check About, Contact, Privacy, Terms, Affiliate Disclosure, How We Verify, Editorial Review Policy and correction route on production after release.

## 4. Improve US, UK, Canada and Australia organic discovery

**Status: market foundation exists; regional SEO execution is evidence-led.**

- Phase 9 adds a market registry for US, UK, Canada, Australia, Sri Lanka, India and Singapore, with local currency formatting and safeguards against invented FX conversions or assumed availability.
- English remains the canonical editorial language. Do not publish query-string market variants as separate SEO pages, and do not add hreflang until complete reviewed translations and canonical locale routes exist.
- Build country-specific pages only when there is distinct search intent and genuinely different local evidence: local pricing, supported payment methods, taxes, availability, data residency or plan restrictions.
- Use Search Console country/page/query exports to identify actual demand before choosing regional topics. Do not create thin “best software in [country]” pages by swapping country names.
- Import separate GA4 country reports for US, GB, CA, AU and NZ using the same exact 30-day date range. These are StackPick's target markets; do not assume they are an exhaustive definition of Journey's premium regions.

## 5. Prepare StackPick for another Google AdSense review

**Status: code-side foundations exist in the draft stack; account-side review is outstanding.**

- Google requires original, high-quality content that complies with publisher policies and a usable site experience. Google does not publish a guaranteed article-count or traffic threshold for standard AdSense site eligibility.
- Confirm the AdSense account's exact rejection reason and current site status. Do not assume the earlier “few tweaks” notice is resolved by code changes alone.
- Verify ownership/site verification on the exact canonical domain and confirm the verification tag is present in deployed HTML.
- Release the corrected privacy policy and ensure the actual consent experience matches the disclosures. Do not enable ad serving until account status, privacy disclosures and required consent controls have been reviewed.
- Recheck sitemap, robots, canonicals, navigation, mobile usability, broken links, thin/overlapping pages and public legal/editorial pages.
- Submit a new review only after the live site reflects the reviewed changes and the AdSense dashboard allows the site to be reviewed. No approval is promised.

## 6. Prepare for Journey by Mediavine

**Status: country-level GA4 reporting support added in this branch; actual eligibility is not yet verified.**

Journey's published minimum includes at least 1,000 premium sessions over a 30-day period, a connected GA4 account, original brand-safe content, an engaged audience and frequently updated content. Journey evaluates traffic quality and audience composition; its own evaluation determines which sessions qualify as premium.

- The new private route /admin/analytics/journey accepts one GA4 country total at a time for US, GB, CA, AU and NZ, StackPick's priority target markets.
- Each import requires the same exact 30-day inclusive date range, a country code, an aggregated session count and optional GA4 report URL.
- Country rows are stored separately from property-wide totals and grouped by their exact date window. Missing markets are called out; partial totals are not represented as complete.
- This dashboard is a planning indicator, not Journey's official premium-session calculation or an approval guarantee.
- Import actual GA4 reports; no sample, demo or inferred sessions are included.
- Before applying, confirm GA4 is connected to the correct production property, Journey's own premium-session count reaches the threshold, traffic is genuine, and content and engagement criteria are met.

## Official requirements references

- Google AdSense eligibility: https://support.google.com/adsense/answer/9724
- Google AdSense page-readiness guidance: https://support.google.com/adsense/answer/7299563
- Google Publisher Policies: https://support.google.com/adsense/answer/10008391
- Journey minimum requirements: https://journeymv.zendesk.com/hc/en-us/articles/24633185741723-Journey-Minimum-Requirements
- Journey best practices: https://journeymv.zendesk.com/hc/en-us/articles/24632817602715-What-are-best-practices-for-a-website-monetized-by-Journey-by-Mediavine

## Release checklist

- [ ] Review and merge the existing Phase 5–11 PR stack in dependency order after CI passes.
- [ ] Apply the new country-dimension migration to the intended Supabase project after reviewing the SQL.
- [ ] Verify the private analytics and Journey pages with a moderator account on a preview deployment.
- [ ] Re-run lint, internal-link checks, content audit, dependency audit and production build.
- [ ] Confirm production privacy, consent, canonical domain, sitemap and verification tag after deployment.
- [ ] Import real 30-day GA4 country reports and actual Search Console page/query/country exports.
- [ ] Reassess AdSense and Journey account eligibility before submitting either application.

No production merge, deployment, AdSense application or Journey application is performed by this branch.
