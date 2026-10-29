/// <reference types="vite/client" />

declare const __BUILD_YEAR__: number;

// A legal document's HTML, rendered from Markdown at build time (vite.config.ts).
declare module "*.md" {
  const html: string;
  export default html;
}
