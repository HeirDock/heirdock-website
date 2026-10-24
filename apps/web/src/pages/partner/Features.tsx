import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import toolWorkspaceUrl from "../../assets/images/partner/tool-workspace.webp";
import toolCoverageUrl from "../../assets/images/partner/tool-coverage.webp";
import toolPoliciesUrl from "../../assets/images/partner/tool-policies.webp";
import toolAnalyticsUrl from "../../assets/images/partner/tool-analytics.webp";
import toolTeamUrl from "../../assets/images/partner/tool-team.webp";
import toolConsentUrl from "../../assets/images/partner/tool-consent.webp";

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

      {/* Tools: real Partner Portal screens on tints */}
      <section className="section">
        <div className="container">
          <span className="eyebrow text-center">Partner Portal</span>
          <h2 className="section__title">Tools for your whole practice</h2>
          <p className="section__subtitle">
            Everything you need to serve the households you work with - and only what each one
            chooses to share.
          </p>
          <div className="tool-cards">
            <div className="tool-card">
              <div className="tool-card__thumb tool-card__thumb--navy">
                <div className="tool-card__frame">
                  <img src={toolWorkspaceUrl} width={760} height={352} loading="lazy" decoding="async" alt="A client workspace in the Partner Portal, with Summary, Assets and Policies & Claims tabs" />
                </div>
              </div>
              <h3 className="tool-card__title">Client workspaces</h3>
              <p className="tool-card__text">A workspace for every client: their summary, assets, and policies and claims, as far as they share.</p>
            </div>
            <div className="tool-card">
              <div className="tool-card__thumb tool-card__thumb--sage">
                <div className="tool-card__frame">
                  <img src={toolCoverageUrl} width={760} height={292} loading="lazy" decoding="async" alt="Coverage for a client: how much is covered and how much is valued" />
                </div>
              </div>
              <h3 className="tool-card__title">Coverage at a glance</h3>
              <p className="tool-card__text">See what&apos;s claim-ready, what isn&apos;t on a policy, and where limits fall short of values.</p>
            </div>
            <div className="tool-card">
              <div className="tool-card__thumb tool-card__thumb--gold">
                <div className="tool-card__frame">
                  <img src={toolPoliciesUrl} width={760} height={312} loading="lazy" decoding="async" alt="Claims opened each month across a practice's clients" />
                </div>
              </div>
              <h3 className="tool-card__title">Policies and claims</h3>
              <p className="tool-card__text">With the household&apos;s permission, add or update their policies and start a claim. They see every change.</p>
            </div>
            <div className="tool-card">
              <div className="tool-card__thumb tool-card__thumb--navy">
                <div className="tool-card__frame">
                  <img src={toolAnalyticsUrl} width={704} height={440} loading="lazy" decoding="async" alt="Clients over time, growing across the year" />
                </div>
              </div>
              <h3 className="tool-card__title">Portfolio analytics</h3>
              <p className="tool-card__text">Portfolio health, renewals, claims performance and engagement, across every client.</p>
            </div>
            <div className="tool-card">
              <div className="tool-card__thumb tool-card__thumb--sage">
                <div className="tool-card__frame">
                  <img src={toolTeamUrl} width={760} height={380} loading="lazy" decoding="async" alt="A practice's team members and their roles" />
                </div>
              </div>
              <h3 className="tool-card__title">Team management</h3>
              <p className="tool-card__text">Admins and team members with clear permissions. Assign each client to the right person.</p>
            </div>
            <div className="tool-card">
              <div className="tool-card__thumb tool-card__thumb--gold">
                <div className="tool-card__frame">
                  <img src={toolConsentUrl} width={720} height={476} loading="lazy" decoding="async" alt="What a client shares: each collection and its sharing level" />
                </div>
              </div>
              <h3 className="tool-card__title">Built on consent</h3>
              <p className="tool-card__text">Clients choose what you see and for how long, and every access is logged.</p>
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
            <Link to="/professional/demo" className="btn btn--gold btn--lg">
              Request a Demo <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
