import { motion } from "framer-motion";
import Encabezado from "../components/Encabezado.jsx";
import { historia } from "../data/historia.js";

export default function Historia() {
  return (
    <div className="contenedor py-16">
      <Encabezado etiqueta="Historia" titulo="Fue municipio, dejó de serlo y volvió">
        Del refugio de los Cácharas en Las Peñas al municipio de hoy.
      </Encabezado>

      <ol className="relative max-w-3xl border-l-2 border-menta-200 pl-8">
        {historia.map((h, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0.3, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-menta-50 bg-menta-400" />
            <p className="font-mono text-sm font-semibold tabular-nums text-menta-700">{h.anio}</p>
            <h3 className="mt-1 text-3xl">{h.titulo}</h3>
            <p className="mt-1 text-menta-900/70">{h.texto}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
