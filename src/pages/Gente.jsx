import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import Encabezado from "../components/Encabezado.jsx";
import { fotosGente, personajes } from "../data/personajes.js";

export default function Gente() {
  return (
    <div className="contenedor py-16">
      <Encabezado etiqueta="Gente y personajes" titulo="Quienes hicieron Cáchira">
        Faltan muchos: músicos, parteras, maestros, arrieros y abuelos con memoria.
      </Encabezado>

      <div className="mb-10 grid gap-5 sm:grid-cols-2">
        {fotosGente.map((f) => (
          <figure key={f.src} className="tarjeta overflow-hidden">
            <img src={f.src} alt={f.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm text-menta-900/75">{f.pie}</figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {personajes.map((p) => (
          <article key={p.nombre} className="tarjeta flex gap-4 p-6">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-menta-100 to-laguna font-display text-2xl text-menta-800">
              {p.iniciales}
            </span>
            <div className="min-w-0">
              <p className="etiqueta">{p.rol}</p>
              <h3 className="mt-1 text-2xl">{p.nombre}</h3>
              <p className="mt-1 text-sm text-menta-900/70">{p.texto}</p>
            </div>
          </article>
        ))}

        <Link
          to="/aporta?tipo=Personaje"
          className="tarjeta flex flex-col items-start justify-center gap-3 border-dashed border-menta-400 bg-menta-100/50 p-6 transition hover:bg-menta-100"
        >
          <UserPlus className="text-menta-700" />
          <h3 className="text-2xl">Propón un personaje</h3>
          <p className="text-sm text-menta-900/70">Alguien de tu vereda que merezca ser recordado.</p>
        </Link>
      </div>
    </div>
  );
}
