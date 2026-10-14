import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Landmark, Users, MessageCircleHeart } from "lucide-react";
import Montanas from "../components/Montanas.jsx";
import Encabezado from "../components/Encabezado.jsx";
import TarjetaLugar from "../components/TarjetaLugar.jsx";
import { municipio } from "../data/municipio.js";
import { lugares } from "../data/lugares.js";
import { poblados } from "../data/poblados.js";
import SeccionCampo from "../components/SeccionCampo.jsx";

const accesos = [
  { to: "/territorio", icono: Mountain, titulo: "Territorio", texto: "Cabecera, corregimientos y veredas." },
  { to: "/historia", icono: Landmark, titulo: "Historia", texto: "De los Cácharas al municipio de hoy." },
  { to: "/gente", icono: Users, titulo: "Gente", texto: "Fundadores, campesinos y personajes." },
  { to: "/voces", icono: MessageCircleHeart, titulo: "Voces", texto: "Anécdotas que envía la comunidad." },
];

export default function Inicio() {
  return (
    <>
      {/* Portada */}
      <section className="relative overflow-hidden">
        <Montanas />
        <div className="contenedor relative grid gap-6 pb-14 pt-20 sm:pt-28">
          <p className="font-mono text-xs text-menta-800/70">
            {municipio.coordenadas} · {municipio.departamento}, Colombia
          </p>
          <motion.h1
            initial={{ opacity: 0.3, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(4.5rem,15vw,10rem)] leading-[0.9] tracking-tight"
          >
            Cáchi<span className="italic text-menta-600">ra</span>
          </motion.h1>
          <p className="max-w-xl text-xl text-menta-900/80">
            El {municipio.apodo.charAt(0).toLowerCase() + municipio.apodo.slice(1)}, contado por su propia gente: del páramo de Santurbán al valle del río Cáchira.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/lugares" className="boton">
              Descubre qué visitar <ArrowRight size={16} />
            </Link>
            <Link to="/aporta" className="boton-suave">Cuenta tu historia</Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-menta-200 bg-menta-200 md:grid-cols-4">
            {municipio.datos.map((d) => (
              <div key={d.etiqueta} className="bg-white/80 px-5 py-4 backdrop-blur">
                <dt className="text-sm text-menta-800/70">{d.etiqueta}</dt>
                <dd className="font-display text-3xl tabular-nums">{d.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Accesos */}
      <section className="contenedor py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {accesos.map(({ to, icono: Icono, titulo, texto }) => (
            <Link key={to} to={to} className="tarjeta group flex flex-col gap-3 p-6 transition hover:border-menta-400 hover:bg-white">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-menta-100 text-menta-700">
                <Icono size={20} />
              </span>
              <h3 className="text-2xl">{titulo}</h3>
              <p className="text-sm text-menta-900/70">{texto}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-menta-700">
                Ver más <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section className="bg-niebla py-20">
        <div className="contenedor">
          <Encabezado etiqueta="Qué visitar" titulo="Lagunas, cascadas y una virgen diminuta">
            {municipio.clima}
          </Encabezado>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lugares.slice(0, 3).map((l, i) => (
              <TarjetaLugar key={l.id} lugar={l} indice={i + 1} />
            ))}
          </div>
          <Link to="/lugares" className="boton-suave mt-8">
            Ver los {lugares.length} lugares <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Poblados */}
      <section className="contenedor py-20">
        <Encabezado etiqueta="Territorio" titulo="Un municipio, cinco puertas de entrada">
          {municipio.division}
        </Encabezado>
        <div className="flex flex-wrap gap-3">
          {poblados.map((p) => (
            <Link key={p.id} to={`/territorio/${p.id}`} className="boton-suave text-base">
              {p.nombre}
            </Link>
          ))}
        </div>
      </section>
      {/* Mora y cultivos */}
      <SeccionCampo />

      {/* Llamado */}
      <section className="contenedor py-20">
        <div className="tarjeta grid gap-6 bg-gradient-to-br from-menta-100 to-laguna p-8 sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-4xl">Esta página la escribe Cáchira</h2>
            <p className="max-w-xl text-menta-900/75">
              ¿Conoces una leyenda, una receta o la historia de tu vereda? Envíala con una foto y la publicamos después de revisarla.
            </p>
          </div>
          <Link to="/aporta" className="boton justify-center">
            Aportar ahora <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
