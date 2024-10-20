import React from 'react';
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime_logo.png'; // Importa la imagen del logo
import menu from '../svg/menu.svg';
import close from '../svg/close.svg';
import { IoMdHome } from "react-icons/io";
import contactos from '../svg/contactos.svg';
import nosotros from '../svg/nosotros.svg';
import resenas from '../svg/resenas.svg';
import servicios from '../svg/servicios.svg';
import { useState,useEffect } from 'react';

const Header = () => {
  /*Agrege una accion para el sroller cuando bajan mas*/
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }

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
    <header className={`header-container bg-black ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="Logo" className={`logomovi ${scrolled ? "logoscrull" : ""}`}/>
      </div>
      <div className="boton-menu" onClick={toggleMenu}>
        <img src={isOpen ? close : menu} alt="" />
      </div>
      {isOpen && <div className="fondo"></div>}
      <div className={`header-right ${isOpen ? "menu active" : "menu"}`}>
        <div className="boton-close" onClick={toggleMenu}>
          <img src= {isOpen ? close : menu} alt="" />
        </div>
        <span><IoMdHome size= "2rem" className="svg"/>Inicio</span>
        <span>
          <img src={nosotros} alt="" />
          Nosotros
        </span>
        <span>
          <img src={servicios} alt="" />
          Servicios
        </span>
        <span>
          <img src={resenas} alt="" />
          Reseñas
        </span>
        <span>
          <img src={contactos} alt="" />
          Contacto
        </span>
      </div>
    </header>
  );
};


export default Header;
