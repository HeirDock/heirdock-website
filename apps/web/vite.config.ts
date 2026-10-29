import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { Marked } from "marked";
import path from "path";

// Legal documents are Markdown (src/content/legal), so counsel's edits drop in
// as text. An import of a .md file gives its HTML, rendered here at build
// time: no Markdown parser ships to the browser. Headings get ids so sections
// can be linked; links off the site open in a new tab. A single line break is
// kept (the postal address blocks).
function legalMarkdown(): Plugin {
  const marked = new Marked({
    breaks: true,
    renderer: {
      heading({ tokens, depth, text }) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>
`;
      },
      link({ href, tokens }) {
        const label = this.parser.parseInline(tokens);
        if (/^https?:/.test(href)) {
          return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
        }
        return `<a href="${href}">${label}</a>`;
      },
    },
  });
  return {
    name: "legal-markdown",
    transform(source, id) {
      if (!id.endsWith(".md")) return null;
      const html = marked.parse(source, { async: false });
      return { code: `export default ${JSON.stringify(html)};`, map: null };
    },
  };
}

export default defineConfig({
  plugins: [react(), legalMarkdown()],
  // Fixed at build time so the prerendered footer and the hydrated one agree;
  // a runtime new Date() would mismatch after New Year until the next build.
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  resolve: {
    alias: {
      components: path.resolve(import.meta.dirname, "src/components"),
      styles: path.resolve(import.meta.dirname, "src/styles"),
      assets: path.resolve(import.meta.dirname, "src/assets"),
      pages: path.resolve(import.meta.dirname, "src/pages"),
    },
  },
  server: {
    port: 3006,
  },
  envPrefix: "VITE_",
});
