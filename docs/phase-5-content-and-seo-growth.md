# Phase 5 — Content and search growth

## Objective

Build durable organic discovery around useful, accurate software research. Improve the existing publication before increasing URL count. Do not use automated word-count thresholds as a substitute for editorial judgment.

## Phase 5 order of work

1. Inventory every guide and comparison route.
2. Review pages against search intent, original usefulness, evidence, pricing accuracy, clarity, internal links and overlap.
3. Assign a human editorial disposition: **keep**, **improve**, **consolidate**, **redirect**, or **noindex**.
4. Improve the highest-value pages first, starting with pages that have impressions or clicks in Search Console.
5. Build topic clusters around real reader jobs, not near-duplicate keyword variants.
6. Improve structured data only where it accurately describes visible page content.
7. Recheck sitemap, canonicals, robots, internal links, mobile rendering and crawlability.
8. Review AdSense account notices and policy diagnostics separately; site-side checks cannot predict approval.

## Initial inventory tool

Run:

```powershell
npm run audit:content
```

The script scans `app/best/**/page.tsx` and writes `artifacts/phase-5-content-audit.csv`.

It reports route, metadata, approximate source-word count, heading counts, internal-link count, external URL count, tool-entry count, a detectable review date and heuristic flags. The source-word count includes some code and JSX expressions; it is a triage signal, not a true rendered word count. The script does not browse official sources, inspect Search Console, judge originality, validate factual claims or decide whether a page should be indexed.

## Manual editorial scorecard

Score each item 0–2 and record the evidence:

| Criterion | 0 | 1 | 2 |
|---|---|---|---|
| Search intent | Does not answer the query | Partly answers it | Direct, complete answer |
| Original usefulness | Generic/repetitive | Some practical detail | Distinctive decision help, examples or tools |
| Evidence | Unsupported or stale claims | Some sources, gaps remain | Material claims trace to current primary sources |
| Pricing clarity | Ambiguous or misleading | Key terms partly explained | Billing, limits, region and caveats are clear |
| Comparison quality | Names/features only | Some meaningful trade-offs | Clear fit, exclusions and alternatives |
| Readability | Repetitive or hard to scan | Understandable | Concise, structured and easy to act on |
| Topic links | Orphaned or irrelevant | A few related links | Useful links to profiles, comparisons and next steps |

A score is a prioritization aid, not a Google or AdSense threshold. Any page with unsupported material claims must be corrected regardless of its total score.

## Disposition rules

- **Keep:** useful, distinct and sufficiently supported; make only evidence-backed updates.
- **Improve:** has a clear purpose but needs stronger analysis, sources, examples or internal links.
- **Consolidate:** substantially overlaps another page and does not serve a distinct reader task. Preserve the stronger destination and map redirects carefully.
- **Redirect:** retire only after checking backlinks, traffic, canonical targets and topical fit.
- **Noindex:** use only where a URL has a valid user purpose but should not compete in search. Do not use noindex as a substitute for fixing a useful page.

Do not delete or redirect URLs based only on low word count, low traffic or an automated flag.

## Search and answer-engine foundations

- Write page titles and descriptions for the actual task and reader, not repeated keyword strings.
- Put a direct, accurate answer near the beginning, then explain the evidence and exceptions.
- Use descriptive H2/H3 headings, comparison tables where they help, and concise FAQs only when they answer real questions.
- Cite official vendor pricing, product documentation, help pages and terms for claims that change.
- State the market/region and billing basis when prices are compared. Distinguish monthly billing from annual-billing equivalents, per-seat from per-workspace costs, free plans from trials, and promotions from standard prices.
- Show the research basis honestly. Do not claim hands-on tests, verified purchases or customer outcomes that did not occur.
- Keep visible content and structured data aligned. Do not add ratings, review markup or FAQ markup that is not supported by visible, eligible content.
- Link each guide to relevant software profiles, comparisons and adjacent guides; avoid repetitive blocks of irrelevant links.
- Do not generate dozens of near-identical pages for keyword coverage.

## Monetisation guardrails

- Keep affiliate relationships clearly disclosed before activating tracking links.
- Recommend a product only when it is genuinely relevant to the page and explain material limitations.
- Do not let commission rates determine editorial ranking.
- Do not add affiliate links to every mention or interrupt the answer with repeated calls to action.
- Do not enable display ads until the account-side status, privacy disclosures and required consent controls have been checked.

## Completion criteria

Phase 5 is ready to close only when the content inventory has been reviewed, priority pages have been improved with traceable sources, overlap decisions are documented, internal links and sitemap are checked, and the AdSense account-side diagnostics have been reviewed. No approval or ranking outcome is guaranteed.

## Initial inventory snapshot — 7 November 2026

The first successful repository audit found:

- **109 guide/comparison article routes**
- **7 permanent-redirect routes**, removed from the XML sitemap
- **1 main `/best` directory page**
- The audit script passed syntax validation and generated its CSV report in GitHub Actions.
- The heuristic scanner currently reports no metadata/structure flags. The link audit finds no article route without internal links. This is not a quality certification and does not verify the factual accuracy or originality of any article.
- The related-guide map now contains **100 topic clusters and 304 contextual links**; the audit confirms every article route has at least two internal links. This checks declared links, not whether every link is the best editorial choice.
- Eight articles remain in the manual content-review queue because their estimated page-specific source copy is comparatively short: `invoice-clients-as-freelancer`, `manage-customer-leads-as-freelancer`, `free-vs-paid-business-software`, `manage-client-projects-without-full-time-team`, `ai-tools-marketing-small-businesses`, `calendly-vs-google-calendar`, `notion-vs-clickup` and `canva-vs-adobe-express`. Their shared article-template content is not included as unique editorial depth; review these pages manually before making any index or consolidation decision.

The first editorial expansion batch improves eight alternatives/workflow pages and adds contextual related-guide links across additional topic clusters. The next batch should be selected using Search Console query/page performance, then checked against current primary sources.
