import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    const existing = document.getElementById("termly-jssdk");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "termly-jssdk";
    script.src = "https://app.termly.io/embed-policy.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <section className="section">
        <div className="container container--narrow">
          <div
            data-id="951fb2b1-3132-407e-87ac-3a48a5082247"
            {...{ name: "termly-embed" }}
          />
        </div>
      </section>
    </>
  );
}

