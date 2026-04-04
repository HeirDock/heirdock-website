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
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-md)",
            background: "var(--color-success-light)",
            padding: "var(--space-lg) var(--space-2xl)",
            borderRadius: "var(--border-radius-lg)",
            marginBottom: "var(--space-2xl)",
          }}>
            <span style={{ color: "var(--color-success)", fontSize: "var(--text-2xl)" }}>&#9679;</span>
            <span style={{ fontWeight: 600, fontSize: "var(--text-xl)", color: "var(--color-success)" }}>
              All Systems Operational
            </span>
          </div>

          <div style={{ marginTop: "var(--space-2xl)" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
              textAlign: "left",
              maxWidth: "480px",
              margin: "0 auto",
            }}>
              {[
                "Web Application",
                "API Services",
                "AI Processing",
                "Database",
                "File Storage",
                "Email Delivery",
              ].map((service) => (
                <div key={service} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "var(--space-md) 0",
                  borderBottom: "1px solid var(--color-border-light)",
                }}>
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>
                    {service}
                  </span>
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-success)", fontWeight: 500 }}>
                    Operational
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ marginTop: "var(--space-3xl)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
            For urgent issues, contact <a href="mailto:support@heirdock.com">support@heirdock.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
