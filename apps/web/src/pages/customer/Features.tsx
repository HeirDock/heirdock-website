import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

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
            <div className="feature-section__image">Photo identification preview</div>
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
            <div className="feature-section__image">Valuation Preview</div>
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
            <div className="feature-section__image">Attachments Preview</div>
          </div>
        </div>
      </section>

      {/* Family Sharing */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
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
            <div className="feature-section__image">Sharing Preview</div>
          </div>
        </div>
      </section>

      {/* Vault Storage */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
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
            <div className="feature-section__image">Vault Preview</div>
          </div>
        </div>
      </section>

      {/* Coverage Insights */}
      <section className="section">
        <div className="container">
          <div className="feature-section feature-section--reverse">
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
            <div className="feature-section__image">Coverage Preview</div>
          </div>
        </div>
      </section>

      {/* Estate Planning */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
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
                when the time comes. Export structured reports for estate attorneys, financial
                advisors, or family conversations.
              </p>
            </div>
            <div className="feature-section__image">Estate Preview</div>
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
