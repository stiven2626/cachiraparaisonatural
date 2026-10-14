import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Encabezado from "../components/Encabezado.jsx";
import TarjetaLugar from "../components/TarjetaLugar.jsx";
import { lugares, categorias } from "../data/lugares.js";
import { municipio } from "../data/municipio.js";

export default function Lugares() {
  const [filtro, setFiltro] = useState("Todos");
  const lista = filtro === "Todos" ? lugares : lugares.filter((l) => l.categoria === filtro);

  return (
    <div className="contenedor py-16">
      <Encabezado etiqueta="Qué visitar" titulo="Del páramo al valle en un mismo día">
        {municipio.clima}
      </Encabezado>

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setFiltro(c)}
            aria-pressed={c === filtro}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              c === filtro ? "border-menta-500 bg-menta-500 text-white" : "border-menta-200 bg-white hover:bg-menta-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {lista.map((l) => (
            <motion.div
              key={l.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
            >
              <TarjetaLugar lugar={l} indice={lugares.indexOf(l) + 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
