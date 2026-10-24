import { useState, useId } from "react";
import Icon from "../components/Icon";

interface FaqItemData {
  question: string;
  answer: string;
}

const faqs: FaqItemData[] = [
  {
    question: "What is HeirDock?",
    answer:
      "HeirDock is a secure digital application that helps you identify, organize, value, and manage the physical assets in your household. Starting from a photo of each item, it creates a living record of what you own. It isn't financial software or a to-do list: no accounts, no budgets, and nothing you have to finish.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes. The HeirDock app is available for iPhone and Android, so you can add items with your phone's camera wherever they are. You can also use HeirDock in any web browser - your household record is the same everywhere.",
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
    question: "How does item identification work?",
    answer:
      "Take a photo of an item, and HeirDock uses AI to help identify it, suggest a category, and estimate potential market value based on real comparable sales data.",
  },
  {
    question: "Can I share my records with family members?",
    answer:
      "Yes. You can invite Trusted Participants and choose what each person can do. Give someone Shared Access to the collections you pick - as a Viewer, a Contributor who helps catalog, or with Full Access to that collection - or make a trusted person a Manager who helps run the household with you. You can also name a Steward to look after your household record if you're no longer able to.",
  },
  {
    question: "Can professionals access my records?",
    answer:
      "Only with your consent. You choose which professionals can see your household - like an insurance agent, estate planner, or appraiser - whether they see everything or one collection, and for how long. You can preview exactly what they see, and remove access at any time.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes. Upgrades take effect right away, and we prorate the difference. A downgrade takes effect at the end of your current billing period, as long as your household fits within the new plan's limits for properties, collections, and items.",
  },
  {
    question: "What happens when my free trial ends?",
    answer:
      "If you've added a payment method, your plan simply continues. If not, your household record stays fully editable for 30 more days so you can decide. After that it becomes read-only for 12 months - you can still view and export everything, or subscribe again at any time.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use industry-standard encryption for your Digital Vault entries and follow best practices for data security and privacy.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel at any time from your account settings. Your plan stays active until the end of the current billing period, and your household record stays fully editable for 30 days after that. It then becomes read-only for 12 months, while you can still export it or subscribe again, and after that it is archived.",
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
        <span className="faq-item__chevron" aria-hidden="true"><Icon name="expandMore" /></span>
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
