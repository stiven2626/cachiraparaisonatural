// Cabecera y centros poblados. Cada uno tiene su propia página en /territorio/:id
// Las veredas de cada uno están en veredas.js.
// "productos" es una lista para ir llenando con la información que envíe la comunidad.
// "foto" es la imagen principal (o null) y "galeria" una lista de fotos con su pie.
export const poblados = [
  {
    id: "cabecera",
    nombre: "Cabecera municipal",
    tipo: "Casco urbano",
    resumen: "El pueblo de ladera, entre la quebrada Chorreritas y el río Cáchira.",
    descripcion:
      "Se asienta en el valle que forman la quebrada Chorreritas y el río Cáchira del Espíritu Santo. Es un pueblo alargado y de ladera, con tres calles principales; una de ellas sube por el polideportivo y el hospital hasta el cementerio, en la parte alta.",
    datos: [
      ["Altitud", "2.025 m s. n. m."],
      ["Clima medio", "≈ 17 °C"],
      ["Hitos", "Iglesia, Santuario de la Lajita, Malecón con la India"],
    ],
    productos: [],
    foto: { src: "/fotos/cabecera-parque.jpg", alt: "Parque principal de Cáchira con la iglesia blanca al fondo" },
    galeria: [],
    lugares: ["santuario-lajita", "malecon-india"],
  },
  {
    id: "la-carrera",
    nombre: "La Carrera",
    tipo: "Centro poblado",
    resumen: "Tierra de moreras y puerta a las Siete Lagunas.",
    descripcion:
      "Aquí familias campesinas viven del cultivo de mora con abonos orgánicos y se han organizado en la asociación MORACAR. Desde este corregimiento se sube a las Siete Lagunas del páramo.",
    datos: [
      ["Población (censo 2018)", "258 personas"],
      ["Producto", "Mora"],
      ["Atractivo", "Siete Lagunas"],
    ],
    productos: ["Mora"],
    foto: null,
    galeria: [],
    lugares: ["siete-lagunas"],
  },
  {
    id: "la-vega",
    nombre: "La Vega",
    tipo: "Centro poblado",
    resumen: "Corregimiento unido por carretera al casco urbano.",
    descripcion:
      "Corregimiento campesino de cultivos variados y cría de peces. Su historia y su gente están por contarse: si eres de La Vega, esta ficha se completa con tu aporte.",
    datos: [
      ["Población", null],
      ["Productos", "Pimentón, café, cacao y más"],
      ["Atractivo", null],
    ],
    productos: ["Pimentón", "Café", "Cacao", "Tomate", "Habichuela", "Maracuyá", "Fríjol", "Maíz", "Cachama", "Mojarra"],
    foto: { src: "/fotos/la-vega-parque.jpg", alt: "Parque de La Vega con el letrero del pueblo y la iglesia de torre blanca" },
    galeria: [],
    lugares: [],
  },
  {
    id: "los-mangos",
    nombre: "Los Mangos",
    tipo: "Centro poblado",
    resumen: "Uno de los centros poblados del municipio.",
    descripcion:
      "Necesitamos a su gente para contar cómo es la vida allí, sus fiestas y sus lugares.",
    datos: [
      ["Población", null],
      ["Producto", null],
      ["Atractivo", null],
    ],
    productos: [],
    foto: null,
    galeria: [],
    lugares: [],
  },
  {
    id: "san-jose-del-llano",
    nombre: "San José del Llano",
    tipo: "Centro poblado",
    resumen: "Centro poblado con historia propia.",
    descripcion:
      "Si eres de aquí, cuéntanos de su origen, sus familias fundadoras y sus anécdotas.",
    datos: [
      ["Población", null],
      ["Producto", null],
      ["Atractivo", null],
    ],
    productos: [],
    foto: null,
    galeria: [],
    lugares: [],
  },
];

export const buscarPoblado = (id) => poblados.find((p) => p.id === id);
