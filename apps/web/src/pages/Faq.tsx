import { useState, useId } from "react";

interface FaqItemData {
  question: string;
  answer: string;
}

const faqs: FaqItemData[] = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: "What happens when my free trial ends?",
    answer:
      "Your 30-day free trial will automatically convert to the Basic plan unless you choose to upgrade. All your data remains safe and accessible.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use military-grade AES-256 encryption for your Digital Vault entries and follow industry best practices for data security and privacy.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. You'll retain access to paid features until the end of your current billing period.",
  },
  {
    question: "What is HeirDock?",
    answer:
      "HeirDock is a secure digital application that helps you identify, organize, value, and manage the physical assets in your household. Using photos, natural language, and AI, it creates a living record of what you own.",
  },
  {
    question: "Who is HeirDock for?",
    answer:
      "HeirDock is designed for anyone who has accumulated belongings over a lifetime and wants clarity without complexity - especially those preparing for life transitions like downsizing, estate planning, or supporting aging parents.",
  },
  {
    question: "Do I need to catalog everything at once?",
    answer:
      "No. HeirDock is designed for gradual use. Add items whenever it's convenient - there's no pressure to finish, and the tool grows with you over time.",
  },
  {
    question: "How does the AI identification work?",
    answer:
      "Simply take a photo of an item, and HeirDock's AI will help identify it, suggest a category, and estimate potential market value based on real comparable sales data.",
  },
  {
    question: "Can I share my records with family members?",
    answer:
      "Yes. You can invite Trusted Participants with role-based access - Viewers can see assigned items, Contributors can help catalog, and Stewards have elevated access for estate planning purposes.",
  },
  {
    question: "Can professionals access my records?",
    answer:
      "Only with your explicit consent. You can grant read-only access to professional partners like insurance agents, estate planners, or appraisers through the Partner Portal.",
  },
];

function FaqItem({ item, index }: { item: FaqItemData; index: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const questionId = `faq-q-${id}-${index}`;
  const answerId = `faq-a-${id}-${index}`;

  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button
        id={questionId}
        className="faq-item__question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
      >
        {item.question}
        <span className="faq-item__chevron" aria-hidden="true">&#9660;</span>
      </button>
      <div
        id={answerId}
        className="faq-item__answer"
        role="region"
        aria-labelledby={questionId}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="faq-list" role="list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} item={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
