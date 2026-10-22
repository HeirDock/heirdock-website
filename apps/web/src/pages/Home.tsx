import { Link } from "react-router-dom";
import HeroVideo from "../components/HeroVideo";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--light hero--with-video">
        <div className="container">
          <HeroVideo />
          <h1 className="hero__title">Know what you own. Protect what matters.</h1>
          <p className="hero__subtitle">
            HeirDock helps households identify, organize, value, and manage
            the physical assets in their lives - from heirlooms and collectibles to
            jewelry, art, and everyday valuables.
          </p>
          <div className="hero__actions">
            <Link to="/invite" className="btn btn--primary btn--lg">
              Request Early Access <Icon name="arrowForward" />
            </Link>
            <a href="https://app.heirdock.com/login" className="btn btn--outline btn--lg">
              Sign In
            </a>
          </div>
          <p className="hero__note">Available for iPhone and Android, and in any web browser.</p>
        </div>
      </section>

      {/* How HeirDock Works */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">
            How <span className="text-brand-highlight">HeirDock</span> Works
          </h2>
          <p className="section__subtitle">
            Everything you need to organize what you own - with the future in mind.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="attachFile" /></div>
              <div className="feature-card__title">Capture your household assets</div>
              <p className="feature-card__description">
                Take a photo or describe an item to record what matters - furniture,
                jewelry, collectibles, and heirlooms.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="bolt" /></div>
              <div className="feature-card__title">Identify items and estimate value</div>
              <p className="feature-card__description">
                HeirDock helps identify each item and suggests a potential market
                value, so there's no research for you to do.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="editNote" /></div>
              <div className="feature-card__title">Add context and preferences</div>
              <p className="feature-card__description">
                Record who items belong to, add memories and context, assign
                stories, wishes, or future plans for each item.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="description" /></div>
              <div className="feature-card__title">Export your household record</div>
              <p className="feature-card__description">
                Generate a summary of your household assets, ready for insurance,
                estate planning, or family reference.
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
              <p className="font-bold text-brand">
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
            <Link to="/about" className="btn btn--primary btn--lg">
              Learn More <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose HeirDock */}
      <section className="section section--md section--white">
        <div className="container">
          <h2 className="section__title">
            Why Choose <span className="text-brand-highlight">HeirDock</span>?
          </h2>
          <p className="section__subtitle benefit-section__subtitle">
            Start small and keep a clear record of what matters, for you and the people you trust.
          </p>
          <div className="benefit-section">
            <div className="benefit-mockup">
              <div className="benefit-mockup__header">Household Assets</div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon benefit-mockup__icon--accent"><Icon name="watch" /></div>
                  <div>
                    <div className="benefit-mockup__name">Vintage Watch</div>
                    <div className="benefit-mockup__category">Jewelry &amp; Accessories</div>
                  </div>
                </div>
                <span className="benefit-mockup__status benefit-mockup__status--assigned">Emma · Assigned</span>
              </div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon benefit-mockup__icon--primary"><Icon name="style" /></div>
                  <div>
                    <div className="benefit-mockup__name">Baseball Card Collection</div>
                    <div className="benefit-mockup__category">Collectibles</div>
                  </div>
                </div>
                <span className="benefit-mockup__status benefit-mockup__status--assigned">Jack · Assigned</span>
              </div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon benefit-mockup__icon--secondary"><Icon name="diamond" /></div>
                  <div>
                    <div className="benefit-mockup__name">Gold Ring</div>
                    <div className="benefit-mockup__category">Jewelry &amp; Accessories</div>
                  </div>
                </div>
                <span className="benefit-mockup__status benefit-mockup__status--unassigned">Unassigned</span>
              </div>
            </div>
            <div className="benefit-notes">
              <div className="benefit-notes__item">
                <h3 className="benefit-notes__title">Identifies items for you</h3>
                <p className="benefit-notes__text">
                  Take a photo and HeirDock suggests what it is and what it may be worth.
                </p>
              </div>
              <div className="benefit-notes__item">
                <h3 className="benefit-notes__title">Organize gradually</h3>
                <p className="benefit-notes__text">
                  Start with a few things that matter. Add more whenever you like.
                </p>
              </div>
              <div className="benefit-notes__item">
                <h3 className="benefit-notes__title">Private and secure</h3>
                <p className="benefit-notes__text">
                  You decide who can see your household, and what they can do.
                </p>
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
                Learn More <Icon name="arrowForward" />
              </Link>
            </div>
            <div className="dual-path__card">
              <h3>For Professionals</h3>
              <p>
                Help your clients document household assets with
                structured, accessible records.
              </p>
              <Link to="/partner" className="btn btn--outline">
                Partner With Us <Icon name="arrowForward" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
