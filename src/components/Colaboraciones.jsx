import React from 'react';
import '../styles/colaboraciones.css';
import cisco from '../svg/cisco.svg';
import intel from '../svg/intel.svg';
import lenovo from '../svg/lenovo.svg';
import microsoft from '../svg/microsoft.svg';
import ruckus from '../svg/ruckus.svg';
import { GoArrowDownRight } from "react-icons/go";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Colaboraciones = () => {
  const logos = [
    { src: cisco, alt: 'Cisco' }, // Reemplaza con las rutas reales de tus imágenes
    { src: intel, alt: 'Intel' },
    { src: lenovo, alt: 'Lenovo' },
    { src: microsoft, alt: 'Microsoft' },
    { src: ruckus, alt: 'Ruckus' },
  ];
  
  return (
    <div className="colaboraciones-container">
      <div className="titulo mb-20">
        <h2>Colaboraciones que Impulsan el Cambio<GoArrowDownRight size="2.5rem" className="mx-2"/></h2>
      </div>
      <div className="logos-container mb-10">
        <div className="left">
          <FaAngleLeft size = "5rem" color='#fff'/>
        </div>
        <div className="carrusel-items flex">
          {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="logo" />
        ))}
        </div>
        <div className="rigth">
          <FaAngleRight size="5rem" color='#fff'/>
        </div>
      </div>
    </div>
  );
};

export default Colaboraciones;
