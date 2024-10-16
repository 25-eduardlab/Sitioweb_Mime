import React, { useState, useEffect } from 'react';
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime_logo.png'; // Importa la imagen del logo

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efecto para cambiar la clase de la cabecera cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para alternar el menú hamburguesa en móviles
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <span>Inicio</span>
        <span>Nosotros</span>
        <span>Servicios</span>
        <span>Reseñas</span>
        <span>Contacto</span>
      </div>
      {/* Botón de menú hamburguesa para móviles */}
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      
      {/* Menú deslizante en móviles */}
      {menuOpen && (
        <nav className="side-menu">
          <span className="close-menu" onClick={toggleMenu}>&times;</span>
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Reseñas</li>
            <li>Contacto</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
