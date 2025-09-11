// convert-routes.js
const fs = require("fs");
const path = require("path");

// Path to your old React Router entry file (adjust if different)
const sourceFile = path.join(__dirname, "src", "index.js");
const appDir = path.join(__dirname, "app");

// read file
const src = fs.readFileSync(sourceFile, "utf-8");

// extract imports
const importRegex = /import\s+(\w+)\s+from\s+['"](.+)['"]/g;
const imports = {};
let m;
while ((m = importRegex.exec(src)) !== null) {
  imports[m[1]] = m[2]; // e.g. { Ticket: './components/Ticket/Ticket' }
}

// extract routes
const routeRegex =
  /<Route\s+path=['"]([^'"]+)['"]\s+element={<(\w+)\s*\/?>}\s*\/?>/g;
const routes = [];
let r;
while ((r = routeRegex.exec(src)) !== null) {
  const [, pathStr, compName] = r;
  if (imports[compName]) {
    routes.push({
      path: pathStr,
      component: compName,
      importPath: imports[compName].replace(/^\.\/src\//, "@/"),
    });
  }
}

// ensure app dir
if (!fs.existsSync(appDir)) fs.mkdirSync(appDir);

// generate files
routes.forEach((r) => {
  // handle wildcard route "*"
  if (r.path === "*") {
    const file = path.join(appDir, "not-found.js");
    const code = `"use client";
import ${r.component} from "${r.importPath}";

export default function NotFound() {
  return <${r.component} />;
}
`;
    fs.writeFileSync(file, code);
    console.log(`✅ Created ${file} (wildcard → not-found.js)`);
    return;
  }

  // normal route
  const folder =
    r.path === "/"
      ? appDir
      : path.join(appDir, r.path.replace(/^\//, ""));
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  const file = path.join(folder, "page.js");
  const code = `"use client";
import ${r.component} from "${r.importPath}";

export default function Page() {
  return <${r.component} />;
}
`;

  fs.writeFileSync(file, code);
  console.log(`✅ Created ${file}`);
});

console.log("🎉 Conversion complete!");
