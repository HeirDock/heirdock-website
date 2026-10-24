import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import valuationUrl from "../../assets/images/features/valuation.webp";
import photosUrl from "../../assets/images/features/photos.webp";
import documentsUrl from "../../assets/images/features/documents.webp";
import maintenanceUrl from "../../assets/images/features/maintenance.webp";
import warrantyUrl from "../../assets/images/features/warranty.webp";
import peopleUrl from "../../assets/images/features/people.webp";
import accessUrl from "../../assets/images/features/access.webp";
import vaultUrl from "../../assets/images/features/vault.webp";
import readinessUrl from "../../assets/images/use-cases/uc1-readiness.webp";
import coveredUrl from "../../assets/images/use-cases/uc1-covered.webp";
import designationsUrl from "../../assets/images/use-cases/uc2-designations.webp";
import intentionsUrl from "../../assets/images/use-cases/uc2-intentions.webp";
import reportsUrl from "../../assets/images/features/reports.webp";
import financialUrl from "../../assets/images/features/financial.webp";

// Each feature sits beside real screens from the app, captured on a demo
// household with made-up data. "Identify from a photo" keeps a drawn mockup
// (.app-card, role="img" with one summary) until a Quick Add capture exists.
export default function CustomerFeatures() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Features</h1>
          <p className="page-header__subtitle">
            Everything you need to catalog, protect, and pass on what matters.
          </p>
          <a href="#all-features" className="page-header__link">
            See the full feature list <Icon name="expandMore" />
          </a>
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
            <div className="feature-section__content feature-section--media">
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
            <div className="screen-stack screen-stack--valuation">
              <img
                className="screen-shot"
                src={valuationUrl}
                width={1100}
                height={721}
                loading="lazy"
                decoding="async"
                alt="An item's Valuation card in the app: estimated value over two years, with an insurance appraisal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photos and Attachments */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content feature-section--media">
              <h3>Photos and Attachments</h3>
              <p>
                Upload photos, serial numbers, receipts, and documents for any item. Build a
                complete record that supports insurance claims, estate planning, and family
                records.
              </p>
              <p>
                Multiple photos per item, documents kept with the item they belong to, and organized storage make it easy
                to document everything thoroughly.
              </p>
            </div>
            <div className="screen-stack screen-stack--photos">
              <img
                className="screen-shot"
                src={photosUrl}
                width={1100}
                height={567}
                loading="lazy"
                decoding="async"
                alt="An item in the app with three photos"
              />
              <img
                className="screen-shot screen-stack__float"
                src={documentsUrl}
                width={728}
                height={362}
                loading="lazy"
                decoding="async"
                alt="The item's documents: an appraisal report and a service receipt"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance, Tasks and Warranties */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content feature-section--media">
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
            <div className="screen-stack screen-stack--maintenance">
              <img
                className="screen-shot"
                src={maintenanceUrl}
                width={734}
                height={460}
                loading="lazy"
                decoding="async"
                alt="An item's Maintenance card: a service task every five years, and its service history"
              />
              <img
                className="screen-shot screen-stack__float"
                src={warrantyUrl}
                width={732}
                height={288}
                loading="lazy"
                decoding="async"
                alt="A Warranty card: an active service plan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family Sharing */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content feature-section--media">
              <h3>Family Sharing</h3>
              <p>
                Invite Trusted Participants and choose what each person can do. A Manager helps
                run the household alongside you. Everyone else gets Shared Access to just the
                collections you choose - as a Viewer, a Contributor who helps catalog, or with
                Full Access to that collection.
              </p>
              <p>
                Everyone sees only what they need to - with clear controls over sharing
                and permissions.
              </p>
            </div>
            <div className="screen-stack screen-stack--sharing">
              <img
                className="screen-shot"
                src={peopleUrl}
                width={1000}
                height={995}
                loading="lazy"
                decoding="async"
                alt="People in the household: the Primary Account Holder, a Manager, and people with Shared Access"
              />
              <img
                className="screen-shot screen-stack__float"
                src={accessUrl}
                width={732}
                height={694}
                loading="lazy"
                decoding="async"
                alt="One person's access: Shared Access as a Contributor on one collection and a Viewer on another"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vault Storage */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content feature-section--media">
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
            <div className="screen-stack screen-stack--vault">
              <img
                className="screen-shot"
                src={vaultUrl}
                width={1200}
                height={656}
                loading="lazy"
                decoding="async"
                alt="The Document Vault: a power of attorney, a homeowner's insurance policy, a will and a property deed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Insights */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content feature-section--media">
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
            <div className="screen-stack screen-stack--insurance">
              <img
                className="screen-shot"
                src={readinessUrl}
                width={1300}
                height={392}
                loading="lazy"
                decoding="async"
                alt="Coverage Insights in the app: 60% claim-ready"
              />
              <img
                className="screen-shot screen-stack__float"
                src={coveredUrl}
                width={700}
                height={622}
                loading="lazy"
                decoding="async"
                alt="The Covered card: 94% on a policy, with the items that need attention"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estate Planning */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content feature-section--media">
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
            <div className="screen-stack screen-stack--estate">
              <img
                className="screen-shot"
                src={designationsUrl}
                width={1240}
                height={1032}
                loading="lazy"
                decoding="async"
                alt="Household Designations: a Steward, an Alternate Steward, a Care Steward and beneficiaries"
              />
              <img
                className="screen-shot screen-stack__float"
                src={intentionsUrl}
                width={900}
                height={296}
                loading="lazy"
                decoding="async"
                alt="An item's intention: Gift, intended for a family member, with a personal note"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content feature-section--media">
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
            <div className="screen-stack screen-stack--reports">
              <img
                className="screen-shot"
                src={reportsUrl}
                width={1300}
                height={427}
                loading="lazy"
                decoding="async"
                alt="Reports: Full Assets Export, Beneficiary Assignment Report and Financial Analysis"
              />
              <img
                className="screen-shot screen-stack__float"
                src={financialUrl}
                width={900}
                height={418}
                loading="lazy"
                decoding="async"
                alt="Financial Analysis: total estimated value with a plausible range"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Every feature, at a glance */}
      <section className="section" id="all-features">
        <div className="container">
          <h2 className="section__title">Every feature, at a glance</h2>
          <p className="section__subtitle">Included in every plan.</p>
          <div className="feature-matrix">
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Catalog</h3>
              <ul className="feature-matrix__list">
                <li>Quick Add: several items from photos at once</li>
                <li>Detailed Add: one item, with every detail</li>
                <li>Suggested name, category, condition and value from a photo</li>
                <li>Photos, receipts, serial numbers and documents on each item</li>
                <li>Properties, rooms, collections and custom tags</li>
                <li>Apps for iPhone and Android, and any web browser</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Value</h3>
              <ul className="feature-matrix__list">
                <li>Market estimates from comparable sales</li>
                <li>Value over time, with appraisals and purchase price</li>
                <li>Typical replacement range</li>
                <li>A prompt when a high-value item is due for a fresh valuation</li>
                <li>Financial Analysis with a plausible range</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Care</h3>
              <ul className="feature-matrix__list">
                <li>Recurring maintenance tasks</li>
                <li>A maintenance log for each item and property</li>
                <li>Warranties kept with the item they cover</li>
                <li>Asset Reviews to confirm your record is still accurate</li>
                <li>What's upcoming or overdue, in one place</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Insurance</h3>
              <ul className="feature-matrix__list">
                <li>Coverage Insights: covered, valued and provable</li>
                <li>A clear next step for each coverage gap</li>
                <li>Insurance policies linked to the items they cover</li>
                <li>Start and track claims, and download them as PDFs</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Family and planning</h3>
              <ul className="feature-matrix__list">
                <li>Trusted Participants: Managers and Shared Access</li>
                <li>Viewer, Contributor or Full Access for each collection</li>
                <li>Steward, Alternate Steward, Care Steward and Beneficiaries</li>
                <li>Intentions: Keep, Sell, Gift, Donate or Undecided</li>
                <li>Stories, notes, Q&amp;A and provenance on each item</li>
                <li>Stewardship and Care Mode</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Reports</h3>
              <ul className="feature-matrix__list">
                <li>Full Assets Export as PDF or CSV</li>
                <li>Beneficiary Assignment Report</li>
                <li>Reports for an item, a property or a collection</li>
                <li>Financial Analysis by person, collection, property and category</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Professionals</h3>
              <ul className="feature-matrix__list">
                <li>Share with professionals: a summary, the assets list or full item detail</li>
                <li>Share everything or one collection, with an optional end date</li>
                <li>See exactly what a professional sees</li>
                <li>Let an insurance professional update policies and start claims, if you choose</li>
                <li>Stop sharing at any time</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Security</h3>
              <ul className="feature-matrix__list">
                <li>An encrypted Vault with per-document keys and version history</li>
                <li>Multi-factor authentication</li>
                <li>Sign out of any device, any time</li>
                <li>An optional extra check before Vault documents open</li>
                <li>Location data removed from your photos</li>
                <li>Your data is never sold</li>
              </ul>
            </div>
            <div className="feature-matrix__group">
              <h3 className="feature-matrix__title">Support</h3>
              <ul className="feature-matrix__list">
                <li>Help and support inside the app</li>
                <li>A reply from our team within 1–2 business days</li>
                <li>The same support on every plan</li>
                <li>Answers to common questions in the FAQ</li>
                <li>Service updates on our status page</li>
              </ul>
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
