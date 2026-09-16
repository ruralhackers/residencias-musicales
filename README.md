# RURALI-ART

Micrositio del laboratorio de IA y arte de Rural Hackers en Anceu (Galicia).

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Contenido

Copy editable en [`content/site.ts`](content/site.ts). Secciones y componentes en [`components/`](components/).

## Deploy checklist

1. Definir dominio (p. ej. `rurali-art.ruralhackers.com`) y actualizar `metadataBase` en [`app/layout.tsx`](app/layout.tsx), [`app/sitemap.ts`](app/sitemap.ts) y [`app/robots.ts`](app/robots.ts).
2. Sustituir el placeholder del logo del Ministerio en el footer por el asset oficial (CCIC / web del Ministerio).
3. Añadir fotos reales de Anceu en el hero cuando estén disponibles.
4. Publicar plazos definitivos de convocatoria y, si aplica, sustituir el `mailto` por Typeform/Google Forms.
5. Desplegar en Vercel, SiteGround static u otro host; verificar móvil, CTA y crédito ministerial en footer.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · español
