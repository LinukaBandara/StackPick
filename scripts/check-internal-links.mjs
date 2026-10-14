import fs from "node:fs";
import path from "node:path";

const roots = ["app", "components"];
const sourceFiles = [];
const pageFiles = [];

function walk(directory) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      sourceFiles.push(fullPath);
      if (entry.name === "page.tsx" && fullPath.startsWith("app" + path.sep)) pageFiles.push(fullPath);
    }
  }
}

for (const root of roots) walk(root);

function routeExists(route) {
  const candidates = route === "/" ? [path.join("app", "page.tsx")] : [
    path.join("app", route.slice(1), "page.tsx"),
    path.join("app", route.slice(1) + ".tsx"),
    path.join("public", route.slice(1)),
  ];
  if (candidates.some((candidate) => fs.existsSync(candidate))) return true;
  const wanted = route.split("/").filter(Boolean);
  return pageFiles.some((file) => {
    const segments = file.slice(("app" + path.sep).length).split(path.sep).slice(0, -1);
    return segments.length === wanted.length && segments.every((segment, index) =>
      (segment.startsWith("[") && segment.endsWith("]")) || segment === wanted[index]
    );
  });
}

const missing = [];
const linkPattern = /(?:href\s*=\s*|href\s*:\s*)["\x27](\/(?!\/)[^"\x27\s]*)["\x27]/g;
for (const file of sourceFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(linkPattern)) {
    const route = (match[1].split(/[?#]/)[0].replace(/\/+$/, "") || "/");
    if (!routeExists(route)) missing.push({ file, route });
  }
}

if (missing.length) {
  console.error("Potentially broken internal links:");
  for (const item of missing) console.error(`- ${item.file}: ${item.route}`);
  process.exitCode = 1;
} else {
  console.log(`Checked static internal links in ${sourceFiles.length} source files; no missing destinations found.`);
}
