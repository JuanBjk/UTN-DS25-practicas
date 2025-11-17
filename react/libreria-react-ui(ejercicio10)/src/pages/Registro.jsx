import React, { useState } from "react";

export default function Registro() {

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    nacimiento: "",
    email: "",
    contraseña: "",
    sexo: "",
    tema: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Formulario enviado ✔️");
    console.log(formData);
  }

  return (
    <section className="contenido">

      <h2>Registrarse</h2>

      <form onSubmit={handleSubmit} className="formulario">

        <label>nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />

        <label>apellido:</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />

        <label>fecha de nacimiento:</label>
        <input type="date" name="nacimiento" value={formData.nacimiento} onChange={handleChange} />

        <label>email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>contraseña:</label>
        <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} />

        <label>sexo:</label>
        <div className="fila-radio">
          <label>
            <input
              type="radio"
              name="sexo"
              value="masculino"
              checked={formData.sexo === "masculino"}
              onChange={handleChange}
            /> masculino
          </label>

          <label>
            <input
              type="radio"
              name="sexo"
              value="femenino"
              checked={formData.sexo === "femenino"}
              onChange={handleChange}
            /> femenino
          </label>
        </div>

        <label>tema favorito:</label>
        <select name="tema" value={formData.tema} onChange={handleChange}>
          <option value="">seleccionar...</option>
          <option value="ficcion">ficción</option>
          <option value="infantil">infantil</option>
          <option value="autoayuda">autoayuda</option>
          <option value="ciencia">ciencia</option>
        </select>

        <button type="submit">registrarme</button>
      </form>

    </section>
  );
}
