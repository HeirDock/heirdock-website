import { Link } from "react-router-dom";
import Drawing from "../../components/Drawing";
import Icon from "../../components/Icon";
import Planks from "../../components/Planks";
import aaronUrl from "../../assets/images/about/aaron.webp";

export default function About() {
  return (
    <>
      {/* Hero: the light panel, with the barn under the arch. */}
      <section className="hero-brand">
        <div className="hero-brand__panel about-hero">
          <div className="about-hero__inner">
            <div className="about-hero__text">
              <span className="eyebrow">Our story</span>
              <h1 className="about-hero__title">
                Rooted in history.
                <span className="hero-brand__accent">Built for what matters next.</span>
              </h1>
              <p className="about-hero__subtitle">
                HeirDock began on a family farm in New Hampshire, in a barn full of tools that
                each came with a story.
              </p>
            </div>
            <div className="about-hero__drawing">
              <Drawing name="barn" />
            </div>
          </div>
        </div>
      </section>

      {/* Aaron's letter, in a narrow reading column. */}
      <section className="section section--md">
        <div className="container container--narrow about-letter">
          <span className="eyebrow">A letter from our co-founder</span>
          <p>
            I grew up on a multigenerational farm in New Hampshire, where history was part of
            everyday life. From the tools in our barn to the treasures tucked away in our attic
            and the photographs on our farmhouse walls, I developed a lifelong curiosity about
            the things we own: their history, their purpose, and the people who cherished them.
          </p>
          <p>
            There was nothing better than picking up an old tool, finding a family heirloom, or
            studying a faded photograph while my grandmother, and later my father, explained why
            it mattered. These weren&apos;t simply possessions. They held value, meaning, and a
            connection to the people and places that came before us.
          </p>
          <div className="about-letter__figure">
            <Drawing name="tools" tone="tint" />
          </div>
          <p>
            Seasons change. Generations pass. Yet the things that were companions on life&apos;s
            journey often remain. Without an understanding of what they are, why they matter,
            and what should become of them, so much of their significance can be lost.
          </p>
          <p>
            Over time, I came to realize that this understanding shouldn&apos;t start when
            something becomes old or valuable.
          </p>
          <p className="about-letter__pull">It should begin the moment it becomes ours.</p>
          <p>
            I looked for a simple, connected way to bring everything together: to understand
            what we own, capture what makes it valuable, and keep that knowledge current as our
            lives and possessions change. I couldn&apos;t find one.
          </p>
          <p>That realization, rooted in a lifelong appreciation, inspired HeirDock.</p>
          <p>
            HeirDock helps households understand, organize, and protect what they own, from the
            day something is acquired to the day it is sold, shared, or passed along. Whether
            it&apos;s a new purchase or a cherished family heirloom, HeirDock keeps the
            information, context, and value that make it meaningful, so families can make
            informed decisions today and for generations to come.
          </p>
          <p>
            I started HeirDock with my co-founder, Adam, who has spent his career building
            software that organizations depend on. Together we are building the household
            record that families have always needed.
          </p>
          <div className="about-letter__signature">
            <span className="about-letter__name">Aaron Ober</span>
            <span className="about-letter__role">Co-founder, HeirDock</span>
          </div>
        </div>
        <div className="container about-tagline">
          <Planks className="planks--divider" />
          <p className="about-tagline__text">
            Know what you own.
            <span className="hero-brand__accent">Protect what matters.</span>
          </p>
        </div>
      </section>

      {/* Founders: first names only. */}
      <section className="section section--md section--white">
        <div className="container">
          <span className="eyebrow">Who we are</span>
          <h2>Meet the founders</h2>
          <div className="founder-cards">
            <article className="founder-card">
              <img
                className="founder-card__portrait"
                src={aaronUrl}
                width={144}
                height={144}
                alt="Aaron, co-founder of HeirDock"
                decoding="async"
                loading="lazy"
              />
              <div className="founder-card__body">
                <h3 className="founder-card__name">Aaron</h3>
                <span className="founder-card__role">Co-founder</span>
                <p className="founder-card__bio">
                  Aaron grew up on the farm in the letter above. Before HeirDock, he spent a
                  decade in product and partnerships across fintech, logistics, and property
                  technology, including co-founding a startup that modernized package
                  management.
                </p>
              </div>
            </article>
            <article className="founder-card">
              <div className="founder-card__portrait founder-card__portrait--mark">
                <svg className="drawing drawing--light" viewBox="0 0 300 300" fill="none" aria-hidden="true" focusable="false">
                  <path className="drawing__accent" d="M28 286 V160 a122 122 0 0 1 244 0 V286" strokeWidth="14" strokeLinecap="round" />
                  <polygon className="drawing__planks" points="96,214 204,214 196,202 104,202" />
                  <polygon className="drawing__planks" points="80,244 220,244 212,232 88,232" opacity=".75" />
                  <polygon className="drawing__planks" points="64,274 236,274 228,262 72,262" opacity=".5" />
                </svg>
              </div>
              <div className="founder-card__body">
                <h3 className="founder-card__name">Adam</h3>
                <span className="founder-card__role">Co-founder</span>
                <p className="founder-card__bio">
                  Adam leads technology and product at HeirDock. He has spent his career
                  building software that organizations depend on, with a focus on security,
                  reliability, and data that stays in the family&apos;s hands.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section section--md">
        <div className="container">
          <span className="eyebrow">What we believe</span>
          <h2>Three things we hold to</h2>
          <ul className="belief-list">
            <li className="belief-list__item">Understanding should start the moment something becomes yours.</li>
            <li className="belief-list__item">The story behind a thing is part of its value.</li>
            <li className="belief-list__item">Your household owns what you record here.</li>
          </ul>
        </div>
      </section>

      {/* What you can count on */}
      <section className="section section--md section--white">
        <div className="container">
          <span className="eyebrow">Your record, your terms</span>
          <h2>What you can count on</h2>
          <div className="promise-grid">
            <div>
              <h3 className="promise-grid__title">We never sell your data</h3>
              <p className="promise-grid__text">We do not sell, rent, or trade your personal information.</p>
            </div>
            <div>
              <h3 className="promise-grid__title">Your household decides who sees what</h3>
              <p className="promise-grid__text">
                You give access per Collection or per Vault document, to the family and
                professionals you choose.
              </p>
            </div>
            <div>
              <h3 className="promise-grid__title">Never used to train models</h3>
              <p className="promise-grid__text">
                Your photos and records help identify and value your own things, and nothing else.
              </p>
            </div>
            <div>
              <h3 className="promise-grid__title">A record, not a marketplace</h3>
              <p className="promise-grid__text">
                HeirDock is where you keep track of what you own, not a place to buy or sell it.
                If you mark an Item to Sell, we can show you listings on other sites.
              </p>
            </div>
          </div>
          <p className="promise-grid__more">
            Read the <Link to="/legal/privacy">Privacy Policy</Link>, or see{" "}
            <Link to="/security">how we keep your data secure</Link>.
          </p>
        </div>
      </section>

      {/* For professionals */}
      <section className="section section--md">
        <div className="container text-center">
          <Planks className="planks--divider" />
          <h2 className="section__title">For professionals</h2>
          <p className="section__subtitle">
            Advisors, insurers, and estate attorneys use HeirDock to help clients document
            household assets with structured, accessible records. Clients decide what is shared.
          </p>
          <Link to="/professional" className="btn btn--outline">
            How we work with professionals <Icon name="arrowForward" />
          </Link>
        </div>
      </section>

      {/* Closing */}
      <section className="closing-cta">
        <div className="brand-panel closing-cta__panel">
          <div>
            <h2 className="closing-cta__title">Rooted in New Hampshire<span className="gold-stop" aria-hidden="true" /></h2>
            <p className="closing-cta__text">We&apos;d be glad to show you around.</p>
            <div className="closing-cta__actions">
              <Link to="/customer/features" className="btn btn--gold btn--lg">
                See how HeirDock works <Icon name="arrowForward" />
              </Link>
              <Link to="/contact" className="btn btn--on-panel btn--lg">
                Talk to us
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
