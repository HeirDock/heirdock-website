import { Link } from "react-router-dom";

export default function PartnerFeatures() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/partner" className="page-header__back">&larr; Back to For Professionals</Link>
          <h1 className="page-header__title">Partner Features</h1>
          <p className="page-header__subtitle">
            Tools designed for professional workflows — built on top of your clients' household records.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon">&#128188;</div>
              <div className="feature-card__title">Client Workspace</div>
              <p className="feature-card__description">
                A dedicated workspace for each client with organized access to their household record,
                items, evidence, and valuations. Everything you need in one place.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128196;</div>
              <div className="feature-card__title">Document Sharing</div>
              <p className="feature-card__description">
                Access client-consented documents, photos, and records. Download evidence
                libraries and structured exports for your workflows.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128202;</div>
              <div className="feature-card__title">Coverage Gap Analysis</div>
              <p className="feature-card__description">
                See where client insurance coverage may fall short based on documented items
                and their estimated values. Proactively address gaps.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128200;</div>
              <div className="feature-card__title">Analytics Dashboard</div>
              <p className="feature-card__description">
                Track client engagement, documentation progress, and portfolio-level insights
                across all your managed households.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128101;</div>
              <div className="feature-card__title">Team Management</div>
              <p className="feature-card__description">
                Add team members to your partner organization with role-based permissions.
                Assign clients to team members and manage workload.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128274;</div>
              <div className="feature-card__title">Consent-Based Access</div>
              <p className="feature-card__description">
                All client data access is consent-based and audited. Clients control
                what you can see, and every access is logged.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">See these features in action</h2>
          <p className="cta-band__subtitle">
            Schedule a personalized demo for your practice.
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
