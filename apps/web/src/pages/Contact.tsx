import { useRef } from "react";
import { Link } from "react-router-dom";
import { useContactForm } from "../lib/useContactForm";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { status, errorMessage, submit, reset } = useContactForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    submit({
      formType: "contact",
      name: data.get("name") as string,
      email: data.get("email") as string,
      inquiryType: data.get("inquiryType") as string,
      message: data.get("message") as string,
      _phone: data.get("_phone") as string,
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__subtitle">
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container container--narrow">
          {status === "success" ? (
            <div className="form__message form__message--success">
              <strong>Message sent!</strong> Thank you for reaching out. We'll get back to you within
              1–2 business days.
              <div style={{ marginTop: "var(--space-lg)" }}>
                <button onClick={reset} className="btn btn--outline btn--sm">
                  Send another message
                </button>
              </div>
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
                <label htmlFor="inquiryType" className="form__label">Inquiry Type *</label>
                <select id="inquiryType" name="inquiryType" required className="form__select">
                  <option value="">Select a category</option>
                  <option value="Customer">Customer Question</option>
                  <option value="Partner">Partner Inquiry</option>
                  <option value="Press">Press / Media</option>
                  <option value="Support">Technical Support</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div className="form__field">
                <label htmlFor="message" className="form__label">Message *</label>
                <textarea id="message" name="message" required className="form__textarea"
                  placeholder="How can we help?" rows={5} maxLength={5000} />
              </div>

              <button type="submit" disabled={status === "submitting"}
                className="btn btn--primary btn--lg form__submit">
                {status === "submitting" ? "Sending..." : "Send Message \u2192"}
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

          <div style={{ marginTop: "var(--space-3xl)", paddingTop: "var(--space-2xl)", borderTop: "1px solid var(--color-border)" }}>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
              You can also reach us at{" "}
              <a href="mailto:support@heirdock.com">support@heirdock.com</a>.
              For answers to common questions, visit our{" "}
              <Link to="/faq">FAQ</Link> or{" "}
              <Link to="/help">Help Center</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
