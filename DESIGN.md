# Sistema de diseño · Clínica Veterinaria Jara

Documento de referencia del estado implementado. La fuente visual de dirección es Órbita Jara, con la composición aprobada A: `.impeccable/mocks/orbita-jara-a.png` (collage orbital). La alternativa Atlas Jara está preservada, sin ser la dirección activa, en `.impeccable/alternates/atlas-jara`.

## Dirección visual

Órbita Jara presenta la clínica como un sistema vivo de espacios conectados alrededor del paciente. La portada combina un campo claro, titular monumental a la izquierda y un collage clínico a la derecha: fotografía real de WordPress, ventanas irregulares, capas acrílicas translúcidas y líneas orbitales finas con nodos de color. La composición aprobada A gobierna el hero y se traduce en móvil como una pila deliberada, nunca como un desktop comprimido.

Materiales y reglas: collage fotográfico real, acrílico translúcido, líneas cromadas de 1 px, mucho espacio negativo y separación mediante líneas o aire. Las ventanas de imagen usan radio de 14 px; los controles compactos, 8 px; no se usan tarjetas-píldora. La única elevación destacada es la sombra del stage fotográfico; no se combinan borde y sombra en la misma superficie. Fuera del hero no hay círculos decorativos: la navegación de servicios usa un marcador romboidal alineado con el título y las galerías usan retículas rectangulares.

## Tipografía

- **Barlow Condensed** (self-hosted, variable): display, titulares estrechos, pesados y en mayúsculas; se usa para la voz arquitectónica y los grandes índices.
- **Bricolage Grotesque** (self-hosted, variable): cuerpo, navegación, controles y lectura editorial.
- El cuerpo parte de 16 px con `line-height: 1.55`; los teléfonos usan numerales tabulares (`.tabular`). No sustituir por Inter, Arial o Roboto.

### Énfasis por cambio de voz en titulares

Un fragmento del titular puede salir del registro arquitectónico (Barlow Condensed, mayúsculas, tinta) y entrar en el registro humano: se marca con `<i>` y la hoja de estilo lo convierte en Bricolage Grotesque, minúsculas y color de acento. No es cursiva: `font-style` se anula. El mecanismo nació en `.blog-masthead h1 i` y se extiende a `.page-hero h1`, `.story-heading h2`, `.services-heading h2`, `.team-heading h2` y `.principles-heading h2`.

No basta con cambiar la voz: la palabra tiene que **integrarse en el lockup**, o se lee como un parche pegado. Cuatro condiciones:

1. **Mismo cuerpo que las mayúsculas** (`font-size: 1em`). A cuerpo reducido la palabra se lee como pie de foto, no como parte del titular.
2. **Interlineado apretado**: `line-height: 0.7`, la densidad del blog. Las líneas se rozan y la palabra en acento puede solaparse un poco con las mayúsculas de arriba; ese solape es el efecto, no un defecto.
3. La palabra es `inline-block` con `line-height: 1` y kerning óptico `margin-inline: -0.03em`, que compensa el espacio de Barlow a cuerpo de titular (~0,22 em, un abismo en condensada).
4. **Su posición se decide en el marcado, con `<br />` explícitos.** Nunca se deja al wrap automático.

Dos colocaciones, distinguidas por clase explícita — no por selectores de hermano: `br + i` **no sirve**, porque los combinadores de hermanos ignoran los nodos de texto y `…<br />El <i>cuidado</i>` matchearía igual.

- **`<i>` a secas** — comparte línea con mayúsculas: `Estamos <i>cerca</i><br />cuando nos necesite.`
- **`<i class="solo">`** — ocupa su propia línea, siempre la última: `Capacidad clínica para<br /><i class="solo">cuidar mejor.</i>`. Se sangra `0.9ch` y recorta `-0.06em` por abajo para no colgar del bloque.

Lo que no vale: palabra sola en una línea intermedia. Si el texto lo pide, se reescriben los `<br />`.

En `.page-hero h1` con acento el cuerpo baja a `clamp(3.4rem, 5.2vw, 5.4rem)`. La columna del hero mide ~446 px en 1440 px, y a 86 px apenas entraban dos palabras por línea: los titulares se partían en huérfanas.

El color sale de `--accent-voice`, que acompaña a `--active-accent` en cada bloque `[data-accent]`. Siempre usa la variante `-deep`: sobre `--ground`, los acentos puros dan 1,6:1 (lima), 2,7:1 (coral y cyan) y 3,1:1 (naranja) y no cumplen WCAG como texto; las variantes `-deep` van de 3,9:1 a 4,8:1.

Reglas de uso:

