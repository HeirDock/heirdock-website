import { legalDocuments } from "./content/legal";

// Shared page metadata — used by both the SSG pre-renderer and the client-side
// DocumentTitle component so titles stay consistent everywhere.

export interface PageMeta {
  title: string;
  description: string;
  noindex?: boolean;
  // Defaults to the page's own address.
  canonicalPath?: string;
  // The link-preview image; pages without one use the default og-image.
  shareImage?: ShareImage;
}

export interface ShareImage {
  file: string;
  alt: string;
}

// Rendered by design/share-images/make_share_images.mjs. public/ files are
// cached for a year: a changed image needs a new -vN name here and there.
export const DEFAULT_SHARE_IMAGE: ShareImage = {
  file: "og-image-v4.png",
  alt: 'HeirDock: "Know what you own. Protect what matters." beside a photo of an antique pocket watch',
};

const PROFESSIONAL_SHARE_IMAGE: ShareImage = {
  file: "og-professional-v1.png",
  alt: 'HeirDock: "Household asset intelligence for your clients." beside a line drawing of a briefcase',
};

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
    shareImage: {
      file: "og-security-v1.png",
      alt: 'HeirDock: "Your data is sensitive. We treat it that way." beside a line drawing of a strongbox',
    },
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
    shareImage: {
      file: "og-use-cases-v1.png",
      alt: 'HeirDock: "A clear record for the moments that matter." beside a line drawing of a house',
    },
  },
  "/professional": {
    title: "HeirDock - For Professionals",
    description:
      "Household asset intelligence for insurance agents, estate planners, appraisers, and financial advisors. Help clients with complete data.",
    shareImage: PROFESSIONAL_SHARE_IMAGE,
  },
  "/professional/features": {
    title: "HeirDock - Partner Features",
    description:
      "Client workspace management, document sharing, coverage gap analysis, analytics dashboard, team management, and consent-based access.",
    shareImage: PROFESSIONAL_SHARE_IMAGE,
  },
  "/professional/pricing": {
    title: "HeirDock - Partner Pricing",
    description:
      "Member pricing for the clients you work with, invitations in your practice's name, and every practice reviewed before it connects with clients.",
    shareImage: PROFESSIONAL_SHARE_IMAGE,
  },
  "/professional/request-access": {
    title: "HeirDock - Request Access for Your Practice",
    description:
      "Request access to HeirDock's Partner Portal for your practice. Work from your clients' household records, with their consent.",
    shareImage: PROFESSIONAL_SHARE_IMAGE,
  },
  "/professional/demo": {
    title: "HeirDock - Request a Demo",
    description:
      "Schedule a personalized demo of HeirDock's Partner Portal. See how it fits your professional practice.",
    shareImage: PROFESSIONAL_SHARE_IMAGE,
  },
  "/legal": {
    title: "HeirDock - Legal",
    description:
      "HeirDock's terms and policies, one set for the website, the web app and the HeirDock app for Android.",
  },
};

// Each legal document has two pages: the site page, and a bare copy for the
// HeirDock app's in-app browser (no site header or footer, noindex).
for (const doc of legalDocuments) {
  const meta = { title: `HeirDock - ${doc.title}`, description: doc.summary };
  pageMeta[`/legal/${doc.slug}`] = meta;
  pageMeta[`/legal/${doc.slug}/in-app`] = {
    ...meta,
    noindex: true,
    canonicalPath: `/legal/${doc.slug}`,
  };
}
