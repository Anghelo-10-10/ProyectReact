import React, { useState, useEffect } from "react";
import "../styles/ReciclablesList.css";

const ReciclablesList = () => {
  // Usamos el estado para almacenar los reciclables
  const [reciclables, setReciclables] = useState([]);

  // Simulando la obtención de datos de reciclables (en un escenario real, esto sería desde una API)
  useEffect(() => {
    // Este es un ejemplo de datos que podrías recuperar de un backend
    const datosReciclables = [
      {
        id: 1,
        tipo: "Plástico",
        cantidad: 5,
        estado: "Reciclado",
        descripcion: "Botellas de plástico",
        fecha: "2025-02-05",
      },
      {
        id: 2,
        tipo: "Papel",
        cantidad: 10,
        estado: "A reciclar",
        descripcion: "Periódicos y revistas",
        fecha: "2025-02-01",
      },
      {
        id: 3,
        tipo: "Vidrio",
        cantidad: 3,
        estado: "Reciclado",
        descripcion: "Frascos de vidrio",
        fecha: "2025-02-04",
      },
      {
        id: 4,
        tipo: "Metales",
        cantidad: 7,
        estado: "A reciclar",
        descripcion: "Latas y otros metales",
        fecha: "2025-02-02",
      },
    ];
    setReciclables(datosReciclables);
  }, []);

  return (
    <div className="reciclables-list-container">
      <h2>Lista de Reciclables Agregados</h2>
      
      <div className="reciclables-list">
        {reciclables.length === 0 ? (
          <p>No hay reciclables agregados aún.</p>
        ) : (
          reciclables.map((reciclable) => (
            <div className="reciclable-card" key={reciclable.id}>
              <h3>{reciclable.tipo}</h3>
              <p><strong>Cantidad:</strong> {reciclable.cantidad} kg</p>
              <p><strong>Estado:</strong> {reciclable.estado}</p>
              <p><strong>Descripción:</strong> {reciclable.descripcion}</p>
              <p><strong>Fecha de Reciclaje:</strong> {reciclable.fecha}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReciclablesList;
