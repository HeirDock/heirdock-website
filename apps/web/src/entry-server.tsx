import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { legalDocuments } from "./content/legal";
import { inAppLinkAllowed, loadAllLegalHtml, loadedLegalHtml } from "./content/legal/html";
import { DEFAULT_SHARE_IMAGE, pageMeta } from "./pageMeta";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const SITE_URL = "https://heirdock.com";
const noindex = process.env.VITE_NOINDEX === "true";

// ── Routes list ─────────────────────────────────────────────────────

const routes = Object.keys(pageMeta);

// ── Head tag generation ─────────────────────────────────────────────

// The Latin Inter subset covers every page, so it is preloaded instead of
// waiting for the CSS to be parsed. Its URL is read from the client build's
// output (content-hashed), so it can never point at a file that isn't
// deployed; a missing file fails the build.
function findLatinFont(clientDir: string): string {
  const file = fs
    .readdirSync(path.join(clientDir, "assets"))
    .find((name) => /^inter-latin-wght-normal-[\w-]+\.woff2$/.test(name));
  if (!file) {
    throw new Error("prerender: Inter latin font not found in dist/client/assets");
  }
  return `/assets/${file}`;
}

function buildHeadTags(routePath: string, fontHref: string): string {
  const fontPreload = `<link rel="preload" href="${fontHref}" as="font" type="font/woff2" crossorigin />`;
  const meta = pageMeta[routePath];
  if (!meta) {
    return [`<title>HeirDock</title>`, fontPreload].join("\n    ");
  }

  const canonicalPath = meta.canonicalPath ?? routePath;
  const canonical = canonicalPath === "/" ? SITE_URL : `${SITE_URL}${canonicalPath}`;
  const shouldNoindex = noindex || meta.noindex;
  const share = meta.shareImage ?? DEFAULT_SHARE_IMAGE;
  const ogImage = `${SITE_URL}/${share.file}`;
  const ogImageAlt = share.alt;

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
    `<meta property="og:image:alt" content="${escapeAttr(ogImageAlt)}" />`,
    // Twitter
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(ogImageAlt)}" />`,
    fontPreload,
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
  const fontHref = findLatinFont(clientDir);

  for (const routePath of routes) {
    const appHtml = renderToString(
      <StaticRouter location={routePath}>
        <App />
      </StaticRouter>
    );

    if (routePath.endsWith("/in-app")) checkInAppLinks(routePath, appHtml);

    const headTags = buildHeadTags(routePath, fontHref);

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

  // The 404 page. CloudFront serves /404.html (as a 404) for any path S3
  // can't find; "/404" matches no route, so App renders NotFound.
  const notFoundHtml = template
    .replace(
      "<!--head-tags-->",
      [
        `<title>HeirDock - Page Not Found</title>`,
        `<link rel="preload" href="${fontHref}" as="font" type="font/woff2" crossorigin />`,
        `<meta name="robots" content="noindex, nofollow" />`,
      ].join("\n    ")
    )
    .replace(
      "<!--app-html-->",
      renderToString(
        <StaticRouter location="/404">
          <App />
        </StaticRouter>
      )
    );
  fs.writeFileSync(path.join(clientDir, "404.html"), notFoundHtml);
  console.log("pre-rendered: 404 page -> 404.html");

  // Clean up server bundle
  const serverDir = path.resolve(__dirname, "../server");
  fs.rmSync(serverDir, { recursive: true, force: true });

  console.log(`\nDone. Pre-rendered ${routes.length} pages.`);
}

// A legal document with an unfilled "[USER: ...]" placeholder can't go to
// production. Staging (noindex) builds it, so the draft can be reviewed.
function checkLegalPlaceholders() {
  const unfinished = legalDocuments
    .filter((doc) => loadedLegalHtml(doc.slug)?.includes("[USER:"))
    .map((doc) => doc.slug);
  if (unfinished.length === 0) return;
  const message = `legal documents with [USER: ...] placeholders: ${unfinished.join(", ")}`;
  if (!noindex) throw new Error(`prerender: ${message}`);
  console.warn(`WARNING (staging only): ${message}`);
}

// An in-app legal page may link only where the HeirDock app allows
// (inAppLinkAllowed): never to prices, plans, sign-up or a demo.
function checkInAppLinks(routePath: string, appHtml: string) {
  const hrefs = [...appHtml.matchAll(/<a\s[^>]*href="([^"]*)"/g)].map((m) => (m[1] ?? "").replace(/&amp;/g, "&"));
  const bad = hrefs.filter((href) => !inAppLinkAllowed(href));
  if (bad.length > 0) {
    throw new Error(`prerender: ${routePath} links outside the in-app allowlist: ${bad.join(", ")}`);
  }
}

// The Terms' lastUpdated is the version the app records and compares as a
// date (content/legal/index.ts), so every document's must be a real
// YYYY-MM-DD date.
function checkLegalDates() {
  const bad = legalDocuments.filter((doc) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(doc.lastUpdated)) return true;
    const date = new Date(`${doc.lastUpdated}T00:00:00Z`);
    return Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== doc.lastUpdated;
  });
  if (bad.length > 0) {
    throw new Error(`prerender: lastUpdated must be a YYYY-MM-DD date: ${bad.map((d) => `${d.slug}=${d.lastUpdated}`).join(", ")}`);
  }
}

// Legal documents load as separate chunks; have them all in hand first.
loadAllLegalHtml().then(() => {
  checkLegalDates();
  checkLegalPlaceholders();
  prerender();
});
