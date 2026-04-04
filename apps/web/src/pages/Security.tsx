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
              <div className="feature-card__title">Encryption at rest &amp; in transit</div>
              <p className="feature-card__description">
                All data is encrypted using industry-standard AES-256 encryption at rest
                and TLS 1.2+ in transit. Vault documents use per-document encryption keys
                managed by AWS KMS.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128101;</div>
              <div className="feature-card__title">Access control</div>
              <p className="feature-card__description">
                Row-Level Security (RLS) enforced at the database level ensures every query
                is scoped to the correct household. Role-based access controls (RBAC) govern
                what each participant can see and do.
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
              <div className="feature-card__title">SOC 2 Type II roadmap</div>
              <p className="feature-card__description">
                HeirDock is building toward SOC 2 Type II certification covering Security,
                Availability, and Confidentiality trust criteria. Our infrastructure and
                processes are designed with compliance in mind from day one.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#127760;</div>
              <div className="feature-card__title">GDPR &amp; CCPA compliance</div>
              <p className="feature-card__description">
                We respect data rights. Users can export, correct, and delete their data.
                Consent-based sharing ensures partners only access information with explicit
                household approval.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#128736;</div>
              <div className="feature-card__title">Infrastructure security</div>
              <p className="feature-card__description">
                Hosted on AWS with WAF, Shield, GuardDuty, and CloudTrail. Secrets managed
                via AWS Secrets Manager. No credentials hardcoded, ever. Automated vulnerability
                scanning on every deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Classification */}
      <section className="section">
        <div className="container container--narrow">
          <h2 className="section__title">How we classify your data</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)", marginTop: "var(--space-2xl)" }}>
            <div className="diff-card">
              <div className="diff-card__label">Confidential</div>
              <div className="diff-card__statement">
                Personal information, item details, addresses — protected by RLS, encryption, and audit logging. No PII in application logs.
              </div>
            </div>
            <div className="diff-card">
              <div className="diff-card__label">Restricted</div>
              <div className="diff-card__statement">
                Vault documents, financial data, insurance policies — application-layer AES-256 encryption with per-document KMS keys and full audit trail.
              </div>
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
