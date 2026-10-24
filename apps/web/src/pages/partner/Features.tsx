import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

export default function PartnerFeatures() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Partner Features</h1>
          <p className="page-header__subtitle">
            Tools designed for professional workflows - built on top of your clients' household records.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="work" /></div>
              <div className="feature-card__title">Client Workspace</div>
              <p className="feature-card__description">
                A dedicated workspace for each client with organized access to their household record,
                items, attachments, and valuations. Everything you need in one place.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="description" /></div>
              <div className="feature-card__title">Document Sharing</div>
              <p className="feature-card__description">
                Access client-consented documents, photos, and records. Download attachments
                and structured exports for your workflows.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="barChart" /></div>
              <div className="feature-card__title">Coverage Gap Analysis</div>
              <p className="feature-card__description">
                See where client insurance coverage may fall short based on documented items
                and their estimated values. Proactively address gaps.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="trendingUp" /></div>
              <div className="feature-card__title">Analytics Dashboard</div>
              <p className="feature-card__description">
                See portfolio health, upcoming renewals, claims, and client engagement
                across all the households you work with.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="group" /></div>
              <div className="feature-card__title">Team Management</div>
              <p className="feature-card__description">
                Add team members to your partner organization with role-based permissions.
                Assign clients to team members and manage workload.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="lock" /></div>
              <div className="feature-card__title">Consent-Based Access</div>
              <p className="feature-card__description">
                All client data access is consent-based and audited. Clients control
                what you can see, and every access is logged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for your practice */}
      <section id="practice" className="section">
        <div className="container">
          <h2 className="section__title">Built for your practice</h2>
          <p className="section__subtitle practice__subtitle">
            Each professional sees the part of a household's record that matters to their
            work, and only what the household chooses to share.
          </p>

          <div className="practice-table" role="table" aria-label="Professional views">
            <div className="practice-table__row practice-table__row--head" role="row">
              <div role="columnheader">Professional</div>
              <div role="columnheader">Their view</div>
              <div role="columnheader">How it helps</div>
            </div>
            <div className="practice-table__row" role="row">
              <div className="practice-table__who" role="rowheader">Insurance agents</div>
              <div className="practice-table__view" role="cell">Coverage</div>
              <div className="practice-table__how" role="cell">Make sure the things that matter are properly covered, with help updating a policy or starting a claim when something happens.</div>
            </div>
            <div className="practice-table__row" role="row">
              <div className="practice-table__who" role="rowheader">Estate planners</div>
              <div className="practice-table__view" role="cell">Estate</div>
              <div className="practice-table__how" role="cell">Know who each item is meant for and why, so wishes are clear and easier to carry out.</div>
            </div>
            <div className="practice-table__row" role="row">
              <div className="practice-table__who" role="rowheader">Corporate trustees</div>
              <div className="practice-table__view" role="cell">Estate</div>
              <div className="practice-table__how" role="cell">Keep belongings held in a trust clearly recorded for the people they are meant for.</div>
            </div>
            <div className="practice-table__row" role="row">
              <div className="practice-table__who" role="rowheader">Appraisers</div>
              <div className="practice-table__view" role="cell">Valuation</div>
              <div className="practice-table__how" role="cell">Start from photos, serial numbers and past appraisals, so a valuation takes less time and fewer visits.</div>
            </div>
            <div className="practice-table__row" role="row">
              <div className="practice-table__who" role="rowheader">Banks and wealth advisors</div>
              <div className="practice-table__view" role="cell">Wealth</div>
              <div className="practice-table__how" role="cell">See the things a family owns alongside the rest of their finances, for a fuller picture.</div>
            </div>
            <div className="practice-table__row" role="row">
              <div className="practice-table__who" role="rowheader">Property managers</div>
              <div className="practice-table__view" role="cell">Property</div>
              <div className="practice-table__how" role="cell">Stay on top of maintenance and recurring tasks for each home, from servicing the furnace to seasonal upkeep.</div>
            </div>
          </div>

          <div className="control-levels">
            <h3 className="control-levels__title">Your clients stay in control</h3>
            <p className="control-levels__intro">
              Each household decides how much every professional sees, and can change it or
              end it at any time.
            </p>
            <div className="control-levels__grid">
              <div className="control-levels__item">
                <h4 className="control-levels__name">Not shared</h4>
                <p>Nothing is shared until they choose to, and sharing can end whenever they like.</p>
              </div>
              <div className="control-levels__item">
                <h4 className="control-levels__name">Summary only</h4>
                <p>Totals and breakdowns, with no list of individual items.</p>
              </div>
              <div className="control-levels__item">
                <h4 className="control-levels__name">Summary + Assets list</h4>
                <p>Adds the item list: name, category, property and value.</p>
              </div>
              <div className="control-levels__item">
                <h4 className="control-levels__name">Full Item detail</h4>
                <p>Each item's page, with only the details they pick: photos, values, documents and more.</p>
              </div>
            </div>
            <p className="control-levels__footnote">
              They can share everything or a single collection, and set an end date if they want one.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">See these features in action</h2>
          <p className="cta-band__subtitle">
            Schedule a personalized demo for your practice.
          </p>
          <div className="cta-band__actions">
            <Link to="/partner/demo" className="btn btn--primary btn--lg">
              Request a Demo <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
