import { MapPin, Camera } from "lucide-react";
import Credito from "./Credito.jsx";

const TONOS = {
  menta: ["#a5df8e", "#eaffdc"],
  laguna: ["#a8d8d2", "#e3f3f1"],
  salvia: ["#c4d9b8", "#f0f5ec"],
};

function Ilustracion({ tono, semilla }) {
  const [oscuro, claro] = TONOS[tono] || TONOS.menta;
  const s = semilla * 37;
  return (
    <svg viewBox="0 0 240 150" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="240" height="150" fill={claro} />
      <circle cx={170 - (s % 60)} cy="40" r="15" fill="#ffffff" />
      <path d={`M0 ${70 + (s % 15)} Q 60 ${30 + (s % 25)} 120 ${55 + (s % 20)} T 240 ${45 + (s % 18)} L240 150 L0 150Z`} fill={oscuro} opacity="0.6" />
      <path d={`M0 ${100 + (s % 10)} Q 80 ${75 + (s % 20)} 150 95 T 240 ${85 + (s % 12)} L240 150 L0 150Z`} fill={oscuro} />
    </svg>
  );
}

export default function TarjetaLugar({ lugar, indice = 1 }) {
  return (
    <article className="tarjeta group flex flex-col overflow-hidden shadow-suave transition hover:-translate-y-1">
      <div className="relative aspect-[16/10]">
        {lugar.foto ? (
          <>
            <img src={lugar.foto} alt={lugar.nombre} loading="lazy" className="h-full w-full object-cover" />
            {lugar.credito && <Credito credito={lugar.credito} className="absolute bottom-2 right-2" />}
          </>
        ) : (
          <>
            <Ilustracion tono={lugar.tono} semilla={indice} />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-menta-800">
              <Camera size={12} /> Foto pendiente
            </span>
          </>
        )}
      </div>
      <div className="space-y-2 p-5">
        <p className="etiqueta flex items-center gap-1.5">
          <MapPin size={12} /> {lugar.categoria} · {lugar.ubicacion}
        </p>
        <h3 className="text-2xl">{lugar.nombre}</h3>
        <p className="text-[0.95rem] text-menta-900/70">{lugar.descripcion}</p>
      </div>
    </article>
  );
}
