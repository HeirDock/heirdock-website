import { Link } from "react-router-dom";

export default function CustomerHowItWorks() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/customer" className="page-header__back">&larr; Back to For Families</Link>
          <h1 className="page-header__title">How HeirDock Works</h1>
          <p className="page-header__subtitle">
            A simple, gradual approach to organizing your household - no pressure, no deadlines.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section section--white">
        <div className="container">
          <div style={{ maxWidth: "var(--max-width-narrow)", margin: "0 auto" }}>
            {/* Step 1 */}
            <div style={{ marginBottom: "var(--space-4xl)" }}>
              <div className="step-card__number" style={{ margin: "0 0 var(--space-lg)" }}>1</div>
              <h3>Create your household</h3>
              <p style={{ marginTop: "var(--space-md)" }}>
                Sign up and create your Household Record. Add your first property - your home, a storage unit,
                a vacation house - and you're ready to begin. The setup takes less than five minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ marginBottom: "var(--space-4xl)" }}>
              <div className="step-card__number" style={{ margin: "0 0 var(--space-lg)" }}>2</div>
              <h3>Catalog your items</h3>
              <p style={{ marginTop: "var(--space-md)" }}>
                Use the guided wizard to add items one at a time. Take a photo and let AI Identify
                recognize the item, suggest a category, and estimate market value using real comparable
                sales data. Add details like purchase date, serial numbers, or receipts as evidence.
              </p>
              <p>
                There's no rush - add items whenever it's convenient. Five items today,
                five more next weekend. HeirDock grows with you.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ marginBottom: "var(--space-4xl)" }}>
              <div className="step-card__number" style={{ margin: "0 0 var(--space-lg)" }}>3</div>
              <h3>Organize and share</h3>
              <p style={{ marginTop: "var(--space-md)" }}>
                Assign items to people, add stories and context, organize into collections, and
                invite Trusted Participants to view or contribute. Use roles to control access:
              </p>
              <ul style={{ paddingLeft: "var(--space-xl)", marginTop: "var(--space-md)" }}>
                <li style={{ marginBottom: "var(--space-sm)", listStyle: "disc", color: "var(--color-text-secondary)" }}>
                  <strong>Viewers</strong> can see items assigned to them
                </li>
                <li style={{ marginBottom: "var(--space-sm)", listStyle: "disc", color: "var(--color-text-secondary)" }}>
                  <strong>Contributors</strong> can help catalog and add items
                </li>
                <li style={{ marginBottom: "var(--space-sm)", listStyle: "disc", color: "var(--color-text-secondary)" }}>
                  <strong>Stewards</strong> have elevated access for estate planning
                </li>
              </ul>
            </div>

            {/* Step 4 */}
            <div style={{ marginBottom: "var(--space-4xl)" }}>
              <div className="step-card__number" style={{ margin: "0 0 var(--space-lg)" }}>4</div>
              <h3>Stay protected</h3>
              <p style={{ marginTop: "var(--space-md)" }}>
                Store sensitive documents in the encrypted Vault - wills, deeds, insurance cards,
                certificates. Link insurance policies to items and get Coverage Insights that
                identify potential gaps. When you need it, export a comprehensive Home Inventory
                Snapshot for insurance claims, estate planning, or family reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">Have questions?</h2>
          <p className="cta-band__subtitle">
            We'd love to tell you more about how HeirDock can help your household.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--white btn--lg">
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
