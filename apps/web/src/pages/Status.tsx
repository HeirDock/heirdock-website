import { Link } from "react-router-dom";

export default function Status() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">System Status</h1>
          <p className="page-header__subtitle">
            Current operational status of HeirDock services.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container container--narrow text-center">
          <div className="status-banner">
            <span className="status-banner__dot" aria-hidden="true" />
            <span className="status-banner__text">All Systems Operational</span>
          </div>

          <div className="status-list">
            {[
              "Web Application",
              "API Services",
              "AI Processing",
              "Database",
              "File Storage",
              "Email Delivery",
            ].map((service) => (
              <div key={service} className="status-list__row">
                <span className="status-list__name">{service}</span>
                <span className="status-list__state">Operational</span>
              </div>
            ))}
          </div>

          <p className="mt-3xl text-sm text-muted">
            For urgent issues, please use our <Link to="/contact">contact form</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
