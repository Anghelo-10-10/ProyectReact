import React, { useState, useEffect } from 'react';
import "../styles/FormReciclable.css"// Asegúrate de que la ruta sea correcta

const FormReciclable = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tipo: "",
    cantidad: 1,
    imagen: ""
  });

  // Estado para almacenar los reciclables en memoria (desde el backend)
  const [reciclables, setReciclables] = useState([]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar datos al backend (que los guarda en memoria)
      const response = await fetch("http://localhost:3000/api/reciclables/agregar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Reciclable agregado:", data);
        fetchReciclables(); // Actualiza la lista
        // Reinicia el formulario
        setFormData({
          nombre: "",
          descripcion: "",
          tipo: "",
          cantidad: 1,
          imagen: ""
        });
      } else {
        console.error("Error al agregar reciclable");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  // Función para obtener la lista de reciclables almacenados en memoria
  const fetchReciclables = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/reciclables");
      const data = await response.json();
      setReciclables(data);
    } catch (error) {
      console.error("Error al obtener reciclables:", error);
    }
  };

  useEffect(() => {
    fetchReciclables();
  }, []);

  return (
    <div className="form-container">
      <h2>Registrar Elemento Reciclable</h2>
      <form onSubmit={handleSubmit} className="reciclable-form">
        <div className="input-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingrese el nombre del reciclable"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Ingrese la descripción del reciclable"
            required
          ></textarea>
        </div>

        <div className="input-group">
          <label htmlFor="tipo">Tipo de Reciclable:</label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un tipo</option>
            <option value="Plástico">Plástico</option>
            <option value="Papel">Papel</option>
            <option value="Vidrio">Vidrio</option>
            <option value="Metal">Metal</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="cantidad">Cantidad (kg):</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="imagen">URL de la Imagen (opcional):</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            placeholder="Ingrese la URL de la imagen"
          />
        </div>

        <button type="submit" className="submit-btn">Registrar Reciclable</button>
      </form>

      <h2>Reciclables Registrados (En memoria)</h2>
      <ul className="reciclables-list">
        {reciclables.map((item, index) => (
          <li key={index}>
            <strong>{item.nombre}</strong> - {item.descripcion} - {item.tipo} - {item.cantidad} kg
            {item.imagen && <div><img src={item.imagen} alt={item.nombre} style={{ maxWidth: "100px" }}/></div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormReciclable;

