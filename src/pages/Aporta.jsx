import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, CheckCircle2, Copy } from "lucide-react";
import Encabezado from "../components/Encabezado.jsx";
import { crearAporte } from "../services/aportes.js";
import { poblados } from "../data/poblados.js";
import { veredas, nombreAporte } from "../data/veredas.js";
import { municipio } from "../data/municipio.js";

const TIPOS = ["Anécdota", "Historia", "Leyenda", "Personaje", "Lugar turístico", "Dato de mi vereda", "Foto", "Receta"];
const LUGARES = [...poblados.map((p) => p.nombre), ...veredas.map(nombreAporte), "Otra vereda", "Todo el municipio"];

export default function Aporta() {
  const [params] = useSearchParams();
  const inicial = {
    tipo: TIPOS.includes(params.get("tipo")) ? params.get("tipo") : "Anécdota",
    lugar: LUGARES.includes(params.get("lugar")) ? params.get("lugar") : "Cabecera municipal",
    titulo: "",
    texto: "",
    autor: "",
    contacto: "",
    autorizo: false,
  };
  const [form, setForm] = useState(inicial);
  const [foto, setFoto] = useState(null);
  const [estado, setEstado] = useState({ enviando: false, error: "", listo: false });

  const cambiar = (campo) => (e) =>
    setForm({ ...form, [campo]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  async function enviar(e) {
    e.preventDefault();
    if (!form.titulo.trim() || !form.texto.trim()) {
      return setEstado({ error: "Escribe un título y tu relato antes de enviar." });
    }
    if (!form.autorizo) {
      return setEstado({ error: "Marca la casilla de autorización para poder publicar tu aporte." });
    }
    setEstado({ enviando: true });
    try {
      await crearAporte({ ...form, foto });
      setForm({ ...inicial, tipo: form.tipo, lugar: form.lugar });
      setFoto(null);
      e.target.reset();
      setEstado({ listo: true });
    } catch (err) {
      setEstado({ error: err.message || "No pudimos guardar tu aporte. Inténtalo otra vez." });
    }
  }

  const copiar = () => navigator.clipboard?.writeText(municipio.contacto.correo).catch(() => {});

  return (
    <div className="contenedor py-16">
      <Encabezado etiqueta="Aporta" titulo="Esta página la escribe Cáchira">
        Cuenta una anécdota, una leyenda, la historia de tu vereda o de un personaje del pueblo. Todo aporte se revisa antes de publicarse.
      </Encabezado>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <form onSubmit={enviar} noValidate className="tarjeta grid gap-5 p-6 shadow-suave sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-semibold">
              Qué quieres aportar
              <select className="campo" value={form.tipo} onChange={cambiar("tipo")}>
                {TIPOS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold">
              De qué lugar
              <select className="campo" value={form.lugar} onChange={cambiar("lugar")}>
                {LUGARES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
          </div>

          <label className="grid gap-1.5 text-sm font-semibold">
            Título
            <input className="campo" maxLength={140} placeholder="Ej.: La noche que creció el río" value={form.titulo} onChange={cambiar("titulo")} />
          </label>

          <label className="grid gap-1.5 text-sm font-semibold">
            Tu relato
            <textarea
              className="campo min-h-[150px] resize-y"
              maxLength={4000}
              placeholder="Cuéntalo como se lo contarías a un visitante: quién, cuándo, dónde y qué pasó."
              value={form.texto}
              onChange={cambiar("texto")}
            />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-semibold">
              <span>Firma <span className="font-normal text-menta-800/60">(opcional, se publica)</span></span>
              <input className="campo" maxLength={80} placeholder="Nombre o apodo" value={form.autor} onChange={cambiar("autor")} />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold">
              <span>Contacto <span className="font-normal text-menta-800/60">(opcional, privado)</span></span>
              <input className="campo" maxLength={120} placeholder="Teléfono o correo" value={form.contacto} onChange={cambiar("contacto")} />
            </label>
          </div>

          <label className="grid gap-1.5 text-sm font-semibold">
            <span>Foto <span className="font-normal text-menta-800/60">(opcional, hasta 1,5 MB)</span></span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFoto(e.target.files[0] || null)}
              className="text-sm file:mr-3 file:rounded-full file:border-0 file:bg-menta-100 file:px-4 file:py-2 file:font-semibold file:text-menta-800 hover:file:bg-menta-200"
            />
          </label>

          <label className="flex items-start gap-3 text-sm text-menta-900/75">
            <input type="checkbox" className="mt-1 accent-menta-500" checked={form.autorizo} onChange={cambiar("autorizo")} />
            Autorizo publicar este aporte. Si aparecen otras personas en la foto o el relato, cuento con su permiso.
          </label>

          {estado.error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{estado.error}</p>}
          {estado.listo && (
            <p role="status" className="flex items-center gap-2 rounded-xl bg-menta-100 px-4 py-3 text-sm text-menta-900">
              <CheckCircle2 size={18} className="text-menta-600" />
              Recibido. Tu aporte queda en revisión y aparecerá en Voces cuando se apruebe.
            </p>
          )}

          <button type="submit" className="boton justify-self-start" disabled={estado.enviando}>
            <Send size={16} /> {estado.enviando ? "Enviando…" : "Enviar aporte"}
          </button>
        </form>

        <aside className="space-y-6">
          <div className="tarjeta space-y-3 p-6">
            <p className="etiqueta">Contacto directo</p>
            <p className="text-sm text-menta-900/75">¿Fotos en alta resolución o una historia en audio? Escríbenos.</p>
            <div className="flex flex-wrap items-center gap-2">
              <code className="select-all rounded-lg bg-menta-100 px-2.5 py-1 font-mono text-sm">{municipio.contacto.correo}</code>
              <button onClick={copiar} className="boton-suave py-1"><Copy size={14} /> Copiar</button>
            </div>
          </div>
          <div className="tarjeta space-y-2 p-6">
            <p className="etiqueta">Qué buscamos</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-menta-900/75">
              <li>Historias y nombres de las veredas</li>
              <li>Leyendas y anécdotas</li>
              <li>Fiestas, recetas y tradiciones</li>
              <li>Fotos antiguas y actuales</li>
              <li>Rutas para llegar a cada lugar</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
