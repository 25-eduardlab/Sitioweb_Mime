import React, { useRef, useState, useEffect } from 'react';
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

  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const step = 1;

  useEffect(() => {
    const carousel = carouselRef.current;

    const duplicateContent = () => {
      carousel.innerHTML += carousel.innerHTML;
    };

    duplicateContent();

    carousel.scrollLeft = carousel.scrollWidth / 2;

    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        carousel.scrollLeft -= step;

        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = carousel.scrollWidth / 2;
        }
      }, 25);
    };

    const stopCarousel = () => {
      clearInterval(intervalRef.current);
    };

    carousel.addEventListener('mouseover', stopCarousel);
    carousel.addEventListener('mouseout', startCarousel);

    startCarousel();

    return () => {
      stopCarousel();
      carousel.removeEventListener('mouseover', stopCarousel);
      carousel.removeEventListener('mouseout', startCarousel);
    };
  }, []);

  const scrollLeft = () => {
    const carrusel = carouselRef.current;
    carrusel.scrollLeft -= carrusel.offsetWidth / 4;


  };
  
  const scrollRight = () => {
    const carrusel = carouselRef.current;
    carrusel.scrollLeft += carrusel.offsetWidth / 4;
  };

  return (
    <div className="colaboraciones-container">
      <div className="titulo mb-20 flex">
        <h2 className="font-bold text-left">Colaboraciones que Impulsan el Cambio</h2>
        <GoArrowDownRight size="3rem" className="mx-2 rounded-full" color='#0ea5e9'/>
      </div>
      <div className="logos-container mb-10" >
        <div className="left cursor-pointer transition " >
          <FaAngleLeft size = "4.5rem" onClick={scrollLeft}/>
        </div>
        <div className="carrusel-items flex" ref={carouselRef}>
          {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="logo cursor-pointer" />
        ))}
        </div>
        <div className="rigth cursor-pointer transition" >
          <FaAngleRight size="4.5rem" onClick={scrollRight}/>
        </div>
      </div>
    </div>
  );
};

export default Colaboraciones;