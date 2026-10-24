import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

export default function CustomerPricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Choose Your Plan</h1>
          <p className="page-header__subtitle">
            Every plan includes every feature. Plans differ only by how many properties,
            collections, and assets you manage.
          </p>
          <Link to="/customer/features#all-features" className="page-header__link">
            See everything every plan includes <Icon name="arrowForward" />
          </Link>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="pricing-grid">
            {/* Essentials */}
            <div className="pricing-tier">
              <div className="pricing-tier__icon"><Icon name="localFireDepartment" /></div>
              <div className="pricing-tier__name">Essentials</div>
              <p className="pricing-tier__description">
                All features for a single household
              </p>
              <div className="pricing-tier__price">
                $50<span>/year</span>
              </div>
              <div className="pricing-tier__period">30-day free trial included</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  All features included
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  1 property
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  1 collection
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  Up to 50 assets
                </div>
              </div>
            </div>

            {/* Plus */}
            <div className="pricing-tier pricing-tier--featured">
              <div className="pricing-tier__icon"><Icon name="star" /></div>
              <div className="pricing-tier__name">Plus</div>
              <p className="pricing-tier__description">
                More room for growing households
              </p>
              <div className="pricing-tier__price">
                $100<span>/year</span>
              </div>
              <div className="pricing-tier__period">30-day free trial included</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  All features included
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  Up to 3 properties
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  Up to 3 collections
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  Up to 500 assets
                </div>
              </div>
            </div>

            {/* Complete */}
            <div className="pricing-tier">
              <div className="pricing-tier__icon"><Icon name="familyRestroom" /></div>
              <div className="pricing-tier__name">Complete</div>
              <p className="pricing-tier__description">
                Unlimited access for your entire household
              </p>
              <div className="pricing-tier__price">
                $150<span>/year</span>
              </div>
              <div className="pricing-tier__period">30-day free trial included</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  All features included
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  Unlimited properties
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  Unlimited collections
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check"><Icon name="check" /></span>
                  Unlimited assets
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-2xl">
            <Link to="/invite" className="btn btn--primary btn--lg">
              Request Early Access <Icon name="arrowForward" />
            </Link>
            <p className="text-muted mt-md text-sm">
              Start with the 30-day free trial on any plan. Upgrade, downgrade, or cancel at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
