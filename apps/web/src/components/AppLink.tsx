import { useSyncExternalStore, type AnchorHTMLAttributes } from "react";
import { withCampaign } from "../lib/campaign";

const subscribe = () => () => {};

// A link to app.heirdock.com. The prerendered HTML (and hydration) keep the
// plain href, so it works with JS off; once hydrated, the href carries the
// campaign tags this tab arrived with (see lib/campaign.ts).
export default function AppLink({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const url = useSyncExternalStore(subscribe, () => withCampaign(href), () => href);
  return <a href={url} {...rest} />;
}