- Solo un titular tratado por bloque; los `h3`, el cierre de contacto (`.contact-copy h2`) y las fichas de servicio quedan en tinta pura.
- De una a tres palabras, y que carguen sentido. Nunca conectores.
- Un solo color por titular. En portada cada sección hereda el color de la página a la que enlaza: historia coral, servicios lima, equipo cyan. En `/nuestra-clinica/`, principios coral (`entender`, `explicar`) y equipo cyan (`conocen`).
- `.principles-heading` apila kicker sobre titular y va a bandera izquierda, como `.team-heading`. Antes era una rejilla `0.55fr 1.45fr` que sangraba el titular y lo dejaba fuera del sistema; ahora comparte grupo tipográfico con `.story-heading h2` y compañía.
- El fragmento en Bricolage ocupa más ancho por carácter: revisar el número de líneas y los `<br />` cada vez que se cambia el copy.

Acentos por página: `/nuestra-clinica/` coral (`acompañan.`, `<i class="solo">`), `/sobre-nosotros/` coral (`acompañan.`, mismo titular que `/nuestra-clinica/`), `/nuestros-servicios/` lima (`cuidar mejor.`, `<i class="solo">`), `/galeria-de-mascotas/` coral (`centro`), `/contacto/` naranja (`cerca`), `/blog/` coral (`también`). La portada no trata su `h1`: la composición A del hero se mantiene intacta.

## Tokens actuales

```css
--ground: #fcfcfc;
--surface: #f2f4f2;
--ink: #100f0f;
--ink-soft: #4a433c;
--line: rgba(16, 15, 15, 0.16);
--lime: #b6d92c;
--lime-deep: #6b8a10;    /* variante legible como texto */
--coral: #f2716e;
--coral-deep: #d1504d;
--cyan: #4da8c2;
--cyan-deep: #2c7d95;
--orange: #e17226;
--orange-deep: #c25f14;
--violet-source: #957396; /* color fotográfico, no token de UI */
--radius: 14px;
--header-height: 72px; /* 68 px hasta 1023 px */
--shadow-stage: 0 30px 80px rgba(78, 67, 63, 0.16);
```

La composición de referencia muestrea `#FCFCFC`, `#100F0F`, `#F2716E`, `#4DA8C2`, `#E17226` y un lima aproximado `#C7AE50`; la implementación usa `--lime: #B6D92C` para interacción y señales. La paleta de acento se asigna por servicio: lima, coral, cyan y naranja.

El ritmo espacial se expresa con `clamp()`, `min()`, `gap`, `padding-block` y una anchura máxima de shell de 1440 px (`width: min(100% - 48px, 1440px)`). No existe una escala de spacing CSS formalizada: conservar la lógica de ritmo por secciones y los valores explícitos existentes antes de introducir nuevos tokens.

## Arquitectura multipágina y rutas

Astro genera páginas estáticas desde `src/pages`; los componentes compartidos viven en `src/components`, el layout en `src/layouts/BaseLayout.astro`, y el estilo global en `src/styles/global.css`.

- `/` — portada Órbita Jara: hero, historia, servicios, equipo y contacto.
- `/sobre-nosotros/` — historia, instalaciones y equipo; no repite el titular editorial de la portada dentro del primer bloque.
- `/nuestros-servicios/` — índice de servicios con copy como protagonista y un preview fotográfico grande que cambia al pasar por cada servicio; las galerías bento viven dentro de cada detalle.
- `/servicios/[slug]/` — familia dinámica de detalle de servicios.
- `/[slug]/` — ruta dinámica legacy que también genera los slugs de servicio originales.
- `/equipo/` — profesionales.
- `/galeria-de-mascotas/` — galería.
- `/contacto/` — citas, urgencias, email, dirección y mapa.
- `/blog/` — índice editorial headless.
- `/blog/[slug]/` — detalle de post.
- `/politica-de-cookies-ue/` y `/terminos-y-condiciones/` — páginas legales desde WordPress.

La navegación principal enlaza inicio, clínica, servicios, equipo y contacto; el header sticky mide 72 px en desktop y 68 px en tablet/móvil. En móvil se reemplaza por navegación desplegable y CTA de cita.

### Tratamiento editorial de Equipo y Blog

La página de equipo no reutiliza el rail horizontal de portada. Usa `TeamPortraits.astro`: una retícula editorial de 12 columnas con seis retratos, escalas, proporciones y offsets distintos. `TeamRail.astro` continúa siendo el resumen compacto de la home y de la página de clínica.

En escritorio (≥1024 px) los seis retratos se reparten en **dos filas asimétricas que alternan lado**: la fila 1 ocupa las columnas 1–8 y deja aire en 9–12; la fila 2 ocupa las columnas 5–12 y deja aire en 1–4. El vacío alternado es el recurso compositivo — no se rellena con contenido. Dentro de cada banda los tres retratos conservan anchuras distintas (3+3+2 columnas), proporciones distintas (`4/5`, `3/4`, `2/3`) y desfases verticales (`--portrait-shift`). El `row-gap` va en `clamp(100px, 9vw, 150px)` porque los desfases son `transform` y no cuentan para la altura de la fila.

Por debajo de 1024 px la retícula vuelve a `flex` en filas de tres, y en móvil a secuencia vertical con anchuras alternas, sin scroll horizontal.

