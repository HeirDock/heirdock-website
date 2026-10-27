import Drawing from "../components/Drawing";
import Icon from "../components/Icon";

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
              <div className="feature-card__icon"><Icon name="lock" /></div>
              <div className="feature-card__title">Encryption</div>
              <p className="feature-card__description">
                All data is encrypted in transit and at rest. Vault documents are individually
                encrypted with dedicated keys for an additional layer of protection.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="group" /></div>
              <div className="feature-card__title">Access Control</div>
              <p className="feature-card__description">
                Strict data isolation ensures households can only access their own information.
                Role-based permissions let you control exactly what each family member, executor,
                or advisor can see and do.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="shield" /></div>
              <div className="feature-card__title">Account protection</div>
              <p className="feature-card__description">
                Multi-factor authentication, an optional extra check before Vault documents open, and a
                list of signed-in devices you can sign out of at any time. Vault uploads are scanned
                for malware, and location data is removed from your photos.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="editNote" /></div>
              <div className="feature-card__title">Audit logging</div>
              <p className="feature-card__description">
                All sensitive operations are logged to an append-only audit trail.
                State changes, access events, and data exports are tracked for
                compliance and accountability.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="verifiedUser" /></div>
              <div className="feature-card__title">Built on SOC 2 principles</div>
              <p className="feature-card__description">
                HeirDock is designed with SOC 2 Type II principles in mind - covering Security,
                Availability, and Confidentiality trust criteria. Compliance is built into
                our infrastructure and processes from day one.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="public" /></div>
              <div className="feature-card__title">Privacy by design</div>
              <p className="feature-card__description">
                Our platform is built with GDPR and CCPA principles in mind - including
                data export, correction, and deletion of your account. Professionals only
                see what you choose to share, for as long as you choose.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="build" /></div>
              <div className="feature-card__title">Infrastructure Security</div>
              <p className="feature-card__description">
                Hosted on secure cloud infrastructure with layered defenses - threat detection,
                traffic protection, and credential protection. Every deployment is scanned for
                vulnerabilities, and redundant systems with continuous monitoring keep your
                records available when you need them.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon"><Icon name="smartToy" /></div>
              <div className="feature-card__title">Responsible AI</div>
              <p className="feature-card__description">
                Identification and valuation run in isolated, secure environments.
                Your data is never used to train models, never sold, and shared only with the
                service providers that help run HeirDock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="section section--white">
        <div className="container">
          <div className="story-band__inner">
            <div className="story-band__drawing">
              <Drawing name="strongbox" />
            </div>
            <div className="story-band__text">
              <h2>Your data, your control</h2>
              <p className="mt-md">
                HeirDock is built on a principle of household sovereignty. You own your data.
                You control who sees it. You can export or delete it at any time.
                We never sell your information, and family members and professionals see only
                what you choose to share.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
