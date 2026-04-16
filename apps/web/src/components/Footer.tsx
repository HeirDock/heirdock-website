import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <img src="/heirdock-logo-dark.png" alt="HeirDock" height="60" style={{ width: "auto" }} />
            </div>
            <p>
              HeirDock helps people bring clarity to what they own -
              creating a living record of their household assets.
            </p>
          </div>

          <div>
            <div className="site-footer__links">
              <Link to="/about">What is HeirDock?</Link>
              <Link to="/customer">For Families</Link>
              <Link to="/customer/pricing">Pricing</Link>
              <Link to="/faq">FAQ</Link>
              <a href="https://support.heirdock.com" target="_blank" rel="noopener noreferrer">Support Center</a>
            </div>
          </div>

          <div>
            <div className="site-footer__links">
              <Link to="/legal/privacy">Privacy Policy</Link>
              <Link to="/legal/terms">Terms of Use</Link>
              <Link to="/security">Data Security</Link>
              <a href="https://status.heirdock.com" target="_blank" rel="noopener noreferrer">System Status</a>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          &copy; {new Date().getFullYear()} HeirDock, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
