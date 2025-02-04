import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ajusta según el puerto del backend

// Función para obtener las ubicaciones desde el backend
export const getLocations = async () => {
  const response = await fetch("http://localhost:3000/reciclaje/locations");
  if (response.ok) {
    return await response.json();
  }
  throw new Error("No se pudieron cargar las ubicaciones.");
};

// Función para agregar una nueva ubicación
export const addLocation = async (location) => {
  const response = await fetch("http://localhost:3000/reciclaje/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  });
  return response;
};

