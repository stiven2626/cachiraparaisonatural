import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { listarTodos, cambiarEstado } from "../services/aportes.js";

// Panel de revisión. Hoy los aportes llegan por correo (ver services/aportes.js),
// así que esta lista queda vacía. Cuando conectes un backend, protégelo con autenticación.
const COLOR = {
  pendiente: "bg-amber-100 text-amber-800",
  aprobado: "bg-menta-200 text-menta-900",
  rechazado: "bg-red-100 text-red-700",
};

export default function Moderacion() {
  const [items, setItems] = useState([]);
  const cargar = () => listarTodos().then(setItems);
  useEffect(() => { cargar(); }, []);

  const decidir = async (id, estado) => {
    await cambiarEstado(id, estado);
    cargar();
  };

  const pendientes = items.filter((i) => i.estado === "pendiente").length;

  return (
    <div className="contenedor py-16">
      <p className="etiqueta">Solo administración</p>
      <h1 className="mt-2 text-5xl">Revisión de aportes</h1>
      <p className="mt-2 text-menta-900/70">{pendientes} pendiente{pendientes === 1 ? "" : "s"} de {items.length} en total.</p>

      <div className="mt-10 space-y-4">
        {items.length === 0 && (
          <p className="text-menta-900/60">
            Los aportes llegan a tu correo. Para publicar uno, cópialo en src/data/voces.js.
          </p>
        )}
        {items.map((a) => (
          <article key={a.id} className="tarjeta grid gap-4 p-5 md:grid-cols-[1fr_auto]">
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 font-mono text-xs uppercase ${COLOR[a.estado]}`}>{a.estado}</span>
                <span className="etiqueta">{a.tipo} · {a.lugar}</span>
              </div>
              <h3 className="text-2xl">{a.titulo}</h3>
              <p className="whitespace-pre-line text-sm text-menta-900/75">{a.texto}</p>
              <p className="text-xs text-menta-800/60">
                {a.autor || "Anónimo"} · {new Date(a.fecha).toLocaleString("es-CO")}
                {a.contacto && ` · contacto: ${a.contacto}`}
              </p>
              {a.fotoUrl && <img src={a.fotoUrl} alt="" className="max-w-[220px] rounded-xl" />}
            </div>
            <div className="flex gap-2 md:flex-col">
              <button className="boton-suave" disabled={a.estado === "aprobado"} onClick={() => decidir(a.id, "aprobado")}>
                <Check size={14} /> Aprobar
              </button>
              <button className="boton-suave" disabled={a.estado === "rechazado"} onClick={() => decidir(a.id, "rechazado")}>
                <X size={14} /> Rechazar
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
