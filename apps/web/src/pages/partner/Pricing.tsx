import { Link } from "react-router-dom";

export default function PartnerPricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/partner" className="page-header__back">&larr; Back to For Professionals</Link>
          <h1 className="page-header__title">Partner Pricing</h1>
          <p className="page-header__subtitle">
            Flexible plans that grow with your practice. Start with a free 60-day pilot.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-tier">
              <div className="pricing-tier__icon">&#128100;</div>
              <div className="pricing-tier__name">Solo</div>
              <p className="pricing-tier__description">
                For independent professionals getting started
              </p>
              <div className="pricing-tier__price">Contact Us</div>
              <div className="pricing-tier__period">1–10 client households</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Partner Portal access
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Client workspace management
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Document sharing
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Coverage gap analysis
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  60-day free pilot
                </div>
              </div>
              <Link to="/partner/demo" className="btn btn--outline">
                Start Free Pilot
              </Link>
            </div>

            <div className="pricing-tier pricing-tier--featured">
              <div className="pricing-tier__badge">Most Popular</div>
              <div className="pricing-tier__icon">&#127942;</div>
              <div className="pricing-tier__name">Growing Agency</div>
              <p className="pricing-tier__description">
                For teams serving multiple clients
              </p>
              <div className="pricing-tier__price">Contact Us</div>
              <div className="pricing-tier__period">11–50 client households</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Everything in Solo
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Team management
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Analytics dashboard
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Priority support
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  60-day free pilot
                </div>
              </div>
              <Link to="/partner/demo" className="btn btn--primary">
                Request a Demo
              </Link>
            </div>

            <div className="pricing-tier">
              <div className="pricing-tier__icon">&#127970;</div>
              <div className="pricing-tier__name">Enterprise</div>
              <p className="pricing-tier__description">
                For large organizations and institutions
              </p>
              <div className="pricing-tier__price">Custom</div>
              <div className="pricing-tier__period">50+ client households</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Everything in Growing Agency
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Custom integrations
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Dedicated account manager
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Volume pricing
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  SLA guarantees
                </div>
              </div>
              <Link to="/partner/demo" className="btn btn--outline">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h3>Have questions about partner pricing?</h3>
          <p className="text-muted" style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-xl)" }}>
            Every practice is different. Let's find the right plan for your needs.
          </p>
          <Link to="/partner/demo" className="btn btn--primary">
            Schedule a Conversation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
