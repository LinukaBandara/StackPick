# StackPick US Topic Opportunity Review — October 10, 2026

Status: preliminary live-SERP review. This is a prioritization memo, not a verified keyword-volume report. No exact US monthly search volumes, CPC values, or ranking-difficulty scores are claimed here because a fresh Keyword Planner export was not available in this review.

## Goal

Find a small number of new, useful software-discovery pages that can attract relevant US organic traffic without duplicating StackPick's existing library. The business goal is sustainable organic traffic and eventual AdSense monetization, not page-count growth.

## Existing route overlap checked

The current `main` route list already includes:

- `/best/ai-coding-assistants`
- `/best/ai-tools-react-nextjs`
- `/best/llm-tools-for-developers`
- `/best/github-tools-for-developers`
- `/best/devops-tools-small-teams`
- `/best/ai-agent-frameworks`
- `/best/n8n-vs-make-vs-zapier`
- `/best/n8n-workflow-examples`

Do not create another broad “best AI coding tools” or “AI tools for React/Next.js” page without first proving a distinct intent gap. Improve the relevant existing page if the query intent overlaps.

## Preliminary candidate ranking

### 1. Best AI coding agents for existing codebases

Candidate slug: `/best/ai-coding-agents-for-existing-codebases`

Priority: **First to validate; publish only if StackPick can add original hands-on evidence.**

Why it may fit:
- It narrows the existing broad coding-assistant category to a concrete job: safely understanding and changing an unfamiliar repository.
- A useful article can test multi-file edits, architectural consistency, test execution, hallucinated APIs, unnecessary refactors, and human review burden.
- A live SERP result from Frontman, updated September 3, 2026, shows that “large existing codebases” is already a covered angle, so this is not an empty niche. A generic listicle is unlikely to stand out.

Proposed differentiator:
- Use one disclosed, reproducible test repository and a small task set.
- Publish the test prompts, scoring rubric, observed failures, and date of testing.
- Separate tools that work inside an IDE from terminal-first agents and clarify the cost/usage conditions used.

Source reviewed: https://frontman.sh/blog/6-ai-coding-tools-production/

### 2. Claude Code vs Cursor

Candidate slug: `/best/claude-code-vs-cursor`

Priority: **Validate demand and SERP difficulty before writing.**

Why it may fit:
- It is a concrete product-choice query with an understandable decision: editor-led work versus agent-led repository tasks.
- Several current results already target the exact comparison, including Zapier's May 7, 2026 guide and newer specialist pages. This is evidence of established intent, but also a competitive SERP.

Proposed differentiator:
- Compare both on the same three repository tasks rather than repeat a feature checklist.
- Report setup time, useful changes accepted, incorrect changes, verification steps, and total usage cost under clearly described plans.
- Keep prices and plan limits date-stamped and sourced from official vendor pages.

Sources reviewed:
- https://zapier.com/blog/claude-code-vs-cursor/
- https://parallel.ai/articles/claude-code-vs-cursor-how-to-choose-your-ai-coding-tool-in-2026
- https://www.sitepoint.com/claude-code-vs-cursor-comparison/

### 3. Best AI code review tools for GitHub

Candidate slug: `/best/ai-code-review-tools-github`

Priority: **Hold unless StackPick can run a fair, meaningful evaluation.**

Why it may fit:
- The reader has a clear selection problem: which tools detect meaningful issues without overwhelming a pull request with false positives.
- The SERP is crowded. Recent pages from Morph, Scopy, and other publishers compare overlapping tool sets, and some claim hands-on tests or benchmark data.

Proposed differentiator if pursued:
- Do not reproduce another feature-and-price roundup.
- Use a reproducible, clearly scoped set of pull requests, with seeded defects and a rubric for valid findings, false positives, missed defects, setup friction, and cost.
- Disclose the limits of the test and vendor affiliations. Do not imply that a small test predicts all production outcomes.

Sources reviewed:
- https://www.morphllm.com/github-ai-code-review
- https://scopy.dev/blog/best-ai-code-review-tools-github
- https://aicodereview.io/tools/platform/github/

## Search-demand validation still required

Before selecting a page, run the same seed list in Google Keyword Planner with location set to United States and language English:

- AI coding agents for existing codebases
- best AI coding tools for large codebases
- Claude Code vs Cursor
- Claude Code vs GitHub Copilot
- AI code review tools for GitHub
- best AI code review tools

For each query, record:
- exact query and close variants
- average monthly searches and any available monthly history
- competition and top-of-page bid range, if shown
- date researched and location/language settings
- live top-10 result types and dominant intent
- matching StackPick URL, overlap risk, and original evidence we can provide

Do not turn advertiser bid ranges into predicted AdSense earnings. Do not publish a page based only on an apparently large volume estimate.

## Decision rule

1. First inspect StackPick's Search Console queries and impressions for existing developer pages. If a current URL already earns impressions for the target intent, improve it before creating a competing page.
2. Validate US demand and manually inspect the live SERP.
3. Pick no more than one new page for the first test batch.
4. Require original test evidence, official pricing/source links, honest limitations, and contextual internal links.
5. Run the normal build, route, canonical, and sitemap checks before merge/deploy.

Google's guidance warns against scaled content that adds little original value and recommends people-first content with original information and analysis:
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Current recommendation

Start with **AI coding agents for existing codebases** as the first topic to validate, not as an automatic publish decision. It has a concrete practical test StackPick can perform. Keep Claude Code vs Cursor as the second candidate, subject to demand and competition checks. Hold the AI code review roundup until we can provide a credible, reproducible evaluation.

This review does not claim exact keyword volumes, guaranteed rankings, traffic, AdSense approval, or earnings.
