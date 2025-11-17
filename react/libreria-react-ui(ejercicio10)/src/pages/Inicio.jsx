import React from "react";
import TarjetaLibro from "../components/TarjetaLibro";
import { librosDestacados } from "../data/libros";

export default function Inicio() {
  return (
    <main className="contenido">
      <h2>Temas destacados</h2>

      <div className="row g-4">
  {librosDestacados.map((libro, index) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
      <TarjetaLibro libro={libro} />
    </div>
  ))}
</div>

    </main>
  );
}