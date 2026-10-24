import { Link } from "react-router-dom";
import BrandGlyph from "../../components/BrandGlyph";
import Drawing from "../../components/Drawing";
import Icon from "../../components/Icon";
import workspaceUrl from "../../assets/images/partner/workspace.webp";
import whatTheyShareUrl from "../../assets/images/partner/what-they-share.webp";
import whatTheyCanSeeUrl from "../../assets/images/partner/what-they-can-see.webp";

// Partner Portal and household screens are real, captured on the demo data
// (a fictional insurer and family).
export default function PartnerLanding() {
  return (
    <>
      {/* Hero: the Partner Portal under the gold arc */}
      <section className="hero-brand">
        <div className="hero-brand__panel">
          <h1 className="hero-brand__title">
            Household Asset Intelligence
            <span className="hero-brand__accent">for Your Clients</span>
          </h1>
          <p className="hero-brand__subtitle">
            Help your clients document, organize, and understand their physical assets -
            so you can deliver better service with complete information.
          </p>
          <div className="hero-brand__actions">
            <Link to="/professional/demo" className="btn btn--gold btn--lg">
              Request a Demo <Icon name="arrowForward" />
            </Link>
            <a href="#how-it-works" className="btn btn--outline btn--lg">
              How It Works
            </a>
          </div>
          <div className="hero-brand__media portal-stack">
            <svg className="gold-arc hero-brand__arc" viewBox="0 0 800 400" aria-hidden="true" focusable="false">
              <path d="M10 400a390 390 0 0 1 780 0" />
            </svg>
            <img
              className="screen-shot portal-stack__main"
              src={workspaceUrl}
              width={1100}
              height={767}
              alt="A client workspace in the Partner Portal: how much is covered and valued, and what the household has chosen not to share"
            />
            <img
              className="screen-shot portal-stack__card"
              src={whatTheyShareUrl}
              width={720}
              height={720}
              alt="What the client shares: each collection and its sharing level"
            />
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="trust-row" aria-label="Why professionals trust HeirDock">
        <div className="container">
          <ul className="trust-row__list">
            <li className="trust-row__item"><BrandGlyph name="shield" /> Every firm reviewed and verified</li>
            <li className="trust-row__item"><BrandGlyph name="eye" /> Clients choose what you see</li>
            <li className="trust-row__item"><BrandGlyph name="lock" /> Every access is logged</li>
          </ul>
        </div>
      </section>

      {/* The challenge, as two panels (like Home's hidden asset gap) */}
      <section className="section section--white">
        <div className="container">
          <span className="eyebrow text-center">The challenge</span>
          <h2 className="section__title">
            Your clients own valuable things. Few can say what they have.
          </h2>
          <div className="asset-gap mt-2xl">
            <div className="asset-gap__panel asset-gap__panel--plain">
              <h3 className="asset-gap__label">Without a shared record</h3>
              <ul className="asset-gap__list">
                <li>Coverage reviews start from a blank page</li>
                <li>Claims wait on receipts, photos and serial numbers</li>
                <li>Settlements slow down over belongings nobody documented</li>
                <li>Every appraisal starts from scratch</li>
              </ul>
            </div>
            <div className="asset-gap__panel brand-panel asset-gap__panel--brand">
              <div>
                <h3 className="asset-gap__label">With HeirDock</h3>
                <ul className="asset-gap__list asset-gap__list--compact">
                  <li>An organized record of what they own and what it&apos;s worth</li>
                  <li>Photos, receipts and serial numbers already attached</li>
                  <li>Beneficiaries, wishes and stories written down</li>
                  <li>Photos and past values in one place</li>
                </ul>
              </div>
              <div className="asset-gap__drawing asset-gap__drawing--small">
                <Drawing name="frontDoor" tone="navy" motion="open" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container">
          <span className="eyebrow text-center">How it works</span>
          <h2 className="section__title">From registration to working together</h2>
          <ol className="step-tiles mt-2xl">
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--navy"><BrandGlyph name="document" /></div>
              <div className="step-tile__body">
                <div className="step-tile__number">01</div>
                <h3 className="step-tile__title">Register</h3>
                <p className="step-tile__text">Create your partner account and set up your organization profile.</p>
              </div>
            </li>
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--gold"><BrandGlyph name="shield" /></div>
              <div className="step-tile__body">
                <div className="step-tile__number">02</div>
                <h3 className="step-tile__title">Get verified</h3>
                <p className="step-tile__text">HeirDock reviews and verifies every firm before the Partner Portal opens.</p>
              </div>
            </li>
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--sage"><BrandGlyph name="people" /></div>
              <div className="step-tile__body">
                <div className="step-tile__number">03</div>
                <h3 className="step-tile__title">Invite clients</h3>
                <p className="step-tile__text">Invite existing clients, or welcome new ones, with your practice&apos;s name and logo.</p>
              </div>
            </li>
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--navy"><BrandGlyph name="eye" /></div>
              <div className="step-tile__body">
                <div className="step-tile__number">04</div>
                <h3 className="step-tile__title">Work together</h3>
                <p className="step-tile__text">See what each household chooses to share, and work on it with them using flags and notes.</p>
              </div>
            </li>
          </ol>
          <div className="text-center mt-2xl">
            <Link to="/professional/features" className="btn btn--outline">
              See all partner features <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients stay in control */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section feature-section--media">
            <div className="feature-section__content">
              <span className="eyebrow">Built on consent</span>
              <h2>Your clients stay in control</h2>
              <p className="mt-md">
                Each household decides how much you see: a summary, the assets list, or full
                item detail, for everything or one collection, for as long as they choose. They
                can preview your view, and every access is logged.
              </p>
              <Link to="/professional/features" className="story-band__link">
                See partner features <Icon name="arrowForward" />
              </Link>
            </div>
            <div className="screen-stack screen-stack--tint-sage">
              <img
                className="screen-shot"
                src={whatTheyCanSeeUrl}
                width={1200}
                height={868}
                loading="lazy"
                decoding="async"
                alt="The household's view of a professional: what they can see, collection by collection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="closing-cta">
        <div className="brand-panel closing-cta__panel">
          <div>
            <h2 className="closing-cta__title">See how HeirDock works for your practice</h2>
            <p className="closing-cta__text">
              Schedule a demo to explore the Partner Portal and learn how it fits your practice.
            </p>
            <div className="closing-cta__actions">
              <Link to="/professional/demo" className="btn btn--gold btn--lg">
                Request a Demo <Icon name="arrowForward" />
              </Link>
              <Link to="/professional/pricing" className="btn btn--on-panel btn--lg">
                View Pricing
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
