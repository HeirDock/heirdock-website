import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <Link to="/" className="page-header__back"><Icon name="arrowBack" /> Back to Home</Link>
          <h1 className="page-header__title">What is HeirDock?</h1>
          <p className="page-header__subtitle">
            HeirDock helps people organize and understand what they own -
            without turning it into another ongoing task.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section--sm section--white">
        <div className="container container--narrow">
          <p>
            Over a lifetime, we accumulate meaningful things: furniture, collections, heirlooms, tools, keepsakes, and
            everyday items that quietly add up. Most of it lives in closets, basements, storage units, or memory -
            undocumented, undervalued, and hard for anyone else to make sense of later.
          </p>
          <p className="text-brand font-medium text-md">
            HeirDock gives you a simple way to capture clarity over time.
          </p>
        </div>
      </section>

      {/* App Description Callout */}
      <section className="section--sm">
        <div className="container container--narrow">
          <div className="callout callout--gray">
            <p>
              HeirDock is a secure app for iPhone and Android that also works in any web browser, so you
              can add things from your phone and review them on a larger screen. Starting from a photo, HeirDock helps you
              identify items, record context, understand potential value, and keep everything in one clear,
              living record. You can add details gradually, update things when life changes, and take action
              only if and when it makes sense - sell, donate, share, or simply leave clear information
              behind.
            </p>
            <p>
              There's no pressure to finish, no complex workflows, and no need to manage it every day. It's a
              calm, useful tool that grows with you - and stays useful for those who come after.
            </p>
          </div>
        </div>
      </section>

      {/* Who HeirDock Is For */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">Who HeirDock Is For</h2>
          <p className="section__subtitle">HeirDock is designed for people who:</p>
          <div className="audience-grid">
            <div className="audience-card">
              <span className="audience-card__icon"><Icon name="home" /></span>
              <span className="audience-card__text">Have accumulated a lifetime of belongings</span>
            </div>
            <div className="audience-card">
              <span className="audience-card__icon"><Icon name="lightbulb" /></span>
              <span className="audience-card__text">Want clarity without complexity - organizing gradually, at their own pace</span>
            </div>
            <div className="audience-card">
              <span className="audience-card__icon"><Icon name="favorite" /></span>
              <span className="audience-card__text">Care about reducing future burden on family</span>
            </div>
            <div className="audience-card">
              <span className="audience-card__icon"><Icon name="shield" /></span>
              <span className="audience-card__text">Want to make sure their belongings are properly covered by insurance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Callout */}
      <section className="section--sm">
        <div className="container container--narrow">
          <div className="callout callout--light">
            <p>
              It's especially useful during moments of transition - downsizing, relocating, decluttering,
              supporting aging parents, or simply wanting peace of mind about what you have and what it
              means.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes HeirDock Different */}
      <section className="section section--white">
        <div className="container">
          <h2 className="section__title">What Makes HeirDock Different</h2>
          <div className="diff-grid narrow">
            <div className="diff-card">
              <div className="diff-card__label">It's not a to-do list</div>
              <div className="diff-card__statement">Add items when it's convenient</div>
            </div>
            <div className="diff-card">
              <div className="diff-card__label">It's not financial software</div>
              <div className="diff-card__statement">No accounts or budgets</div>
            </div>
            <div className="diff-card">
              <div className="diff-card__label">It's not static</div>
              <div className="diff-card__statement">Values and context evolve over time</div>
            </div>
            <div className="diff-card">
              <div className="diff-card__label">It's not planning everything</div>
              <div className="diff-card__statement">It's about understanding</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HeirDock (Feature Cards) */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Why Choose HeirDock?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="lightbulb" /></div>
              <div className="feature-card__title">Clarity without complexity</div>
              <p className="feature-card__description">
                Understand what you own - without turning it into another
                task or ongoing responsibility.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="bolt" /></div>
              <div className="feature-card__title">Identification and valuation, done for you</div>
              <p className="feature-card__description">
                Identify items and estimate potential value using real market
                data, with no research required.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="trackChanges" /></div>
              <div className="feature-card__title">Built for real life</div>
              <p className="feature-card__description">
                Add items gradually, update them over time, and take action only if
                and when it makes sense.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="lock" /></div>
              <div className="feature-card__title">Your information, protected</div>
              <p className="feature-card__description">
                Private, secure cloud storage with clear controls over what's shared
                and with whom.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="shield" /></div>
              <div className="feature-card__title">Know you're covered</div>
              <p className="feature-card__description">
                Understand what you have and whether your insurance coverage
                matches - before you need to file a claim.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="description" /></div>
              <div className="feature-card__title">Clear records when needed</div>
              <p className="feature-card__description">
                Generate clean, organized reports to share with family or
                professionals - without managing legal workflows.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="handshake" /></div>
              <div className="feature-card__title">Share with professionals</div>
              <p className="feature-card__description">
                Give your insurance agent, estate planner, or financial advisor
                access to the records they need to serve you better.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="spa" /></div>
              <div className="feature-card__title">A calm foundation for the future</div>
              <p className="feature-card__description">
                Reduce uncertainty, avoid burden later, and gain peace of mind
                through understanding - not urgency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="section section--white text-center">
        <div className="container">
          <h3>Ready to get started?</h3>
          <div className="mt-xl">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get in Touch <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
