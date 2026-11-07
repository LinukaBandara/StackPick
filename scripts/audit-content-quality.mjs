import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BEST_DIR = path.join(ROOT, "app", "best");
const OUTPUT_DIR = path.join(ROOT, "artifacts");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "phase-5-content-audit.csv");
const COMPARISON_SOURCE = fs.existsSync(path.join(ROOT, "components", "ComparisonArticle.tsx"))
  ? fs.readFileSync(path.join(ROOT, "components", "ComparisonArticle.tsx"), "utf8")
  : "";

function collectPages(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectPages(fullPath);
    return entry.isFile() && entry.name === "page.tsx" ? [fullPath] : [];
  });
}

function countWords(value) {
  return (value.match(/[\p{L}\p{N}]+(?:['’.-][\p{L}\p{N}]+)*/gu) ?? []).length;
}

function csv(value) {
  return '"' + String(value ?? "").replaceAll('"', '""').replaceAll("\r", " ").replaceAll("\n", " ") + '"';
}

function analyse(file) {
  const source = fs.readFileSync(file, "utf8");
  const relative = path.relative(ROOT, file).split(path.sep).join("/");
  const slug = path.relative(BEST_DIR, path.dirname(file)).split(path.sep).join("/");
  const route = slug ? `/best/${slug}` : "/best";

  const title = source.match(/title\s*:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? "";
  const description = source.match(/description\s*:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? "";
  const intro = source.match(/\bintro\s*=\s*["'`]([^"'`]+)["'`]/)?.[1] ?? "";
  const articleText = [title, description, intro].filter(Boolean).join(" ");

  const withoutImports = source
    .replace(/^import\s[\s\S]*?;\s*$/gm, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/^\s*\/\/.*$/gm, " ")
    .replace(/className\s*=\s*["'`][^"'`]*["'`]/g, " ")
    .replace(/style\s*=\s*\{[^}]*\}/g, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, " ");
  const redirectTo = source.match(/permanentRedirect\(["\x27\x60](\/[^"\x27\x60]+)["\x27\x60]\)/)?.[1] ?? "";
  if (redirectTo) {
    return { route, file: relative, pageType: "redirect", redirectTo, title: "", description: "", sourceWordCount: 0, h1Count: 0, h2Count: 0, h3Count: 0, internalLinks: 0, externalSources: 0, toolEntries: 0, reviewedOn: "", flags: "redirect-excluded-from-content-review", comparisonText: "" };
  }
  const pageType = slug ? "content" : "directory";
  const propsStart = source.indexOf("<ComparisonArticle");
  const propsEnd = propsStart >= 0 ? source.indexOf(">", propsStart) : -1;
  const comparisonProps = propsStart >= 0 && propsEnd > propsStart ? source.slice(propsStart, propsEnd + 1) : "";
  const sourceWordCount = countWords(withoutImports) + countWords(comparisonProps);
  const usesComparisonTemplate = source.includes("@/components/ComparisonArticle");
  const h1Count = source.split("<h1").length - 1 + (usesComparisonTemplate ? 1 : 0);
  const h2Count = source.split("<h2").length - 1 + (usesComparisonTemplate ? 3 : 0);
  const h3Count = source.split("<h3").length - 1 + (usesComparisonTemplate ? (source.split("name:").length - 1) : 0);
  const relatedStart = COMPARISON_SOURCE.indexOf(`"${slug}": [`);
  const relatedEnd = relatedStart >= 0 ? COMPARISON_SOURCE.indexOf("],", relatedStart) : -1;
  const sharedRelatedLinks = relatedStart >= 0 && relatedEnd > relatedStart
    ? (COMPARISON_SOURCE.slice(relatedStart, relatedEnd).match(/href:/g) ?? []).length
    : 0;
  const localHrefCount = ["href=\"/", "href='/", "href: \"/", "href: '/"].reduce((sum, marker) => sum + Math.max(0, source.split(marker).length - 1), 0);
  const internalLinks = localHrefCount + sharedRelatedLinks;
  const externalSources = new Set([...source.matchAll(/https?:\/\/[^"\x27\s)]+/g)].map((match) => match[0].replace(/[),.;]+$/, ""))).size;
  const toolEntries = (source.match(/\bname\s*:/g) ?? []).length;
  const reviewedOn = source.match(/(?:reviewed|verified|checked)(?:On|\s+(?:on|date))?\s*[:=]\s*["'`]([^"'`]+)["'`]/i)?.[1] ?? "";
  const hasQuickAnswer = /\bquickAnswer\s*=/.test(source);
  const hasPricingNote = /\bpricingNote\s*=/.test(source);
  const hasCountryCaveat = /\b(?:country-specific|country eligibility|availability varies by country|regional availability|by country|country-specific terms|local market|currency varies)\b/i.test(source);
  const hasTestingDisclosure = /\b(?:desk research|desk-based|not a hands-on|not tested in a live|not hands-on product testing)\b/i.test(source);
  const flags = [];
  if (!title) flags.push("missing-title");
  if (!description) flags.push("missing-description");
  if (usesComparisonTemplate && !(source.includes("intro=") || source.includes("intro ="))) flags.push("missing-intro");
  if (h2Count < 3) flags.push("few-h2-sections");
  if (externalSources < 2) flags.push("few-external-sources");
  if (!/pricing|price|cost|free plan|free tier/i.test(source)) flags.push("no-pricing-or-free-plan-context");
  if (!/trade.?off|limitation|limit|drawback|not ideal|who should not/i.test(source)) flags.push("no-obvious-trade-off-language");
  if (!/related|alternatives|comparison/i.test(source)) flags.push("no-obvious-topic-cluster-links");

  return {
    route, file: relative, pageType, redirectTo: "", title, description, sourceWordCount, h1Count, h2Count, h3Count,
    internalLinks, externalSources, toolEntries, reviewedOn, hasQuickAnswer, hasPricingNote, hasCountryCaveat, hasTestingDisclosure, flags: flags.join(";"),
    comparisonText: articleText.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim(),
  };
}

const files = collectPages(BEST_DIR).sort();
const rows = files.map(analyse);
const repeated = new Map();
for (const row of rows) {
  if (!row.comparisonText) continue;
  repeated.set(row.comparisonText, [...(repeated.get(row.comparisonText) ?? []), row.route]);
}
const duplicateRoutes = new Set([...repeated.values()].filter((group) => group.length > 1).flat());
for (const row of rows) {
  if (duplicateRoutes.has(row.route)) row.flags = [row.flags, "duplicate-title-description-intro"].filter(Boolean).join(";");
}

const headers = ["route","file","pageType","redirectTo","title","description","sourceWordCount","h1Count","h2Count","h3Count","internalLinks","externalSources","toolEntries","reviewedOn","hasQuickAnswer","hasPricingNote","hasCountryCaveat","hasTestingDisclosure","flags"];
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, [headers.join(","), ...rows.map((row) => headers.map((key) => csv(row[key])).join(","))].join("\n") + "\n");

const contentPages = rows.filter((row) => row.pageType === "content");
const redirects = rows.filter((row) => row.pageType === "redirect");
const directories = rows.filter((row) => row.pageType === "directory");
const flagged = contentPages.filter((row) => row.flags);
console.log("Flags are editorial prompts, not automatic quality verdicts. Read each page and verify every material claim before changing its index status or publishing a replacement.");
for (const row of flagged.slice(0, 20)) console.log(`- ${row.route}: ${row.flags}`);
if (flagged.length > 20) console.log(`- …and ${flagged.length - 20} more. Open the CSV for the complete list.`);
console.log(`Scanned ${contentPages.length} guide/comparison articles, ${redirects.length} permanent redirects and ${directories.length} directory page(s).`);
console.log(`${flagged.length} content pages have one or more heuristic review flags.`);
console.log(`Editorial signals present: ${contentPages.filter((row) => row.hasQuickAnswer).length} quick answers, ${contentPages.filter((row) => row.hasPricingNote).length} pricing notes, ${contentPages.filter((row) => row.hasCountryCaveat).length} country/region caveats and ${contentPages.filter((row) => row.hasTestingDisclosure).length} testing-method disclosures.`);