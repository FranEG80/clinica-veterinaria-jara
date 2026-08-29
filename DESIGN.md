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
--surface-1: #f8f9f8;   /* estados: fondo del stage del hero */
--surface-2: #f5f6f4;   /* franjas de sección alternas */
--surface-3: #f2f4f2;   /* fondo del preview de servicios */
--surface-4: #edf0ed;   /* zócalos de contacto y blog */
--placeholder: #e5e2df;      /* fondo mientras carga una foto (cálido) */
--placeholder-cool: #deded9; /* ídem, variante fría */
--ink: #100f0f;
--ink-soft: #4a433c;
--ink-raised: #292523;  /* texto secundario sobre tinta */
--line: rgba(16, 15, 15, 0.16);
--on-ink: #f3f1ee;       /* texto sobre tinta, máxima presencia */
--on-ink-soft: #d6d2cf;  /* texto sobre tinta, atenuado */
--on-ink-faint: #aaa7a4; /* texto sobre tinta, mínimo */
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
--shadow-stage: 0 30px 80px rgb(var(--shadow-rgb) / 0.16);  /* elevación mayor: foto del hero, mapa */
--shadow-float: 0 22px 58px rgb(var(--shadow-rgb) / 0.09);  /* elevación media: acrílicos */
--shadow-panel: 0 24px 48px rgb(var(--shadow-rgb) / 0.12);  /* elevación de panel: menú móvil */
```

Las tres sombras comparten una única base cálida (`--shadow-rgb: 78 67 63`) y solo cambian de intensidad/alcance; antes cada superficie tenía su propia base de color y no había forma de razonar sobre "qué tan elevado" está algo. Igual con las superficies: son una rampa (`--surface-1` la más luminosa → `--surface-4` la más densa) en vez de hexadecimales sueltos repetidos por el CSS.

La composición de referencia muestrea `#FCFCFC`, `#100F0F`, `#F2716E`, `#4DA8C2`, `#E17226` y un lima aproximado `#C7AE50`; la implementación usa `--lime: #B6D92C` para interacción y señales. La paleta de acento se asigna por servicio: lima, coral, cyan y naranja.

El ritmo espacial se expresa con `clamp()`, `min()`, `gap`, `padding-block` y una anchura máxima de shell de 1440 px (`width: min(100% - 48px, 1440px)`). Existe una escala (`--space-2xs` a `--space-3xl`, de `clamp(8px, 1vw, 12px)` a `clamp(100px, 12vw, 180px)`) para nuevo código, pero no se ha retrofitteado sobre los valores explícitos existentes — no reescribir una regla ya funcionando solo por adoptar la escala.

### Tracking tipográfico

El tracking se aprieta cuanto más grande es el cuerpo, nunca al revés — una escala fija evita que un titular grande y uno intermedio compartan el mismo valor por accidente:

```css
--track-mega: -0.06em;     /* > 6rem, p. ej. .blog-masthead h1 */
--track-display: -0.042em; /* 3.4–6rem, p. ej. .hero-copy h1, .page-hero h1 */
--track-xl: -0.035em;      /* 2.6–3.4rem */
--track-l: -0.025em;       /* 1.8–2.6rem, p. ej. .service-row h2/h3 */
--track-m: -0.015em;       /* 1.4–1.8rem, p. ej. .team-portrait-copy h3 */
```

## Arquitectura multipágina y rutas

Astro genera páginas estáticas desde `src/pages`; los componentes compartidos viven en `src/components`, el layout en `src/layouts/BaseLayout.astro`, y el estilo global en `src/styles/global.css`.

- `/` — portada Órbita Jara: hero, historia, servicios, equipo y contacto.
- `/sobre-nosotros/` — historia, instalaciones y equipo; página canónica única (ver nota de redirección más abajo).
- `/nuestros-servicios/` — índice de servicios con copy como protagonista y un preview fotográfico grande que cambia al pasar por cada servicio; las galerías bento viven dentro de cada detalle.
- `/servicios/[slug]/` — familia dinámica de detalle de servicios; su `canonicalPath` apunta siempre a `/[slug]/`, así que los enlaces internos (header, footer, explorador de servicios) usan la forma corta, no `/servicios/…/`.
- `/[slug]/` — ruta dinámica canónica de cada servicio.
- `/galeria-de-mascotas/` — galería.
- `/contacto/` — citas, urgencias, email, dirección y mapa; el hero incluye los botones de "Pedir cita" y "Urgencias" (antes solo estaban al final de la página, casi dos viewports de scroll por debajo en móvil).
- `/blog/` — índice editorial headless.
- `/blog/[slug]/` — detalle de post.
- `/politica-de-cookies-ue/` y `/terminos-y-condiciones/` — páginas legales desde WordPress.

Redirecciones (`astro.config.mjs`): `/equipo/` y `/nuestra-clinica/` apuntan a `/sobre-nosotros/`. `/nuestra-clinica/` era una copia desactualizada de `/sobre-nosotros/` (mismo title/description/hero, cuerpo divergente) — se eliminó el archivo de página y quedó solo el redirect.

