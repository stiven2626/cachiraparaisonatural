import { Link, useParams } from "react-router-dom";
import { ArrowLeft, PenLine, ImagePlus } from "lucide-react";
import { buscarPoblado } from "../data/poblados.js";
import { buscarVereda, nombreAporte, veredasDe } from "../data/veredas.js";
import NoEncontrado from "./NoEncontrado.jsx";

export default function Vereda() {
  const { id, vereda } = useParams();
  const p = buscarPoblado(id);
  const v = buscarVereda(id, vereda);
  if (!p || !v) return <NoEncontrado />;

  const otras = veredasDe(p.id).filter((x) => x.id !== v.id);
  const portada = v.galeria[0];
  const aportar = (tipo) =>
    `/aporta?tipo=${encodeURIComponent(tipo)}&lugar=${encodeURIComponent(nombreAporte(v))}`;

  return (
    <div className="contenedor py-14">
      <nav className="flex flex-wrap items-center gap-1 text-sm text-menta-700" aria-label="Ruta">
        <Link to="/territorio" className="hover:underline">Territorio</Link>
        <span className="text-menta-800/40">/</span>
        <Link to={`/territorio/${p.id}`} className="inline-flex items-center gap-1 hover:underline">
          <ArrowLeft size={14} /> {p.nombre}
        </Link>
      </nav>

      <header className={`mt-6 grid gap-8 ${portada ? "md:grid-cols-[1.1fr_1fr] md:items-center" : ""}`}>
        <div className="space-y-3">
          <p className="etiqueta">Vereda · {p.nombre}</p>
          <h1 className="text-5xl sm:text-7xl">{v.nombre}</h1>
          {v.descripcion ? (
            <p className="max-w-2xl text-lg text-menta-900/75">{v.descripcion}</p>
          ) : (
            <p className="max-w-2xl text-lg italic text-menta-800/60">
              La historia de {v.nombre} está por contarse. Si eres de aquí, ayúdanos a escribirla.
            </p>
          )}
        </div>
        {portada && (
          <img
            src={portada.src}
            alt={portada.alt}
            className="aspect-[4/3] w-full rounded-3xl border border-menta-200 object-cover shadow-suave"
          />
        )}
      </header>

      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        {v.datos.map(([k, valor]) => (
          <div key={k} className="tarjeta p-5">
            <dt className="etiqueta">{k}</dt>
            <dd className={`mt-1 text-lg ${valor ? "font-medium" : "italic text-menta-800/50"}`}>{valor ?? "Por completar"}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <h2 className="text-3xl">Productos</h2>
          {v.productos.length ? (
            <div className="flex flex-wrap gap-2">
              {v.productos.map((x) => (
                <span key={x} className="rounded-full border border-menta-300 bg-menta-100 px-3 py-1 text-menta-900">{x}</span>
              ))}
            </div>
          ) : (
            <p className="text-menta-900/60">Aún no sabemos qué se produce en {v.nombre}.</p>
          )}

          <h2 className="pt-4 text-3xl">En fotos</h2>
          {v.galeria.length ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {v.galeria.map((f) => (
                <figure key={f.src} className="tarjeta overflow-hidden">
                  <img src={f.src} alt={f.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-4 py-3 text-sm text-menta-900/75">{f.pie}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <Link
              to={aportar("Foto")}
              className="tarjeta flex items-center gap-3 border-dashed border-menta-400 bg-menta-100/50 p-6 text-menta-800 transition hover:bg-menta-100"
            >
              <ImagePlus className="shrink-0 text-menta-700" />
              <span>Todavía no hay fotos de {v.nombre}. ¿Tienes una? Compártela.</span>
            </Link>
          )}
        </div>

        <aside className="tarjeta h-fit space-y-3 border-dashed border-menta-400 bg-menta-100/60 p-6">
          <h3 className="text-2xl">¿Eres de {v.nombre}?</h3>
          <p className="text-sm text-menta-900/75">
            Cuéntanos cómo se llega, qué se cultiva, sus familias, sus fiestas y sus historias. Con tu aporte completamos esta ficha.
          </p>
          <Link to={aportar("Dato de mi vereda")} className="boton">
            <PenLine size={16} /> Aportar información
          </Link>
        </aside>
      </section>

      {otras.length > 0 && (
        <nav className="mt-16 border-t border-menta-200 pt-8">
          <p className="etiqueta mb-3">Otras veredas de {p.nombre}</p>
          <div className="flex flex-wrap gap-2">
            {otras.map((o) => (
              <Link key={o.id} to={`/territorio/${p.id}/${o.id}`} className="boton-suave">{o.nombre}</Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
