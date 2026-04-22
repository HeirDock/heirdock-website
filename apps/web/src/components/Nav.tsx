import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoUrl from "../assets/images/heirdock-logo.png";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav ref={navRef} className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="site-nav__logo">
          <img src={logoUrl} alt="HeirDock" style={{ height: "60px", width: "auto" }} />
        </Link>

        <div className="site-nav__links">
          <Link
            to="/about"
            className={`site-nav__link${isActive("/about") ? " site-nav__link--active" : ""}`}
          >
            What is HeirDock?
          </Link>
          <Link
            to="/partner"
            className={`site-nav__link${isActive("/partner") ? " site-nav__link--active" : ""}`}
          >
            For Professionals
          </Link>
          <Link
            to="/customer/pricing"
            className={`site-nav__link${isActive("/customer/pricing") ? " site-nav__link--active" : ""}`}
          >
            Pricing
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
          {mobileOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      <div className={`site-nav__mobile${mobileOpen ? " site-nav__mobile--open" : ""}`}>
        <Link to="/about" className="site-nav__link">What is HeirDock?</Link>
        <Link to="/customer" className="site-nav__link">For Families</Link>
        <Link to="/partner" className="site-nav__link">For Professionals</Link>
        <Link to="/customer/pricing" className="site-nav__link">Pricing</Link>
        <Link to="/faq" className="site-nav__link">FAQ</Link>
        <Link to="/contact" className="site-nav__link">Contact</Link>
        <a href="https://app.heirdock.com/login" className="btn btn--primary">Sign In</a>
      </div>
    </nav>
  );
}
