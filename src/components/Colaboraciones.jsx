import React, { useRef, useState, useEffect } from 'react';
import '../styles/colaboraciones.css';
import cisco from '../img/Ciscoo.png';
import intel from '../img/Intell.png';
import lenovo from '../img/Lenovo.png';
import microsoft from '../img/Microfost1.png';
import Brother from '../img/Brother.png';
import CambiumNetworks from '../img/CambiumNetworks.png';
import Dell from '../img/dell.png';
import Epson from '../img/Epsonn.png';
import LG from '../img/Lggg.png';
import Samsung from '../img/Samsung.png';
import TPLink from '../img/TPLink.png';
import Ubiquiti from '../img/Ubiquiti.png';
import WesterDigital from '../img/WesternDigital.png';
import Zebra from '../img/Zebra.png';
import Hp from '../img/HPP.png';
import { GoArrowDownRight } from "react-icons/go";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Colaboraciones = () => {
  const logos = [
    { src: cisco, alt: 'Cisco' }, // Reemplaza con las rutas reales de tus imágenes
    { src: intel, alt: 'Intel' },
    { src: lenovo, alt: 'Lenovo' },
    { src: microsoft, alt: 'Microsoft' },
    { src: Brother, alt: 'Brother' }, // Reemplaza con las rutas reales de tus imágenes
    { src: CambiumNetworks, alt: 'CambiumNetworks'},
    { src: Dell, alt: 'Dell' },
    { src: Epson, alt: 'Epson' },
    { src: LG, alt: 'LG' }, // Reemplaza con las rutas reales de tus imágenes
    { src: Samsung, alt: 'Samsung' },
    { src: TPLink, alt: 'TPLink' },
    { src: Ubiquiti, alt: 'Ubiquiti' },
    { src: WesterDigital, alt: 'WesterDigital' }, // Reemplaza con las rutas reales de tus imágenes
    { src: Zebra, alt: 'Zebra' },
    { src: Hp, alt: 'HP' },
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
        <div className="carrusel-items" ref={carouselRef}>
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