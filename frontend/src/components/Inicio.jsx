import React from "react";
import "../styles/style2.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <header className="inicio-container">
      <video autoPlay muted loop id="video-background">
        <source src="/media/videos/video2.mp4" type="video/mp4" />
      </video>
      <div className="obscure"></div>
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
      <div className="card-container">
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="posicion.png" alt="Ubicaciones" />
            <div className="card-body">
              <h5 className="card-title">Descubre Dónde Puedes Reciclar</h5>
              <p className="card-text">Visualiza las ubicaciones de reciclaje cercanas.</p>
              <a href="/registro" className="card-button">Ver Ubicaciones</a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/media/images/reciclar.png" alt="Reciclables" />
            <div className="card-body">
              <h5 className="card-title">Reciclables</h5>
              <p className="card-text">Conoce qué materiales puedes reciclar.</p>
              <Link to="/Reciclables" className="card-button">Ver elementos</Link>

            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/media/images/reciclar-senal.png" alt="Información" />
            <div className="card-body">
              <h5 className="card-title">Más Información</h5>
              <p className="card-text">Explora más sobre reciclaje y su impacto.</p>
              <a href="/datos" className="card-button">Ver Ubicaciones</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Inicio;

