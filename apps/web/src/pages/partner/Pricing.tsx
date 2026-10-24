import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

export default function PartnerPricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Partner Pricing</h1>
          <p className="page-header__subtitle">
            HeirDock is free for professionals. The clients you work with can receive member pricing.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="payments" /></div>
              <div className="feature-card__title">No cost to your practice</div>
              <p className="feature-card__description">
                Professionals use HeirDock free. There are no seats to buy and no
                per-client fees.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="handshake" /></div>
              <div className="feature-card__title">Member pricing for your clients</div>
              <p className="feature-card__description">
                Clients connected to your practice can receive a member price on their HeirDock plan, which we
                arrange with you for your practice. It can be as low as free.
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
          <Link to="/professional/demo" className="btn btn--primary">
            Schedule a Conversation <Icon name="arrowForward" />
          </Link>
        </div>
      </section>
    </>
  );
}
