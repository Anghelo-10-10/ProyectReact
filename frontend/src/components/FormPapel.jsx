// FormPapel.jsx
import React, { useState } from "react";
import '../styles/formStyles.css';  // Importamos los estilos

const FormPapel = () => {
  const [tipoPapel, setTipoPapel] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Papel reciclado:", { tipoPapel, cantidad, descripcion, fecha });
    // Aquí puedes hacer la lógica para enviar los datos al backend o actualizarlos
  };

  return (
    <div className="form-container">
      <h2>Agregar Papel Reciclable</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipoPapel">Tipo de Papel:</label>
          <input
            type="text"
            id="tipoPapel"
            value={tipoPapel}
            onChange={(e) => setTipoPapel(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad (kg):</label>
          <input
            type="number"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
            min="1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="fecha">Fecha de Reciclaje:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>

        <button type="submit">Agregar Papel</button>
      </form>
    </div>
  );
};

export default FormPapel;

