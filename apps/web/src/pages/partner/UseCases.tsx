import { Link } from "react-router-dom";

export default function PartnerUseCases() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/partner" className="page-header__back">&larr; Back to For Professionals</Link>
          <h1 className="page-header__title">Partner Use Cases</h1>
          <p className="page-header__subtitle">
            How professionals across industries use HeirDock to serve clients better.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="use-case-grid">
            <div className="use-case-card">
              <div className="use-case-card__icon">&#128203;</div>
              <h3 className="use-case-card__title">Insurance Agents</h3>
              <p className="use-case-card__description">
                Review client household inventories to ensure adequate coverage. Identify high-value items
                that may need riders or additional policies. When claims arise, access organized documentation
                with photos, serial numbers, and valuations to accelerate the process.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-card__icon">&#9878;</div>
              <h3 className="use-case-card__title">Estate Planners</h3>
              <p className="use-case-card__description">
                Access structured asset records and distribution plans to support comprehensive estate planning.
                See successor designations, legacy messages, and item-level assignment preferences.
                Export documentation for trust and estate documents.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-card__icon">&#128270;</div>
              <h3 className="use-case-card__title">Appraisers</h3>
              <p className="use-case-card__description">
                Start appraisals with structured baseline data - photos, categories, AI-generated
                market comparables, and client-provided context. Reduce on-site time and deliver
                more thorough valuations with better documentation.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-card__icon">&#128176;</div>
              <h3 className="use-case-card__title">Financial Advisors</h3>
              <p className="use-case-card__description">
                Gain visibility into the physical asset portion of client wealth that traditional
                financial tools miss. Use household data to inform holistic wealth management
                conversations and identify protection gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">See how it works for your practice</h2>
          <div className="cta-band__actions">
            <Link to="/partner/demo" className="btn btn--white btn--lg">
              Request a Demo &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
