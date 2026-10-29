import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { legalSlugFromPath, loadLegalHtml } from "./content/legal/html";
import "@fontsource-variable/inter/wght.css";
import "./styles/fonts.css";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";

function hydrate() {
  hydrateRoot(
    document.getElementById("root")!,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// A legal page's text is its own chunk: load it first, so hydration finds
// the same content the prerender wrote. If it can't load, the prerendered
// page stays as it is, readable, with plain links.
const legalSlug = legalSlugFromPath(window.location.pathname);
if (legalSlug) {
  loadLegalHtml(legalSlug).then(hydrate, () => {});
} else {
  hydrate();
}
