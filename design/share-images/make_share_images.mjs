// Renders the per-section share images (Open Graph / Twitter cards) to
// apps/web/public/ in headless Chrome. Each is 1200 x 630: the logo, a headline
// and a line of copy on the light panel, and one line drawing on deep navy.
//
// Usage, from this folder:  node make_share_images.mjs
// Needs Node 22+, Chrome, apps/web/node_modules (for Inter), and the shared
// illustration library checked out next to this repo (../../../illustrations).
//
// public/ files are cached for a year: after changing an image, bump its -vN
// name here and in apps/web/src/pageMeta.ts.
import { spawn } from "node:child_process";
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const web = join(here, "../../apps/web");
const library = join(here, "../../../illustrations/SVG");

// Colours from apps/web/src/styles/tokens.css (and the default og-image-v4).
const PANEL = "#EDF3FA"; // --color-primary-light
const NAVY = "#2E4E70"; // --color-primary-active, the drawings' navy palette
const TEXT = "#1A1714"; // --color-text-primary
const MUTED = "#4A4540"; // --color-text-secondary
const LINK = "#456E9A"; // --color-primary

const IMAGES = [
  {
    file: "og-professional-v1.png",
    drawing: "briefcase",
    headline: ["Household asset", "intelligence for", "your clients."],
    text: "Help your clients document, organize, and understand their physical assets.",
  },
  {
    file: "og-use-cases-v1.png",
    drawing: "house",
    headline: ["A clear record for the", "moments that matter."],
    text: "Insurance claims, estate plans, the unexpected and the next move.",
  },
  {
    file: "og-security-v1.png",
    drawing: "strongbox",
    headline: ["Your data is sensitive.", "We treat it that way."],
    text: "Encryption, audit logs, and access you control.",
  },
];

const font = pathToFileURL(join(web, "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")).href;
const logo = readFileSync(join(web, "src/assets/images/heirdock-horizontal-color.svg"), "utf8");

function page({ drawing, headline, text }) {
  const art = readFileSync(join(library, `${drawing}-navy.svg`), "utf8");
  return `<!doctype html><meta charset="utf-8"><style>
  @font-face { font-family: Inter; src: url("${font}") format("woff2"); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; display: flex; font-family: Inter, sans-serif; -webkit-font-smoothing: antialiased; }
  .copy { width: 680px; background: ${PANEL}; padding: 72px 72px 64px; display: flex; flex-direction: column; }
  .logo svg { height: 62px; width: auto; display: block; }
  h1 { margin-top: auto; font-size: 50px; line-height: 1.16; font-weight: 600; letter-spacing: -0.02em; color: ${TEXT}; }
  p { margin-top: 28px; font-size: 23px; line-height: 1.5; color: ${MUTED}; max-width: 536px; }
  .url { margin-top: auto; font-size: 21px; font-weight: 500; color: ${LINK}; }
  .art { width: 520px; background: ${NAVY}; display: flex; align-items: center; justify-content: center; }
  .art svg { width: 400px; height: 400px; }
</style>
<div class="copy">
  <div class="logo">${logo}</div>
  <h1>${headline.join("<br>")}</h1>
  <p>${text}</p>
  <div class="url">heirdock.com</div>
</div>
<div class="art">${art}</div>`;
}

const port = 9400 + Math.floor(Math.random() * 400);
const profile = mkdtempSync(join(tmpdir(), "cdp-"));
const chrome = spawn("C:/Program Files/Google/Chrome/Application/chrome.exe",
  ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"],
  { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets;
for (let i = 0; i < 60 && !targets; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let id = 0; const pending = new Map();
ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const n = ++id; pending.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });

await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
for (const image of IMAGES) {
  const html = join(tmpdir(), `share-${image.drawing}.html`);
  writeFileSync(html, page(image));
  await send("Page.navigate", { url: pathToFileURL(html).href });
  await sleep(1200);
  await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });
  const shot = await send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  writeFileSync(join(web, "public", image.file), Buffer.from(shot.result.data, "base64"));
  console.log(`wrote public/${image.file}`);
}
ws.close();
chrome.kill();
process.exit(0);
