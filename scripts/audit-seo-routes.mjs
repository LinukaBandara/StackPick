import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "app");
const BEST_DIRECTORY = path.join(APP_DIR, "best", "page.tsx");
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
const directorySource = fs.readFileSync(BEST_DIRECTORY, "utf8");
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
  for (const route of sitemapRoutes) {
    if (!routeExists(route)) errors.push("Sitemap route has no matching App Router page: " + route);
  }
}

if (errors.length) {
  console.error("SEO route audit failed:");
  for (const error of errors) console.error("- " + error);
  process.exitCode = 1;
} else {
  console.log("SEO route audit passed: " + directoryHrefs.length + " directory links and static sitemap routes resolve; no duplicate entries found.");
}
