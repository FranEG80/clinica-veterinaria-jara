# Clínica Veterinaria Jara

Frontend Astro estático para la web de Clínica Veterinaria Jara. WordPress continúa siendo el CMS: durante el build se consultan páginas, medios, entradas y categorías desde la REST API.

## Desarrollo

```bash
npm install
npm run dev
```

`WP_API_URL` permite apuntar a otra instalación de WordPress durante una migración. Si la API no responde, el sitio conserva contenido y medios verificados de respaldo. Si no hay entradas, el Blog muestra dos posts de demostración etiquetados como contenido de muestra; desaparecen automáticamente cuando WordPress devuelve posts reales.

## Rutas principales

- `/` · portada Órbita Jara
- `/sobre-nosotros/` · clínica e historia
- `/nuestros-servicios/` · índice de servicios
- `/cirugia/`, `/diagnostico-por-imagen/`, etc. · páginas de servicio con slugs originales
- `/equipo/` · profesionales
- `/blog/` y `/blog/[slug]/` · blog headless
- `/galeria-de-mascotas/` · galería
- `/contacto/` · teléfonos, email, dirección y mapa

## Verificación

```bash
npm run check
npm run build
```
