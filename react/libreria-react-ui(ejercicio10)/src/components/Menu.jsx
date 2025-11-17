import React from "react";


export default function Menu({ cambiarPagina }) {
  return (
    <nav className="d-flex justify-content-center gap-4 p-4 bg-dark">
  <button className="btn btn-outline-light btn-lg" onClick={() => cambiarPagina("inicio")}>Inicio</button>
  <button className="btn btn-outline-light btn-lg" onClick={() => cambiarPagina("secciones")}>Secciones</button>
  <button className="btn btn-outline-light btn-lg" onClick={() => cambiarPagina("registro")}>Registro</button>
  <button className="btn btn-outline-light btn-lg" onClick={() => cambiarPagina("contacto")}>Contacto</button>
</nav>
  );
}