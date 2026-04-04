export default function CustomerPricing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Choose Your Plan</h1>
          <p className="page-header__subtitle">
            Start free and add features as you need them — at your own pace.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="pricing-grid">
            {/* Basic */}
            <div className="pricing-tier">
              <div className="pricing-tier__icon">&#128293;</div>
              <div className="pricing-tier__name">Basic</div>
              <p className="pricing-tier__description">
                Getting started with household organization
              </p>
              <div className="pricing-tier__price">
                $50<span>/year</span>
              </div>
              <div className="pricing-tier__period">30-day free trial included</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  1 property
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  1 Trusted Participant
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Guided item catalog wizard
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Evidence capture (photos, docs)
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Vault storage
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Home Inventory Snapshot export
                </div>
              </div>
              <a href="https://app.heirdock.com/signup" className="btn btn--outline">
                Get Started Free
              </a>
            </div>

            {/* Plus */}
            <div className="pricing-tier pricing-tier--featured">
              <div className="pricing-tier__badge">Most Popular</div>
              <div className="pricing-tier__icon">&#11088;</div>
              <div className="pricing-tier__name">Plus</div>
              <p className="pricing-tier__description">
                Full access to all household management features
              </p>
              <div className="pricing-tier__price">
                $100<span>/year</span>
              </div>
              <div className="pricing-tier__period">30-day free trial included</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Up to 3 properties
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Up to 5 Trusted Participants
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Everything in Basic
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  AI Identify &amp; Market Valuation
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  High-value item detection
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Coverage Insights
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Tags, stories &amp; collections
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Item Documentation PDF
                </div>
              </div>
              <a href="https://app.heirdock.com/signup" className="btn btn--primary">
                Start Free Trial
              </a>
            </div>

            {/* Family */}
            <div className="pricing-tier">
              <div className="pricing-tier__icon">&#128106;</div>
              <div className="pricing-tier__name">Family</div>
              <p className="pricing-tier__description">
                Advanced features for families and estate planning
              </p>
              <div className="pricing-tier__price">
                $150<span>/year</span>
              </div>
              <div className="pricing-tier__period">30-day free trial included</div>
              <div className="pricing-tier__features">
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Unlimited properties
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Unlimited Trusted Participants
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Everything in Plus
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Estate Transition toolkit
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Distribution planning
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Legacy messages
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Annual review prompts
                </div>
                <div className="pricing-tier__feature">
                  <span className="pricing-tier__feature-check">&#10003;</span>
                  Priority support
                </div>
              </div>
              <a href="https://app.heirdock.com/signup" className="btn btn--outline">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h3>Not sure which plan is right for you?</h3>
          <p className="text-muted" style={{ marginTop: "var(--space-md)" }}>
            Start with the 30-day free trial on any plan. You can upgrade, downgrade, or cancel at any time.
          </p>
        </div>
      </section>
    </>
  );
}
