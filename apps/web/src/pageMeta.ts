// Shared page metadata — used by both the SSG pre-renderer and the client-side
// DocumentTitle component so titles stay consistent everywhere.

export interface PageMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "HeirDock",
    description:
      "HeirDock helps households identify, organize, value, and manage physical assets - from heirlooms and collectibles to jewelry, art, and everyday valuables.",
  },
  "/about": {
    title: "HeirDock - About",
    description:
      "HeirDock helps people organize and understand what they own - without turning it into another ongoing task. A calm, useful tool that grows with you.",
  },
  "/contact": {
    title: "HeirDock - Contact",
    description:
      "Get in touch with the HeirDock team. We're here to help with questions about our household asset management platform.",
  },
  "/security": {
    title: "HeirDock - Security & Privacy",
    description:
      "Learn how HeirDock protects your data with AES-256 encryption, row-level security, audit logging, and compliance-ready infrastructure.",
  },
  "/faq": {
    title: "HeirDock - FAQ",
    description:
      "Answers to common questions about HeirDock - getting started, pricing, security, AI features, family sharing, and more.",
  },
  "/help": {
    title: "HeirDock - Help Center",
    description:
      "Find help and support resources for using HeirDock. Browse guides on inventory management, AI features, sharing, and security.",
  },
  "/status": {
    title: "HeirDock - System Status",
    description:
      "Check the current operational status of HeirDock services including the web application, API, AI processing, and more.",
  },
  "/invite": {
    title: "HeirDock - Request Early Access",
    description:
      "HeirDock is invite-only. Request early access to organize, value, and protect your household assets with AI-powered tools.",
  },
  "/customer": {
    title: "HeirDock - For Families",
    description:
      "Organize your household assets, protect what matters, and create a living record for your family with HeirDock.",
  },
  "/customer/how-it-works": {
    title: "HeirDock - How It Works",
    description:
      "Learn how HeirDock helps you catalog, organize, and protect your household assets in four simple steps - at your own pace.",
  },
  "/customer/features": {
    title: "HeirDock - Features",
    description:
      "AI-powered item identification, market valuations, evidence capture, family sharing, vault storage, coverage insights, and estate planning.",
  },
  "/customer/pricing": {
    title: "HeirDock - Pricing",
    description:
      "Simple, transparent pricing for HeirDock. Basic $50/year, Plus $100/year, Family $150/year. 30-day free trial on all plans.",
  },
  "/customer/use-cases": {
    title: "HeirDock - Use Cases",
    description:
      "How families use HeirDock for insurance readiness, estate planning, disaster recovery, and moving or downsizing.",
  },
  "/partner": {
    title: "HeirDock - For Professionals",
    description:
      "Household asset intelligence for insurance agents, estate planners, appraisers, and financial advisors. Help clients with complete data.",
  },
  "/partner/how-it-works": {
    title: "HeirDock - Partner How It Works",
    description:
      "Register, verify credentials, invite clients, access organized household records, and deliver better professional service.",
  },
  "/partner/features": {
    title: "HeirDock - Partner Features",
    description:
      "Client workspace management, document sharing, coverage gap analysis, analytics dashboard, team management, and consent-based access.",
  },
  "/partner/pricing": {
    title: "HeirDock - Partner Pricing",
    description:
      "Flexible partner plans from Solo to Enterprise. Start with a free 60-day pilot. Pricing scales with your practice.",
  },
  "/partner/use-cases": {
    title: "HeirDock - Partner Use Cases",
    description:
      "How insurance agents, estate planners, appraisers, and financial advisors use HeirDock to serve clients better.",
  },
  "/partner/why-partner": {
    title: "HeirDock - Why Partner",
    description:
      "Reduce client friction, improve documentation quality, strengthen trust, and unlock revenue opportunities with HeirDock's partner program.",
  },
  "/partner/demo": {
    title: "HeirDock - Request a Demo",
    description:
      "Schedule a personalized demo of HeirDock's Partner Portal. See how it fits your professional practice.",
  },
  "/legal/terms": {
    title: "HeirDock - Terms of Use",
    description: "HeirDock Terms of Use.",
    noindex: true,
  },
  "/legal/privacy": {
    title: "HeirDock - Privacy Policy",
    description: "HeirDock Privacy Policy.",
    noindex: true,
  },
  "/legal/cookies": {
    title: "HeirDock - Cookie Policy",
    description: "HeirDock Cookie Policy.",
    noindex: true,
  },
  "/legal/data-rights": {
    title: "HeirDock - Data Rights",
    description: "HeirDock Data Rights and Compliance information.",
    noindex: true,
  },
  "/legal/acceptable-use": {
    title: "HeirDock - Acceptable Use",
    description: "HeirDock Acceptable Use Policy.",
    noindex: true,
  },
  "/legal/dpa": {
    title: "HeirDock - Data Processing Agreement",
    description: "HeirDock Data Processing Agreement.",
    noindex: true,
  },
  "/legal/accessibility": {
    title: "HeirDock - Accessibility",
    description: "HeirDock Accessibility Statement.",
    noindex: true,
  },
};
