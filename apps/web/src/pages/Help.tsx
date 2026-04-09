import { Link } from "react-router-dom";

export default function Help() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Help Center</h1>
          <p className="page-header__subtitle">
            Find answers and learn how to get the most out of HeirDock.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="feature-grid">
            <Link to="/faq" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128640;</div>
              <div className="feature-card__title">Getting Started</div>
              <p className="feature-card__description">
                Set up your household, add your first property, and learn the basics of cataloging items.
              </p>
            </Link>
            <Link to="/customer/features" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128206;</div>
              <div className="feature-card__title">Asset Management</div>
              <p className="feature-card__description">
                Learn how to add items, upload evidence, organize with collections and tags, and manage your catalog.
              </p>
            </Link>
            <Link to="/customer/features" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#9889;</div>
              <div className="feature-card__title">AI &amp; Valuation</div>
              <p className="feature-card__description">
                Understand how AI Identify works, how market valuations are calculated, and how to improve results.
              </p>
            </Link>
            <Link to="/faq" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128101;</div>
              <div className="feature-card__title">Sharing &amp; Permissions</div>
              <p className="feature-card__description">
                Invite Trusted Participants, manage roles, and control what family members and professionals can access.
              </p>
            </Link>
            <Link to="/partner" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128188;</div>
              <div className="feature-card__title">Partner Integration</div>
              <p className="feature-card__description">
                Learn how to connect with professional partners and manage consent-based data sharing.
              </p>
            </Link>
            <Link to="/security" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128274;</div>
              <div className="feature-card__title">Account &amp; Security</div>
              <p className="feature-card__description">
                Manage your account settings, subscription, privacy controls, and security preferences.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h3>Can't find what you're looking for?</h3>
          <p className="text-muted" style={{ marginTop: "var(--space-md)", marginBottom: "var(--space-xl)" }}>
            Check our <Link to="/faq">FAQ</Link> for common questions or <Link to="/contact">contact us</Link> directly.
          </p>
        </div>
      </section>
    </>
  );
}
