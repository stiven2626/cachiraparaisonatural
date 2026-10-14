import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Compass } from "lucide-react";
import Encabezado from "../components/Encabezado.jsx";
import { poblados } from "../data/poblados.js";
import { municipio } from "../data/municipio.js";

export default function Territorio() {
  return (
    <div className="contenedor py-16">
      <Encabezado etiqueta="Territorio" titulo="Cabecera, corregimientos y veredas">
        {municipio.division}
      </Encabezado>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {poblados.map((p) => (
          <Link
            key={p.id}
            to={`/territorio/${p.id}`}
            className="tarjeta group flex flex-col gap-3 overflow-hidden p-6 transition hover:border-menta-400 hover:bg-white hover:shadow-suave"
          >
            {p.foto && (
              <img
                src={p.foto.src}
                alt={p.foto.alt}
                loading="lazy"
                className="-mx-6 -mt-6 mb-2 aspect-[16/9] w-[calc(100%+3rem)] max-w-none object-cover"
              />
            )}
            <p className="etiqueta">{p.tipo}</p>
            <h3 className="text-3xl">{p.nombre}</h3>
            <p className="text-menta-900/70">{p.resumen}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-menta-700">
              Ver ficha <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="tarjeta p-6">
          <p className="etiqueta flex items-center gap-2"><Compass size={14} /> Límites</p>
          <dl className="mt-4 grid grid-cols-2 gap-4">
            {Object.entries(municipio.limites).map(([k, v]) => (
              <div key={k} className="border-t border-menta-200 pt-2">
                <dt className="text-xs uppercase tracking-wider text-menta-800/60">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="tarjeta p-6">
          <p className="etiqueta flex items-center gap-2"><Droplets size={14} /> Ríos y quebradas</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {municipio.rios.map((r) => (
              <span key={r} className="rounded-full bg-laguna/60 px-3 py-1 text-sm">{r}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-menta-900/70">
            Más de 9 mil hectáreas del municipio forman parte del páramo de Santurbán, fuente de agua para Santander y Norte de Santander.
          </p>
        </div>
      </div>
    </div>
  );
}
