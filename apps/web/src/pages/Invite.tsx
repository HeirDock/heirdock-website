import { useRef } from "react";
import { Link } from "react-router-dom";
import { useContactForm } from "../lib/useContactForm";

export default function Invite() {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, errorMessage, submit } = useContactForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    submit({
      formType: "invite",
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string || "",
      _phone: data.get("_phone") as string,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="hero hero--light">
        <div className="container">
          <h1 className="hero__title">Request Early Access</h1>
          <p className="hero__subtitle">
            HeirDock is currently available by invitation only. We're onboarding
            new households gradually to ensure the best experience for everyone.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container container--narrow">
          <div className="invite-page">
            {/* Left: Form */}
            <div className="invite-page__form-side">
              {status === "success" ? (
                <div className="form__message form__message--success">
                  <div className="invite-success__icon">&#10003;</div>
                  <strong>You're on the list!</strong>
                  <p style={{ marginTop: "var(--space-md)" }}>
                    Thank you for your interest in HeirDock. We'll reach out when
                    your invitation is ready. Keep an eye on your inbox.
                  </p>

                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="form">
                  <h2 className="invite-page__form-title">Request an Invite</h2>
                  <p className="invite-page__form-intro">
                    Tell us a little about yourself and we'll send an invitation
                    as spots open up.
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
                    <label htmlFor="name" className="form__label">Name *</label>
                    <input id="name" name="name" type="text" required className="form__input"
                      placeholder="Your name" maxLength={100} />
                  </div>

                  <div className="form__field">
                    <label htmlFor="email" className="form__label">Email *</label>
                    <input id="email" name="email" type="email" required className="form__input"
                      placeholder="you@example.com" />
                  </div>

                  <div className="form__field">
                    <label htmlFor="message" className="form__label">
                      What interests you about HeirDock? <span className="form__optional">(optional)</span>
                    </label>
                    <textarea id="message" name="message" className="form__textarea"
                      placeholder="Tell us about your household, what you'd like to organize, or how you heard about us."
                      rows={4} maxLength={2000} />
                  </div>

                  <button type="submit" disabled={status === "submitting"}
                    className="btn btn--primary btn--lg form__submit">
                    {status === "submitting" ? "Submitting..." : "Request Invite \u2192"}
                  </button>

                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
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

            {/* Right: Info sidebar */}
            <div className="invite-page__info-side">
              <div className="invite-info-card">
                <h3 className="invite-info-card__title">Why invite only?</h3>
                <p>
                  We want every household to have a great experience from day one.
                  By onboarding gradually, we can provide personalized support and
                  refine HeirDock based on real feedback.
                </p>
              </div>

              <div className="invite-info-card">
                <h3 className="invite-info-card__title">What to expect</h3>
                <ul className="invite-info-card__list">
                  <li>We review requests in the order they're received</li>
                  <li>You'll receive an email when your invite is ready</li>
                  <li>Early access includes all features at no cost during the preview</li>
                </ul>
              </div>

              <div className="invite-info-card">
                <h3 className="invite-info-card__title">Already have an invite?</h3>
                <p>
                  If you've received an invitation email, you can{" "}
                  <a href="https://app.heirdock.com/login">sign in here</a> to
                  get started.
                </p>
              </div>

              <div className="invite-info-card invite-info-card--muted">
                <p>
                  Have questions?{" "}
                  <Link to="/contact">Contact us</Link> or visit our{" "}
                  <Link to="/faq">FAQ</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
