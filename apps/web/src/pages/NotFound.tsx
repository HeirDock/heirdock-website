import { Link } from "react-router-dom";
import Drawing from "../components/Drawing";

export default function NotFound() {
  return (
    <>
      <section className="section">
        <div className="container text-center">
          <div className="not-found__drawing">
            <Drawing name="lantern" />
          </div>
          <span className="eyebrow">404</span>
          <h1 className="section__title">We couldn&apos;t find that page</h1>
          <p className="section__subtitle">
            It may have moved, or the link may have a typo. Let&apos;s get you back on your way.
          </p>
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
