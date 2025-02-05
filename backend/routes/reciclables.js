// routes/reciclables.js
const express = require('express');
const router = express.Router();

// Arreglo en memoria para almacenar reciclables
let reciclables = [];

// Ruta POST para agregar un reciclable
router.post('/agregar', (req, res) => {
  const reciclable = req.body;
  reciclables.push(reciclable);
  console.log("Reciclable agregado:", reciclable);
  res.status(201).json({ message: "Reciclable agregado exitosamente", reciclable });
});

// Ruta GET para obtener todos los reciclables
router.get('/', (req, res) => {
  res.status(200).json(reciclables);
});

module.exports = router;
