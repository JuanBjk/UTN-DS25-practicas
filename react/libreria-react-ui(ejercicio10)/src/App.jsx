import React, { useState } from "react";
import Cabecera from "./components/Cabecera";
import Menu from "./components/Menu";
import Pie from "./components/Pie";
import Inicio from "./pages/Inicio";
import Secciones from "./pages/Secciones.jsx";
import Registro from "./pages/Registro";
import Contacto from "./pages/Contacto";



export default function App() {

  const [pagina, setPagina] = useState("inicio");

  function renderVista() {
    if (pagina === "inicio") return <Inicio />;
    if (pagina === "secciones") return <Secciones />;
   if (pagina === "registro") return <Registro />;
    if (pagina === "contacto") return <Contacto />;
  }

  return (
    <div className="contenedor">
      <Cabecera />
      <Menu cambiarPagina={setPagina} />
      {renderVista()}
      <Pie />
    </div>
  );
}