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
        </div>
      </section>

      {/* How HeirDock Works */}
      <section className="section section--white" id="how-it-works">
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
                Take a photo of an item to record what matters - furniture,
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
          <div className="text-center mt-2xl">
            <Link to="/customer/features" className="btn btn--outline">
              See more features <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Hidden Asset Gap */}
      <section className="section section--md">
        <div className="container">
          <h2 className="section__title">The Hidden Asset Gap in Every Household</h2>
          <p className="section__subtitle gap-compare__subtitle">
            A major portion of household wealth is still invisible.
          </p>

          <div className="gap-compare">
            <div className="gap-compare__col">
              <h3 className="gap-compare__label">Usually documented</h3>
              <ul className="gap-compare__list">
                <li>Bank and investment accounts</li>
                <li>Retirement savings</li>
                <li>Real estate</li>
                <li>Insurance policies</li>
              </ul>
            </div>
            <div className="gap-compare__col gap-compare__col--missing">
              <h3 className="gap-compare__label">Often undocumented</h3>
              <ul className="gap-compare__list">
                <li>Jewelry and watches</li>
                <li>Art and collectibles</li>
                <li>Heirlooms and memorabilia</li>
                <li>Everyday valuables</li>
              </ul>
            </div>
          </div>
          <p className="gap-compare__reasons">
            Some of these things are worth far more than families realize. A clear record
            helps with insurance claims, life transitions, and passing things down.
          </p>
          <p className="gap-compare__closing">
            HeirDock brings clarity and structure to this overlooked part of household wealth.
          </p>
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
            <Link to="/customer/features" className="btn btn--primary btn--lg">
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
                <span className="benefit-mockup__status benefit-mockup__status--assigned">For Emma</span>
              </div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon benefit-mockup__icon--primary"><Icon name="style" /></div>
                  <div>
                    <div className="benefit-mockup__name">Baseball Card Collection</div>
                    <div className="benefit-mockup__category">Collectibles</div>
                  </div>
                </div>
                <span className="benefit-mockup__status benefit-mockup__status--assigned">For Jack</span>
              </div>
              <div className="benefit-mockup__item">
                <div className="benefit-mockup__item-info">
                  <div className="benefit-mockup__icon benefit-mockup__icon--secondary"><Icon name="diamond" /></div>
                  <div>
                    <div className="benefit-mockup__name">Gold Ring</div>
                    <div className="benefit-mockup__category">Jewelry &amp; Accessories</div>
                  </div>
                </div>
                <span className="benefit-mockup__status benefit-mockup__status--unassigned">Undecided</span>
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
                  Start with a few things that matter, and add more whenever it suits you.
                </p>
              </div>
              <div className="benefit-notes__item">
                <h3 className="benefit-notes__title">Private and secure</h3>
                <p className="benefit-notes__text">
                  You decide who can see your household, and exactly what each person can do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For professionals */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section__title">For professionals</h2>
          <p className="section__subtitle">
            Help your clients document household assets with structured, accessible records,
            shared on their terms.
          </p>
          <Link to="/partner" className="btn btn--outline">
            Partner With Us <Icon name="arrowForward" />
          </Link>
        </div>
      </section>
    </>
  );
}
