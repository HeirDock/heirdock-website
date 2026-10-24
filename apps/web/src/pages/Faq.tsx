import { useEffect, useId, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BrandGlyph from "../components/BrandGlyph";
import Drawing from "../components/Drawing";
import Icon from "../components/Icon";
import markUrl from "../assets/images/heirdock-mark-small-color.svg";
import { faqAudiences, type FaqItem, type FaqTopic } from "./faqContent";

// Questions by audience (About HeirDock, households, professionals), each
// audience split into topics. The topic list beside the questions follows the
// reader down the page; on phones it becomes a "Jump to a topic" picker.
// Search filters the questions as you type. All answers are in the HTML, so
// they're indexed and readable without JavaScript.

const TINTS = ["navy", "gold", "sage"] as const;

const AUDIENCE_TILES = [
  { id: "about", text: "What HeirDock is, the company behind it, and how to get help.", tint: "navy" },
  { id: "households", text: "Getting started, value, family, estate plans, insurance, plans and privacy.", tint: "gold" },
  { id: "professionals", text: "How it works for your practice, client consent, inviting clients and security.", tint: "sage" },
] as const;

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function matches(item: FaqItem, query: string) {
  return normalize([item.question, ...item.answer].join(" ")).includes(query);
}

function FaqQuestion({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const id = useId();

  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <h3 className="faq-item__heading">
        <button
          id={`${id}-q`}
          className="faq-item__question"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-a`}
        >
          {item.question}
          <span className="faq-item__chevron" aria-hidden="true"><Icon name="expandMore" /></span>
        </button>
      </h3>
      <div id={`${id}-a`} className="faq-item__answer" role="region" aria-labelledby={`${id}-q`}>
        <div className="faq-item__answer-inner">
          {item.answer.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {item.link && (
            <Link to={item.link.to} className="faq-item__link">
              {item.link.label} <Icon name="arrowForward" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Each topic remembers which of its answers are open, so one button can open
// or close them all. While searching, every match is shown open.
function Topic({ topic, audience, tint, items, searching }: {
  topic: FaqTopic; audience: string; tint: string; items: FaqItem[]; searching: boolean;
}) {
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const allOpen = items.every((item) => open.has(item.question));

  const toggle = (question: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  const toggleAll = () =>
    setOpen(allOpen ? new Set() : new Set(items.map((item) => item.question)));

  return (
    <section className="faq-topic" id={topic.id} aria-labelledby={`${topic.id}-title`}>
      <div className="faq-topic__head">
        <div className={`faq-topic__icon faq-topic__icon--${tint}`}><BrandGlyph name={topic.icon} /></div>
        <div>
          <span className="eyebrow">{audience}</span>
          <h2 className="faq-topic__title" id={`${topic.id}-title`}>{topic.title}</h2>
        </div>
        {!searching && (
          <button
            type="button"
            className={`faq-topic__toggle${allOpen ? " faq-topic__toggle--open" : ""}`}
            onClick={toggleAll}
            aria-label={`${allOpen ? "Collapse" : "Expand"} all answers in ${topic.title}`}
          >
            {allOpen ? "Collapse all" : "Expand all"}
            <span className="faq-topic__toggle-icon" aria-hidden="true"><Icon name="expandMore" /></span>
          </button>
        )}
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <FaqQuestion
            key={item.question}
            item={item}
            isOpen={searching || open.has(item.question)}
            onToggle={() => toggle(item.question)}
          />
        ))}
      </div>
    </section>
  );
}

// FAQPage structured data for search results. It is built from our own static
// content above, never from user input, and "<" is escaped so it can't close
// the script element.
const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqAudiences.flatMap((audience) =>
    audience.topics.flatMap((topic) =>
      topic.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer.join(" ") },
      })),
    ),
  ),
}).replace(/</g, "\\u003c");

export default function Faq() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(faqAudiences[0]?.topics[0]?.id ?? "");
  const q = normalize(query);
  const searching = q.length > 1;

  const filtered = useMemo(
    () =>
      faqAudiences.map((audience) => ({
        ...audience,
        topics: audience.topics.map((topic) => ({
          topic,
          items: searching ? topic.items.filter((item) => matches(item, q)) : topic.items,
        })),
      })),
    [q, searching],
  );
  const matchCount = filtered.reduce(
    (n, audience) => n + audience.topics.reduce((m, t) => m + t.items.length, 0), 0);

  // Mark the topic being read in the side list.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".faq-topic");
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries.find((e) => e.isIntersecting);
        if (first) setActive(first.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [searching]);

  const jumpTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  let tintIndex = 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />

      <section className="hero-brand hero-brand--plain">
        <div className="hero-brand__panel">
          <span className="eyebrow">Frequently asked questions</span>
          <h1 className="hero-brand__title">Questions, answered plainly.</h1>
          <p className="hero-brand__subtitle">
            For households keeping a record of what they own, and for the professionals they work with.
          </p>

          <div className="faq-search">
            <label htmlFor="faq-search" className="sr-only">Search questions</label>
            <span className="faq-search__icon" aria-hidden="true"><Icon name="search" /></span>
            <input
              id="faq-search"
              type="search"
              className="faq-search__input"
              placeholder="Search questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <p className="faq-search__status" aria-live="polite">
            {searching && (matchCount === 1 ? "1 question matches" : `${matchCount} questions match`)}
          </p>

          <div className="case-tiles case-tiles--three">
            {AUDIENCE_TILES.map((tile) => {
              const audience = faqAudiences.find((a) => a.id === tile.id)!;
              return (
                <a key={tile.id} href={`#${audience.topics[0]?.id ?? ""}`} className="step-tile case-tile">
                  <div className={`step-tile__art step-tile__art--${tile.tint}`}>
                    {tile.id === "about"
                      ? <img src={markUrl} alt="" className="faq-mark" width={72} height={46} />
                      : <BrandGlyph name={tile.id === "households" ? "camera" : "briefcase"} />}
                  </div>
                  <div className="step-tile__body">
                    <h2 className="step-tile__title">{audience.title}</h2>
                    <p className="step-tile__text">{tile.text}</p>
                    <span className="case-tile__more">
                      {audience.topics.length} topics <Icon name="arrowForward" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container faq-layout">
          <nav className="faq-nav" aria-label="FAQ topics">
            {faqAudiences.map((audience) => (
              <div key={audience.id} className="faq-nav__group">
                <span className="faq-nav__audience">{audience.title}</span>
                {audience.topics.map((topic) => (
                  <a
                    key={topic.id}
                    href={`#${topic.id}`}
                    className={`faq-nav__link${active === topic.id ? " faq-nav__link--active" : ""}`}
                    aria-current={active === topic.id ? "true" : undefined}
                  >
                    {topic.title}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          <div className="faq-jump">
            <label htmlFor="faq-jump" className="faq-jump__label">Jump to a topic</label>
            <select
              id="faq-jump"
              className="form__select"
              value={active}
              onChange={(e) => { setActive(e.target.value); jumpTo(e.target.value); }}
            >
              {faqAudiences.map((audience) => (
                <optgroup key={audience.id} label={audience.title}>
                  {audience.topics.map((topic) => (
                    <option key={topic.id} value={topic.id}>{topic.title}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div className="faq-topics">
            {filtered.map((audience) =>
              audience.topics.map(({ topic, items }) => {
                const tint = TINTS[tintIndex++ % TINTS.length] ?? "navy";
                return items.length ? (
                  <Topic key={topic.id} topic={topic} audience={audience.title} tint={tint}
                    items={items} searching={searching} />
                ) : null;
              }),
            )}
            {searching && matchCount === 0 && (
              <div className="faq-empty">
                <p>No questions match &ldquo;{query.trim()}&rdquo;.</p>
                <p>Try another word, or <Link to="/contact">ask us directly</Link>.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="brand-panel closing-cta__panel">
          <div>
            <h2 className="closing-cta__title">Still have a question?</h2>
            <p className="closing-cta__text">
              We&apos;re happy to help. Send us a note, or if you&apos;re a professional, book a short
              conversation about your practice.
            </p>
            <div className="closing-cta__actions">
              <Link to="/contact" className="btn btn--gold btn--lg">
                Contact Us <Icon name="arrowForward" />
              </Link>
              <Link to="/professional/demo" className="btn btn--on-panel btn--lg">
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="closing-cta__drawing">
            <Drawing name="frontDoor" tone="navy" />
          </div>
        </div>
      </section>
    </>
  );
}
