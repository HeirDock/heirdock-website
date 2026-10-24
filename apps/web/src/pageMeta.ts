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
  "/contact": {
    title: "HeirDock - Contact",
    description:
      "Get in touch with the HeirDock team. We're here to help with questions about our household asset management platform.",
  },
  "/security": {
    title: "HeirDock - Security & Privacy",
    description:
      "Learn how HeirDock protects your data with industry-standard encryption, row-level security, audit logging, and compliance-ready infrastructure.",
  },
  "/faq": {
    title: "HeirDock - FAQ",
    description:
      "Plain answers about HeirDock for households and professionals: getting started, value, family and estate plans, insurance, plans, privacy, security and support.",
  },
  "/invite": {
    title: "HeirDock - Request Early Access",
    description:
      "HeirDock is invite-only. Request early access to organize, value, and protect your household assets.",
  },
  "/customer/features": {
    title: "HeirDock - Features",
    description:
      "Item identification from photos, market valuations, photos and attachments, family sharing, vault storage, coverage insights, and estate planning.",
  },
  "/customer/pricing": {
    title: "HeirDock - Pricing",
    description:
      "Simple, transparent pricing for HeirDock. Essentials $50/year, Plus $100/year, Complete $150/year. 30-day free trial on all plans.",
  },
  "/customer/use-cases": {
    title: "HeirDock - Use Cases",
    description:
      "How families use HeirDock for insurance readiness, estate planning, disaster recovery, and moving or downsizing.",
  },
  "/professional": {
    title: "HeirDock - For Professionals",
    description:
      "Household asset intelligence for insurance agents, estate planners, appraisers, and financial advisors. Help clients with complete data.",
  },
  "/professional/features": {
    title: "HeirDock - Partner Features",
    description:
      "Client workspace management, document sharing, coverage gap analysis, analytics dashboard, team management, and consent-based access.",
  },
  "/professional/pricing": {
    title: "HeirDock - Partner Pricing",
    description:
      "Member pricing for the clients you work with, invitations in your practice's name, and every practice reviewed before it connects with clients.",
  },
  "/professional/request-access": {
    title: "HeirDock - Request Access for Your Practice",
    description:
      "Request access to HeirDock's Partner Portal for your practice. Work from your clients' household records, with their consent.",
  },
  "/professional/demo": {
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
