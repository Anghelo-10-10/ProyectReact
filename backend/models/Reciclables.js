const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Reciclable = sequelize.define("Reciclable", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  imagen: {
    type: DataTypes.STRING, // URL de la imagen
    allowNull: true,
  },
});

module.exports = Reciclable;
