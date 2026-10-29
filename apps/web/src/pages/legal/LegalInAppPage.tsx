import { Suspense, use } from "react";
import DocumentTitle from "../../components/DocumentTitle";
import logoUrl from "../../assets/images/heirdock-horizontal-color.svg";
import { formatLegalDate, type LegalDocument } from "../../content/legal";
import { loadedLegalHtml, loadLegalHtmlForNavigation, toInAppHtml } from "../../content/legal/html";

function LegalBody({ slug }: { slug: string }) {
  const html = loadedLegalHtml(slug) ?? use(loadLegalHtmlForNavigation(slug));
  // Our own Markdown, rendered at build time; links limited for the app.
  return <div dangerouslySetInnerHTML={{ __html: toInAppHtml(slug, html) }} />;
}

// /legal/<slug>/in-app: the document alone, for the HeirDock app's in-app
// browser. No site header, footer or "Legal" link, and the wordmark is not a
// link: nothing here leads to prices, plans, sign-up or a demo.
export default function LegalInAppPage({ doc }: { doc: LegalDocument }) {
  return (
    <main className="legal-in-app">
      <DocumentTitle />
      <section className="section">
        <div className="container container--narrow legal-content">
          <img className="legal-in-app__logo" src={logoUrl} alt="HeirDock" width="173" height="38" />
          <h1>{doc.title}</h1>
          <p className="legal-content__updated">
            Last updated {formatLegalDate(doc.lastUpdated)}
          </p>
          <Suspense fallback={null}>
            <LegalBody slug={doc.slug} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
