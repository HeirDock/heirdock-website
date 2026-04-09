import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    if (document.getElementById("termly-jssdk")) return;
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
            data-id="fb82e870-699b-4796-b37b-593c93adcd9d"
            {...{ name: "termly-embed" }}
          />
        </div>
      </section>
    </>
  );
}

