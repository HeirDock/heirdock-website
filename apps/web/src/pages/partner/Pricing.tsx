import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

export default function PartnerPricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Partner Pricing</h1>
          <p className="page-header__subtitle">
            The clients you work with can receive member pricing on their HeirDock plan.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="verifiedUser" /></div>
              <div className="feature-card__title">Every practice reviewed</div>
              <p className="feature-card__description">
                We review each practice before it connects with clients, so households know
                who they&apos;re sharing with.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="handshake" /></div>
              <div className="feature-card__title">Member pricing for your clients</div>
              <p className="feature-card__description">
                Clients connected to your practice can receive a member price on their HeirDock plan, which we
                arrange with you for your practice.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="mail" /></div>
              <div className="feature-card__title">Invitations in your name</div>
              <p className="feature-card__description">
                Invite clients by email with your practice's name and logo. They sign up for
                their own household and connect with you in the same step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h3>Have questions about member pricing?</h3>
          <p className="text-muted mt-md mb-xl">
            Every practice is different. Let's talk about what works for your clients.
          </p>
          <div className="cta-band__actions">
            <Link to="/professional/request-access" className="btn btn--primary">
              Request Access <Icon name="arrowForward" />
            </Link>
            <Link to="/professional/demo" className="btn btn--outline">
              Schedule a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
