// Campaign tags a visitor arrived with (utm_source, utm_medium, utm_campaign,
// ref), kept for this tab only so links to the app can pass them on and the
// app can record where a sign-up came from. sessionStorage only: no cookies,
// no localStorage, nothing sent anywhere but on the visitor's own clicks and
// form submissions. With JS off, or storage blocked, links simply carry no tags.

export const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "ref"] as const;
type CampaignKey = (typeof CAMPAIGN_KEYS)[number];
export type Campaign = Partial<Record<CampaignKey, string>>;

export interface FirstTouch {
  // The first path this tab landed on (no query string).
  landing_path: string;
  // The first set of campaign tags seen in this tab; first touch wins.
  campaign: Campaign;
}

const STORAGE_KEY = "heirdock_first_touch";

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
}

function campaignFrom(get: (key: CampaignKey) => unknown): Campaign {
  const campaign: Campaign = {};
  for (const key of CAMPAIGN_KEYS) {
    const value = clean(get(key), 100);
    if (value) campaign[key] = value;
  }
  return campaign;
}

export function readFirstTouch(): FirstTouch | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { landing_path?: unknown; campaign?: Record<string, unknown> };
    return {
      landing_path: clean(parsed.landing_path, 200),
      campaign: campaignFrom((key) => parsed.campaign?.[key]),
    };
  } catch {
    return null;
  }
}

function writeFirstTouch(touch: FirstTouch) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(touch));
  } catch {
    // Storage blocked (private mode, site data off): links go out without tags.
  }
}

// Called once per page load, before hydration.
export function recordFirstTouch() {
  const params = new URLSearchParams(window.location.search);
  const campaign = campaignFrom((key) => params.get(key));
  const stored = readFirstTouch();
  if (!stored) {
    writeFirstTouch({ landing_path: clean(window.location.pathname, 200) || "/", campaign });
  } else if (Object.keys(stored.campaign).length === 0 && Object.keys(campaign).length > 0) {
    writeFirstTouch({ ...stored, campaign });
  }
}

// An app.heirdock.com URL with this tab's campaign tags added (only the four
// keys, URL-encoded). Any other URL is returned unchanged.
export function withCampaign(url: string): string {
  const touch = typeof window === "undefined" ? null : readFirstTouch();
  if (!touch || Object.keys(touch.campaign).length === 0) return url;
  try {
    const target = new URL(url);
    if (target.hostname !== "app.heirdock.com") return url;
    for (const key of CAMPAIGN_KEYS) {
      const value = touch.campaign[key];
      if (value) target.searchParams.set(key, value);
    }
    return target.toString();
  } catch {
    return url;
  }
}
