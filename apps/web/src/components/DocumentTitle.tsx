import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMeta } from "../pageMeta";

export default function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname];
    document.title = meta?.title ?? "HeirDock";
  }, [pathname]);

  return null;
}
