// routes/reciclables.js
const express = require("express");
const router = express.Router();

let reciclables = [];  // Aquí estarían los datos en memoria (idealmente usarías una base de datos)

// Crear un nuevo reciclable
router.post("/", (req, res) => {
  const { description, quantity, type } = req.body;
  const newReciclable = { id: Date.now(), description, quantity, type };
  reciclables.push(newReciclable);
  res.status(201).json(newReciclable);
});

// Leer los reciclables
router.get("/", (req, res) => {
  res.json(reciclables);
});

// Eliminar reciclable
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  reciclables = reciclables.filter(item => item.id !== parseInt(id));
  res.status(204).end();
});

module.exports = router;
