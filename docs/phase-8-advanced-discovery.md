# Phase 8 — Advanced discovery

## Delivered

### Guided software finder
- Route: `/software-finder`
- Inputs: workflow, team-size band, budget preference and optional priorities.
- Workflow choices cover CRM/sales, accounting/invoicing, project work, marketing, design/content, developer/IT, customer support, commerce and productivity.
- Budget modes: permanent-free only, prefer free/lower-entry options, or open to paid tools.
- Priorities: ease of getting started, automation, collaboration, integrations, reporting and AI features.
- Results show up to eight catalogue profiles, a fit score, evidence-based reasons, a team-size caveat and links to profiles, alternatives and comparison.

### Transparent scoring
- Workflow match: 45 points.
- Selected priorities: up to 30 points.
- Team-size signals in the published profile: up to 15 points.
- Budget preference: up to 10 points.
- The score is a shortlist aid, not a quality or performance rating.
- The engine uses existing profile copy and plan descriptions. It does not invent feature support, exact pricing, regional availability or hands-on test results.
- A permanent-free-only filter relies on the profile's published free-plan text; users should still confirm current terms with the provider.

### Alternatives finder
- Route: `/alternatives`, with optional `?software=<slug>`.
- Profile pages link directly to the alternatives finder.
- Shows the product's curated alternatives and additional products from its category.
- Provides direct profile and side-by-side comparison links.
- Does not claim that an alternative is universally better.

### Discovery entry points
- Header and mobile navigation include Software Finder.
- Footer includes Software Finder and Find Alternatives.
- Software profiles link to Find Alternatives.
- Finder and alternatives links lead into the existing catalogue and comparison workspace.

## Existing capabilities reused
- The catalogue already supports search, category, pricing, use-case filters, sorting and URL state.
- The comparison workspace already supports up to three products, differences-only view, shareable URLs and a saved shortlist. Phase 8 routes new recommendations into that workspace rather than duplicating it.

## Deliberate limitations
- This is a deterministic, explainable recommendation engine, not a generative AI chatbot.
- AI features are only surfaced when the existing product profile text explicitly mentions them. No AI capability is inferred from brand reputation.
- A live AI assistant would require an approved model provider, server-side credentials, usage controls, privacy disclosures and evaluation against the catalogue. It is not enabled by this phase.
- Team-size fit is a text-based signal, not a verified seat-limit compatibility check.
- Budget preference is qualitative; the engine does not convert currencies or estimate total cost of ownership.

## Routes
- `/software-finder` — indexable guided finder.
- `/alternatives` — noindex utility page; profile-specific URLs remain shareable.
