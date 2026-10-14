import { Link } from "react-router-dom";

export default function NoEncontrado() {
  return (
    <div className="contenedor py-28 text-center">
      <p className="etiqueta">Error 404</p>
      <h1 className="mt-3 text-6xl">Este sendero no existe</h1>
      <p className="mt-3 text-menta-900/70">La página que buscas no está en el mapa.</p>
      <Link to="/" className="boton mt-8">Volver al inicio</Link>
    </div>
  );
}
