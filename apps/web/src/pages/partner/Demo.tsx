import { useRef } from "react";
import { Link } from "react-router-dom";
import { useContactForm } from "../../lib/useContactForm";

export default function Demo() {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, errorMessage, submit } = useContactForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    submit({
      formType: "demo",
      name: data.get("name") as string,
      email: data.get("email") as string,
      company: data.get("company") as string,
      role: data.get("role") as string,
      clientCount: data.get("clientCount") as string,
      message: data.get("message") as string,
      _phone: data.get("_phone") as string,
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/partner" className="page-header__back">&larr; Back to For Professionals</Link>
          <h1 className="page-header__title">Request a Demo</h1>
          <p className="page-header__subtitle">
            Schedule a personalized walkthrough of HeirDock's Partner Portal
            and see how it fits your practice.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container container--narrow">
          {status === "success" ? (
            <div className="form__message form__message--success">
              <strong>Demo request received!</strong> Thank you for your interest. A member of our
              team will be in touch within 1 business day to schedule your demo.
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="form">
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
                  placeholder="Your name" maxLength={100} />
              </div>

              <div className="form__field">
                <label htmlFor="email" className="form__label">Work Email *</label>
                <input id="email" name="email" type="email" required className="form__input"
                  placeholder="you@company.com" />
              </div>

              <div className="form__field">
                <label htmlFor="company" className="form__label">Company / Organization *</label>
                <input id="company" name="company" type="text" required className="form__input"
                  placeholder="Your company name" maxLength={200} />
              </div>

              <div className="form__field">
                <label htmlFor="role" className="form__label">Your Role / Specialty *</label>
                <select id="role" name="role" required className="form__select">
                  <option value="">Select your specialty</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Estate Planning">Estate Planning</option>
                  <option value="Financial Advisory">Financial Advisory</option>
                  <option value="Appraisal">Appraisal</option>
                  <option value="Banking / Trust">Banking / Trust</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form__field">
                <label htmlFor="clientCount" className="form__label">Number of Client Households</label>
                <select id="clientCount" name="clientCount" className="form__select">
                  <option value="">Select range</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
              </div>

              <div className="form__field">
                <label htmlFor="message" className="form__label">Message</label>
                <textarea id="message" name="message" className="form__textarea"
                  placeholder="Tell us about your practice and what you're looking for..."
                  rows={4} maxLength={5000} />
              </div>

              <button type="submit" disabled={status === "submitting"}
                className="btn btn--primary btn--lg form__submit">
                {status === "submitting" ? "Submitting..." : "Request Demo \u2192"}
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
      </section>
    </>
  );
}