La navegación principal enlaza inicio, clínica, servicios, galería, blog y contacto — no lista "equipo" (esa página redirige) ni "peluquería especializada" como entrada de primer nivel (es un servicio más dentro de `/nuestros-servicios/`, antes vivía en la navegación principal con el mismo peso que el resto y en móvil era el elemento visualmente más dominante del menú). El header sticky mide 72 px en desktop y 68 px en tablet/móvil. En móvil el menú (`<details>`) añade un scrim, bloqueo de scroll de fondo y cierre con Escape/clic fuera/al navegar — el elemento nativo por sí solo no cubre nada de eso.

### Tratamiento editorial de Equipo y Blog

La retícula editorial de equipo vive inline en `src/pages/sobre-nosotros.astro` (no existe `TeamPortraits.astro` como componente aparte): seis retratos en `repeat(5, minmax(0, 1fr))` con `grid-area` explícito por índice, no una retícula de 12 columnas. `TeamRail.astro` sigue siendo el resumen compacto (rail horizontal) de la home.

En escritorio (≥1024 px) los seis retratos se reparten en dos filas de tres que alternan desfase vertical por `grid-area` (fila 1: columnas 1–3; fila 2: columnas 3–5, dejando aire en el resto). Cada retrato conserva su propio desfase vertical (`--portrait-shift`) vía `transform: translateY(...)` en `.team-portrait`. Ese `transform` es del elemento contenedor y no debe compartirse con `.reveal-block` (que también anima `transform`): el reveal de entrada va en `.team-portrait-media` (la foto), un nivel más adentro, con `--reveal-delay` fijado por índice en el propio marcado — así la cascada seguiría siempre el orden real de la retícula en vez de depender del orden, no espacialmente fiable, en que el `IntersectionObserver` compartido dispara sus entradas.

Por debajo de 1024 px la retícula vuelve a `flex` en filas de tres, y en móvil a secuencia vertical con anchuras alternas, sin scroll horizontal.

`/blog/` tiene una cabecera propia basada en tipografía monumental y un recorte fotográfico real; no usa órbitas circulares decorativas. El primer artículo se presenta como portada superpuesta y el resto forma un archivo numerado con filas asimétricas. `/blog/[slug]/` usa cabecera art-directed, tiempo de lectura calculado desde el contenido, imagen de portada desplazada, rail editorial lateral y una columna de lectura con estilos específicos para titulares, listas, citas e imágenes de WordPress.

## WordPress headless y contenido de muestra

WordPress continúa siendo el CMS en `https://veterinariajara.es/wp-json/wp/v2`, configurable mediante `WP_API_URL`. En cada build se solicitan páginas, medios, posts y categorías (`per_page=100`) y se crean mapas por slug/id. `getClinicContent()` memoiza la consulta y marca `isLive`.

Si la REST API falla, el build no se rompe: usa contenido estructural y medios fallback verificados, con URLs de uploads conocidas. Los HTML recibidos pasan por `safeWordPressHtml`; se eliminan bloques `style/script`, comentarios de plantilla, atributos inline y handlers antes de renderizar. El texto visible se normaliza con `plainText`, que comparte la limpieza para evitar que CSS heredado o nombres de funciones aparezcan como copy.

Si la API responde sin entradas, `getBlogPosts()` devuelve exactamente dos posts demo (`isDemo: true`). El índice los etiqueta **Contenido de muestra** y sus páginas funcionan como posts normales para poder revisar el diseño. En cuanto WordPress devuelve al menos un post real, los demos desaparecen automáticamente y solo se muestran los posts reales.

## Motion

El movimiento explica recorrido y relación espacial. El hero actualiza parallax con el puntero solo en dispositivos con `(hover: hover) and (pointer: fine)` y desplaza capas/acrílicos y líneas orbitales también según scroll; el suavizado vive en un lerp por `requestAnimationFrame` en `BaseLayout.astro` (no en una `transition` CSS, que dejaba las capas medio segundo por detrás del puntero en cada `pointermove`), y `will-change: transform` solo se activa mientras el bucle está corriendo, no de forma permanente.

El explorador de servicios (`ServiceExplorer.astro`) cruza dos `<img>` apiladas en opacidad (260 ms) al cambiar de fila — interrumpible en cualquier fotograma, sin el `setTimeout` de 110 ms que antes parpadeaba al recorrer varias filas seguidas. Los bloques `.reveal-block` aparecen mediante un único `IntersectionObserver` compartido en `BaseLayout.astro` (antes solo vivía en `index.astro`, y páginas como `/sobre-nosotros/` no lo tenían); el contenido existe y es legible sin JavaScript. La transición es de 560 ms con un desplazamiento de 22 px; los bloques que intersectan en el mismo lote se escalonan ~60 ms entre sí vía `--reveal-delay`, salvo que el propio marcado ya fije ese valor (ver equipo, arriba) — en ese caso el observer lo respeta y no lo sobrescribe.

