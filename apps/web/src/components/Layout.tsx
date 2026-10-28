import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import DocumentTitle from "./DocumentTitle";

// A new page starts at the top - unless the address names a section
// (/customer/use-cases#estate), in which case it lands on that section.
// Without the hash check this effect undid the browser's own jump to the
// anchor on every load and client-side navigation.
// A malformed escape in a shared link (#%E0) makes decodeURIComponent throw,
// which would unmount the whole page, so it falls back to the raw text.
function ScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // Malformed escape: keep the raw text.
      }
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollOnNavigate />
      <DocumentTitle />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
