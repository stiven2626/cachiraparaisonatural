// Sección "Sabores y campo" de la portada.
// Cada cultivo tiene una descripción general y "enCachira" con lo propio del municipio.
// Si "enCachira" es null, la UI muestra "Por completar" e invita a la comunidad a contarlo.
// Las fotos con "credito" son de referencia (Wikimedia Commons), no tomadas en Cáchira.
// Las fotos sin "credito" son propias, tomadas en el municipio.

export const campo = {
  etiqueta: "Sabores y campo",
  titulo: "El dulce corazón de la mora",
  intro:
    "La mora es identidad y sustento en Cáchira. Viaja por carreteras andinas hasta centros de acopio de todo el país, y en las escuelas rurales los niños aprenden a sembrar desde pequeños.",
  invitacion: "¿Cultivas en Cáchira o tienes una receta de la región? Cuéntanos tu historia.",
};

export const cultivos = [
  {
    id: "mora",
    nombre: "Mora",
    cientifico: "Rubus glaucus",
    descripcion: "La mora de Castilla es una baya andina de clima frío, que se consume en jugos, postres y mermeladas.",
    enCachira:
      "En el corregimiento La Carrera, las familias moreras hicieron de este cultivo la marca del municipio. Su cosecha sale hacia centros de acopio de todo el país.",
    foto: {
      src: "/fotos/mora.jpg",
      alt: "Moras maduras y verdes en la mata, junto a una flor blanca",
      credito: {
        autor: "Forest & Kim Starr",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Starr_970603-0069_Rubus_glaucus.jpg",
      },
    },
  },
  {
    id: "cafe",
    nombre: "Café",
    cientifico: "Coffea arabica",
    descripcion: "Arbusto de cuyos frutos, las cerezas, se obtiene el grano. Las cerezas pasan de verde a rojo al madurar y se recogen a mano.",
    enCachira: "Se produce en el corregimiento La Vega.",
    foto: {
      src: "/fotos/cafe-recoleccion.jpg",
      alt: "Campesino recogiendo cerezas rojas de café entre las ramas del cafetal",
    },
  },
  {
    id: "curuba",
    nombre: "Curuba",
    cientifico: "Passiflora tripartita",
    descripcion: "Fruta andina de la familia de la pasiflora, alargada y amarilla al madurar. Se prepara en jugo y en sorbete.",
    enCachira: null,
    foto: {
      src: "/fotos/curuba.jpg",
      alt: "Curubas amarillas colgando de la enredadera",
      credito: {
        autor: "H. Zell",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Passiflora_tripartita_-_Madeira_01.jpg",
      },
    },
  },
  {
    id: "maiz",
    nombre: "Maíz",
    cientifico: "Zea mays",
    descripcion: "Base de la cocina campesina: de él salen arepas, mazamorra y envueltos.",
    enCachira: "Se produce en el corregimiento La Vega.",
    foto: {
      src: "/fotos/maiz.jpg",
      alt: "Mazorca de maíz verde en la planta",
      credito: {
        autor: "Rasbak",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Zea_mays_convar._saccharata_cob.jpg",
      },
    },
  },
  {
    id: "frijol",
    nombre: "Fríjol",
    cientifico: "Phaseolus vulgaris",
    descripcion: "Leguminosa que acompaña la mesa diaria del campo colombiano y se siembra a menudo junto al maíz.",
    enCachira: "Se produce en el corregimiento La Vega.",
    foto: {
      src: "/fotos/frijol.jpg",
      alt: "Granos de fríjol negro",
      credito: {
        autor: "Wilfredor",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Phaseolus_vulgaris_seeds.jpg",
      },
    },
  },
  {
    id: "tomate",
    nombre: "Tomate",
    cientifico: "Solanum lycopersicum",
    descripcion: "Fruto base del hogao y de los guisos. Se cultiva al aire libre o bajo invernadero.",
    enCachira: "Se produce en el corregimiento La Vega.",
    foto: {
      src: "/fotos/tomate.jpg",
      alt: "Racimos de tomates rojos en un puesto de mercado",
      credito: {
        autor: "domdomegg",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Grape_tomatoes_on_the_vine_at_Ljubljana_Central_Market.JPG",
      },
    },
  },
  {
    id: "cacao",
    nombre: "Cacao",
    cientifico: "Theobroma cacao",
    descripcion: "Árbol de tierra cálida. De las semillas de sus mazorcas se elabora el chocolate.",
    enCachira: "Se produce en el corregimiento La Vega.",
    foto: {
      src: "/fotos/cacao.jpg",
      alt: "Mazorcas rojas de cacao en el tronco del árbol",
      credito: {
        autor: "Nick Hobgood",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Theobroma_cacao_(red_pods_-_Haiti).jpg",
      },
    },
  },
  {
    id: "mojarra",
    nombre: "Mojarra",
    cientifico: "Oreochromis sp.",
    descripcion: "Pez de agua dulce y clima cálido que se cría en estanques. Se sirve frita, acompañada de patacón.",
    enCachira: "Se produce en el corregimiento La Vega.",
    foto: {
      src: "/fotos/mojarra.jpg",
      alt: "Mano sosteniendo un pez recién sacado del estanque",
    },
  },
  {
    id: "trucha",
    nombre: "Trucha arcoíris",
    cientifico: "Oncorhynchus mykiss",
    descripcion: "Pez de aguas frías y limpias que se cría en estanques de zonas altas.",
    enCachira: "Habita la Laguna de Guerrero, en la zona de páramo del municipio.",
    foto: {
      src: "/fotos/trucha.jpg",
      alt: "Trucha arcoíris sostenida en la mano",
      credito: {
        autor: "Mike Anderson",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Female_Rainbow_Trout_in_hand.JPG",
      },
    },
  },
];
