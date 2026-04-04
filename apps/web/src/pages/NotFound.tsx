import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>404</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

