export const WORDPRESS_ORIGIN = "https://veterinariajara.es";
export const WP_API = import.meta.env.WP_API_URL ?? `${WORDPRESS_ORIGIN}/wp-json/wp/v2`;

export type WordPressPage = {
  id: number;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt?: { rendered: string };
};

export type WordPressMedia = {
  id: number;
  slug: string;
  source_url: string;
  alt_text: string;
  caption?: { rendered: string };
  media_details?: { width?: number; height?: number };
};

export type WordPressPost = {
  id: number;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  isDemo?: true;
};

export type WordPressCategory = {
  id: number;
  slug: string;
  name: string;
  count: number;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  detail: string;
  mediaSlug: string;
  gallerySlugs: string[];
  accent: "lime" | "coral" | "cyan" | "orange";
  /** Texto que sustituye a la sección inferior: se muestra en el hero y omite el cuerpo. */
  heroDetail?: string;
  /** Fragmento inicial del título que se resalta con <i> en el hero. */
  titleAccent?: string;
};

export const services: Service[] = [
  {
    slug: "cirugia",
    title: "Cirugía general",
    shortTitle: "Cirugía",
    summary: "Un quirófano preparado para intervenir con precisión y acompañar cada recuperación.",
    detail:
      "La clínica ofrece cirugía general con seguimiento del paciente antes, durante y después de la intervención.",
    mediaSlug: "cirugia",
    gallerySlugs: ["cirugia-1", "cirugia-2", "cirugia-3", "cirugia-4", "cirugia-5"],
    accent: "cyan",
  },
  {
    slug: "diagnostico-por-imagen",
    title: "Diagnóstico por imagen",
    shortTitle: "Diagnóstico",
    summary: "Radiología y ecografía para entender antes, decidir mejor y actuar a tiempo.",
    detail:
      "El diagnóstico por imagen ayuda al equipo a estudiar cada caso con información visual y orientar el tratamiento.",
    mediaSlug: "diagnostico-por-imagen",
    gallerySlugs: ["diagnostico-por-imagen", "sala-diagnostico", "radiologia-1", "ecografia-1"],
    accent: "lime",
  },
  {
    slug: "hospitalizacion",
    title: "Hospitalización y UCI",
    shortTitle: "Hospitalización",
    summary: "Vigilancia, calma y cuidados continuos cuando quedarse es la mejor opción.",
    detail:
      "La hospitalización permite observar la evolución, administrar tratamiento y responder a cambios con rapidez.",
    mediaSlug: "hospitalizacion",
    gallerySlugs: ["hospitalizacion", "hospitalizacion-2", "transfusion", "transfusion2"],
    accent: "coral",
  },
  {
    slug: "medicina-interna",
    title: "Medicina interna",
    shortTitle: "Medicina interna",
    summary: "Una mirada completa para síntomas complejos y pacientes que necesitan seguimiento.",
    detail:
      "La medicina interna reúne historia clínica, exploración y pruebas para abordar casos que requieren una visión global.",
    mediaSlug: "medicina-interna",
    gallerySlugs: ["medicina-interna", "consulta", "sala-diagnostico"],
    accent: "orange",
  },
  {
    slug: "laboratorio-de-analisis",
    title: "Laboratorio de análisis",
    shortTitle: "Laboratorio",
    summary: "Resultados en clínica para ganar tiempo cuando cada decisión cuenta.",
    detail:
      "La tecnología de laboratorio permite analizar muestras y apoyar el diagnóstico desde la propia clínica.",
    mediaSlug: "laboratorio-de-analisis",
    gallerySlugs: ["laboratorio-de-analisis", "bioquimica1", "bioquimica2", "transfusion"],
    accent: "lime",
  },
  {
    slug: "odontologia",
    title: "Odontología",
    shortTitle: "Odontología",
    summary: "Salud oral para comer, jugar y vivir sin molestias evitables.",
    detail:
      "La atención odontológica ayuda a prevenir y tratar problemas de boca y dientes que afectan al bienestar general.",
    mediaSlug: "odontologia",
    gallerySlugs: ["odontologia", "consulta"],
    accent: "coral",
  },
  {
    slug: "vacunacion",
    title: "Vacunación y microchip",
    shortTitle: "Prevención",
    summary: "Prevención y protección adaptadas a cada etapa de su vida.",
    detail:
      "Los planes preventivos, la vacunación y la identificación se adaptan a la edad y situación de cada paciente.",
    mediaSlug: "vacunacion",
    gallerySlugs: ["vacunacion", "consulta"],
    accent: "cyan",
  },
  {
    slug: "peluqueria-especializada",
    title: "Peluquería especializada",
    shortTitle: "Peluquería",
    summary: "Higiene y cuidado del manto con atención a su comodidad.",
    detail:
      "El servicio de peluquería está orientado al bienestar, la higiene y las necesidades particulares de cada animal.",
    mediaSlug: "peluqueria",
    gallerySlugs: ["peluqueria", "consulta"],
    accent: "orange",
    titleAccent: "Peluquería",
    heroDetail:
      "Disponemos de un servicio de peluquería donde nuestras mascotas pueden recibir su baño relajante y además tratamientos especializados en perros con problemas de piel.",
  },
];

