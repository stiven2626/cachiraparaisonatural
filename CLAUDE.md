# Guía para Claude Code

Proyecto: sitio comunitario del municipio de Cáchira (Norte de Santander, Colombia).
Idioma de la interfaz, del código y de los comentarios: **español**.

## Stack
- Vite 5 + React 18 (JSX, sin TypeScript)
- Tailwind CSS 3 (config en `tailwind.config.js`)
- React Router 6, framer-motion, lucide-react

## Comandos
- `npm run dev` — servidor local
- `npm run build` — compilar; ejecútalo después de cada cambio para verificar

## Reglas de diseño
- Paleta de verdes basada en `#137F0B · #449F37 · #74BF63 · #A5DF8E · #D5FFBA` (escala `menta-*`);
  también `salvia-*`, `niebla`, `laguna`. Fondos claros; los verdes fuertes para botones y acentos.
  Texto principal `text-tinta`. Evita fondos oscuros.
- `mora` es solo un acento puntual (la fruta), no un color principal.
- Tipografías: `font-display` (Instrument Serif) para títulos, `font-sans` (Figtree) para texto,
  `font-mono` para etiquetas pequeñas (clase `.etiqueta`).
- Reutiliza las clases de `src/index.css`: `.contenedor`, `.tarjeta`, `.boton`, `.boton-suave`, `.campo`, `.etiqueta`.
- Todo debe verse bien en celular (desde 360 px).

## Contenido
- El contenido vive en `src/data/`. No escribas textos del municipio dentro de los componentes.
- No inventes datos (población, altitudes, fechas). Si falta un dato, usa `null` y la UI muestra "Por completar".

## Aportes
- Toda la lógica de aportes pasa por `src/services/aportes.js`. Al migrar a un backend,
  cambia solo ese archivo y conserva las firmas de las funciones.
- El campo `contacto` es privado: nunca debe mostrarse en páginas públicas.
