import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Credito from "./Credito.jsx";
import { campo, cultivos } from "../data/campo.js";

// Sección "Sabores y campo": cada cultivo se puede seleccionar para ver su ficha y su foto.
export default function SeccionCampo() {
  const [seleccion, setSeleccion] = useState(cultivos[0].id);
  const cultivo = cultivos.find((c) => c.id === seleccion);

  return (
    <section className="bg-menta-100 py-20">
      <div className="contenedor grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="etiqueta">{campo.etiqueta}</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{campo.titulo}</h2>
          <p className="mt-4 max-w-xl text-lg text-menta-900/70">{campo.intro}</p>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Cultivos de Cáchira">
            {cultivos.map((c) => {
              const activo = c.id === seleccion;
              const esMora = c.id === "mora";
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSeleccion(c.id)}
                  aria-pressed={activo}
                  className={`rounded-full border px-3 py-1 text-sm transition ${
                    activo
                      ? esMora
                        ? "border-mora bg-mora/20 font-semibold text-[#8a4a5d]"
                        : "border-menta-700 bg-menta-700 font-semibold text-white"
                      : "border-menta-200 bg-white hover:border-menta-400 hover:bg-menta-50"
                  }`}
                >
                  {c.nombre}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cultivo.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="tarjeta mt-6 space-y-3 p-5"
              aria-live="polite"
            >
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-3xl">{cultivo.nombre}</h3>
                <p className="font-mono text-xs italic text-menta-700">{cultivo.cientifico}</p>
              </div>
              <p className="text-menta-900/80">{cultivo.descripcion}</p>
              <div className="rounded-xl bg-menta-50 p-3">
                <p className="etiqueta">En Cáchira</p>
                {cultivo.enCachira ? (
                  <p className="mt-1 text-sm text-menta-900/80">{cultivo.enCachira}</p>
                ) : (
                  <p className="mt-1 text-sm text-menta-800/70">
                    Por completar. ¿Siembras {cultivo.nombre.toLowerCase()} en tu vereda?{" "}
                    <Link to="/aporta" className="font-semibold text-menta-700 underline-offset-4 hover:underline">
                      Cuéntanos
                    </Link>
                    .
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="text-sm text-menta-900/70">{campo.invitacion}</p>
            <Link to="/aporta" className="boton-suave">
              Contar mi historia <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <figure className="space-y-2 md:sticky md:top-24">
          <div className="relative overflow-hidden rounded-3xl border border-menta-200 bg-white shadow-suave">
            <AnimatePresence mode="wait">
              <motion.img
                key={cultivo.foto.src}
                src={cultivo.foto.src}
                alt={cultivo.foto.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="aspect-[4/3] w-full object-cover"
              />
            </AnimatePresence>
            {cultivo.foto.credito && <Credito credito={cultivo.foto.credito} className="absolute bottom-3 right-3" />}
          </div>
          <figcaption className="text-xs text-menta-800/70">
            {cultivo.foto.credito ? "Foto de referencia, no tomada en Cáchira." : "Foto tomada en Cáchira."}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
