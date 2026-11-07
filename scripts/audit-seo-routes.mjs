import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "app");
const GUIDE_CATALOGUE = path.join(process.cwd(), "lib", "guides.ts");
const SITEMAP_FILE = path.join(APP_DIR, "sitemap.ts");

function collectPageFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectPageFiles(fullPath);
    return entry.isFile() && entry.name === "page.tsx" ? [fullPath] : [];
  });
}

function toRoutePattern(file) {
  const relative = path.relative(APP_DIR, path.dirname(file)).split(path.sep).filter(Boolean);
  const segments = relative.filter((segment) => !/^\(.*\)$/.test(segment)).map((segment) => {
    if (segment.startsWith("[...") && segment.endsWith("]")) return ".+";
    if (segment.startsWith("[[...") && segment.endsWith("]]")) return ".*";
    if (segment.startsWith("[") && segment.endsWith("]")) return "[^/]+";
    return segment;
  });
  return new RegExp("^/" + segments.join("/") + "/?$");
}

const routePatterns = collectPageFiles(APP_DIR).map((file) => toRoutePattern(file));
const routeExists = (route) => routePatterns.some((pattern) => pattern.test(route));

function duplicates(values) {
  const seen = new Set();
  const repeated = new Set();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated].sort();
}

const errors = [];
const directorySource = fs.readFileSync(GUIDE_CATALOGUE, "utf8");
const directoryHrefs = [...directorySource.matchAll(/href\s*:\s*["'](\/[^"']+)["']/g)].map((match) => match[1]);
for (const route of duplicates(directoryHrefs)) errors.push("Duplicate /best directory entry: " + route);
for (const route of directoryHrefs) {
  if (!routeExists(route)) errors.push("/best directory destination has no matching App Router page: " + route);
}

const sitemapSource = fs.readFileSync(SITEMAP_FILE, "utf8");
const routesBlock = sitemapSource.match(/const ROUTES\s*=\s*\[([\s\S]*?)\];/);
if (!routesBlock) {
  errors.push("Could not find the static ROUTES array in app/sitemap.ts.");
} else {
  const sitemapRoutes = [...routesBlock[1].matchAll(/["'](\/[^"']*)["']/g)].map((match) => match[1]);
  for (const route of duplicates(sitemapRoutes)) errors.push("Duplicate sitemap route: " + route);
  const sitemapRouteSet = new Set(sitemapRoutes);
  for (const route of directoryHrefs) {
    if (!sitemapRouteSet.has(route)) errors.push("Guide directory destination missing from sitemap: " + route);
  }
  for (const route of sitemapRoutes) {
    if (!routeExists(route)) errors.push("Sitemap route has no matching App Router page: " + route);
  }

  // Editorial last-modified dates must point to real sitemap routes and use valid ISO dates.
  const modifiedBlock = sitemapSource.match(/const LAST_MODIFIED\s*:\s*Record<string,\s*string>\s*=\s*\{([\s\S]*?)\};/);
  if (!modifiedBlock) {
    errors.push("Could not find the LAST_MODIFIED map in app/sitemap.ts.");
  } else {
    const entries = [...modifiedBlock[1].matchAll(/["'](\/[^"']+)["']\s*:\s*["'](\d{4}-\d{2}-\d{2})["']/g)]
      .map((match) => ({ route: match[1], date: match[2] }));
    for (const route of duplicates(entries.map((entry) => entry.route))) {
      errors.push("Duplicate LAST_MODIFIED entry: " + route);
    }
    for (const { route, date } of entries) {
      const parsed = new Date(date + "T00:00:00.000Z");
      if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) {
        errors.push("Invalid LAST_MODIFIED date for " + route + ": " + date);
      }
      if (!routeExists(route)) errors.push("LAST_MODIFIED route has no matching App Router page: " + route);
      if (!sitemapRouteSet.has(route)) errors.push("LAST_MODIFIED route is missing from the static sitemap: " + route);
    }
  }
}

if (errors.length) {
  console.error("SEO route audit failed:");
  for (const error of errors) console.error("- " + error);
  process.exitCode = 1;
} else {
  console.log("SEO route audit passed: " + directoryHrefs.length + " guide links and static sitemap routes resolve; guide links are present in the sitemap and no duplicates were found.");
}
