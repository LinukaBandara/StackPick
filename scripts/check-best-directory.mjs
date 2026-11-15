import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const directoryFile = path.join(root, "app", "best", "page.tsx");
const source = fs.readFileSync(directoryFile, "utf8");
const start = source.indexOf("const ARTICLES = [");
const end = source.indexOf("\n];", start);

if (start < 0 || end < 0) {
  console.error("Could not locate the ARTICLES array in app/best/page.tsx.");
  process.exit(1);
}

const articlesSource = source.slice(start, end);
const links = [...articlesSource.matchAll(/href:\s*"\/best\/([^"]+)"/g)].map((match) => match[1]);
const duplicates = links.filter((slug, index) => links.indexOf(slug) !== index);

function collectContentRoutes(directory, segments = []) {
  const routes = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      routes.push(...collectContentRoutes(fullPath, [...segments, entry.name]));
    } else if (entry.isFile() && entry.name === "page.tsx" && segments.length > 0) {
      const pageSource = fs.readFileSync(fullPath, "utf8");
      // Redirect aliases are intentionally excluded from the public content directory.
      if (!/permanentRedirect\s*\(/.test(pageSource)) {
        routes.push(segments.join("/"));
      }
    }
  }
  return routes;
}

const routeSlugs = collectContentRoutes(path.join(root, "app", "best"));
const linked = new Set(links);
const routed = new Set(routeSlugs);
const missingFromDirectory = routeSlugs.filter((slug) => !linked.has(slug));
const missingRoute = links.filter((slug) => !routed.has(slug));

console.log(`Best directory entries: ${links.length}`);
console.log(`Unique directory entries: ${linked.size}`);
console.log(`Published guide routes: ${routeSlugs.length}`);

if (duplicates.length) console.error("Duplicate directory entries:", [...new Set(duplicates)].join(", "));
if (missingFromDirectory.length) console.error("Routes missing from directory:", missingFromDirectory.join(", "));
if (missingRoute.length) console.error("Directory links without a route:", missingRoute.join(", "));

if (duplicates.length || missingFromDirectory.length || missingRoute.length) {
  process.exit(1);
}

console.log("Best directory and published guide routes are in sync.");
