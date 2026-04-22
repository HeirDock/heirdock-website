import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { pageMeta } from "./pageMeta";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const SITE_URL = "https://heirdock.com";
const noindex = process.env.VITE_NOINDEX === "true";

// ── Routes list ─────────────────────────────────────────────────────

const routes = Object.keys(pageMeta);

// ── Head tag generation ─────────────────────────────────────────────

function buildHeadTags(routePath: string): string {
  const meta = pageMeta[routePath];
  if (!meta) {
    return `<title>HeirDock</title>`;
  }

  const canonical = routePath === "/" ? SITE_URL : `${SITE_URL}${routePath}`;
  const shouldNoindex = noindex || meta.noindex;
  const ogImage = `${SITE_URL}/og-image.png`;

  const tags = [
    `<title>${meta.title}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    // Open Graph
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="HeirDock" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="HeirDock — Know what you own. Protect what matters." />`,
    // Twitter
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<meta name="twitter:image:alt" content="HeirDock — Know what you own. Protect what matters." />`,
  ];

  if (shouldNoindex) {
    tags.push(`<meta name="robots" content="noindex, nofollow" />`);
  }

  return tags.join("\n    ");
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── Prerender ───────────────────────────────────────────────────────

function prerender() {
  const clientDir = path.resolve(__dirname, "../client");
  const template = fs.readFileSync(
    path.join(clientDir, "index.html"),
    "utf-8"
  );

  for (const routePath of routes) {
    const appHtml = renderToString(
      <StaticRouter location={routePath}>
        <App />
      </StaticRouter>
    );

    const headTags = buildHeadTags(routePath);

    const html = template
      .replace("<!--head-tags-->", headTags)
      .replace("<!--app-html-->", appHtml);

    // Determine output file path
    let filePath: string;
    if (routePath === "/") {
      filePath = path.join(clientDir, "index.html");
    } else {
      filePath = path.join(clientDir, `${routePath}.html`);
    }

    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, html);
    console.log(`pre-rendered: ${routePath} -> ${path.relative(clientDir, filePath)}`);
  }

  // Clean up server bundle
  const serverDir = path.resolve(__dirname, "../server");
  fs.rmSync(serverDir, { recursive: true, force: true });

  console.log(`\nDone. Pre-rendered ${routes.length} pages.`);
}

prerender();
