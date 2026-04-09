import { Link } from "react-router-dom";

export default function CustomerFeatures() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/customer" className="page-header__back">&larr; Back to For Families</Link>
          <h1 className="page-header__title">Features</h1>
          <p className="page-header__subtitle">
            Everything you need to catalog, protect, and pass on what matters - powered by AI.
          </p>
        </div>
      </section>

      {/* AI Identify */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>AI Identify</h3>
              <p>
                Take a photo of any item and let HeirDock's AI recognize it instantly. It suggests
                a name, category, and relevant details - saving you time and effort on every entry.
              </p>
              <p>
                Works with furniture, jewelry, collectibles, artwork, electronics, tools, and more.
                The more you use it, the smarter it gets about your household.
              </p>
            </div>
            <div className="feature-section__image">AI Identify Preview</div>
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
                Valuations update over time as market conditions change, giving you an evolving
                picture of your household wealth.
              </p>
            </div>
            <div className="feature-section__image">Valuation Preview</div>
          </div>
        </div>
      </section>

      {/* Evidence Capture */}
      <section className="section section--white">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Evidence Capture</h3>
              <p>
                Upload photos, serial numbers, receipts, and documents for any item. Build a
                comprehensive evidence library that supports insurance claims, estate planning,
                and family records.
              </p>
              <p>
                Multiple photos per item, version history, and organized storage make it easy
                to document everything thoroughly.
              </p>
            </div>
            <div className="feature-section__image">Evidence Preview</div>
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
                Invite Trusted Participants with role-based access. Viewers can see items
                assigned to them. Contributors can help catalog and organize. Stewards have
                elevated access for estate planning and management.
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
                AES-256 encryption and per-document encryption keys.
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
                coverage gaps. Get nudges when high-value items may need additional coverage
                or documentation.
              </p>
              <p>
                When it's time to file a claim, your organized records and evidence library
                make the process smoother and faster.
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
                Designate successors for your items, create distribution plans, and leave
                legacy messages for the people who matter. HeirDock helps you organize your
                wishes clearly - so your family doesn't have to guess.
              </p>
              <p>
                Export structured reports for estate attorneys, financial advisors, or family
                conversations.
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
            <Link to="/contact" className="btn btn--white btn--lg">
              Get in Touch &rarr;
            </Link>
            <Link to="/customer/pricing" className="btn btn--outline btn--lg" style={{ borderColor: "white", color: "white" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
