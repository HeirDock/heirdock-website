import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
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
