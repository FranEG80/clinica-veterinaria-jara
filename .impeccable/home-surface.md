# Home surface

## Scope

- Primary target: `src/pages/index.astro`
- Visitor mode: Persuade
- Audience: tutores de mascotas de Villanueva de Córdoba y Los Pedroches.
- Job: reconocer una clínica preparada y cercana, entender los servicios y contactar para cita o urgencia.
- Primary action: llamar al `957 120 563` para pedir cita.
- Secondary actions: email `contacto@clinicaveterinariajara.es` y urgencias `659 967 706`.
- Proof: historia desde 2015, certificación Cat Friendly Clinic nivel Plata, equipo y fotografías reales de instalaciones publicadas en WordPress.
- Constraints: WordPress REST como fuente editorial; español; no testimonios, métricas ni afirmaciones inventadas; WCAG 2.2 AA y reduced motion.

## Chosen direction

- World: Órbita Jara.
- Approved composition: `.impeccable/mocks/orbita-jara-a.png`.
- Memorable moment: un collage clínico real ocupa la derecha del primer viewport y grandes capas acrílicas del color del logo orbitan el cuidado, conectando después con el índice de servicios.
- Saved alternate: `.impeccable/alternates/atlas-jara/atlas-jara.png`.

## Sampled visual record

- Page ground: `#FCFCFC` (interior field average).
- Primary ink: `#100F0F`.
- Coral acrylic: `#F2716E`.
- Cyan acrylic: `#4DA8C2`.
- Tangerine acrylic: `#E17226`.
- Lime acrylic: `#C7AE50` sampled from the rendered comp; interactive lime may be calibrated slightly brighter only where contrast remains compliant.
- Secondary photographic violet: `#957396`; source content, not a UI token.
- Corner language: image windows 14px; compact controls 8px; no pill cards.
- Line weight: 1px hairlines; no border plus shadow on the same surface.
- Elevation: image-stage shadow only, soft and tinted; flat page sections use lines or whitespace.
- Display type: narrow/condensed, heavy, uppercase; self-hosted Barlow Condensed variable.
- Body/navigation type: self-hosted Bricolage Grotesque variable.

## Fidelity inventory

| Visible ingredient | Required composition | Medium |
| --- | --- | --- |
| Logo | Exact supplied logo, compact at top left | Existing raster from user |
| Navigation | One line, 72px, four links and contact action | Semantic HTML/CSS |
| Hero headline | Two large lines, left field, max 6rem | Semantic HTML/CSS |
| Primary action | Dark rectangular CTA, single line, visible above fold | Semantic link/CSS |
| Emergency contact | Outlined companion action with real number | Semantic `tel:` link/CSS |
| Dominant patient photograph | Large organic window occupying the center-right | Real WordPress raster, CSS mask/crop |
| Clinic photo windows | Consultation, waiting room and operating room in three irregular windows | Real WordPress rasters, CSS masks/crops |
| Acrylic fields | 4–6 large translucent lime/coral/cyan/tangerine surfaces, 30–40% of right field | CSS geometry and layered transparency |
| Orbital seams | Thin curves crossing image boundaries and four signal nodes | Responsive inline SVG geometry |
| Service rail | Four services below hero with matching color signals | Semantic links/CSS |
| Intro proof | Founding, advanced services and Cat Friendly evidence | Semantic HTML + real badge/image |
| Service experience | Vertical service index paired with one sticky photographic stage | HTML/CSS + small JS state controller |
| Team | Real names, roles and portraits from WordPress | HTML/CSS + real WordPress rasters |
| Contact close | Citas, urgencias, email and address, all real | Semantic links/address |

## Motion grammar

- Purpose: explanation and spatial consistency.
- The hero acrylic layers and orbital seams move once as a coordinated scroll/pointer field; no independent looping decorations.
- Service media transitions use opacity and transform at 220ms with strong ease-out.
- Section content is visible by default; enhancement adds bounded reveals.
- Pointer parallax runs only for fine hover pointers.
- Reduced motion removes position travel and parallax while keeping short opacity feedback.

## Responsive translation

- Desktop ≥1024px: comp topology, 43/57 hero split and overlapping collage.
- Tablet 768–1023px: headline above a shorter full-width collage; service rail remains horizontal scroll.
- Mobile <768px: headline/contact first, one large patient window, two supporting clinic windows, then a vertical service list. The collage becomes a deliberate stack, not a squeezed desktop mask.

## Unresolved decisions

- WordPress remains the source of truth, but several legacy pages have empty REST `content.rendered`; service summaries use factual fallback copy until the CMS fields are modernized.
