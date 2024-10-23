import React from 'react';
import '../styles/header.css'; // Importa los estilos de la cabecera
import logo from '../img/mime_logo.png'; // Importa la imagen del logo
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { useState,useEffect } from 'react';

const Header = () => {
  /*Agrege una accion para el sroller cuando bajan mas*/
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (isOpen){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
    return() =>{
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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

//Cambie el nombre de la clase por que era igual al alt, lo cambio logomovi por movimiento 
  return (
    <header className={`header-container bg-black ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="Logo" className={`logomovi ${scrolled ? "logoscrull" : ""}`}/>
      </div>
      <IoMdMenu size="3rem" className="boton-menu" onClick={toggleMenu}/>
      {isOpen && <div className="fondo"></div>}
      <div className={`header-right ${isOpen ? "menu active" : "menu"}`}>
        <div className="boton-close">
          <IoMdClose size="3rem" onClick={toggleMenu}/>
        </div>
        <a href="#"><IoMdHome size= "2rem" className="svg"/>Inicio</a>
        <a href="#"><FaUsers size= "2rem" className="svg"/>Nosotros</a>
        <a href="#"><MdDesignServices size= "2rem" className="svg"/>Servicios</a>
        <a href="#"><MdOutlineReviews size= "2rem" className="svg"/>Reseñas</a>
        <a href="#"><MdOutlineContacts size="2rem" className="svg"/>Contacto</a>
      </div>
    </header>
  );
};


export default Header;