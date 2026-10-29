// HeirDock's legal documents: one set for the website, the web app and the
// phone app, published only here (heirdock.com/legal). The app links to
// these pages instead of keeping its own copies.
//
// The text lives in the .md files beside this one (loaded by html.ts). When a
// document changes, update its lastUpdated here; material changes to the
// Terms or Privacy Policy need notice to account holders first (Terms,
// "Agreement to These Terms"). The Terms' lastUpdated is also its version:
// the app records it (users.tos_version) when someone agrees, compares it as
// a date, and 30 days after it moves shows everyone on an older version a
// "Review and agree" screen (Terms, Acceptable Use Policy, Privacy Policy).
// So it is always YYYY-MM-DD and only ever moves forward. Move it when the
// Terms change, and also for a material change to the Acceptable Use Policy
// or Privacy Policy, since that screen is how those changes reach people.
//
// Slugs are public addresses: the app links to /legal/<slug> and
// /legal/<slug>/in-app, and the Google Play listing registers
// heirdock.com/legal/privacy (privacy policy) and
// heirdock.com/legal/account-deletion (delete-account URL). Never rename one.

export type LegalGroup = "Terms" | "Policies";

export interface LegalDocument {
  slug: string;
  title: string;
  summary: string;
  group: LegalGroup;
  // ISO date, shown as "Last updated".
  lastUpdated: string;
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: "terms",
    title: "Terms of Service",
    summary: "The agreement that covers your use of the HeirDock website and app.",
    group: "Terms",
    lastUpdated: "2026-10-28",
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    summary: "What you may and may not do with HeirDock.",
    group: "Terms",
    lastUpdated: "2026-10-28",
  },
  {
    slug: "dpa",
    title: "Data Processing Agreement",
    summary: "For Professional firms that work with their clients' Household Records in HeirDock.",
    group: "Terms",
    lastUpdated: "2026-10-28",
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    summary: "What we collect on the website and in the app, and how we use and protect it.",
    group: "Policies",
    lastUpdated: "2026-10-28",
  },
  {
    slug: "cookies",
    title: "Cookie Notice",
    summary: "The few cookies HeirDock uses, and why.",
    group: "Policies",
    lastUpdated: "2026-10-28",
  },
  {
    slug: "sub-processors",
    title: "Sub-Processors",
    summary: "The service providers that process data on our behalf.",
    group: "Policies",
    lastUpdated: "2026-10-28",
  },
  {
    slug: "account-deletion",
    title: "Delete Your Account",
    summary: "How to delete your HeirDock account, and what is deleted.",
    group: "Policies",
    lastUpdated: "2026-10-28",
  },
  {
    slug: "ai-disclosure",
    title: "AI Disclosure",
    summary: "How identification and valuation work, and how your data is protected.",
    group: "Policies",
    lastUpdated: "2026-10-28",
  },
];

export function formatLegalDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
