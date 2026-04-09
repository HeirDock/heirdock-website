const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? "";

let loadPromise: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    if (window.grecaptcha && typeof window.grecaptcha.execute === "function") {
      resolve();
      return;
    }

    if (!SITE_KEY) {
      reject(new Error("reCAPTCHA site key not configured"));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      if (window.grecaptcha?.ready) {
        window.grecaptcha.ready(() => resolve());
      } else {
        // grecaptcha loaded but .ready not available — likely a v2 key
        reject(new Error("reCAPTCHA loaded but not v3 — check that the site key is a v3 key"));
      }
    };
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

export async function getRecaptchaToken(action: string): Promise<string> {
  try {
    await loadRecaptcha();
    return await window.grecaptcha.execute(SITE_KEY, { action });
  } catch (err) {
    console.error("reCAPTCHA error:", err);
    // In staging/development, allow submission without reCAPTCHA
    const env = import.meta.env.VITE_ENVIRONMENT;
    if (env === "staging" || env === "development") {
      console.warn("reCAPTCHA failed, submitting without token (staging mode)");
      return "staging-bypass";
    }
    throw err;
  }
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
