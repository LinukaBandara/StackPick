# Phase 14 — ESLint and minimatch advisory remediation

**Reviewed:** 7 November 2026  
**Branch:** `growth/adsense-journey-readiness`

## Current state

- Next.js: `16.4.2`
- `eslint`: `8.57.1`
- `eslint-config-next`: `15.5.27`
- Legacy `.eslintrc.json` configuration; no `eslint.config.mjs` yet.
- The two malformed `pricingNote` string literals in `free-accounting-software` and `web-hosting` were fixed. GitHub Actions run `42393583462` on commit `3bc2c04a` passed dependency installation, production dependency audit, internal-link checks, ESLint and the production build. The build compiled, completed TypeScript and generated all 208 static pages. SEO/content runs `42393581088` and `42393577753` also passed. A later shared-image-component cleanup is under fresh CI validation; see the phase-14 content audit for its commit/run IDs.
- Production dependency audit reports **0 vulnerabilities**.
- Full audit reports **6 moderate development-dependency advisories** from one resolved `minimatch@10.2.6` copy under `@typescript-eslint/typescript-estree@8.70.1`. Production dependency audit reports **0 vulnerabilities**.

## Advisory

GitHub Advisory `GHSA-g3hv-75wg-m249` / `CVE-2026-118764` affects minimatch versions `>=7.0.0 <11.0.1`; the patched release is `11.0.1`. The issue is a possible denial of service through glob-pattern amplification. The resolved package is used by the TypeScript ESLint parser chain, not by production application code.

- Advisory: https://github.com/advisories/GHSA-g3hv-75wg-m249
- Upstream typescript-eslint issue: https://github.com/typescript-eslint/typescript-eslint/issues/13125
- Next.js 16 ESLint guidance: https://nextjs.org/docs/app/api-reference/config/eslint
- Next.js 16 upgrade guide: https://nextjs.org/docs/app/guides/upgrading/version-16
- ESLint flat-config migration: https://eslint.org/docs/latest/use/configure/migration-guide

The upstream `typescript-eslint` issue confirms that `typescript-estree` currently requests `minimatch@^10.2.2`, and that its relevant call uses `minimatch(filePath, pattern, { dot: true })`, an API retained in minimatch 11. The upstream issue was still open when reviewed; do not claim the dependency is fixed by a newer `typescript-eslint` release without checking its published manifest.

## Safe remediation strategy

1. **Do not force an unnecessary major-version migration.** Next.js 16 removed `next lint` and recommends the ESLint CLI. However, the Next.js 16 upgrade guide explicitly says an existing project that does not use `eslint-config-next@16` may keep its compatible ESLint version; `eslint-config-next@16` requires ESLint 9 or later. This repository currently uses ESLint 8.57.1 with `eslint-config-next@15.5.27` and the legacy config. Keep this compatible pair unless the actual lint run demonstrates a config incompatibility. A flat-config/ESLint 9 migration can be scheduled separately and must preserve current rules.
2. **Use a scoped override only if compatibility tests pass.** Candidate npm override:
   ```json
   {
     "overrides": {
       "@typescript-eslint/typescript-estree": {
         "minimatch": "11.0.1"
       }
     }
   }
   ```
   Do not use a global `minimatch@11` override. Other packages in this lockfile use minimatch 3.x and expect its older callable API; forcing 11 across every dependency can break unrelated ESLint plugins.
3. **Regenerate the lockfile with npm, not hand-edited JSON.** Run `npm install` in a real checkout and inspect `npm ls minimatch`. Keep legacy 3.x copies where required and ensure the TypeScript parser chain resolves to 11.0.1 or later.
4. **Run compatibility checks before committing:** `npm ci`, `npm audit`, `npm audit --omit=dev`, `npm run lint`, `npm run build`, `npm run audit:seo`, `npm run check:links` and `npm run audit:content`.
5. If the scoped override fails or causes parser/plugin regressions, revert it and wait for an upstream compatible release or a corrected advisory range. Do not hide the finding with an audit exception.

## Why no dependency change was committed here

The repository connector can edit GitHub files but cannot execute `npm install` or regenerate a trustworthy lockfile. The available shell environment has no network access to clone the repository. Manually changing `package-lock.json` would risk an invalid integrity hash, dependency graph or install state. The application passed lint and production build in CI on commit `3bc2c04a`. The six moderate findings are development-only, and remain explicitly tracked until a reproducible scoped lockfile update is tested. Do not describe the full dependency tree as clean.

## PowerShell commands for the local checkout

```powershell
cd "$HOME\Desktop\WEB AGENCY\stackpick"
git switch growth/adsense-journey-readiness
git pull --ff-only origin growth/adsense-journey-readiness

# First inspect the dependency graph before applying the scoped override
npm ls eslint eslint-config-next @typescript-eslint/typescript-estree minimatch
npm audit

# Apply the scoped override only after reviewing the advisory and compatibility notes.
npm pkg set 'overrides.@typescript-eslint/typescript-estree.minimatch=11.0.1'

# Regenerate the lockfile using npm; do not edit package-lock.json by hand.
npm install
npm ls minimatch
npm audit
npm audit --omit=dev
npm run lint
npm run build
npm run audit:seo
npm run check:links
npm run audit:content
```

Do not deploy until the regenerated lockfile and all checks are clean or any remaining advisory has an explicitly accepted, documented mitigation.
