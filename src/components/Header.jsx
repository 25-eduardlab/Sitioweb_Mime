import React from 'react';
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime.png'; // Importa la imagen del logo

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="header-title">CATEGORIAS</span>
      </div>
      <div className="header-center">
        <input
          type="text"
          placeholder="¿Qué buscas hoy?"
          className="search-input"
        />
      </div>
      <div className="header-right">
        <span>Mis listas</span>
        <span>Mi cuenta</span>
        <span>Carrito</span>
      </div>
    </header>
  );
};

export default Header;
