import { Link } from "react-router-dom";

export default function PartnerLanding() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--navy">
        <div className="container">
          <h1 className="hero__title">Household Asset Intelligence for Your Clients</h1>
          <p className="hero__subtitle" style={{ color: "rgba(255,255,255,0.85)" }}>
            Help your clients document, organize, and understand their physical assets —
            so you can deliver better service with complete information.
          </p>
          <div className="hero__actions">
            <Link to="/partner/demo" className="btn btn--white btn--lg">
              Request a Demo &rarr;
            </Link>
            <Link to="/partner/why-partner" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
              Why Partner?
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">The challenge professionals face</h2>
          <div className="problem-section">
            <div className="problem-section__narrative">
              <p>
                Your clients own valuable physical assets — collectibles, jewelry, heirlooms, artwork,
                and everyday items — but most can't articulate what they have or what it's worth.
              </p>
              <p>
                Without organized documentation, insurance coverage has gaps, estate plans are
                incomplete, and appraisals start from scratch every time. You're left working
                with incomplete information.
              </p>
            </div>
            <div className="problem-section__sidebar">
              <h4>Sound Familiar?</h4>
              <ul>
                <li>Clients can't produce a home inventory for coverage review</li>
                <li>Estate settlements stall over undocumented personal property</li>
                <li>Claims are delayed by missing documentation</li>
                <li>Appraisals lack structured baseline data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Built for your practice</h2>
          <p className="section__subtitle">
            HeirDock's Partner Portal serves professionals across industries.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon">&#128203;</div>
              <div className="feature-card__title">Insurance Agents</div>
              <p className="feature-card__description">
                Improve coverage accuracy, streamline claims documentation, and identify gaps
                before they become problems.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#9878;</div>
              <div className="feature-card__title">Estate Planners</div>
              <p className="feature-card__description">
                Access organized asset records, distribution plans, and successor designations
                to support complete estate planning.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128176;</div>
              <div className="feature-card__title">Financial Advisors</div>
              <p className="feature-card__description">
                Gain a complete picture of client wealth — including the physical assets that
                traditional financial tools miss.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128270;</div>
              <div className="feature-card__title">Appraisers</div>
              <p className="feature-card__description">
                Start with structured baseline data, photos, and market comparables rather than
                building from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Learn more</h2>
          <div className="feature-grid">
            <Link to="/partner/how-it-works" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128736;</div>
              <div className="feature-card__title">How It Works</div>
              <p className="feature-card__description">See the 5-step partner workflow from registration to client service.</p>
            </Link>
            <Link to="/partner/features" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#9889;</div>
              <div className="feature-card__title">Partner Features</div>
              <p className="feature-card__description">Client workspaces, document sharing, analytics, and team management.</p>
            </Link>
            <Link to="/partner/pricing" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128176;</div>
              <div className="feature-card__title">Pricing</div>
              <p className="feature-card__description">Flexible plans from Solo to Enterprise. Start with a free 60-day pilot.</p>
            </Link>
            <Link to="/partner/use-cases" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128188;</div>
              <div className="feature-card__title">Use Cases</div>
              <p className="feature-card__description">How insurance agents, estate planners, and appraisers use HeirDock.</p>
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
            <Link to="/partner/demo" className="btn btn--white btn--lg">
              Request a Demo &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
