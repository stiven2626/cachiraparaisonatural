# Cáchira · Paraíso natural de Norte de Santander

Sitio web comunitario para dar a conocer el municipio de Cáchira: su territorio
(cabecera, corregimientos y veredas), lugares turísticos, historia, personajes,
sabores y las historias que envía la propia gente.

## Requisitos

- Node.js 18 o superior

## Cómo correrlo

```bash
npm install
npm run dev      # abre http://localhost:5173
npm run build    # genera la versión de producción en /dist
```

## Estructura

```
src/
  data/          ← TODO el contenido editable (textos, lugares, veredas, historia)
    municipio.js   datos generales, límites, ríos, contacto, fuentes
    poblados.js    cabecera y centros poblados (cada uno tiene su página)
    lugares.js     sitios turísticos
    historia.js    línea de tiempo
    personajes.js  personajes y cultivos
  services/
    aportes.js     guardar / listar / moderar aportes (hoy: localStorage)
  components/    Navbar, Footer, Montanas (portada), TarjetaLugar, Encabezado
  pages/         una página por ruta
```

## Rutas

| Ruta               | Página                                  |
|--------------------|-----------------------------------------|
| `/`                | Inicio                                  |
| `/territorio`      | Todos los poblados, límites y ríos      |
| `/territorio/:id`  | Ficha de un poblado con sus veredas     |
| `/lugares`         | Lugares turísticos con filtros          |
| `/historia`        | Línea de tiempo                         |
| `/gente`           | Personajes                              |
| `/voces`           | Aportes aprobados de la comunidad       |
| `/aporta`          | Formulario para enviar historias y fotos|
| `/moderacion`      | Aprobar o rechazar aportes              |

## Cómo agregar contenido

- **Una vereda:** en `src/data/poblados.js`, añade el nombre al arreglo `veredas` del poblado.
- **Un lugar:** añade un objeto en `src/data/lugares.js`. Para la foto, pon la imagen en
  `public/fotos/` y escribe `foto: "/fotos/mi-foto.jpg"`.
- **Un hecho histórico:** añade una línea en `src/data/historia.js`.

## Pendientes importantes

1. Reemplazar `tucorreo@ejemplo.com` en `src/data/municipio.js`.
2. Conectar un backend real para los aportes (recomendado: Supabase). Hoy los aportes
   se guardan solo en el navegador de quien los envía.
3. Proteger `/moderacion` con autenticación cuando exista el backend.
4. Conseguir la lista oficial de las 57 veredas en la Alcaldía.
5. Confirmar la población con el DANE.

## Paleta

Verdes pastel definidos en `tailwind.config.js`: `menta-50…900`, `salvia-50…500`,
`niebla`, `laguna` y un acento suave `mora`.
