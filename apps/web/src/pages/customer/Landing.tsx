import { Link } from "react-router-dom";

export default function CustomerLanding() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--light">
        <div className="container">
          <h1 className="hero__title">Your household, organized and protected</h1>
          <p className="hero__subtitle">
            HeirDock helps families catalog, understand, and manage the physical assets
            in their lives — from heirlooms and collectibles to everyday valuables.
            Start building your household record today.
          </p>
          <div className="hero__actions">
            <a href="https://app.heirdock.com/signup" className="btn btn--primary btn--lg">
              Start Your Free Trial &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Everything you need in one place</h2>
          <p className="section__subtitle">
            A calm, organized way to document what you own — so you and your family have clarity when it matters most.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon">&#128247;</div>
              <div className="feature-card__title">Capture with ease</div>
              <p className="feature-card__description">
                Take a photo or describe an item. HeirDock handles the rest — identifying, categorizing,
                and organizing your belongings automatically.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#9889;</div>
              <div className="feature-card__title">AI-powered insights</div>
              <p className="feature-card__description">
                Get instant identification and market valuations based on real comparable sales.
                No research required on your part.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128101;</div>
              <div className="feature-card__title">Share with family</div>
              <p className="feature-card__description">
                Invite Trusted Participants with role-based access. Viewers can see, Contributors can help
                catalog, and Stewards can manage.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128274;</div>
              <div className="feature-card__title">Secure and private</div>
              <p className="feature-card__description">
                Your data is encrypted at rest and in transit. The Vault provides additional
                AES-256 encryption for sensitive documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section__title">How it works</h2>
          <p className="section__subtitle">
            Four simple steps to organize your household — at your own pace.
          </p>
          <div className="step-grid">
            <div className="step-card">
              <div className="step-card__number">1</div>
              <div className="step-card__title">Create your household</div>
              <p className="step-card__description">
                Set up your household record and add your first property in minutes.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">2</div>
              <div className="step-card__title">Catalog items</div>
              <p className="step-card__description">
                Photograph or describe items. AI helps identify them and estimate value.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">3</div>
              <div className="step-card__title">Organize &amp; share</div>
              <p className="step-card__description">
                Add context, assign items to people, and invite family members to collaborate.
              </p>
            </div>
            <div className="step-card">
              <div className="step-card__number">4</div>
              <div className="step-card__title">Stay protected</div>
              <p className="step-card__description">
                Export records for insurance, estate planning, or family reference anytime.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "var(--space-2xl)" }}>
            <Link to="/customer/how-it-works" className="btn btn--outline">
              Learn more about how it works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Explore</h2>
          <div className="feature-grid">
            <Link to="/customer/features" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#9889;</div>
              <div className="feature-card__title">Features</div>
              <p className="feature-card__description">AI identification, valuations, family sharing, vault, coverage insights, and more.</p>
            </Link>
            <Link to="/customer/pricing" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128176;</div>
              <div className="feature-card__title">Pricing</div>
              <p className="feature-card__description">Simple, transparent plans from $50/year. 30-day free trial on all plans.</p>
            </Link>
            <Link to="/customer/use-cases" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#127968;</div>
              <div className="feature-card__title">Use Cases</div>
              <p className="feature-card__description">Insurance readiness, estate planning, disaster recovery, and moving.</p>
            </Link>
            <Link to="/customer/how-it-works" className="feature-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="feature-card__icon">&#128736;</div>
              <div className="feature-card__title">How It Works</div>
              <p className="feature-card__description">Four simple steps to organize your household — at your own pace.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">Start organizing what matters</h2>
          <p className="cta-band__subtitle">
            It only takes a few minutes to create your household record and begin cataloging.
          </p>
          <div className="cta-band__actions">
            <a href="https://app.heirdock.com/signup" className="btn btn--white btn--lg">
              Start Your Free Trial &rarr;
            </a>
          </div>
          <p className="cta-band__note">Free for 30 days. No credit card required.</p>
        </div>
      </section>
    </>
  );
}
