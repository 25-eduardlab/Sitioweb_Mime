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

  return (
    <header className={`header-container bg-black flex items-center justify-between w-full fixed ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="Logo" className={`logomovi w-40 h-16 ${scrolled ? "logoscrull" : ""}`}/>
      </div>
      <IoMdMenu size="3rem" className="boton-menu cursor-pointer" onClick={toggleMenu} color="#fff"/>
      {isOpen && <div className="fondo"></div>}
      <div className={`header-right flex ${isOpen ? "menu active" : "menu"}`}>
        <div className="boton-close w-fit cursor-pointer">
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