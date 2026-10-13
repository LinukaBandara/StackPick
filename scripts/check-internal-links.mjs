import fs from "node:fs";
import path from "node:path";

const roots = ["app", "components"];
const sourceFiles = [];

function walk(directory) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) sourceFiles.push(fullPath);
  }
}

for (const root of roots) walk(root);

const missing = [];
const linkPattern = /(?:href\s*=\s*|href\s*:\s*)["'](\/(?!\/)[^"'\s]*)["']/g;

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(linkPattern)) {
    const raw = match[1];
    const route = (raw.split(/[?#]/)[0].replace(/\/+$/, "") || "/");
    const candidates = route === "/"
      ? [path.join("app", "page.tsx")]
      : [
          path.join("app", route.slice(1), "page.tsx"),
          path.join("app", route.slice(1) + ".tsx"),
          path.join("public", route.slice(1)),
        ];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      missing.push({ file, route });
    }
  }
}

if (missing.length) {
  console.error("Potentially broken internal links:");
  for (const item of missing) console.error(`- ${item.file}: ${item.route}`);
  process.exitCode = 1;
} else {
  console.log(`Checked static internal links in ${sourceFiles.length} source files; no missing destinations found.`);
}
