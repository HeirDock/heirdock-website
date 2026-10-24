import { useRef } from "react";
import { Link } from "react-router-dom";
import { useContactForm } from "../../lib/useContactForm";
import Icon from "../../components/Icon";

// The professional counterpart of /invite: a practice asks for access to the
// Partner Portal. Practice types match the app's six professional types.
export default function RequestAccess() {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, errorMessage, submit } = useContactForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    submit({
      formType: "access",
      name: data.get("name") as string,
      email: data.get("email") as string,
      company: data.get("company") as string,
      role: data.get("role") as string,
      clientCount: data.get("clientCount") as string,
      message: data.get("message") as string || "",
      _phone: data.get("_phone") as string,
    });
  };

  return (
    <>
      <section className="hero hero--light">
        <div className="container">
          <h1 className="hero__title">Request Access for Your Practice</h1>
          <p className="hero__subtitle">
            HeirDock welcomes professionals by invitation. Tell us about your practice, and
            we&apos;ll be in touch to set up your Partner Portal.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container container--narrow">
          <div className="invite-page">
            <div className="invite-page__form-side">
              {status === "success" ? (
                <div className="form__message form__message--success">
                  <div className="invite-success__icon"><Icon name="check" /></div>
                  <strong>Request received.</strong>
                  <p className="mt-md">
                    Thank you for your interest in HeirDock. We&apos;ll be in touch about setting
                    up your practice. Keep an eye on your inbox.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="form">
                  <h2 className="invite-page__form-title">About your practice</h2>
                  <p className="invite-page__form-intro">
                    A few details help us set up the right workspace for you.
                  </p>

                  {/* Honeypot */}
                  <div className="form__honeypot" aria-hidden="true">
                    <label htmlFor="_phone">Phone</label>
                    <input type="text" id="_phone" name="_phone" tabIndex={-1} autoComplete="off" />
                  </div>

                  {errorMessage && (
                    <div className="form__message form__message--error">{errorMessage}</div>
                  )}

                  <div className="form__field">
                    <label htmlFor="name" className="form__label">Full Name *</label>
                    <input id="name" name="name" type="text" required className="form__input"
                      placeholder="Your name" maxLength={100} autoComplete="name" />
                  </div>

                  <div className="form__field">
                    <label htmlFor="email" className="form__label">Work Email *</label>
                    <input id="email" name="email" type="email" required className="form__input"
                      placeholder="you@yourpractice.com" autoComplete="email" />
                  </div>

                  <div className="form__field">
                    <label htmlFor="company" className="form__label">Practice or Firm *</label>
                    <input id="company" name="company" type="text" required className="form__input"
                      placeholder="Your practice's name" maxLength={200} autoComplete="organization" />
                  </div>

                  <div className="form__field">
                    <label htmlFor="role" className="form__label">Type of Practice *</label>
                    <select id="role" name="role" required className="form__select">
                      <option value="">Select your practice type</option>
                      <option value="Insurance">Insurance</option>
                      <option value="Estate Planning">Estate Planning</option>
                      <option value="Appraisal">Appraisal</option>
                      <option value="Wealth & Banking">Wealth &amp; Banking</option>
                      <option value="Corporate Trustee">Corporate Trustee</option>
                      <option value="Property Manager">Property Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form__field">
                    <label htmlFor="clientCount" className="form__label">
                      Number of Client Households <span className="form__optional">(optional)</span>
                    </label>
                    <select id="clientCount" name="clientCount" className="form__select">
                      <option value="">Select range</option>
                      <option value="1-10">1–10</option>
                      <option value="11-50">11–50</option>
                      <option value="51-200">51–200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>

                  <div className="form__field">
                    <label htmlFor="message" className="form__label">
                      Anything we should know? <span className="form__optional">(optional)</span>
                    </label>
                    <textarea id="message" name="message" className="form__textarea"
                      placeholder="How you'd like to work with your clients' household records, or how you heard about us."
                      rows={4} maxLength={2000} />
                  </div>

                  <button type="submit" disabled={status === "submitting"}
                    className="btn btn--primary btn--lg form__submit">
                    {status === "submitting" ? "Submitting..." : <>Request Access <Icon name="arrowForward" /></>}
                  </button>

                  <p className="fine-print">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>{" "}and{" "}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                      Terms of Service
                    </a>{" "}apply.
                  </p>
                </form>
              )}
            </div>

            <div className="invite-page__info-side">
              <div className="invite-info-card">
                <h3 className="invite-info-card__title">What happens next</h3>
                <ul className="invite-info-card__list">
                  <li>We review every practice before it connects with clients</li>
                  <li>You&apos;ll receive an invitation to set up your Partner Portal</li>
                  <li>Then invite clients in your practice&apos;s name</li>
                </ul>
              </div>

              <div className="invite-info-card">
                <h3 className="invite-info-card__title">Prefer a walkthrough first?</h3>
                <p>
                  <Link to="/professional/demo">Request a demo</Link> and we&apos;ll show you the
                  Partner Portal with a sample client.
                </p>
              </div>

              <div className="invite-info-card invite-info-card--muted">
                <p>
                  Have questions? See the{" "}
                  <Link to="/faq#practice">FAQ for professionals</Link> or{" "}
                  <Link to="/contact">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