export const GROOMING_SLUG = "peluqueria-especializada";

/** Servicios clínicos: excluye peluquería, que tiene su propia entrada en el menú. */
export const clinicServices: Service[] = services.filter(
  (service) => service.slug !== GROOMING_SLUG
);

export const demoPosts: WordPressPost[] = [
  {
    id: -1,
    slug: "como-preparar-una-visita-veterinaria-sin-estres",
    link: "/blog/como-preparar-una-visita-veterinaria-sin-estres/",
    title: { rendered: "Cómo preparar una visita veterinaria sin estrés" },
    excerpt: {
      rendered:
        "Pequeños cambios antes de salir de casa pueden ayudar a que perros y gatos lleguen más tranquilos a consulta.",
    },
    content: {
      rendered: `<p>Una visita más tranquila empieza antes de entrar en la clínica. Familiarizar el transportín, evitar las prisas y llevar información sobre cambios recientes ayuda a que la consulta sea más cómoda y útil.</p><h2>Antes de salir de casa</h2><p>Deje el transportín accesible varios días antes, añada una manta conocida y permita que su mascota lo explore sin presión. En perros, un paseo breve y calmado puede ayudar a liberar tensión.</p><h2>Información que conviene traer</h2><p>Anote cambios de apetito, descanso, actividad y medicación. Si el motivo es puntual, una fotografía o un vídeo puede aportar contexto al equipo veterinario.</p><p>Este artículo es contenido de demostración para visualizar el blog. Consulte siempre al equipo para recibir indicaciones adaptadas a su mascota.</p>`,
    },
    date: "2026-06-18T10:00:00",
    modified: "2026-06-18T10:00:00",
    featured_media: 112,
    categories: [1],
    isDemo: true,
  },
  {
    id: -2,
    slug: "cinco-senales-para-consultar-al-veterinario",
    link: "/blog/cinco-senales-para-consultar-al-veterinario/",
    title: { rendered: "Cinco señales que conviene consultar con su veterinario" },
    excerpt: {
      rendered:
        "Cambios sutiles en el comportamiento, el apetito o el descanso pueden ser la primera pista de que algo no va bien.",
    },
    content: {
      rendered: `<p>Quien convive con un animal conoce bien sus rutinas. Por eso, los cambios sostenidos suelen ser una señal valiosa para decidir cuándo pedir una valoración profesional.</p><h2>Cambios que merecen atención</h2><p>La pérdida de apetito, beber más agua de lo habitual, respirar con dificultad, mostrar dolor o aislarse son motivos para consultar. La urgencia depende de la intensidad, la duración y el estado general del paciente.</p><h2>Ante la duda</h2><p>Una llamada al centro puede ayudar a valorar el siguiente paso. Si observa dificultad respiratoria, pérdida de conciencia, hemorragia importante o dolor intenso, utilice el teléfono de urgencias.</p><p>Este artículo es contenido de demostración y no sustituye una valoración veterinaria.</p>`,
    },
    date: "2026-05-07T10:00:00",
    modified: "2026-05-07T10:00:00",
    featured_media: 109,
    categories: [1],
    isDemo: true,
  },
];

export const fallbackMedia: Record<string, string> = {
  hero: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/PELUQUERIA.jpg`,
  nosotros: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/NOSOTROS.jpg`,
  consulta: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/CONSULTA.jpg`,
  "sala-de-espera": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/SALA-DE-ESPERA.jpg`,
  quirofano: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/QUIROFANO.jpg`,
  cirugia: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/CIRUGIA.jpg`,
  "diagnostico-por-imagen": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/DIAGNOSTICO-POR-IMAGEN.jpg`,
  hospitalizacion: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/HOSPITALIZACION.jpg`,
  "medicina-interna": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/MEDICINA-INTERNA.jpg`,
  "laboratorio-de-analisis": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/LABORATORIO-DE-ANALISIS.jpg`,
  odontologia: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/ODONTOLOGIA.jpg`,
  vacunacion: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/VACUNACION.jpg`,
  peluqueria: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/PELUQUERIA.jpg`,
  "cirugia-1": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/CIRUGIA-1.jpg`,
  "cirugia-2": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/CIRUGIA-2.jpg`,
  "cirugia-3": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/CIRUGIA-3.jpg`,
  "cirugia-4": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/CIRUGIA-4.jpg`,
  "cirugia-5": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/CIRUGIA-5.jpg`,
  "sala-diagnostico": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/SALA-DIAGNOSTICO.jpg`,
  "radiologia-1": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/RADIOLOGIA-1.jpg`,
  "ecografia-1": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/ECOGRAFIA-1.jpg`,
  "hospitalizacion-2": `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/HOSPITALIZACION-1.jpg`,
  transfusion: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/TRANSFUSION.jpg`,
  transfusion2: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/TRANSFUSION2.jpg`,
  bioquimica1: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/BIOQUIMICA1.jpg`,
  bioquimica2: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/BIOQUIMICA2.jpg`,
  jessica: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/jessica-scaled.jpg`,
  raul: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/RAUL.jpeg`,
  jesus: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/jesus.jpg`,
  sonia: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/sonia.jpg`,
  bartolome: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/BARTOLOME.jpg`,
  nina: `${WORDPRESS_ORIGIN}/wp-content/uploads/2022/09/NINA.jpg`,
};

