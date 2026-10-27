import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoUrl from "../assets/images/heirdock-horizontal-color.svg";
import Icon from "./Icon";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const linkClass = (path: string) =>
    `site-nav__link${isActive(path) ? " site-nav__link--active" : ""}`;

  return (
    <nav ref={navRef} className="site-nav">
      <div className="container">
        <Link to="/" className="site-nav__logo">
          <img src={logoUrl} alt="HeirDock" width="173" height="38" />
        </Link>

        <div className="site-nav__links">
          <Link
            to="/customer/features"
            className={`site-nav__link${isActive("/customer/features") ? " site-nav__link--active" : ""}`}
          >
            Features
          </Link>
          <Link
            to="/customer/use-cases"
            className={`site-nav__link${isActive("/customer/use-cases") ? " site-nav__link--active" : ""}`}
          >
            Use Cases
          </Link>
          <Link
            to="/customer/pricing"
            className={`site-nav__link${isActive("/customer/pricing") ? " site-nav__link--active" : ""}`}
          >
            Pricing
          </Link>
          <Link
            to="/professional"
            className={`site-nav__link${isActive("/professional") ? " site-nav__link--active" : ""}`}
          >
            For Professionals
          </Link>
          <Link
            to="/faq"
            className={`site-nav__link${isActive("/faq") ? " site-nav__link--active" : ""}`}
          >
            FAQ
          </Link>
        </div>

        <div className="site-nav__actions">
          <a href="https://app.heirdock.com/login" className="btn btn--primary btn--sm">
            Sign In
          </a>
        </div>

        <button
          className="site-nav__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>

      <div className={`site-nav__mobile${mobileOpen ? " site-nav__mobile--open" : ""}`}>
        <Link to="/customer/features" className={linkClass("/customer/features")}>Features</Link>
        <Link to="/customer/use-cases" className={linkClass("/customer/use-cases")}>Use Cases</Link>
        <Link to="/customer/pricing" className={linkClass("/customer/pricing")}>Pricing</Link>
        <Link to="/professional" className={linkClass("/professional")}>For Professionals</Link>
        <Link to="/faq" className={linkClass("/faq")}>FAQ</Link>
        <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
        <a href="https://app.heirdock.com/login" className="btn btn--primary">Sign In</a>
      </div>
    </nav>
  );
}
