import { Link } from "react-router-dom";
import BrandGlyph from "../components/BrandGlyph";
import Drawing from "../components/Drawing";
import Film from "../components/Film";
import Icon from "../components/Icon";
import Planks from "../components/Planks";

export default function Home() {
  return (
    <>
      {/* Hero: a light panel; the 30-second film sits inside it, as wide as the
          headline. */}
      <section className="hero-brand">
        <div className="hero-brand__panel">
          <div className="hero-brand__column">
            <h1 className="hero-brand__title">
              Know what you own.
              <span className="hero-brand__accent">Protect what matters.</span>
            </h1>
            <p className="hero-brand__subtitle">
              HeirDock helps households identify, organize, value, and manage the things in
              their lives - from heirlooms and collectibles to jewelry, art, and everyday valuables.
            </p>
            <div className="hero-brand__actions">
              <Link to="/invite" className="btn btn--gold btn--lg">
                Request Early Access <Icon name="arrowForward" />
              </Link>
              <a href="https://app.heirdock.com/login" className="btn btn--outline btn--lg">
                Sign In
              </a>
            </div>
            {/* Behind a click, with sound and captions. preload="none" keeps its
                4.3 MB off the page until someone presses play; the poster is a
                chosen frame, not frame one. The -v1 in each filename is the
                cache-buster: public/ files are not content-hashed and are served
                with a one-year max-age, so a new cut must ship as -v2. */}
            <div className="hero-brand__media">
              <Film />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container">
          <span className="eyebrow text-center">How it works</span>
          <h2 className="section__title">Start in minutes. Keep it for a lifetime.</h2>
          <p className="section__subtitle">
            Add a few things that matter today, and more whenever it suits you.
          </p>
          <ol className="step-tiles step-tiles--thread">
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--navy"><BrandGlyph name="camera" /></div>
              <div className="step-tile__body">
                <h3 className="step-tile__title">Capture your household</h3>
                <p className="step-tile__text">
                  Take a photo of an item to record what matters - furniture, jewelry,
                  collectibles, and heirlooms.
                </p>
              </div>
            </li>
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--gold"><BrandGlyph name="tag" /></div>
              <div className="step-tile__body">
                <h3 className="step-tile__title">Identify and value</h3>
                <p className="step-tile__text">
                  HeirDock suggests what each item is and what it may be worth, so there&apos;s
                  no research for you to do.
                </p>
              </div>
            </li>
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--sage"><BrandGlyph name="people" /></div>
              <div className="step-tile__body">
                <h3 className="step-tile__title">Add the story</h3>
                <p className="step-tile__text">
                  Record who items are meant for, the memories behind them, and your
                  wishes for each one.
                </p>
              </div>
            </li>
            <li className="step-tile">
              <div className="step-tile__art step-tile__art--navy"><BrandGlyph name="document" /></div>
              <div className="step-tile__body">
                <h3 className="step-tile__title">Keep a clear record</h3>
                <p className="step-tile__text">
                  Export your household record for insurance, estate planning, or the
                  family, whenever you need it.
                </p>
              </div>
            </li>
          </ol>
          <div className="text-center mt-2xl">
            <Link to="/customer/features" className="btn btn--outline">
              See more features <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>

      {/* The hidden asset gap */}
      <section className="section section--white">
        <div className="container">
          <span className="eyebrow text-center">The hidden asset gap</span>
          <h2 className="section__title">
            Some of what you own is on paper. Much of it isn&apos;t.
          </h2>
          <div className="asset-gap mt-2xl">
            <div className="asset-gap__panel asset-gap__panel--plain">
              <h3 className="asset-gap__label">Usually documented</h3>
              <ul className="asset-gap__list">
                <li>Bank and investment accounts</li>
                <li>Retirement savings</li>
                <li>Real estate</li>
                <li>Insurance policies</li>
              </ul>
            </div>
            <div className="asset-gap__panel brand-panel asset-gap__panel--brand">
              <div>
                <h3 className="asset-gap__label">Often undocumented</h3>
                <ul className="asset-gap__list">
                  <li>Jewelry and watches</li>
                  <li>Art and collectibles</li>
                  <li>Heirlooms and memorabilia</li>
                  <li>Everyday valuables</li>
                </ul>
              </div>
              <div className="asset-gap__drawing">
                <Drawing name="valuables" tone="navy" motion="swing" />
              </div>
            </div>
          </div>
          <p className="asset-gap__closing">
            A clear record helps with insurance claims, life transitions, and passing things
            down. HeirDock brings structure to this overlooked part of household wealth.
          </p>
        </div>
      </section>

      {/* Story band: the keepsake on the planks (the arch is in the panels above
          and below); its lid opens once, as it scrolls into view. */}
      <section className="section story-band">
        <div className="container">
          <div className="story-band__inner">
            <div className="story-band__drawing">
              <Drawing name="keepsake" tone="tint" motion="open" frame="planks" />
            </div>
            <div className="story-band__text">
              <span className="eyebrow">For the people who come after</span>
              <h2>Pass things on with the story intact</h2>
              <p className="mt-md">
                Record who each piece is meant for, and why, in your own words. Name a Steward
                for the household, and give your family a clear record when the time comes.
              </p>
              <Link to="/customer/use-cases#estate" className="story-band__link">
                How estate planning works <Icon name="arrowForward" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For professionals */}
      <section className="section">
        <div className="container text-center">
          <Planks className="planks--divider" />
          <h2 className="section__title">For professionals</h2>
          <p className="section__subtitle">
            Help your clients document household assets with structured, accessible records,
            shared on their terms.
          </p>
          <Link to="/professional" className="btn btn--outline">
            Partner With Us <Icon name="arrowForward" />
          </Link>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="closing-cta">
        <div className="brand-panel closing-cta__panel">
          <div>
            <h2 className="closing-cta__title">Start your household record<span className="gold-stop" aria-hidden="true" /></h2>
            <p className="closing-cta__text">
              Begin with a few things that matter. HeirDock grows with you, at your own pace.
            </p>
            <div className="closing-cta__actions">
              <Link to="/invite" className="btn btn--gold btn--lg">
                Request Early Access <Icon name="arrowForward" />
              </Link>
              <Link to="/customer/pricing" className="btn btn--on-panel btn--lg">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="closing-cta__drawing">
            <Drawing name="frontDoor" tone="navy" />
          </div>
        </div>
      </section>
    </>
  );
}