const decodeEntities = (value: string) =>
  value
    .replaceAll("&#8211;", "–")
    .replaceAll("&#8217;", "’")
    .replaceAll("&#8220;", "“")
    .replaceAll("&#8221;", "”")
    .replaceAll("&amp;", "&")
    .replaceAll("&nbsp;", " ");

const stripWordPressNoise = (value = "") =>
  value
    .replace(/<(script|style|iframe|object|embed|form)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

export const plainText = (value = "") =>
  decodeEntities(stripWordPressNoise(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());

export const safeWordPressHtml = (value = "") =>
  stripWordPressNoise(value)
    .replace(/\sstyle\s*=\s*("[^"]*"|'[^']*')/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*')/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\2/gi, '$1="#"')
    // The legacy service pages use h6 as a paragraph wrapper. Normalize it so
    // imported content does not create a false, skipped heading hierarchy.
    .replace(/<h6(\s[^>]*)?>/gi, "<p$1>")
    .replace(/<\/h6>/gi, "</p>");

async function fetchJson<T>(path: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(`${WP_API}${path}`, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`WordPress REST responded ${response.status}`);
    return (await response.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

export type ClinicContent = {
  pages: WordPressPage[];
  media: WordPressMedia[];
  posts: WordPressPost[];
  categories: WordPressCategory[];
  mediaBySlug: Map<string, WordPressMedia>;
  mediaById: Map<number, WordPressMedia>;
  pageBySlug: Map<string, WordPressPage>;
  postBySlug: Map<string, WordPressPost>;
  categoryById: Map<number, WordPressCategory>;
  isLive: boolean;
};

let contentPromise: Promise<ClinicContent> | undefined;

export function getClinicContent(): Promise<ClinicContent> {
  if (contentPromise) return contentPromise;

  contentPromise = Promise.all([
    fetchJson<WordPressPage[]>(
      "/pages?per_page=100&_fields=id,slug,link,title,content,excerpt",
    ),
    fetchJson<WordPressMedia[]>(
      "/media?per_page=100&_fields=id,slug,source_url,alt_text,caption,media_details",
    ),
    fetchJson<WordPressPost[]>(
      "/posts?per_page=100&_fields=id,slug,link,title,content,excerpt,date,modified,featured_media,categories",
    ),
    fetchJson<WordPressCategory[]>(
      "/categories?per_page=100&_fields=id,slug,name,count",
    ),
  ])
    .then(([pages, media, posts, categories]) => ({
      pages,
      media,
      posts,
      categories,
      mediaBySlug: new Map(media.map((item) => [item.slug, item])),
      mediaById: new Map(media.map((item) => [item.id, item])),
      pageBySlug: new Map(pages.map((item) => [item.slug, item])),
      postBySlug: new Map(posts.map((item) => [item.slug, item])),
      categoryById: new Map(categories.map((item) => [item.id, item])),
      isLive: true,
    }))
    .catch((error: unknown) => {
      console.warn("WordPress REST unavailable; building with verified fallbacks.", error);
      return {
        pages: [],
        media: [],
        posts: [],
        categories: [],
        mediaBySlug: new Map<string, WordPressMedia>(),
        mediaById: new Map<number, WordPressMedia>(),
        pageBySlug: new Map<string, WordPressPage>(),
        postBySlug: new Map<string, WordPressPost>(),
        categoryById: new Map<number, WordPressCategory>(),
        isLive: false,
      };
    });

  return contentPromise;
}

export function mediaUrl(content: ClinicContent, slug: string, fallbackKey = slug) {
  return content.mediaBySlug.get(slug)?.source_url ?? fallbackMedia[fallbackKey];
}

export function postImage(content: ClinicContent, post: WordPressPost) {
  return content.mediaById.get(post.featured_media)?.source_url ?? fallbackMedia.hero;
}

export function getBlogPosts(content: ClinicContent) {
  return content.posts.length ? content.posts : demoPosts;
}
