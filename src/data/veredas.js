// Veredas del municipio. Cada una tiene su propia página en /territorio/:poblado/:vereda
// "poblado" es el id del corregimiento o la cabecera a la que pertenece (ver poblados.js).
// Lo que aún no se sabe va en null o en listas vacías: la UI muestra "Por completar".
import { buscarPoblado } from "./poblados.js";

// Campos que toda vereda muestra en su ficha, aunque estén vacíos.
const datosVacios = () => [
  ["Altitud", null],
  ["Familias", null],
  ["Cómo llegar", null],
];

export const veredas = [
  // --- Cabecera municipal
  {
    id: "el-llano",
    poblado: "cabecera",
    nombre: "El Llano",
    descripcion: null,
    datos: datosVacios(),
    productos: [],
    galeria: [],
  },

  // --- La Vega
  {
    id: "la-explayada",
    poblado: "la-vega",
    nombre: "La Explayada",
    descripcion: null,
    datos: datosVacios(),
    productos: [],
    galeria: [
      {
        src: "/fotos/la-explayada.jpg",
        alt: "Matas de plátano y montañas verdes con nubes bajas",
        pie: "Paisaje de la vereda La Explayada",
      },
      {
        src: "/fotos/la-explayada-falla.jpg",
        alt: "Cañón entre montañas con una ladera desprendida",
        pie: "Falla geológica en la vereda La Explayada",
      },
    ],
  },
  {
    id: "paramito",
    poblado: "la-vega",
    nombre: "Paramito",
    descripcion: null,
    datos: datosVacios(),
    productos: [],
    galeria: [],
  },
  {
    id: "el-salobre",
    poblado: "la-vega",
    nombre: "El Salobre",
    descripcion: null,
    datos: datosVacios(),
    productos: [],
    galeria: [],
  },
  {
    id: "el-filo",
    poblado: "la-vega",
    nombre: "El Filo",
    descripcion: null,
    datos: datosVacios(),
    productos: [],
    galeria: [],
  },
  {
    id: "calichana",
    poblado: "la-vega",
    nombre: "Calichana",
    descripcion: null,
    datos: datosVacios(),
    productos: [],
    galeria: [],
  },
  {
    id: "boca-de-monte",
    poblado: "la-vega",
    nombre: "Boca de Monte",
    descripcion: null,
    datos: datosVacios(),
    productos: [],
    galeria: [],
  },
];

export const veredasDe = (pobladoId) => veredas.filter((v) => v.poblado === pobladoId);

export const buscarVereda = (pobladoId, veredaId) =>
  veredas.find((v) => v.poblado === pobladoId && v.id === veredaId);

// Nombre con el que la vereda aparece en el formulario de aportes.
export const nombreAporte = (v) => `Vereda ${v.nombre} · ${buscarPoblado(v.poblado)?.nombre ?? ""}`;
