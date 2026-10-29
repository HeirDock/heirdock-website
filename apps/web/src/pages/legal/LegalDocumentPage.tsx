import { Suspense, use } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import { formatLegalDate, type LegalDocument } from "../../content/legal";
import { loadedLegalHtml, loadLegalHtmlForNavigation } from "../../content/legal/html";

function LegalBody({ slug }: { slug: string }) {
  const html = loadedLegalHtml(slug) ?? use(loadLegalHtmlForNavigation(slug));
  // Our own Markdown, rendered to HTML at build time (vite.config.ts).
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function LegalDocumentPage({ doc }: { doc: LegalDocument }) {
  return (
    <section className="section">
      <div className="container container--narrow legal-content">
        <Link to="/legal" className="legal-content__back">
          <Icon name="arrowBack" /> Legal
        </Link>
        <h1>{doc.title}</h1>
        <p className="legal-content__updated">
          Last updated {formatLegalDate(doc.lastUpdated)}
        </p>
        <Suspense fallback={null}>
          <LegalBody slug={doc.slug} />
        </Suspense>
      </div>
    </section>
  );
}