Todo lo interactivo responde en `pointerdown`/`:active`, no solo al soltar o al hacer hover: botones, filas de servicio, enlaces de contacto, miniaturas de galería.

Las curvas usan `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` y `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`. El índice conserva el preview fotográfico grande con cambio por hover/focus; las galerías de cada detalle (y la galería de mascotas) se abren en un `dialog` modal que se materializa con escala + desenfoque (no un fundido plano), backdrop oscuro, cierre explícito de 44×44 px y foco nativo. No añadir loops decorativos independientes.

### View Transitions entre páginas

`BaseLayout.astro` incluye `<ClientRouter fallback="swap" />` (`astro:transitions`). Título e imagen viajan de una lista a su ficha de detalle vía `transition:name` compartido por slug:

- Servicios: `service-title-{slug}` / `service-image-{slug}` — en la fila del explorador (`ServiceExplorer.astro`, tanto la miniatura móvil como la imagen del preview de escritorio) y en el hero de `ServiceDetail.astro`.
- Blog: `post-title-{slug}` / `post-image-{slug}` — en el artículo destacado y el archivo de `blog/index.astro`, y en el hero de `blog/[slug].astro`.

**Solo en la dirección lista → detalle.** La vuelta (detalle → lista, por el botón atrás o cualquier enlace) **no** usa transición: Astro restaura el scroll a donde estaba el visitante antes de entrar, y hacerlo dentro de la animación de la transición se veía como un salto brusco, sin relación con qué elemento hiciera match. La solución no es tratar de acertar el match en la vuelta — es no transicionarla: `BaseLayout.astro` escucha `astro:before-preparation` y, si la página actual es una ficha de servicio (`.service-page-hero` presente), llama a `event.preventDefault()`, lo que hace que Astro caiga a una navegación normal del navegador para esa página (sin fetch, sin swap, sin `startViewTransition`). No extender este mecanismo a otras páginas sin motivo: fuera de la ficha de servicio, toda navegación sigue transicionando con normalidad.

Con `prefers-reduced-motion: reduce`: se desactiva el scroll suave, se elimina el desplazamiento/parallax de fotos, acrílicos, líneas, reveals y zooms de hover (fotos de equipo, portadas de blog), y las transiciones quedan limitadas a 160 ms para feedback de opacidad. Astro además desactiva sus propias animaciones de View Transitions (`::view-transition-group/old/new`) bajo esta misma media query, sin necesidad de código adicional. `prefers-reduced-transparency: reduce` vuelve sólidos los materiales translúcidos (header, mapa, badge de equipo…) y `prefers-contrast: more` sube el contraste de bordes y texto secundario. La información y las acciones siguen visibles en todos los casos.

## Accesibilidad y responsive

Objetivo WCAG 2.2 AA. Cada ruta emite un solo `h1`: lo aporta `PageHero` en páginas editoriales, el hero propio en fichas de servicio y el hero de portada en `/`. Los títulos de secciones descienden a `h2`; el índice de servicios usa `h2` por servicio cuando no muestra un titular editorial intermedio. El contenido legado de WordPress que llega como `h6` se normaliza a párrafo para evitar saltos falsos de jerarquía. El sistema incluye skip link funcional (`<main id="contenido" tabindex="-1">`, sin el `tabindex` el enlace movía el scroll pero dejaba el foco en la cabecera), HTML semántico, `aria-label`/`aria-labelledby` en regiones interactivas, foco visible de 3 px cyan con offset de 4 px, alt text descriptivo para imágenes reales (la galería numera el alt de fallback por foto — `foto 1`, `foto 2`… — para no repetir el mismo texto en las 13 imágenes), enlaces `tel:`/`mailto:` y mapa con título. Las fichas de servicio incluyen una miga de pan (`Servicios / {título}`) de vuelta a `/nuestros-servicios/`, antes solo alcanzable desde la navegación superior. Las interacciones del explorador de servicios responden a `focus` además de hover. Mantener contraste suficiente al calibrar el lima; los estados con coral puro sobre fondo claro (2,7:1) no cumplen como texto — usar siempre `--coral-deep`.

### Imágenes responsive

Cada imagen de WordPress puede llevar `srcset`/`sizes` vía los helpers de `src/lib/wordpress.ts` (`mediaSrcSet`, `mediaSrcSetBySlug`, `postImageSrcSet`). Filtran las variantes de `media_details.sizes` que **no** conservan la relación de aspecto del original (±2 %): WordPress genera recortes duros junto a los proporcionales (miniaturas cuadradas, slides panorámicos, retratos de portfolio con otra relación de aspecto), y mezclarlos en un `srcset` sirve, al azar, una foto encuadrada de otra forma en vez de una versión más pequeña de la misma — así se perdió en algún momento medio encuadre de la foto principal del hero. Solo la foto principal del hero (`fetchpriority="high"`) debe llevar prioridad alta; el resto de fotos visibles en el primer viewport (collage del hero) usan `fetchpriority="low"` para no competir por ancho de banda con la LCP.

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
