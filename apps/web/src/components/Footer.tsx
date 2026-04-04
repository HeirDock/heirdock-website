import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <img src="/heirdock-logo.png" alt="HeirDock" height="24" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p>
              HeirDock helps people bring clarity to what they own —
              creating a living record of their household assets.
            </p>
            <div className="site-footer__social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
            </div>
          </div>

          <div>
            <div className="site-footer__heading">Quick Links</div>
            <div className="site-footer__links">
              <Link to="/about">What is HeirDock?</Link>
              <Link to="/customer">For Families</Link>
              <Link to="/customer/pricing">Pricing</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/help">Help Center</Link>
            </div>
          </div>

          <div>
            <div className="site-footer__heading">Legal</div>
            <div className="site-footer__links">
              <Link to="/legal/privacy">Privacy Policy</Link>
              <Link to="/legal/terms">Terms of Service</Link>
              <Link to="/security">Data Security</Link>
              <Link to="/contact">Contact Support</Link>
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
