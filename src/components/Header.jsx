import React from 'react';
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime_logo.png'; // Importa la imagen del logo
import { useState,useEffect } from 'react';

const Header = () => {
  /*Agrege una accion para el sroller cuando bajan mas*/
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
//Cambie el nombre de la clase por que era igual al alt, lo cambio logomovi por movimiento :V
  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="Logo" className={`logomovi ${scrolled ? "logoscrull" : ""}`}/>
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
