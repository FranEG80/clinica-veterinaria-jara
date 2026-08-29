# Datos de la web

Esta carpeta contiene una instantánea portable del contenido que actualmente usa el frontend de Clínica Veterinaria Jara. Está pensada como respaldo y como base para sustituir WordPress en el futuro sin tener que reconstruir la información desde los componentes Astro.

## Archivo principal

- `site-content.json`: contenido normalizado de la web: identidad, navegación, contacto, páginas editoriales, servicios, equipo, medios y artículos de muestra.
- `wordpress-seo.json`: instantánea de SEO de WordPress; la home se mantiene sincronizada con los metadatos que renderiza el frontend.

## Origen

- Generado el 2026-08-29.
- Los servicios, equipo, contacto, textos editoriales y URLs de imágenes se han extraído del estado actual del frontend.
- Los artículos incluidos están marcados como `isDemo: true`, porque son los posts de muestra que existen actualmente en el código.
- La exportación de los posts y páginas reales de WordPress queda pendiente de ejecutar desde un entorno con acceso al endpoint `https://veterinariajara.es/wp-json/wp/v2`.

## Migración futura

El objeto `contentModel` documenta las colecciones y campos necesarios para que este archivo pueda convertirse en la fuente de datos local, en un CMS diferente o en una API propia. Las imágenes siguen siendo URLs remotas para no duplicar binarios dentro del repositorio.
