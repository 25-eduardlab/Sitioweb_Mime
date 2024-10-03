import React from 'react';
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime.png'; // Importa la imagen del logo

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="header-title">MIME</span>
      </div>
      <div className="header-right">
        <span>Inicio</span>
        <span>Nosotros</span>
        <span>Servicios</span>
        <span>Reseñas</span>
        <span>Contacto</span>
      </div>
    </header>
  );
};

export default Header;
