import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://veterinariajara.es",
  output: "static",
  prefetch: true,
  redirects: {
    "/equipo/": "/sobre-nosotros/",
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
