// Each legal document's HTML is its own chunk, so the text loads only on its
// own page, not with every page of the site. The prerender loads them all
// before rendering (entry-server.tsx); the browser loads the one it landed on
// before hydrating (entry-client.tsx), so the first render matches the
// prerendered page. Moving to a document by link loads it then.
const loaders = import.meta.glob<string>("./*.md", { import: "default" });

const ready = new Map<string, string>();
const pending = new Map<string, Promise<string>>();

export function loadLegalHtml(slug: string): Promise<string> {
  let promise = pending.get(slug);
  if (!promise) {
    const load = loaders[`./${slug}.md`];
    if (!load) return Promise.reject(new Error(`No legal document: ${slug}`));
    promise = load().then((html) => {
      ready.set(slug, html);
      return html;
    });
    pending.set(slug, promise);
  }
  return promise;
}

// For moving to a document by link. If its chunk can't load (a deploy since
// this tab opened renames chunks, or the connection dropped), reload: the
// address is already the document's, and the server sends it prerendered.
const navigating = new Map<string, Promise<string>>();

export function loadLegalHtmlForNavigation(slug: string): Promise<string> {
  let promise = navigating.get(slug);
  if (!promise) {
    promise = loadLegalHtml(slug).catch(() => {
      window.location.reload();
      return new Promise<string>(() => {});
    });
    navigating.set(slug, promise);
  }
  return promise;
}

export function loadedLegalHtml(slug: string): string | undefined {
  return ready.get(slug);
}

export function loadAllLegalHtml(): Promise<string[]> {
  return Promise.all(
    Object.keys(loaders).map((key) => loadLegalHtml(key.slice(2, -3))),
  );
}

// The document slug for a /legal/<slug> or /legal/<slug>/in-app path.
export function legalSlugFromPath(pathname: string): string | undefined {
  const match = /^\/legal\/([a-z-]+)(?:\/in-app)?\/?$/.exec(pathname);
  return match && `./${match[1]}.md` in loaders ? match[1] : undefined;
}

// The in-app copies are opened by the HeirDock app, which must not lead to
// prices, plans, sign-up or a demo (Google Play release rule). So from an
// in-app page a link may go only to another in-app legal page, an email
// address, status.heirdock.com, or another company's own site. Any other
// HeirDock link becomes plain text. inAppLinkAllowed is also the prerender's
// check on every in-app page (entry-server.tsx).
function isHeirDockHost(host: string): boolean {
  return host === "heirdock.com" || host.endsWith(".heirdock.com");
}

export function inAppLinkAllowed(href: string): boolean {
  if (/^(mailto:|tel:|#)/.test(href)) return true;
  if (/^\/legal\/[a-z-]+\/in-app(#.*)?$/.test(href)) return true;
  if (!/^https?:\/\//.test(href)) return false;
  const host = new URL(href).host;
  return host === "status.heirdock.com" || !isHeirDockHost(host);
}

function toInAppHref(href: string): string | undefined {
  let path = href;
  if (/^https?:\/\//.test(href)) {
    const url = new URL(href);
    if (url.host !== "heirdock.com" && url.host !== "www.heirdock.com") {
      return inAppLinkAllowed(href) ? href : undefined;
    }
    path = url.pathname + url.hash;
  }
  const legal = /^\/legal\/([a-z-]+)(#.*)?$/.exec(path);
  if (legal && `./${legal[1]}.md` in loaders) {
    return `/legal/${legal[1]}/in-app${legal[2] ?? ""}`;
  }
  return inAppLinkAllowed(path) ? path : undefined;
}

const inApp = new Map<string, string>();

export function toInAppHtml(slug: string, html: string): string {
  let result = inApp.get(slug);
  if (result === undefined) {
    result = html.replace(
      /<a href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/g,
      (_, href: string, rest: string, label: string) => {
        const target = toInAppHref(href);
        return target === undefined ? label : `<a href="${target}"${rest}>${label}</a>`;
      },
    );
    inApp.set(slug, result);
  }
  return result;
}
