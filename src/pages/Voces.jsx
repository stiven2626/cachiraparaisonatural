import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import Encabezado from "../components/Encabezado.jsx";
import { listarPublicados } from "../services/aportes.js";

export default function Voces() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    listarPublicados().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <div className="contenedor py-16">
      <Encabezado etiqueta="Voces de la comunidad" titulo="Lo que cuenta la gente">
        Anécdotas, fotos y datos enviados por cachirenses y visitantes, revisados antes de publicarse.
      </Encabezado>

      {items === null ? (
        <p className="text-menta-800/60">Cargando aportes…</p>
      ) : items.length === 0 ? (
        <div className="tarjeta border-dashed p-10 text-center">
          <Quote className="mx-auto text-menta-400" size={32} />
          <p className="mt-3 text-lg">Aún no hay aportes publicados.</p>
          <p className="text-menta-900/60">Los primeros relatos aparecerán aquí en cuanto sean revisados.</p>
          <Link to="/aporta" className="boton mt-6">Envía el primero</Link>
        </div>
      ) : (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((v) => (
            <article key={v.id} className="tarjeta mb-5 break-inside-avoid space-y-3 p-5">
              {v.fotoUrl && <img src={v.fotoUrl} alt={v.titulo} className="w-full rounded-xl" />}
              <p className="etiqueta">{v.tipo} · {v.lugar}</p>
              <h3 className="text-2xl">{v.titulo}</h3>
              <p className="whitespace-pre-line text-menta-900/75">{v.texto}</p>
              <p className="text-sm text-menta-800/60">{v.autor ? `Por ${v.autor}` : "Aporte anónimo"}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
