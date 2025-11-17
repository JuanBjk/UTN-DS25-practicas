import React from "react";


export default function TarjetaLibro({ libro }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
  <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
  <div className="card-body">
    <h5 className="card-title">{libro.titulo}</h5>
    <p className="card-text">{libro.autor}</p>
  </div>
</div>

  );
}
