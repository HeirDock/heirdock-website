import { Link } from "react-router-dom";

export default function PartnerHowItWorks() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/partner" className="page-header__back">&larr; Back to For Professionals</Link>
          <h1 className="page-header__title">How It Works for Partners</h1>
          <p className="page-header__subtitle">
            From registration to client service — a streamlined workflow for professionals.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
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
                Verify your professional credentials to unlock full Partner Portal access.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">3</div>
              <div className="step-card__title">Invite clients</div>
              <p className="step-card__description">
                Invite existing clients or onboard new ones directly through the portal.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">4</div>
              <div className="step-card__title">Access records</div>
              <p className="step-card__description">
                View consented client household records with read-only access to items, evidence, and valuations.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">5</div>
              <div className="step-card__title">Deliver better service</div>
              <p className="step-card__description">
                Use organized, up-to-date client data to improve coverage, planning, and client outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h3>Ready to streamline your workflow?</h3>
          <div style={{ marginTop: "var(--space-xl)" }}>
            <Link to="/partner/demo" className="btn btn--primary btn--lg">
              Request a Demo &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
