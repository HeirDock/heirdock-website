import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import { legalDocuments, type LegalGroup } from "../../content/legal";

const GROUPS: LegalGroup[] = ["Terms", "Policies"];

export default function LegalHub() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Legal</h1>
          <p className="page-header__subtitle">
            One set of terms and policies covers the HeirDock website, the web
            app and the HeirDock app for Android. Questions? Write to{" "}
            <a href="mailto:legal@heirdock.com">legal@heirdock.com</a>.
          </p>
        </div>
      </section>

      <section className="section section--sm legal-hub">
        <div className="container container--narrow">
          {GROUPS.map((group) => (
            <div key={group} className="legal-hub__group">
              <h2 className="legal-hub__heading">{group}</h2>
              <ul className="legal-hub__list">
                {legalDocuments
                  .filter((doc) => doc.group === group)
                  .map((doc) => (
                    <li key={doc.slug}>
                      <Link to={`/legal/${doc.slug}`} className="legal-hub__card card--link">
                        <span>
                          <span className="legal-hub__title">{doc.title}</span>
                          <span className="legal-hub__summary">{doc.summary}</span>
                        </span>
                        <Icon name="chevronRight" className="card__chevron" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
