import React from 'react';
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime_logo.png'; // Importa la imagen del logo
import { useState,useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);  
      } else {
        setScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="Logo" className={`logo ${scrolled ? "logoscrull" : ""}`} />
        <span className="header-title"></span>
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
