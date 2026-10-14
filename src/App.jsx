import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Territorio from "./pages/Territorio.jsx";
import Poblado from "./pages/Poblado.jsx";
import Vereda from "./pages/Vereda.jsx";
import Lugares from "./pages/Lugares.jsx";
import Historia from "./pages/Historia.jsx";
import Gente from "./pages/Gente.jsx";
import Voces from "./pages/Voces.jsx";
import Aporta from "./pages/Aporta.jsx";
import Moderacion from "./pages/Moderacion.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";

function SubirAlCambiar() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SubirAlCambiar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/territorio" element={<Territorio />} />
          <Route path="/territorio/:id" element={<Poblado />} />
          <Route path="/territorio/:id/:vereda" element={<Vereda />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/gente" element={<Gente />} />
          <Route path="/voces" element={<Voces />} />
          <Route path="/aporta" element={<Aporta />} />
          <Route path="/moderacion" element={<Moderacion />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
