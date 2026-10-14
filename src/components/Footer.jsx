import { Link } from "react-router-dom";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { autor, fuentes, municipio } from "../data/municipio.js";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-menta-200 bg-menta-100/60">
      <div className="contenedor grid gap-8 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-display text-3xl">
            Cáchi<span className="italic text-menta-600">ra</span>
          </p>
          <p className="text-sm text-menta-800/80">
            Proyecto comunitario para dar a conocer el municipio, sus veredas y su gente.
          </p>
        </div>
        <div className="space-y-3">
          <p className="etiqueta">Contacto</p>
          <a href={`mailto:${municipio.contacto.correo}`} className="flex items-center gap-2 text-sm text-menta-800 hover:underline">
            <Mail size={14} /> {municipio.contacto.correo}
          </a>
          <a
            href={`https://wa.me/${municipio.contacto.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-menta-800 hover:underline"
          >
            <Phone size={14} /> {municipio.contacto.telefono}
          </a>
          <Link to="/aporta" className="text-sm font-semibold text-menta-700 underline-offset-4 hover:underline">
            Enviar una historia o foto
          </Link>
        </div>
        <div className="space-y-3">
          <p className="etiqueta">Fuentes</p>
          <ul className="space-y-1 text-sm">
            {fuentes.map((f) => (
              <li key={f.url}>
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-menta-800 hover:underline">
                  {f.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-menta-200">
        <div className="contenedor flex flex-col gap-2 py-5 text-sm text-menta-800/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {autor.nombre}. Diseño, desarrollo y propiedad intelectual.
          </p>
          <div className="flex flex-wrap gap-4">
            {autor.enlaces.map((e) => (
              <a
                key={e.url}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-menta-700 hover:underline"
              >
                {e.nombre} <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
