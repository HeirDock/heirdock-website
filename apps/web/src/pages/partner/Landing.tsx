import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

export default function PartnerLanding() {
  return (
    <>
      {/* Hero */}
      <section className="hero-brand hero-brand--plain">
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
            <Link to="/partner/demo" className="btn btn--gold btn--lg">
              Request a Demo <Icon name="arrowForward" />
            </Link>
            <a href="#how-it-works" className="btn btn--outline btn--lg">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* The challenge: each moment without a record, beside what HeirDock changes */}
      <section className="section section--md section--white">
        <div className="container">
          <h2 className="section__title">The challenge professionals face</h2>
          <p className="section__subtitle challenge__subtitle">
            Your clients own valuable things - collectibles, jewelry, heirlooms, artwork - but
            few can say exactly what they have or what it's worth.
          </p>
          <div className="challenge-compare">
            <div className="challenge-compare__head" aria-hidden="true">
              <div>Without a shared record</div>
              <div className="challenge-compare__head-with">With HeirDock</div>
            </div>
            <ul className="challenge-compare__list">
            <li className="challenge-compare__row">
              <div className="challenge-compare__without">
                <h3 className="challenge-compare__moment">Coverage reviews</h3>
                <p>Clients can't list what they own, so reviews start from a blank page.</p>
              </div>
              <div className="challenge-compare__with">
                <span className="challenge-compare__with-label">With HeirDock</span>
                <p>Clients share an organized record of what they own and what it's worth.</p>
              </div>
            </li>
            <li className="challenge-compare__row">
              <div className="challenge-compare__without">
                <h3 className="challenge-compare__moment">Claims</h3>
                <p>Claims wait on receipts, photos and serial numbers.</p>
              </div>
              <div className="challenge-compare__with">
                <span className="challenge-compare__with-label">With HeirDock</span>
                <p>Photos, receipts and serial numbers are already attached to each item.</p>
              </div>
            </li>
            <li className="challenge-compare__row">
              <div className="challenge-compare__without">
                <h3 className="challenge-compare__moment">Estate settlements</h3>
                <p>Settlements slow down over belongings nobody documented.</p>
              </div>
              <div className="challenge-compare__with">
                <span className="challenge-compare__with-label">With HeirDock</span>
                <p>Beneficiaries, wishes and the story behind each item are written down.</p>
              </div>
            </li>
            <li className="challenge-compare__row">
              <div className="challenge-compare__without">
                <h3 className="challenge-compare__moment">Appraisals</h3>
                <p>Every appraisal starts from scratch.</p>
              </div>
              <div className="challenge-compare__with">
                <span className="challenge-compare__with-label">With HeirDock</span>
                <p>Photos, serial numbers and past values are already in one place.</p>
              </div>
            </li>
            </ul>
          </div>
          <p className="challenge-compare__closing">
            Complete information, shared on your client's terms.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container text-center">
          <h2 className="section__title">How it works</h2>
          <p className="section__subtitle">
            From registration to working on a client's record together.
          </p>
          <div className="step-grid">
            <div className="step-card">
              <div className="step-card__number">1</div>
              <div className="step-card__title">Register</div>
              <p className="step-card__description">
                Create your partner account and set up your organization profile.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">2</div>
              <div className="step-card__title">Get verified</div>
              <p className="step-card__description">
                HeirDock reviews and verifies every firm before the Partner Portal opens.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">3</div>
              <div className="step-card__title">Invite clients</div>
              <p className="step-card__description">
                Invite existing clients, or welcome new ones, with your practice's name and logo.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">4</div>
              <div className="step-card__title">Work together</div>
              <p className="step-card__description">
                See what each household chooses to share, and work on it with them using flags and notes.
              </p>
            </div>
          </div>
          <div className="mt-2xl">
            <Link to="/partner/features" className="btn btn--outline">
              See all features <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">See how HeirDock works for partners</h2>
          <p className="cta-band__subtitle">
            Schedule a demo to explore the Partner Portal and learn how it fits your practice.
          </p>
          <div className="cta-band__actions">
            <Link to="/partner/demo" className="btn btn--gold btn--lg">
              Request a Demo <Icon name="arrowForward" />
            </Link>
            <Link to="/partner/pricing" className="btn btn--on-panel btn--lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
