import React from "react";
import TarjetaLibro from "../components/TarjetaLibro";
import { librosDestacados } from "../data/libros";

export default function Inicio() {
  return (
    <main className="contenido">
      <h2>Temas destacados</h2>

      <div className="lista-libros">
        {librosDestacados.map((libro, index) => (
          <TarjetaLibro key={index} libro={libro} />
        ))}
      </div>
    </main>
  );
}