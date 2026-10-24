import { Link } from "react-router-dom";
import logoDarkUrl from "../assets/images/heirdock-horizontal-reverse.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <img src={logoDarkUrl} alt="HeirDock" width="215" height="50" />
            </div>
            <p>
              HeirDock helps people bring clarity to what they own, creating a living
              record of their household assets.
            </p>
          </div>

          <div>
            <div className="site-footer__heading">Product</div>
            <div className="site-footer__links">
              <Link to="/customer/features">Features</Link>
              <Link to="/customer/use-cases">Use Cases</Link>
              <Link to="/customer/pricing">Pricing</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div>
            <div className="site-footer__heading">For Professionals</div>
            <div className="site-footer__links">
              <Link to="/professional">Overview</Link>
              <Link to="/professional/features">Partner Features</Link>
              <Link to="/professional/pricing">Partner Pricing</Link>
              <Link to="/professional/demo">Request a Demo</Link>
            </div>
          </div>

          <div>
            <div className="site-footer__heading">Company</div>
            <div className="site-footer__links">
              <Link to="/contact">Contact Us</Link>
              <Link to="/security">Data Security</Link>
              <a href="https://status.heirdock.com" target="_blank" rel="noopener noreferrer">System Status</a>
              <Link to="/legal/privacy">Privacy Policy</Link>
              <Link to="/legal/terms">Terms of Use</Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          &copy; {__BUILD_YEAR__} HeirDock, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
