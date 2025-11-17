import React from "react";


export default function TarjetaLibro({ libro }) {
  return (
    <div className="tarjeta">
      <h3>{libro.tema}</h3>
      <img src={libro.imagen} alt={libro.titulo} />
      <p><strong>{libro.titulo}</strong></p>
      <p>{libro.autor}</p>
    </div>
  );
}
