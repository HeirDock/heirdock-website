import { Link } from "react-router-dom";

export default function WhyPartner() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/partner" className="page-header__back">&larr; Back to For Professionals</Link>
          <h1 className="page-header__title">Why Partner With HeirDock</h1>
          <p className="page-header__subtitle">
            Differentiate your practice with household asset intelligence.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon">&#128640;</div>
              <div className="feature-card__title">Reduce client friction</div>
              <p className="feature-card__description">
                Clients arrive with organized, documented asset records instead of vague
                descriptions and missing paperwork. You spend less time gathering information
                and more time delivering value.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128200;</div>
              <div className="feature-card__title">Improve documentation quality</div>
              <p className="feature-card__description">
                Photos, serial numbers, valuations, and evidence - all organized and accessible
                through the Partner Portal. Better data means better outcomes for your clients.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#129309;</div>
              <div className="feature-card__title">Strengthen client trust</div>
              <p className="feature-card__description">
                Offering HeirDock shows clients you care about the complete picture - not
                just the financial side. It deepens relationships and builds long-term loyalty.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128202;</div>
              <div className="feature-card__title">Engagement insights</div>
              <p className="feature-card__description">
                Track which clients are actively documenting, which have coverage gaps,
                and where proactive outreach can add the most value.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128176;</div>
              <div className="feature-card__title">Revenue opportunity</div>
              <p className="feature-card__description">
                Identify underinsured items, recommend additional coverage, and surface
                planning opportunities that benefit both you and your clients.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#9989;</div>
              <div className="feature-card__title">Easy to get started</div>
              <p className="feature-card__description">
                60-day free pilot. No technical setup required. Start with a single client
                and expand at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">Ready to differentiate your practice?</h2>
          <p className="cta-band__subtitle">
            Start your free 60-day pilot and see the difference organized client data makes.
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
