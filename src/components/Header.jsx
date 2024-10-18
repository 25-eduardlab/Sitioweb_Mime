
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime_logo.png'; // Importa la imagen del logo
import menu from '../svg/menu.svg';
import close from '../svg/close.svg';
import React, { useState,useEffect } from 'react';

const Header = ({ scrollToSection}) => {
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
        <img src={menu} alt="" />
      </div>
      <div className={`header-right ${isOpen ? "menu active" : "menu"}`}>
        <span onClick = {() => scrollToSection('seccion1')}>Inicio</span>
        <span onClick = {() => scrollToSection('seccion2')}>Nosotros</span>
        <span onClick = {() => scrollToSection('seccion3')}>Servicios</span>
        <span onClick = {() => scrollToSection('seccion4')}>Reseñas</span>
        <span onClick = {() => scrollToSection('seccion5')}>Contacto</span>
      </div>
    </header>
  );
};


export default Header;
