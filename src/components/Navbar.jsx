import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PenLine } from "lucide-react";

const enlaces = [
  ["/territorio", "Territorio"],
  ["/lugares", "Qué visitar"],
  ["/historia", "Historia"],
  ["/gente", "Gente"],
  ["/voces", "Voces"],
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const clase = ({ isActive }) =>
    `rounded-full px-3 py-1.5 text-sm transition ${
      isActive ? "bg-menta-200 text-menta-900" : "text-menta-800/80 hover:bg-menta-100 hover:text-menta-900"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-menta-200/70 bg-menta-50/85 backdrop-blur-md">
      <div className="contenedor flex items-center gap-4 py-3">
        <Link to="/" className="font-display text-3xl text-tinta" onClick={() => setAbierto(false)}>
          Cáchi<span className="italic text-menta-600">ra</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Secciones">
          {enlaces.map(([to, texto]) => (
            <NavLink key={to} to={to} className={clase}>
              {texto}
            </NavLink>
          ))}
        </nav>

        <Link to="/aporta" className="boton hidden md:inline-flex">
          <PenLine size={16} /> Aporta tu historia
        </Link>

        <button
          className="ml-auto rounded-full p-2 text-menta-800 hover:bg-menta-100 md:hidden"
          onClick={() => setAbierto(!abierto)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
        >
          {abierto ? <X /> : <Menu />}
        </button>
      </div>

      {abierto && (
        <nav className="contenedor flex flex-col gap-1 pb-4 md:hidden" aria-label="Secciones">
          {enlaces.map(([to, texto]) => (
            <NavLink key={to} to={to} className={clase} onClick={() => setAbierto(false)}>
              {texto}
            </NavLink>
          ))}
          <Link to="/aporta" className="boton mt-2 justify-center" onClick={() => setAbierto(false)}>
            <PenLine size={16} /> Aporta tu historia
          </Link>
        </nav>
      )}
    </header>
  );
}
