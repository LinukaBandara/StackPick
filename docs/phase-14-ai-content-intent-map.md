# Phase 14 — AI guide search-intent and consolidation map

**Prepared:** 7 November 2026  
**Branch:** `growth/adsense-journey-readiness`  
**Evidence basis:** source-level review of current page purpose, introductions, tool lists, unique workflows and internal links. This is not a Search Console query/cannibalization analysis.

## Decision

**Do not merge or noindex any of these guides at this stage.** The page purposes can be differentiated by distinct user tasks. Similar vendor names alone are not evidence of duplicate search intent. Use Search Console page/query data after the next deployment window to test whether Google is treating the pages as competing results.

## Recommended page roles

| Page | Primary reader intent | Unique value that must remain | Avoid duplicating |
|---|---|---|---|
| `ai-tools-small-businesses` | “Which general AI assistant should my small business use?” | General assistants (ChatGPT, Claude, Gemini, Microsoft Copilot), consumer-vs-business accounts, company-data controls. | Specific writing, marketing, automation or free-tier comparison tables. |
| `free-ai-tools-small-businesses` | “What can I use for free, and where will the limits stop me?” | Free eligibility, feature-specific usage limits, upgrade triggers and consumer-account risk. | Broad product ranking or paid-plan deep dives. |
| `ai-tools-marketing-small-businesses` | “How can I plan and produce a small-business campaign?” | Campaign workflow from plan to assets, review, rights and measurement; Canva/Adobe Express/Jasper/HubSpot roles. | General writing assistant comparisons. |
| `ai-writing-tools-small-businesses` | “Which tool helps draft and edit business copy?” | Writing-specific work: source-grounded drafts, tone, claim control, editing and approval. | Visual asset production, full marketing suite or general AI assistant rankings. |
| `ai-tools-business-content` | “How do I create a multi-format business content package?” | Combined copy + visual assets + brand consistency + licensing + approval; differentiate from text-only writing. | Another general writing-tool list; include cross-format workflow examples. |
| `ai-tools-freelancers` | “Which AI tools help an independent freelancer deliver client work?” | Broad freelance task map across drafting, editing, visuals and meeting notes; a hub page linking to task-specific guides. | Detailed productivity/automation or one-vendor comparison tables. |
| `ai-productivity-tools-freelancers` | “Which AI tools reduce admin and context switching?” | Research, meeting capture, task extraction and app automation; measure time saved after setup/review. | General freelancer AI stack or text-generation comparison. |
| `chatgpt-vs-claude-for-freelancers` | “Which of these two assistants fits my freelance tasks?” | Side-by-side workflow test, plan usage, subscription/API distinction and non-universal verdict. | General tool directory or claims that one model always wins. |
| `ai-customer-support-tools` | “Which AI system can answer support conversations?” | Helpdesk integration, automated-resolution billing, human handoff, ticket volume, privacy and escalation. | General AI assistants and marketing chat copy. |
| `ai-automation-tools-small-businesses` | “Which platform connects business apps and automates workflows?” | Task/credit/execution billing, hosting/maintenance, retries, error recovery and integration ownership. | Agent framework/model-provider comparison. |
| `n8n-vs-make-vs-zapier` | “Which automation platform should I choose?” | Direct platform comparison and cost-unit examples. | Generic automation how-to. |
| `n8n-workflow-examples` | “How do I implement a practical n8n workflow?” | Node-level conceptual blueprints, data validation, deduplication, error handling and tested-vs-untested disclosure. | Platform selection tables. |
| `ai-coding-assistants` | “Which AI coding assistant fits my editor/repository workflow?” | Inline completion, multi-file agent, terminal workflow, usage credits and safe code review. | General LLM API provider directory. |
| `ai-tools-react-nextjs` | “Which AI tools help build/test React and Next.js?” | Framework-specific component, server/client, TypeScript and browser testing workflow. | Broad coding assistant plan comparison. |
| `llm-tools-for-developers` | “Which tools do I need for LLM API/model infrastructure?” | Hosted APIs, token billing, local inference, model hub, evaluation and observability. | Agent framework orchestration tutorials. |
| `ai-agent-frameworks` | “Which SDK/framework should I use to build agents?” | Tool calling, state, checkpoints, handoffs, guardrails, human approval, framework lifecycle. | General hosted LLM API pricing guide. |

## Internal-linking strategy

- General AI hub → free AI, writing, marketing, business content, freelancer AI and customer support guides.
- Freelancer AI hub → productivity, writing, meeting assistant and ChatGPT-vs-Claude guides.
- Marketing guide → writing, business content, general AI and marketing automation.
- Developer hub → coding assistants, React/Next.js, LLM tools and agent frameworks.
- Automation guide → n8n vs Make vs Zapier and n8n workflow examples.
- Support guide → help desk and live chat guides.
- Avoid repeating the same vendor comparison table across pages; link to the specialist guide for plan-level detail.

## Search Console validation before consolidation

After deployment and data collection, compare:
1. Queries shared by two or more pages.
2. Which URL receives impressions/clicks for each query cluster.
3. Average position and CTR by query/page over the same time window.
4. Whether one page is consistently replacing another for the same intent.
5. Internal-link anchors and canonical/indexing state.
6. Actual user value and unique content, not only ranking overlap.

A page should be considered for consolidation only if the query sets, purpose and useful content materially overlap and a merged page can serve the intent better. Preserve redirects and internal links only after deciding the canonical destination and mapping unique sections.

## Current recommendation

- **Keep separate:** all pages listed above.
- **Improve:** maintain unique task-specific workflows, plan details and primary-source evidence.
- **Consolidate:** none approved.
- **Investigate:** after Search Console is available, inspect query overlap between freelancer AI hub/productivity, business writing/business content, general AI/free AI and developer coding/LLM/agent guides.

No search-performance or ranking conclusions are made from source code alone.
