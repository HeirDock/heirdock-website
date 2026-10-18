import { Link } from "react-router-dom";
import Icon from "../components/Icon";

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
            <Link to="/faq" className="feature-card card--link">
              <div className="feature-card__icon"><Icon name="rocketLaunch" /></div>
              <div className="feature-card__title">Getting Started <Icon name="chevronRight" className="card__chevron" /></div>
              <p className="feature-card__description">
                Set up your household, add your first property, and learn the basics of cataloging items.
              </p>
            </Link>
            <Link to="/customer/features" className="feature-card card--link">
              <div className="feature-card__icon"><Icon name="attachFile" /></div>
              <div className="feature-card__title">Asset Management <Icon name="chevronRight" className="card__chevron" /></div>
              <p className="feature-card__description">
                Learn how to add items, upload evidence, organize with collections and tags, and manage your catalog.
              </p>
            </Link>
            <Link to="/customer/features" className="feature-card card--link">
              <div className="feature-card__icon"><Icon name="bolt" /></div>
              <div className="feature-card__title">Identification &amp; Valuation <Icon name="chevronRight" className="card__chevron" /></div>
              <p className="feature-card__description">
                Understand how item identification works, how market valuations are calculated, and how to improve results.
              </p>
            </Link>
            <Link to="/faq" className="feature-card card--link">
              <div className="feature-card__icon"><Icon name="group" /></div>
              <div className="feature-card__title">Sharing &amp; Permissions <Icon name="chevronRight" className="card__chevron" /></div>
              <p className="feature-card__description">
                Invite Trusted Participants, manage roles, and control what family members and professionals can access.
              </p>
            </Link>
            <Link to="/partner" className="feature-card card--link">
              <div className="feature-card__icon"><Icon name="work" /></div>
              <div className="feature-card__title">Partner Integration <Icon name="chevronRight" className="card__chevron" /></div>
              <p className="feature-card__description">
                Learn how to connect with professional partners and manage consent-based data sharing.
              </p>
            </Link>
            <Link to="/security" className="feature-card card--link">
              <div className="feature-card__icon"><Icon name="lock" /></div>
              <div className="feature-card__title">Account &amp; Security <Icon name="chevronRight" className="card__chevron" /></div>
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
          <p className="text-muted mt-md mb-xl">
            Check our <Link to="/faq">FAQ</Link> for common questions or <Link to="/contact">contact us</Link> directly.
          </p>
        </div>
      </section>
    </>
  );
}
