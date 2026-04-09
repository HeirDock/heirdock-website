import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--light">
        <div className="container">
          <div className="hero__eyebrow">HeirDock</div>
          <h1 className="hero__title">Know what you own. Protect what matters.</h1>
          <p className="hero__subtitle">
            HeirDock helps households identify, organize, value, and manage
            the physical assets in their lives - from heirlooms and collectibles to
            jewelry, art, and everyday valuables.
          </p>
          <div className="hero__actions">
            <Link to="/invite" className="btn btn--primary btn--lg">
              Request Early Access &rarr;
            </Link>
            <a href="https://app.heirdock.com/login" className="btn btn--outline btn--lg">
              Sign In
            </a>
          </div>
        </div>
      </section>

      {/* How HeirDock Works */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">How HeirDock Works</h2>
          <p className="section__subtitle">
            Everything you need to organize what you own - with the future in mind.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon">&#128206;</div>
              <div className="feature-card__title">Capture your household assets</div>
              <p className="feature-card__description">
                Take a photo or describe an item to document the belongings that matter -
                furniture, collectibles, jewelry, heirlooms, and everyday valuables.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#9889;</div>
              <div className="feature-card__title">AI helps identify and estimate value</div>
              <p className="feature-card__description">
                HeirDock uses AI to help identify items and suggest potential
                market value - no research required.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128221;</div>
              <div className="feature-card__title">Add context and preferences</div>
              <p className="feature-card__description">
                Record who items belong to, add memories and context, assign
                stories, wishes, or future plans for each item.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128196;</div>
              <div className="feature-card__title">Export your household record</div>
              <p className="feature-card__description">
                Generate a comprehensive summary of your household assets -
                ready for insurance, estate planning, or family reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hidden Asset Gap */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">The Hidden Asset Gap in Every Household</h2>
          <p className="section__subtitle">
            A major portion of household wealth is still invisible.
          </p>

          <div className="problem-section">
            <div className="problem-section__narrative">
              <p>
                Families have systems for financial accounts,
                investments, real estate, and insurance.
              </p>
              <p>
                But the physical assets inside the home - collectibles,
                jewelry, heirlooms, artwork, memorabilia, and everyday
                valuables - often remain undocumented and difficult
                to manage.
              </p>
            </div>
            <div className="problem-section__sidebar">
              <h4>Why This Matters</h4>
              <ul>
                <li>Some items are worth far more than families realize</li>
                <li>Documentation matters for insurance and claims</li>
                <li>Organization reduces chaos during life transitions</li>
                <li>Context helps families pass things down more clearly</li>
              </ul>
            </div>
            <div className="problem-section__callout">
              <p className="text-italic">
                When important items aren't documented, families and insurers are often left
                reconstructing value after something has already gone wrong.
              </p>
              <p className="font-bold text-navy">
                HeirDock brings clarity and structure to this overlooked part of household wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">Plan with purpose. Preserve what matters.</h2>
          <p className="cta-band__subtitle">
            Get started – It only takes a few minutes to start organizing what you have.
          </p>
          <div className="cta-band__actions">
            <Link to="/about" className="btn btn--white btn--lg">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose HeirDock */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Why Choose HeirDock?</h2>
          <div className="benefit-section">
            <div>
              <div className="benefit-list">
                <div className="benefit-list__item">
                  <span className="benefit-list__check">&#10003;</span>
                  Simple and intuitive
                </div>
                <div className="benefit-list__item">
                  <span className="benefit-list__check">&#10003;</span>
                  AI-powered understanding
                </div>
                <div className="benefit-list__item">
                  <span className="benefit-list__check">&#10003;</span>
                  Organize gradually
                </div>
                <div className="benefit-list__item">
                  <span className="benefit-list__check">&#10003;</span>
                  Private and secure
                </div>
                <div className="benefit-list__item">
                  <span className="benefit-list__check">&#10003;</span>
                  Clear records when needed
                </div>
                <div className="benefit-list__item">
                  <span className="benefit-list__check">&#10003;</span>
                  Confidence through clarity
                </div>
              </div>
            </div>
            <div className="benefit-mockup">
              <div className="benefit-mockup__header">Household Assets</div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon" style={{ background: "#fef3e2" }}>&#9201;</div>
                  <div>
                    <div className="benefit-mockup__name">Vintage Watch</div>
                    <div className="benefit-mockup__category">Jewelry &amp; Accessories</div>
                  </div>
                </div>
                <div>
                  <span style={{ color: "#6b8e6b", fontWeight: 500, fontSize: "0.8rem" }}>Emma</span>
                  {" "}
                  <span className="benefit-mockup__status benefit-mockup__status--assigned">&#10003; Assigned</span>
                </div>
              </div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon" style={{ background: "#e8f0f8" }}>&#128218;</div>
                  <div>
                    <div className="benefit-mockup__name">Baseball Card Collection</div>
                    <div className="benefit-mockup__category">Collectibles</div>
                  </div>
                </div>
                <div>
                  <span style={{ color: "#6b8e6b", fontWeight: 500, fontSize: "0.8rem" }}>Jack</span>
                  {" "}
                  <span className="benefit-mockup__status benefit-mockup__status--assigned">&#10003; Assigned</span>
                </div>
              </div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon" style={{ background: "#fce4ec" }}>&#128142;</div>
                  <div>
                    <div className="benefit-mockup__name">Gold Ring</div>
                    <div className="benefit-mockup__category">Jewelry &amp; Accessories</div>
                  </div>
                </div>
                <span className="benefit-mockup__status benefit-mockup__status--unassigned">Unassigned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Path */}
      <section className="section">
        <div className="container">
          <div className="dual-path">
            <div className="dual-path__card">
              <h3>For Families</h3>
              <p>
                Organize your household, protect what matters, and create a clear
                record of everything you own.
              </p>
              <Link to="/customer" className="btn btn--primary">
                Learn More &rarr;
              </Link>
            </div>
            <div className="dual-path__card">
              <h3>For Professionals</h3>
              <p>
                Help your clients document household assets with
                structured, accessible records.
              </p>
              <Link to="/partner" className="btn btn--outline">
                Partner With Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
