import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

// Each feature sits beside a small mockup of the app (.app-card). Mockups are
// illustrations with sample data: role="img" gives screen readers one summary
// instead of the sample rows.
export default function CustomerFeatures() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/customer" className="page-header__back"><Icon name="arrowBack" /> Back to For Families</Link>
          <h1 className="page-header__title">Features</h1>
          <p className="page-header__subtitle">
            Everything you need to catalog, protect, and pass on what matters.
          </p>
        </div>
      </section>

      {/* Photo identification */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Identify from a photo</h3>
              <p>
                Take a photo of any item and HeirDock will recognize it. It suggests
                a name, category, and relevant details - saving you time and effort on every entry.
              </p>
              <p>
                Works with furniture, jewelry, collectibles, artwork, electronics, tools, and more.
                Add several things at once with Quick Add, or take your time with Detailed Add.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: a photo of a pocket watch with a suggested name, category and estimated value">
              <div className="app-suggest">
                <div className="app-suggest__photo app-tile--accent"><Icon name="watch" /></div>
                <div className="app-suggest__fields">
                  <div className="app-label">Suggested from your photo</div>
                  <div className="app-field">
                    <div className="app-field__label">Name</div>
                    <div className="app-field__value">Waltham Pocket Watch, Gold-Filled</div>
                  </div>
                  <div className="app-field">
                    <div className="app-field__label">Category</div>
                    <div className="app-field__value">Jewelry &amp; Accessories</div>
                  </div>
                  <div className="app-field">
                    <div className="app-field__label">Estimated value</div>
                    <div className="app-field__value">$900 - $1,400</div>
                  </div>
                </div>
              </div>
              <div className="app-actions">
                <span className="app-button">Edit details</span>
                <span className="app-button app-button--primary">Save item</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Valuation */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content">
              <h3>Market Valuation</h3>
              <p>
                Get automatic market value estimates based on real comparable sales data.
                HeirDock searches recent transactions to suggest what your items might be worth -
                no appraisal needed for everyday items.
              </p>
              <p>
                Add an appraisal or your own estimate alongside it, see how each value changes
                over time, and get a gentle reminder when a high-value item is due for a fresh look.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: a watch's value over time, rising from $1,200 in 2024 to $1,780 in 2026">
              <div className="app-card__header">
                <div>
                  <div className="app-card__title">Vintage Watch</div>
                  <div className="app-card__subtitle">Value over time</div>
                </div>
                <div className="app-figure">
                  <div className="app-figure__value">$1,780</div>
                  <div className="app-card__subtitle">Current estimate</div>
                </div>
              </div>
              <svg className="app-chart" viewBox="0 0 480 170" aria-hidden="true">
                <line className="app-chart__grid" x1="48" y1="20" x2="470" y2="20" />
                <line className="app-chart__grid" x1="48" y1="80" x2="470" y2="80" />
                <line className="app-chart__grid" x1="48" y1="140" x2="470" y2="140" />
                <text className="app-chart__label" x="0" y="24">$2,000</text>
                <text className="app-chart__label" x="0" y="84">$1,500</text>
                <text className="app-chart__label" x="0" y="144">$1,000</text>
                <text className="app-chart__label" x="60" y="164">2024</text>
                <text className="app-chart__label" x="250" y="164">2025</text>
                <text className="app-chart__label" x="440" y="164">2026</text>
                <polyline className="app-chart__line" points="70,116 260,62 450,46" />
                <circle className="app-chart__point" cx="70" cy="116" r="5" />
                <circle className="app-chart__point" cx="260" cy="62" r="5" />
                <circle className="app-chart__point app-chart__point--current" cx="450" cy="46" r="5" />
              </svg>
              <div className="app-rows app-rows--ruled">
                <div className="app-row"><span>Comparable sales <span className="app-muted">· Oct 2026</span></span><span className="app-strong">$1,780</span></div>
                <div className="app-row"><span>Appraisal <span className="app-muted">· Mar 2025</span></span><span className="app-strong">$1,650</span></div>
                <div className="app-row"><span>Your estimate <span className="app-muted">· Mar 2024</span></span><span className="app-strong">$1,200</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos and Attachments */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Photos and Attachments</h3>
              <p>
                Upload photos, serial numbers, receipts, and documents for any item. Build a
                complete record that supports insurance claims, estate planning, and family
                records.
              </p>
              <p>
                Multiple photos per item, version history, and organized storage make it easy
                to document everything thoroughly.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: a ring's photos and its receipt, appraisal and certificate">
              <div className="app-card__title">Diamond Engagement Ring</div>
              <div className="app-card__subtitle">Jewelry &amp; Accessories</div>
              <div className="app-photos">
                <div className="app-tile app-tile--secondary"><Icon name="diamond" /></div>
                <div className="app-tile app-tile--secondary" />
                <div className="app-tile app-tile--primary" />
                <div className="app-tile app-tile--neutral">+3</div>
              </div>
              <div className="app-label">Attachments</div>
              <div className="app-rows">
                <div className="app-row"><span>Purchase receipt</span><span className="app-muted">PDF · 2018</span></div>
                <div className="app-row"><span>Appraisal</span><span className="app-muted">PDF · 2019</span></div>
                <div className="app-row"><span>GIA certificate</span><span className="app-muted">PDF</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance, Tasks and Warranties */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content">
              <h3>Maintenance, Tasks and Warranties</h3>
              <p>
                Set recurring tasks - tune the piano every six months, service the furnace each
                fall - and see what's coming up or overdue in one place, for every item and
                property.
              </p>
              <p>
                Keep each warranty with the item it covers and log service as it happens. A care
                history shows an item was looked after, which helps with insurance claims, resale,
                and passing it on.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: a piano's warranty, a recurring tuning task and its maintenance log">
              <div className="app-item">
                <div className="app-icon app-icon--primary"><Icon name="build" /></div>
                <div>
                  <div className="app-card__title">Steinway Upright Piano</div>
                  <div className="app-card__subtitle">Living Room · Lake House</div>
                </div>
              </div>
              <div className="app-block">
                <div className="app-label">Warranty</div>
                <div className="app-row app-row--plain"><span>Manufacturer warranty</span><span className="app-status-good">Active until Jun 2028</span></div>
              </div>
              <div className="app-block">
                <div className="app-label app-label--split"><span>Tasks</span><span className="app-link">Add task</span></div>
                <div className="app-row app-row--plain"><span>Tuning <span className="app-muted">· Every 6 months</span></span><span className="app-muted">Next due Mar 2027</span></div>
              </div>
              <div className="app-block app-block--last">
                <div className="app-label app-label--split"><span>Maintenance log</span><span className="app-link">Log maintenance</span></div>
                <div className="app-rows">
                  <div className="app-row"><span>Tuning</span><span className="app-muted">Sep 2026</span></div>
                  <div className="app-row"><span>Hammer voicing and regulation</span><span className="app-muted">Mar 2026</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Sharing */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Family Sharing</h3>
              <p>
                Invite Trusted Participants and choose what each person can do. Viewers can see
                what you share with them. Contributors can help catalog and organize. Full Access
                lets someone manage the household alongside you.
              </p>
              <p>
                Everyone sees only what they need to - with clear controls over sharing
                and permissions.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: three Trusted Participants with Full Access, Contributor and Viewer access">
              <div className="app-label app-label--split"><span>Trusted Participants</span><span className="app-link">Invite</span></div>
              <div className="app-rows">
                <div className="app-person">
                  <div className="app-avatar app-avatar--accent">EW</div>
                  <div className="app-person__name"><div className="app-strong">Emma Whitfield</div><div className="app-card__subtitle">Daughter</div></div>
                  <div className="app-strong">Full Access</div>
                </div>
                <div className="app-person">
                  <div className="app-avatar app-avatar--primary">JW</div>
                  <div className="app-person__name"><div className="app-strong">Jack Whitfield</div><div className="app-card__subtitle">Son</div></div>
                  <div className="app-strong">Contributor</div>
                </div>
                <div className="app-person">
                  <div className="app-avatar app-avatar--secondary">RA</div>
                  <div className="app-person__name"><div className="app-strong">Ruth Alvarez</div><div className="app-card__subtitle">Sister · Jewelry collection only</div></div>
                  <div className="app-strong">Viewer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vault Storage */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content">
              <h3>Vault Storage</h3>
              <p>
                Store your most sensitive documents in the encrypted Vault - wills, deeds,
                insurance policies, certificates, and more. Each document is protected with
                bank-level encryption with per-document security.
              </p>
              <p>
                Access is strictly controlled. Only you and participants you explicitly authorize
                can view Vault contents.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: a will, a deed and an insurance policy stored in the Vault">
              <div className="app-label app-label--split"><span>Vault</span><span className="app-muted">Shared with Emma (Full Access)</span></div>
              <div className="app-rows">
                <div className="app-doc"><span className="app-doc__icon"><Icon name="lock" /></span><span className="app-strong">Last will and testament</span><span className="app-muted">PDF</span></div>
                <div className="app-doc"><span className="app-doc__icon"><Icon name="lock" /></span><span className="app-strong">Deed - Lake House</span><span className="app-muted">PDF</span></div>
                <div className="app-doc"><span className="app-doc__icon"><Icon name="lock" /></span><span className="app-strong">Homeowners policy 2026</span><span className="app-muted">PDF</span></div>
              </div>
              <div className="app-note">You confirm it's you each time the Vault opens.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Insights */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Coverage Insights</h3>
              <p>
                Link insurance policies to your items and let HeirDock analyze potential
                coverage gaps. See when high-value items may need additional coverage or
                documentation.
              </p>
              <p>
                When it's time to file a claim, track it in HeirDock alongside the organized
                records and attachments that support it.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: claim readiness for 18 of 22 high-value items, with one item needing an appraisal">
              <div className="app-label app-label--split"><span>Coverage Insights</span><span className="app-muted">Homeowners · Harbor &amp; Main</span></div>
              <div className="app-meter-head"><span className="app-card__title">Claim readiness</span><span>18 of 22 high-value items</span></div>
              <div className="app-meter"><div className="app-meter__fill" /></div>
              <div className="app-rows">
                <div className="app-row"><span>Diamond Engagement Ring</span><span className="app-status-good">Scheduled</span></div>
                <div className="app-row"><span>Vintage Watch</span><span className="app-status-good">Covered</span></div>
                <div className="app-row"><span>Coastal Landscape, Oil</span><span className="app-status-warn">Needs appraisal</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estate Planning */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content">
              <h3>Estate Planning</h3>
              <p>
                Name a Steward and beneficiaries, decide who each item is meant for, and add the
                story behind it. HeirDock helps you record your wishes clearly - so your family
                doesn't have to guess.
              </p>
              <p>
                If you're ever unable to manage things yourself, Care Mode lets your Care Steward
                look after your household record. Stewardship gives your Steward what they need
                when the time comes.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: beneficiaries for three items, and the household's Steward, Alternate Steward and Care Steward">
              <div className="app-label">Beneficiaries</div>
              <div className="app-rows app-rows--ruled-bottom">
                <div className="app-row"><span>Vintage Watch</span><span className="app-strong">Emma</span></div>
                <div className="app-row"><span>Baseball Card Collection</span><span className="app-strong">Jack</span></div>
                <div className="app-row"><span>Steinway Upright Piano</span><span className="app-strong">Whitfield Family Trust</span></div>
              </div>
              <div className="app-label app-label--spaced">Designations</div>
              <div className="app-rows">
                <div className="app-row"><span className="app-secondary">Steward</span><span className="app-strong">Emma Whitfield</span></div>
                <div className="app-row"><span className="app-secondary">Alternate Steward</span><span className="app-strong">Jack Whitfield</span></div>
                <div className="app-row"><span className="app-secondary">Care Steward</span><span className="app-strong">Ruth Alvarez</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Reports</h3>
              <p>
                Turn your household record into a document when you need one: a full list of
                your assets for an insurer, a summary of who each item is meant for, or a
                financial picture of what you own.
              </p>
              <p>
                Export as PDF or CSV, for everything or just one property or collection.
              </p>
            </div>
            <div className="app-card" role="img" aria-label="Example: three reports - Full Assets Export, Beneficiary Assignment Report and Financial Analysis">
              <div className="app-rows">
                <div className="app-report">
                  <div><div className="app-card__title">Full Assets Export</div><div className="app-card__subtitle">Your complete asset list, with optional filters</div></div>
                  <div className="app-muted">PDF · CSV</div>
                </div>
                <div className="app-report">
                  <div><div className="app-card__title">Beneficiary Assignment Report</div><div className="app-card__subtitle">Every assignment, designation and Distribution Plan</div></div>
                  <div className="app-muted">PDF</div>
                </div>
                <div className="app-report">
                  <div><div className="app-card__title">Financial Analysis</div><div className="app-card__subtitle">Estimated value with a likely range, by person, collection, property and category</div></div>
                  <div className="app-muted">PDF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">See it in action</h2>
          <p className="cta-band__subtitle">
            Have questions about HeirDock's features? We'd love to hear from you.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get in Touch <Icon name="arrowForward" />
            </Link>
            <Link to="/customer/pricing" className="btn btn--outline btn--lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
