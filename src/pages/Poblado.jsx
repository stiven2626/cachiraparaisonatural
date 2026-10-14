import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, PenLine } from "lucide-react";
import { buscarPoblado, poblados } from "../data/poblados.js";
import { lugares } from "../data/lugares.js";
import { veredasDe } from "../data/veredas.js";
import TarjetaLugar from "../components/TarjetaLugar.jsx";
import NoEncontrado from "./NoEncontrado.jsx";

export default function Poblado() {
  const { id } = useParams();
  const p = buscarPoblado(id);
  if (!p) return <NoEncontrado />;

  const susLugares = lugares.filter((l) => p.lugares.includes(l.id));
  const otros = poblados.filter((x) => x.id !== p.id);
  const susVeredas = veredasDe(p.id);

  return (
    <div className="contenedor py-14">
      <Link to="/territorio" className="inline-flex items-center gap-1 text-sm text-menta-700 hover:underline">
        <ArrowLeft size={14} /> Todo el territorio
      </Link>

      <header className={`mt-6 grid gap-8 ${p.foto ? "md:grid-cols-[1.1fr_1fr] md:items-center" : ""}`}>
        <div className="space-y-3">
          <p className="etiqueta">{p.tipo}</p>
          <h1 className="text-5xl sm:text-7xl">{p.nombre}</h1>
          <p className="max-w-2xl text-lg text-menta-900/75">{p.descripcion}</p>
        </div>
        {p.foto && (
          <img
            src={p.foto.src}
            alt={p.foto.alt}
            className="aspect-[4/3] w-full rounded-3xl border border-menta-200 object-cover shadow-suave"
          />
        )}
      </header>

      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        {p.datos.map(([k, v]) => (
          <div key={k} className="tarjeta p-5">
            <dt className="etiqueta">{k}</dt>
            <dd className={`mt-1 text-lg ${v ? "font-medium" : "italic text-menta-800/50"}`}>{v ?? "Por completar"}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <h2 className="text-3xl">Veredas</h2>
          {susVeredas.length ? (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {susVeredas.map((v) => (
                <Link
                  key={v.id}
                  to={`/territorio/${p.id}/${v.id}`}
                  className="tarjeta group flex items-center gap-3 overflow-hidden p-2 pr-4 transition hover:border-menta-400 hover:bg-white hover:shadow-suave"
                >
                  {v.galeria[0] ? (
                    <img src={v.galeria[0].src} alt="" loading="lazy" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
                  ) : (
                    <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-menta-100 font-display text-2xl text-menta-700">
                      {v.nombre.replace(/^(El|La|Los|Las) /, "").charAt(0)}
                    </span>
                  )}
                  <span className="min-w-0 flex-1 font-medium">{v.nombre}</span>
                  <ArrowRight size={16} className="shrink-0 text-menta-600 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-menta-900/60">Aún no tenemos la lista de veredas de {p.nombre}.</p>
          )}

          <h2 className="pt-4 text-3xl">Productos</h2>
          {p.productos.length ? (
            <div className="flex flex-wrap gap-2">
              {p.productos.map((x) => (
                <span key={x} className="rounded-full border border-menta-300 bg-menta-100 px-3 py-1 text-menta-900">{x}</span>
              ))}
            </div>
          ) : (
            <p className="text-menta-900/60">Aún no sabemos qué se produce en {p.nombre}.</p>
          )}

          {p.galeria.length > 0 && (
            <>
              <h2 className="pt-4 text-3xl">En fotos</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {p.galeria.map((f) => (
                  <figure key={f.src} className="tarjeta overflow-hidden">
                    <img src={f.src} alt={f.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="px-4 py-3 text-sm text-menta-900/75">{f.pie}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}

          {susLugares.length > 0 && (
            <>
              <h2 className="pt-4 text-3xl">Lugares para conocer</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {susLugares.map((l, i) => <TarjetaLugar key={l.id} lugar={l} indice={i + 2} />)}
              </div>
            </>
          )}
        </div>

        <aside className="tarjeta h-fit space-y-3 border-dashed border-menta-400 bg-menta-100/60 p-6">
          <h3 className="text-2xl">¿Eres de {p.nombre}?</h3>
          <p className="text-sm text-menta-900/75">
            Cuéntanos sus veredas, sus fiestas, sus familias y sus historias. Con tu aporte completamos esta ficha.
          </p>
          <Link to={`/aporta?lugar=${encodeURIComponent(p.nombre)}`} className="boton">
            <PenLine size={16} /> Aportar información
          </Link>
        </aside>
      </section>

      <nav className="mt-16 border-t border-menta-200 pt-8">
        <p className="etiqueta mb-3">Otros lugares del municipio</p>
        <div className="flex flex-wrap gap-2">
          {otros.map((o) => (
            <Link key={o.id} to={`/territorio/${o.id}`} className="boton-suave">{o.nombre}</Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
