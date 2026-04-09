import { Link } from "react-router-dom";

export default function CustomerUseCases() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/customer" className="page-header__back">&larr; Back to For Families</Link>
          <h1 className="page-header__title">Use Cases</h1>
          <p className="page-header__subtitle">
            See how families use HeirDock to bring clarity to what they own.
          </p>
        </div>
      </section>

      {/* Insurance Readiness */}
      <section className="section section--white" id="insurance">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Insurance Readiness</h3>
              <p>
                <strong>The problem:</strong> Most families can't produce a complete asset record when filing
                an insurance claim. After a fire, flood, or theft, they're left trying to reconstruct
                what was lost from memory.
              </p>
              <p>
                <strong>How HeirDock helps:</strong> Build a documented asset record with photos, serial numbers,
                valuations, and receipts. Link insurance policies to items. Get Coverage Insights that identify
                gaps before you need to file a claim.
              </p>
              <p>
                When something does happen, your evidence library and organized records
                make the claims process dramatically faster and more complete.
              </p>
            </div>
            <div className="feature-section__image">Insurance Preview</div>
          </div>
        </div>
      </section>

      {/* Estate Planning */}
      <section className="section" id="estate">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content">
              <h3>Estate Planning</h3>
              <p>
                <strong>The problem:</strong> Families often don't know the full scope of what a loved
                one owns until it's too late. Estate settlements stall because there's no organized record
                of personal property.
              </p>
              <p>
                <strong>How HeirDock helps:</strong> Create a living record that captures not just what you own,
                but who it should go to and why. Designate successors, leave legacy messages, and create
                distribution plans that your Steward can access when needed.
              </p>
              <p>
                Share structured exports with estate attorneys to simplify the planning process.
              </p>
            </div>
            <div className="feature-section__image">Estate Preview</div>
          </div>
        </div>
      </section>

      {/* Disaster Recovery */}
      <section className="section section--white" id="disaster">
        <div className="container">
          <div className="feature-section">
            <div className="feature-section__content">
              <h3>Disaster Recovery</h3>
              <p>
                <strong>The problem:</strong> Natural disasters, fires, and floods can destroy a
                household's physical possessions in minutes. Without documentation, families struggle
                to account for what was lost.
              </p>
              <p>
                <strong>How HeirDock helps:</strong> Your household record lives securely in the cloud,
                independent of your physical home. Photos, valuations, serial numbers, and insurance
                information are all preserved and accessible from any device.
              </p>
              <p>
                Recovery starts with knowing what you had. HeirDock gives you that foundation.
              </p>
            </div>
            <div className="feature-section__image">Recovery Preview</div>
          </div>
        </div>
      </section>

      {/* Moving & Downsizing */}
      <section className="section" id="moving">
        <div className="container">
          <div className="feature-section feature-section--reverse">
            <div className="feature-section__content">
              <h3>Moving &amp; Downsizing</h3>
              <p>
                <strong>The problem:</strong> Relocating or downsizing means making decisions about
                hundreds of items. Without a clear picture of what you have and what it's worth,
                the process becomes overwhelming.
              </p>
              <p>
                <strong>How HeirDock helps:</strong> See everything you own in one organized view.
                Use valuations to decide what to keep, sell, donate, or pass on. Assign items to
                family members and track decisions clearly.
              </p>
              <p>
                Whether you're moving across the country or simplifying your home, HeirDock brings
                order to the process.
              </p>
            </div>
            <div className="feature-section__image">Moving Preview</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">Start building your household record</h2>
          <p className="cta-band__subtitle">
            Whatever your reason, HeirDock gives you clarity and control.
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
