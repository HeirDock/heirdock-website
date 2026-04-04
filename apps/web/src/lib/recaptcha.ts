const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? "";

let loadPromise: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    if (window.grecaptcha) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      window.grecaptcha.ready(() => resolve());
    };
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

export async function getRecaptchaToken(action: string): Promise<string> {
  await loadRecaptcha();
  return window.grecaptcha.execute(SITE_KEY, { action });
}

// Extend Window type for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