`/blog/` tiene una cabecera propia basada en tipografía monumental y un recorte fotográfico real; no usa órbitas circulares decorativas. El primer artículo se presenta como portada superpuesta y el resto forma un archivo numerado con filas asimétricas. `/blog/[slug]/` usa cabecera art-directed, tiempo de lectura calculado desde el contenido, imagen de portada desplazada, rail editorial lateral y una columna de lectura con estilos específicos para titulares, listas, citas e imágenes de WordPress.

## WordPress headless y contenido de muestra

WordPress continúa siendo el CMS en `https://veterinariajara.es/wp-json/wp/v2`, configurable mediante `WP_API_URL`. En cada build se solicitan páginas, medios, posts y categorías (`per_page=100`) y se crean mapas por slug/id. `getClinicContent()` memoiza la consulta y marca `isLive`.

Si la REST API falla, el build no se rompe: usa contenido estructural y medios fallback verificados, con URLs de uploads conocidas. Los HTML recibidos pasan por `safeWordPressHtml`; se eliminan bloques `style/script`, comentarios de plantilla, atributos inline y handlers antes de renderizar. El texto visible se normaliza con `plainText`, que comparte la limpieza para evitar que CSS heredado o nombres de funciones aparezcan como copy.

Si la API responde sin entradas, `getBlogPosts()` devuelve exactamente dos posts demo (`isDemo: true`). El índice los etiqueta **Contenido de muestra** y sus páginas funcionan como posts normales para poder revisar el diseño. En cuanto WordPress devuelve al menos un post real, los demos desaparecen automáticamente y solo se muestran los posts reales.

## Motion

El movimiento explica recorrido y relación espacial. El hero actualiza parallax con el puntero solo en dispositivos con `(hover: hover) and (pointer: fine)` y desplaza capas/acrílicos y líneas orbitales también según scroll. El explorador de servicios cambia imagen, título y resumen con una transición acotada; la transición de preview es de 220 ms en CSS, con un cambio de estado JS de 110 ms. Los bloques `.reveal-block` aparecen mediante `IntersectionObserver`; el contenido existe y es legible sin JavaScript.

Las curvas usan `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` y `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`. El índice conserva el preview fotográfico grande con cambio por hover/focus; las galerías de cada detalle se abren en un `dialog` modal con backdrop oscuro, cierre explícito y foco nativo. No añadir loops decorativos independientes.

Con `prefers-reduced-motion: reduce`: se desactiva el scroll suave, se elimina el desplazamiento/parallax de fotos, acrílicos, líneas y reveals (`transform: none`), y las transiciones quedan limitadas a 160 ms para feedback de opacidad. La información y las acciones siguen visibles.

## Accesibilidad y responsive

Objetivo WCAG 2.2 AA. Cada ruta emite un solo `h1`: lo aporta `PageHero` en páginas editoriales, el hero propio en fichas de servicio y el hero de portada en `/`. Los títulos de secciones descienden a `h2`; el índice de servicios usa `h2` por servicio cuando no muestra un titular editorial intermedio. El contenido legado de WordPress que llega como `h6` se normaliza a párrafo para evitar saltos falsos de jerarquía. El sistema incluye skip link, HTML semántico, `aria-label`/`aria-labelledby` en regiones interactivas, foco visible de 3 px cyan con offset de 4 px, alt text descriptivo para imágenes reales, enlaces `tel:`/`mailto:` y mapa con título. Las interacciones del explorador de servicios responden a `focus` además de hover. Mantener contraste suficiente al calibrar el lima.

- Desktop (≥1024 px): split hero 43/57, collage superpuesto y rail de servicios.
- Tablet (768–1023 px): titular sobre collage más corto; rail horizontal desplazable.
- Móvil (<768 px): contacto y titular primero, una imagen de paciente, dos apoyos y lista vertical de servicios.

## Contacto y mapa

Datos de producto confirmados en `src/lib/site.ts` y componentes:

- Citas: [957 120 563](tel:+34957120563)
- Urgencias: [659 967 706](tel:+34659967706)
- Email: [contacto@clinicaveterinariajara.es](mailto:contacto@clinicaveterinariajara.es)
- Dirección: C/ Olivareros, 7 · 14440 Villanueva de Córdoba

El cierre de contacto embebe OpenStreetMap con marcador `38.3278607,-4.6176352` y ofrece un enlace externo de Google Maps “Cómo llegar”.

## Assets y verdad visual

El logo y las fotografías de consulta, sala de espera, quirófano, mascotas y equipo proceden de WordPress o de fallbacks verificados en `src/lib/wordpress.ts`; no inventar testimonios, métricas o material clínico. `.impeccable/references/` contiene referencias y fotografías usadas para contrastar dirección; `.impeccable/review/` conserva capturas de revisión; `.impeccable/mocks/` conserva las composiciones exploradas. Atlas Jara queda disponible para una futura decisión visual, pero cualquier implementación actual debe seguir Órbita Jara + composición A.
