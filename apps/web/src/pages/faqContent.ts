// The FAQ page's questions and answers. Facts were checked against the app
// (heirdock-platform) on 2026-10-24; keep answers in the app's terms and the
// site's tone (see CLAUDE.md). Each answer is one or more paragraphs.

import type { GlyphName } from "../components/BrandGlyph";

export interface FaqItem {
  question: string;
  answer: string[];
  link?: { to: string; label: string };
}

export interface FaqTopic {
  id: string;
  title: string;
  icon: GlyphName;
  items: FaqItem[];
}

export interface FaqAudience {
  id: string;
  title: string;
  topics: FaqTopic[];
}

export const faqAudiences: FaqAudience[] = [
  {
    id: "about",
    title: "About HeirDock",
    topics: [
      {
        id: "general",
        title: "General",
        icon: "house",
        items: [
          {
            question: "What is HeirDock?",
            answer: [
              "HeirDock helps you keep a clear, living record of what you own. Start with a photo of each item, and HeirDock helps you identify it, understand its value, and keep its details, documents, insurance and plans in one place.",
              "It isn't financial software or a to-do list. There are no bank accounts or budgets, and nothing you have to finish.",
            ],
            link: { to: "/customer/features", label: "See what HeirDock does" },
          },
          {
            question: "Who is HeirDock for?",
            answer: [
              "Anyone who has gathered belongings over a lifetime and wants clarity without complexity. Many people start when something changes: buying a home, insuring valuables, planning an estate, downsizing, or helping a parent.",
              "HeirDock also works with the professionals who help households, such as insurance agents, estate planners and appraisers, with the household's permission.",
            ],
          },
          {
            question: "How is HeirDock different from photos in a folder or a spreadsheet?",
            answer: [
              "A folder holds pictures; HeirDock holds the whole story of each item. It suggests what an item is and what it may be worth, keeps receipts, warranties, serial numbers and insurance alongside it, and lets you share exactly what you choose with family and professionals.",
              "When you need it for a claim, a move or an estate plan, the record is ready to report from.",
            ],
          },
          {
            question: "Where is HeirDock available?",
            answer: [
              "HeirDock is available in the United States and Canada, in English. You need to be 18 or older to create an account.",
            ],
          },
          {
            question: "Does HeirDock give legal, financial or insurance advice?",
            answer: [
              "No. HeirDock helps you document what you own and share it with the people who advise you. It doesn't replace an appraiser, attorney, insurance advisor or financial professional, and its values are estimates, not appraisals.",
            ],
          },
        ],
      },
      {
        id: "company",
        title: "Company",
        icon: "eye",
        items: [
          {
            question: "Who is behind HeirDock?",
            answer: [
              "HeirDock is made by HeirDock, LLC, based in New Hampshire. We build it to help people bring clarity to what they own, and to keep the value and stories behind their things from being lost.",
            ],
          },
          {
            question: "Do you sell my information?",
            answer: [
              "No. We don't sell, rent or trade your personal information, and we don't use advertising trackers on HeirDock. Your record is shared only with the people and professionals you choose.",
            ],
          },
          {
            question: "Who owns my data?",
            answer: [
              "You do. You decide who sees your record and for how long, and you can export everything at any time.",
            ],
          },
        ],
      },
      {
        id: "support",
        title: "Support",
        icon: "phone",
        items: [
          {
            question: "How do I get help?",
            answer: [
              "If you have an account, open the Support Center inside HeirDock: you can search help articles or send our team a request. If you don't have an account yet, send us a note through the Contact page.",
            ],
            link: { to: "/contact", label: "Contact us" },
          },
          {
            question: "Is support included in every plan?",
            answer: [
              "Yes. Every plan includes the same support.",
            ],
          },
          {
            question: "Is there help for professionals?",
            answer: [
              "Yes. The Partner Portal has its own Support area for your practice and your team.",
            ],
          },
          {
            question: "How do I ask for a copy of my data or a change to my account?",
            answer: [
              "You can export your household record yourself at any time. For anything else about your account or your data, send a request from the Support Center.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "households",
    title: "For households",
    topics: [
      {
        id: "getting-started",
        title: "Getting started",
        icon: "camera",
        items: [
          {
            question: "How do I get started?",
            answer: [
              "Request early access and we'll send you an invitation. If a professional you work with invited you, use their invitation instead and you'll be connected to them as you sign up.",
              "Every plan starts with a 30-day free trial, and you don't need a card to begin.",
            ],
            link: { to: "/invite", label: "Request Early Access" },
          },
          {
            question: "Do I need to catalog everything at once?",
            answer: [
              "No. Add a few things whenever it suits you: one room, one collection, or the pieces that matter most. Your record grows over time, and there's nothing you have to finish.",
            ],
          },
          {
            question: "How do I add an item?",
            answer: [
              "Take a photo or two. HeirDock suggests a name, category and short description, and you keep, edit or skip each suggestion. Add more photos, receipts and notes on the item's page whenever you like.",
            ],
          },
          {
            question: "Is there an app for my phone?",
            answer: [
              "Yes. HeirDock is available for iPhone and Android, so you can add items with your phone's camera wherever they are. You can also use HeirDock in any web browser, and your household record is the same everywhere.",
            ],
          },
          {
            question: "Can I set up HeirDock for a parent?",
            answer: [
              "Yes. Your parent can make you a Manager, so you can help run their record with them, or name you as their Care Steward for a time when they can't manage things themselves. They stay the Primary Account Holder and decide who sees what.",
            ],
          },
        ],
      },
      {
        id: "value",
        title: "Cataloging and value",
        icon: "tag",
        items: [
          {
            question: "How does identification work?",
            answer: [
              "From your photos, HeirDock uses AI to suggest what an item is: its name, category, era, condition and a short description. Nothing is saved over what you've typed, and you accept or change each suggestion.",
              "Your photos and records are never used to train AI models.",
            ],
          },
          {
            question: "Where do values come from?",
            answer: [
              "HeirDock compares your item with similar items on the market and gives you a comparable estimate: a range from low to typical to high, with how confident it is. You can also record what you paid, an appraised value, or a replacement value for insurance.",
            ],
          },
          {
            question: "Is a HeirDock value the same as an appraisal?",
            answer: [
              "No. HeirDock's values are estimates to help you understand what you own. For insurance scheduling, an estate or a sale, a qualified appraiser can give a formal value, and you can keep their appraisal on the item.",
            ],
          },
          {
            question: "Do values update on their own?",
            answer: [
              "Values update when you refresh them on an item's page, or after you change the details that affect them. For items worth $10,000 or more, HeirDock reminds you when a value is getting old.",
            ],
          },
          {
            question: "What can I record for each item?",
            answer: [
              "Photos, receipts and other documents, serial numbers, where it lives, its story and provenance, insurance coverage, maintenance and warranties, and your Intention for it: Keep, Sell, Gift, Donate or Undecided.",
            ],
          },
          {
            question: "Can I keep track of more than one home?",
            answer: [
              "Yes. Each home is a Property, and you can group items into Collections within it. How many Properties and Collections you can have depends on your plan.",
            ],
          },
        ],
      },
      {
        id: "family",
        title: "Family and sharing",
        icon: "people",
        items: [
          {
            question: "Who are Trusted Participants?",
            answer: [
              "Trusted Participants are the people you give access to your household record. Each one is either a Manager, who helps run the household with you, or has Shared Access to only the collections and documents you choose.",
            ],
          },
          {
            question: "What can a Manager do?",
            answer: [
              "A Manager can help with almost everything you can: items, people, professionals, insurance and claims. Only you, as the Primary Account Holder, can name your Steward and Beneficiaries or hand over the account.",
            ],
          },
          {
            question: "What do Viewer, Contributor and Full Access mean?",
            answer: [
              "They're the access levels for Shared Access, set for each Collection you share. A Viewer can look. A Contributor can also add and edit items and attachments, but not delete them. Full Access can manage everything in that Collection.",
            ],
          },
          {
            question: "Can I share a single document?",
            answer: [
              "Yes. Documents in your Vault are shared one at a time, with the people you pick. Vault documents are never shared with professionals.",
            ],
          },
          {
            question: "Can I change or stop sharing later?",
            answer: [
              "Yes. You can change anyone's access or remove them at any time, and the change takes effect right away.",
            ],
          },
        ],
      },
      {
        id: "estate",
        title: "Estate planning",
        icon: "document",
        items: [
          {
            question: "What are a Steward, Care Steward and Beneficiary?",
            answer: [
              "Your Steward looks after your household record after your passing, with an Alternate Steward if they can't. Your Care Steward helps manage it if you can't do so yourself. Beneficiaries are the people, trusts or organizations you intend to receive your things, named for the household or a Collection.",
            ],
          },
          {
            question: "Does HeirDock replace my will?",
            answer: [
              "No. Naming a Steward or Beneficiary decides who can access your record in HeirDock. It isn't a legal document and doesn't replace a will, trust or power of attorney. Many people share their record with their estate planner so the two line up.",
            ],
          },
          {
            question: "What is an Intention?",
            answer: [
              "An Intention is your plan for an item: Keep, Sell, Gift, Donate or Undecided, and who it's intended for. It helps your family understand your wishes, and you can change it at any time.",
            ],
          },
          {
            question: "What happens to my record if I pass away?",
            answer: [
              "Your Steward contacts HeirDock support, and once we've confirmed the details, they take over managing your record and get a checklist to help with the estate. Everything you've recorded and planned is there for them.",
            ],
          },
          {
            question: "What if I can't manage things myself?",
            answer: [
              "You or your Care Steward can report it in HeirDock, and your Care Steward steps in to manage your record for you. Your Care Steward needs to have accepted the role and have a HeirDock account first. When you're ready, your Care Steward or our support team can return your record to you.",
            ],
          },
        ],
      },
      {
        id: "insurance",
        title: "Insurance and claims",
        icon: "shield",
        items: [
          {
            question: "Does HeirDock tell me how much insurance I need?",
            answer: [
              "No. HeirDock documents what you own and how it's covered, so you and your insurance advisor can see it clearly. It doesn't quote, recommend limits or judge whether coverage is enough.",
            ],
          },
          {
            question: "What does claim-ready mean?",
            answer: [
              "An item is claim-ready when it has what an insurer usually asks for: a photo, a value and a policy, plus proof of purchase for items worth $500 or more, a recent appraisal for high-value items, and a serial number where it applies. Coverage Insights shows how much of your record is ready.",
            ],
          },
          {
            question: "Does HeirDock file my claim?",
            answer: [
              "No. HeirDock helps you prepare it: the policy, what happened, and the items involved, gathered into a claim packet you or your agent can send to your insurer.",
            ],
          },
          {
            question: "Can my insurance agent change my policies?",
            answer: [
              "Only if you allow it. The setting is off until you turn it on, you'll see every change they make, and you can undo it.",
            ],
          },
        ],
      },
      {
        id: "billing",
        title: "Plans and billing",
        icon: "box",
        items: [
          {
            question: "How much does HeirDock cost?",
            answer: [
              "Essentials is $50 a year, Plus is $100 a year, and Complete is $150 a year. Every plan includes every feature; plans differ only by how many properties, collections and assets you manage.",
            ],
            link: { to: "/customer/pricing", label: "Compare plans" },
          },
          {
            question: "Is there a free trial?",
            answer: [
              "Yes. Every plan starts with a 30-day free trial, and you don't need a card to begin.",
            ],
          },
          {
            question: "What happens when my trial ends?",
            answer: [
              "If you've added a payment method, your plan simply continues. If not, your record stays available for 30 more days so you can decide. After that it becomes read-only for 12 months, and you can still view and export everything, or subscribe again at any time.",
            ],
          },
          {
            question: "Can I change my plan?",
            answer: [
              "Yes. Upgrades take effect right away, and we prorate the difference. A downgrade takes effect at the end of your billing year, as long as your household fits within the new plan's limits.",
            ],
          },
          {
            question: "Can I cancel?",
            answer: [
              "Yes, at any time from your account settings. Your plan stays active until the end of your billing year, and your record stays available for 30 days after that. It then becomes read-only for 12 months, while you can still export it or subscribe again.",
            ],
          },
        ],
      },
      {
        id: "privacy",
        title: "Privacy and security",
        icon: "lock",
        items: [
          {
            question: "How is my information protected?",
            answer: [
              "Everything is encrypted in transit and at rest. Each document in your Vault has its own encryption key, and opening one asks you to confirm it's you. Sensitive actions are recorded in an audit log.",
            ],
            link: { to: "/security", label: "How we protect your data" },
          },
          {
            question: "Who can see my records?",
            answer: [
              "Only you and the people and professionals you choose. Each person sees only what you've shared with them, and you can preview exactly what a professional sees.",
            ],
          },
          {
            question: "Where is my data stored?",
            answer: [
              "On secure cloud infrastructure in the United States, with regular backups.",
            ],
          },
          {
            question: "How can I protect my account?",
            answer: [
              "Turn on multi-factor authentication with an authenticator app, and review your signed-in devices at any time. You can sign out of any device, or all of them at once.",
            ],
          },
          {
            question: "Can I export or delete my data?",
            answer: [
              "Yes. You can export your whole household record as a PDF, CSV or JSON file at any time, and request deletion of your account from your settings.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "professionals",
    title: "For professionals",
    topics: [
      {
        id: "practice",
        title: "How it works for your practice",
        icon: "briefcase",
        items: [
          {
            question: "Who is the Partner Portal for?",
            answer: [
              "Insurance agencies, estate planners, appraisers, wealth advisors and banks, corporate trustees, and property managers. A practice can offer more than one of these.",
            ],
            link: { to: "/professional/features", label: "See Partner Features" },
          },
          {
            question: "How does my practice join?",
            answer: [
              "Request access for your practice, and we'll be in touch to set up your Partner Portal. Our team reviews every firm before it can connect with clients.",
            ],
            link: { to: "/professional/request-access", label: "Request access for your practice" },
          },
          {
            question: "What can I do in the Partner Portal?",
            answer: [
              "Work from a workspace for each client: their summary, assets, policies and claims, as far as they share. See coverage gaps across your book, flag items and leave notes, follow renewals and claims in Analytics, and invite clients in your practice's name.",
            ],
          },
        ],
      },
      {
        id: "consent",
        title: "Client consent and access",
        icon: "eye",
        items: [
          {
            question: "What can I see in a client's record?",
            answer: [
              "Only what your client shares. They choose the whole household or one Collection, and how much: a summary, a summary with the assets list, or full item detail, with the details they pick, such as photos, values or insurance. Vault documents are never shared with professionals.",
            ],
          },
          {
            question: "Can a client change or end my access?",
            answer: [
              "Yes, at any time. A client can set an end date, change what you see, or stop sharing. When access ends, it ends right away, you're notified, and you keep only your own notes.",
            ],
          },
          {
            question: "Can I make changes to a client's policies or claims?",
            answer: [
              "Only if your client turns that on. It's off by default, and your client sees every change you make and can undo it.",
            ],
          },
          {
            question: "Why does a new client show only a summary and assets list?",
            answer: [
              "Clients who join through your invitation start by sharing a summary with their assets list. They can share full item detail with you whenever they choose.",
            ],
          },
        ],
      },
      {
        id: "inviting",
        title: "Inviting clients",
        icon: "document",
        items: [
          {
            question: "How do I invite clients?",
            answer: [
              "Invite clients one at a time or up to 500 at once, with an optional personal message. Invitations carry your practice's name and logo, and remind each client that they choose what you see.",
            ],
          },
          {
            question: "Can clients connect with my practice on their own?",
            answer: [
              "Yes. A household can invite you from HeirDock, or ask to connect with your practice once it's approved.",
            ],
          },
          {
            question: "Do my clients pay for HeirDock?",
            answer: [
              "Each household has its own HeirDock plan. Clients connected to your practice can receive member pricing, which we arrange with you.",
            ],
          },
        ],
      },
      {
        id: "pro-security",
        title: "Security and compliance",
        icon: "lock",
        items: [
          {
            question: "How is client information protected?",
            answer: [
              "Every professional signs in with multi-factor authentication. Your practice sees only the clients who have shared with you, and only what they've shared. Information about policies held with other carriers stays private.",
            ],
          },
          {
            question: "Is there an audit trail?",
            answer: [
              "Yes. Everything a professional views or changes is recorded in an audit log, and your practice's admins can review your team's activity. Clients see every change made to their policies and claims.",
            ],
          },
        ],
      },
    ],
  },
];
