import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://veterinariajara.es",
  output: "static",
  prefetch: true,
  redirects: {
    "/equipo/": "/sobre-nosotros/",
    // /nuestra-clinica/ y /sobre-nosotros/ eran la misma página duplicada
    // (mismo title, description, hero y cuerpo); /sobre-nosotros/ es la
    // versión completa (numerales de principios con acento, formato de
    // saltos de línea del titular) y queda como única.
    "/nuestra-clinica/": "/sobre-nosotros/",
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
