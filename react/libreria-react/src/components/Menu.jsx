import React from "react";


export default function Menu({ cambiarPagina }) {
  return (
    <nav className="menu">
      <button onClick={() => cambiarPagina("inicio")}>Inicio</button>
      <button onClick={() => cambiarPagina("secciones")}>Secciones</button>
      <button onClick={() => cambiarPagina("registro")}>Registrarse</button>
      <button onClick={() => cambiarPagina("contacto")}>Contáctenos</button>
    </nav>
  );
}