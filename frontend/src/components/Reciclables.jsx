import React from "react";
import "../styles/styles3.css";
import { Link } from "react-router-dom";

const Reciclables = () => {
  return (
    <header className="reciclables-container">
      <div className="menu">
        <img
          src="/media/images/planeta-tierra.png"
          className="logo"
          alt="Logo"
        />
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img
            src="/media/images/menu.png"
            className="menu-icono"
            alt="Menú"
          />
        </label>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/mapa">Mapa</Link>
            </li>
            <li>
              <Link to="#">Visión</Link>
            </li>
            <li>
              <Link to="#">Misión</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="card-container">
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src="/media/images/reciclables-1.png"
              alt="Plástico"
            />
            <div className="card-body">
              <h5 className="card-title">Plástico</h5>
              <p className="card-text">Recicla botellas y otros productos de plástico.</p>
              <Link to="/detalles-plastico" className="card-button">
                Más Información
              </Link>
            </div>
          </div>

          <div className="card">
            <img
              className="card-img-top"
              src="/media/images/reciclables-2.png"
              alt="Papel"
            />
            <div className="card-body">
              <h5 className="card-title">Papel</h5>
              <p className="card-text">Recicla periódicos, revistas y más.</p>
              <Link to="/detalles-papel" className="card-button">
                Más Información
              </Link>
            </div>
          </div>

          <div className="card">
            <img
              className="card-img-top"
              src="/media/images/reciclables-3.png"
              alt="Vidrio"
            />
            <div className="card-body">
              <h5 className="card-title">Vidrio</h5>
              <p className="card-text">Recicla botellas y frascos de vidrio.</p>
              <Link to="/detalles-vidrio" className="card-button">
                Más Información
              </Link>
            </div>
          </div>

          {/* Nueva carta de Metales */}
          <div className="card">
            <img
              className="card-img-top"
              src="/media/images/reciclables-4.png"
              alt="Metales"
            />
            <div className="card-body">
              <h5 className="card-title">Metales</h5>
              <p className="card-text">Recicla hierro, aluminio, etc.</p>
              <Link to="/detalles-metales" className="card-button">
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Reciclables;
