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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, isMobile]);


  //Esto es para que la cabezera disminuya se tamaña pero como no se usa lo
  //pongo como comentario
  
  /*useEffect(() => {
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
  }, []);*/

  return (
    <header className="header-container bg-black flex items-center justify-between w-full fixed">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logomovi w-40 h-16 "/>
      </div>
      <IoMdMenu size="3rem" className="boton-menu cursor-pointer" onClick={toggleMenu} color="#fff"/>
      {isOpen && <div className="fondo"></div>}
      <div className={`header-right flex ${isOpen ? "menu active" : "menu"}`}>
        <div className="boton-close w-fit cursor-pointer">
          <IoMdClose size="3rem" onClick={toggleMenu}/>
        </div>
        <a href="#Seccion-Inicio" onClick={toggleMenu}><IoMdHome size= "2rem" className="svg"/>Inicio</a>
        <a href="#Seccion-Nosotros" onClick={toggleMenu}><FaUsers size= "2rem" className="svg" />Nosotros</a>
        <a href="#Seccion-Servicios" onClick={toggleMenu}><MdDesignServices size= "2rem" className="svg"/>Servicios</a>
        <a href="#Seccion-Reseñas" onClick={toggleMenu}><MdOutlineReviews size= "2rem" className="svg"/>Reseñas</a>
        <a href="#Seccion-Contacto" onClick={toggleMenu}><MdOutlineContacts size="2rem" className="svg"/>Contacto</a>
      </div>
    </header>
  );
};


export default Header;