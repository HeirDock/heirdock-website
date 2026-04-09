export default function Security() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Security &amp; Privacy</h1>
          <p className="page-header__subtitle">
            Your data is sensitive. We treat it that way.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__icon">&#128274;</div>
              <div className="feature-card__title">End-to-end encryption</div>
              <p className="feature-card__description">
                All data - at rest and in transit. Vault documents are individually
                encrypted with dedicated keys for an additional layer of protection.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128101;</div>
              <div className="feature-card__title">Access Control</div>
              <p className="feature-card__description">
                Strict data isolation ensures households can only access their own information.
                Role-based permissions let you control exactly what each family member, executor,
                or advisor can see and do.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128221;</div>
              <div className="feature-card__title">Audit logging</div>
              <p className="feature-card__description">
                All sensitive operations are logged to an append-only audit trail.
                State changes, access events, and data exports are tracked for
                compliance and accountability.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128170;</div>
              <div className="feature-card__title">Built on SOC 2 principles</div>
              <p className="feature-card__description">
                HeirDock is designed with SOC 2 Type II principles in mind - covering Security,
                Availability, and Confidentiality trust criteria. Compliance is built into
                our infrastructure and processes from day one.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#127760;</div>
              <div className="feature-card__title">Privacy by design</div>
              <p className="feature-card__description">
                Our platform is built with GDPR and CCPA principles in mind - including
                data export, correction, and deletion. Partners only access information
                with explicit household approval.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128736;</div>
              <div className="feature-card__title">Infrastructure Security</div>
              <p className="feature-card__description">
                Hosted on secure cloud infrastructure with layered defenses - threat detection,
                traffic protection, credential protection, and audit logging. Every deployment
                is automatically scanned for vulnerabilities.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#9889;</div>
              <div className="feature-card__title">Availability</div>
              <p className="feature-card__description">
                Built for reliability with redundant infrastructure, automated failover,
                and continuous monitoring to keep your data accessible when you need it.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#129302;</div>
              <div className="feature-card__title">Responsible AI</div>
              <p className="feature-card__description">
                AI features like identification and valuation run in isolated, secure environments.
                Your data is never used to train models and is not shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="section section--white">
        <div className="container container--narrow text-center">
          <h2 className="section__title">Your data, your control</h2>
          <p style={{ fontSize: "var(--text-md)", color: "var(--color-text-secondary)", marginTop: "var(--space-lg)" }}>
            HeirDock is built on a principle of household sovereignty. You own your data.
            You control who sees it. You can export or delete it at any time.
            We never sell your information and never share it without your explicit consent.
          </p>
        </div>
      </section>
    </>
  );
}
