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
          <div className="narrow">
            {/* Step 1 */}
            <div className="step-list__item">
              <div className="step-card__number">1</div>
              <h3>Create your household</h3>
              <p className="mt-md">
                Sign up and create your Household Record. Add your first property - your home, a storage unit,
                a vacation house - and you're ready to begin. The setup takes less than five minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-list__item">
              <div className="step-card__number">2</div>
              <h3>Catalog your items</h3>
              <p className="mt-md">
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
            <div className="step-list__item">
              <div className="step-card__number">3</div>
              <h3>Organize and share</h3>
              <p className="mt-md">
                Assign items to people, add stories and context, organize into collections, and
                invite Trusted Participants to view or contribute. Use roles to control access:
              </p>
              <ul className="step-list__bullets">
                <li>
                  <strong>Viewers</strong> can see items assigned to them
                </li>
                <li>
                  <strong>Contributors</strong> can help catalog and add items
                </li>
                <li>
                  <strong>Stewards</strong> have elevated access for estate planning
                </li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="step-list__item">
              <div className="step-card__number">4</div>
              <h3>Stay protected</h3>
              <p className="mt-md">
                Store sensitive documents in the encrypted Vault - wills, deeds, insurance cards,
                certificates. Link insurance policies to items and get Coverage Insights that
                identify potential gaps. When you need it, export a comprehensive Home Asset
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
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
