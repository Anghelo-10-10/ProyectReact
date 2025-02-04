import { useState } from "react";
import axios from "axios";

const FormularioUbicacion = ({ actualizarMapa }) => {
  const [descripcion, setDescripcion] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/reciclaje/locations", {
        lat: parseFloat(latitud),
        lng: parseFloat(longitud),
        description: descripcion,
      });

      alert("Ubicación agregada con éxito.");
      actualizarMapa(); // Vuelve a cargar los marcadores en el mapa
      setDescripcion("");
      setLatitud("");
      setLongitud("");
    } catch (error) {
      console.error("Error al agregar ubicación:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Latitud"
        value={latitud}
        onChange={(e) => setLatitud(e.target.value)}
        step="any"
        required
      />
      <input
        type="number"
        placeholder="Longitud"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        step="any"
        required
      />
      <button type="submit">Agregar Ubicación</button>
    </form>
  );
};

export default FormularioUbicacion;
