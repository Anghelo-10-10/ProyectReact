import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getLocations, addLocation } from "../api/api";

// Definir un icono personalizado
const customIcon = L.icon({
  iconUrl: "/posicion.png", // Ruta de la imagen del icono (coloca la imagen en public/)
  iconSize: [30, 30], // Tamaño del icono
  iconAnchor: [15, 30], // Punto de anclaje del icono
  popupAnchor: [0, -30], // Posición del popup respecto al icono
});

const Mapa = () => {
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [locations, setLocations] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([0, 0], 2);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }

    const loadLocations = async () => {
      const data = await getLocations();
      setLocations(data);
    };

    loadLocations();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current.removeLayer(layer);
        }
      });

      locations.forEach(({ lat, lng, description }) => {
        L.marker([lat, lng], { icon: customIcon }) // Usa el icono personalizado
          .addTo(mapRef.current)
          .bindPopup(description);
      });
    }
  }, [locations]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !latitude || !longitude) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newLocation = {
      description,
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    };

    const response = await addLocation(newLocation);
    if (response.ok) {
      alert("Ubicación agregada exitosamente.");
      setDescription("");
      setLatitude("");
      setLongitude("");

      const newLocations = await getLocations();
      setLocations(newLocations);
    } else {
      alert("Hubo un error al agregar la ubicación.");
    }
  };

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <form onSubmit={handleSubmit}>
        <h3>Agregar Nueva Ubicación</h3>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la ubicación"
          required
        />
        <label>Latitud:</label>
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Latitud"
          step="any"
          required
        />
        <label>Longitud:</label>
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Longitud"
          step="any"
          required
        />
        <button type="submit">Agregar Ubicación</button>
      </form>
    </div>
  );
};

export default Mapa;
