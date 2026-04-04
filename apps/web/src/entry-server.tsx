import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const SITE_URL = "https://heirdock.com";
const noindex = process.env.VITE_NOINDEX === "true";

// ── SEO metadata per route ──────────────────────────────────────────

interface PageMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "HeirDock — Know What You Own. Protect What Matters.",
    description:
      "HeirDock helps households identify, organize, value, and manage physical assets — from heirlooms and collectibles to jewelry, art, and everyday valuables.",
  },
  "/about": {
    title: "What is HeirDock? | HeirDock",
    description:
      "HeirDock helps people organize and understand what they own — without turning it into another ongoing task. A calm, useful tool that grows with you.",
  },
  "/contact": {
    title: "Contact Us | HeirDock",
    description:
      "Get in touch with the HeirDock team. We're here to help with questions about our household asset management platform.",
  },
  "/security": {
    title: "Security & Privacy | HeirDock",
    description:
      "Learn how HeirDock protects your data with AES-256 encryption, row-level security, audit logging, and compliance-ready infrastructure.",
  },
  "/faq": {
    title: "Frequently Asked Questions | HeirDock",
    description:
      "Answers to common questions about HeirDock — getting started, pricing, security, AI features, family sharing, and more.",
  },
  "/help": {
    title: "Help Center | HeirDock",
    description:
      "Find help and support resources for using HeirDock. Browse guides on inventory management, AI features, sharing, and security.",
  },
  "/status": {
    title: "System Status | HeirDock",
    description:
      "Check the current operational status of HeirDock services including the web application, API, AI processing, and more.",
  },
  "/customer": {
    title: "For Families | HeirDock",
    description:
      "Organize your household assets, protect what matters, and create a living record for your family with HeirDock.",
  },
  "/customer/how-it-works": {
    title: "How It Works | HeirDock for Families",
    description:
      "Learn how HeirDock helps you catalog, organize, and protect your household assets in four simple steps — at your own pace.",
  },
  "/customer/features": {
    title: "Features | HeirDock for Families",
    description:
      "AI-powered item identification, market valuations, evidence capture, family sharing, vault storage, coverage insights, and estate planning.",
  },
  "/customer/pricing": {
    title: "Pricing | HeirDock",
    description:
      "Simple, transparent pricing for HeirDock. Basic $50/year, Plus $100/year, Family $150/year. 30-day free trial on all plans.",
  },
  "/customer/use-cases": {
    title: "Use Cases | HeirDock for Families",
    description:
      "How families use HeirDock for insurance readiness, estate planning, disaster recovery, and moving or downsizing.",
  },
  "/partner": {
    title: "For Professionals | HeirDock",
    description:
      "Household asset intelligence for insurance agents, estate planners, appraisers, and financial advisors. Help clients with complete data.",
  },
  "/partner/how-it-works": {
    title: "How It Works | HeirDock for Professionals",
    description:
      "Register, verify credentials, invite clients, access organized household records, and deliver better professional service.",
  },
  "/partner/features": {
    title: "Partner Features | HeirDock",
    description:
      "Client workspace management, document sharing, coverage gap analysis, analytics dashboard, team management, and consent-based access.",
  },
  "/partner/pricing": {
    title: "Partner Pricing | HeirDock",
    description:
      "Flexible partner plans from Solo to Enterprise. Start with a free 60-day pilot. Pricing scales with your practice.",
  },
  "/partner/use-cases": {
    title: "Partner Use Cases | HeirDock",
    description:
      "How insurance agents, estate planners, appraisers, and financial advisors use HeirDock to serve clients better.",
  },
  "/partner/why-partner": {
    title: "Why Partner With HeirDock",
    description:
      "Reduce client friction, improve documentation quality, strengthen trust, and unlock revenue opportunities with HeirDock's partner program.",
  },
  "/partner/demo": {
    title: "Request a Demo | HeirDock",
    description:
      "Schedule a personalized demo of HeirDock's Partner Portal. See how it fits your professional practice.",
  },
  "/legal/terms": {
    title: "Terms of Service | HeirDock",
    description: "HeirDock Terms of Service.",
    noindex: true,
  },
  "/legal/privacy": {
    title: "Privacy Policy | HeirDock",
    description: "HeirDock Privacy Policy.",
    noindex: true,
  },
  "/legal/cookies": {
    title: "Cookie Policy | HeirDock",
    description: "HeirDock Cookie Policy.",
    noindex: true,
  },
  "/legal/data-rights": {
    title: "Data Rights & Compliance | HeirDock",
    description: "HeirDock Data Rights and Compliance information.",
    noindex: true,
  },
  "/legal/acceptable-use": {
    title: "Acceptable Use Policy | HeirDock",
    description: "HeirDock Acceptable Use Policy.",
    noindex: true,
  },
  "/legal/dpa": {
    title: "Data Processing Agreement | HeirDock",
    description: "HeirDock Data Processing Agreement.",
    noindex: true,
  },
  "/legal/accessibility": {
    title: "Accessibility Statement | HeirDock",
    description: "HeirDock Accessibility Statement.",
    noindex: true,
  },
};

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
    // Twitter
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
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
