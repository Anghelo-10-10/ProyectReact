import React from "react";
import { Link } from "react-router-dom";
import "../styles/style2.css"; // Asegúrate de que el archivo existe y está correctamente vinculado

const Reciclables = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/media/images/naturals.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      {/* Navbar separado del fondo */}
      <div className="menu">
        <img src="/media/images/planeta-tierra.png" className="logo" alt="Logo" />
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="/media/images/menu.png" className="menu-icono" alt="Menú" />
        </label>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/mapa">Mapa</Link></li>
            <li><Link to="#">Visión</Link></li>
            <li><Link to="#">Misión</Link></li>
          </ul>
        </nav>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="card-container">
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="/media/images/plastico.png" alt="Plástico" />
            <div className="card-body">
              <h5 className="card-title">Plástico</h5>
              <p className="card-text">Recicla botellas y todo tipo de plastico.</p>
              <Link to="/detalles-plastico" className="card-button">Más Información</Link>
              <Link to="/reciclables/Agregar-papel" className="card-button secondary">Agregar Reciclaje</Link>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/media/images/papel.png" alt="Papel" />
            <div className="card-body">
              <h5 className="card-title">Papel</h5>
              <p className="card-text">Recicla periódicos, revistas y más.</p>
              <Link to="/detalles-papel" className="card-button">Más Información</Link>
              <Link to="/reciclables/Agregar-papel" className="card-button secondary">Agregar Reciclaje</Link>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/media/images/vidrio.png" alt="Vidrio" />
            <div className="card-body">
              <h5 className="card-title">Vidrio</h5>
              <p className="card-text">Recicla botellas y frascos de vidrio.</p>
              <Link to="/detalles-vidrio" className="card-button">Más Información</Link>
              <Link to="/reciclables/Agregar-papel" className="card-button secondary">Agregar Reciclaje</Link>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/media/images/metal.png" alt="Metales" />
            <div className="card-body">
              <h5 className="card-title">Metales</h5>
              <p className="card-text">Recicla hierro, aluminio, etc.</p>
              <Link to="/detalles-metales" className="card-button">Más Información</Link>
              <Link to="/reciclables/Agregar-papel" className="card-button secondary">Agregar Reciclaje</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reciclables;
