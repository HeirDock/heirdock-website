import { Link } from "react-router-dom";

export default function CustomerPricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Choose Your Plan</h1>
          <p className="page-header__subtitle">
            Start free and add features as you need them - at your own pace.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Every plan includes all features</h2>
          <p className="section__subtitle">
            Choose your plan based on how much space you need.
          </p>
          <div className="feature-grid" style={{ marginBottom: "var(--space-4xl)" }}>
            <div className="feature-card">
              <div className="feature-card__icon">&#9889;</div>
              <div className="feature-card__title">AI Identify &amp; Valuation</div>
              <p className="feature-card__description">
                Photo-based item recognition, market value estimates, and automatic high-value detection.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128206;</div>
              <div className="feature-card__title">Evidence Capture</div>
              <p className="feature-card__description">
                Photos, serial numbers, receipts, and documents for every item.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128274;</div>
              <div className="feature-card__title">Vault Storage</div>
              <p className="feature-card__description">
                Bank-level encrypted storage for wills, deeds, insurance policies, and sensitive documents.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128101;</div>
              <div className="feature-card__title">Family &amp; Partner Sharing</div>
              <p className="feature-card__description">
                Invite family with role-based access, and share with professionals like insurance agents or estate planners to assist.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128203;</div>
              <div className="feature-card__title">Coverage Insights</div>
              <p className="feature-card__description">
                Link insurance policies to items and identify potential coverage gaps.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128196;</div>
              <div className="feature-card__title">Export &amp; Reports</div>
              <p className="feature-card__description">
                Home Asset Snapshots, item documentation PDFs, and structured reports for professionals.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128172;</div>
              <div className="feature-card__title">Exceptional Support</div>
              <p className="feature-card__description">
                We pride ourselves on providing amazing support to every customer, on every plan.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#127991;</div>
              <div className="feature-card__title">Tags, Stories &amp; Collections</div>
              <p className="feature-card__description">
                Organize items with custom tags, personal stories, and collections that can be assigned to trusts.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128140;</div>
              <div className="feature-card__title">Estate Transition</div>
              <p className="feature-card__description">
                Designate successors, create distribution plans, and leave legacy messages for loved ones.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128197;</div>
              <div className="feature-card__title">Annual Review Prompts</div>
              <p className="feature-card__description">
                Gentle reminders to keep your household record current and up to date.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128221;</div>
              <div className="feature-card__title">Guided Catalog Wizard</div>
              <p className="feature-card__description">
                Step-by-step guidance to add items quickly and thoroughly.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#43;</div>
              <div className="feature-card__title">And Many More</div>
              <p className="feature-card__description">
                Guided wizards, annual review prompts, exceptional support, and more - every feature included with every plan.
              </p>
            </div>
          </div>

          <h2 className="section__title">Choose your plan</h2>
          <p className="section__subtitle">
            Plans differ only by how many properties, collections, and assets you can manage.
          </p>
          <div className="pricing-grid">
            {/* Essentials */}
            <div className="pricing-tier">
              <div className="pricing-tier__icon">&#128293;</div>
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
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  All features included
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  1 property
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  1 collection
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Up to 50 assets
                </div>
              </div>
            </div>

            {/* Plus */}
            <div className="pricing-tier pricing-tier--featured">
              <div className="pricing-tier__icon">&#11088;</div>
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
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  All features included
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Up to 3 properties
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Up to 3 collections
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Up to 500 assets
                </div>
              </div>
            </div>

            {/* Complete */}
            <div className="pricing-tier">
              <div className="pricing-tier__icon">&#128106;</div>
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
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  All features included
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Unlimited properties
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Unlimited collections
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Unlimited assets
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "var(--space-2xl)" }}>
            <Link to="/invite" className="btn btn--primary btn--lg">
              Request Early Access &rarr;
            </Link>
            <p className="text-muted" style={{ marginTop: "var(--space-md)", fontSize: "var(--text-sm)" }}>
              Start with the 30-day free trial on any plan. Upgrade, downgrade, or cancel at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
