import React,{useRef,useEffect,useState} from 'react';
import '../styles/testimonios.css';
import Gedecor from '../img/gedecord.png';
import Multitest from '../img/Multitest.png';
import Parga from '../img/parga.png';

const Testimonios = () => {
  const logos = [
    {
      img: Gedecor, 
      title: 'GEDECOR',
      description: 'Servicios de decoración',
    },
    {
      img: Multitest, 
      title: 'multitest',
      description: 'Pruebas de rendimiento',
    },
    {
      img: Parga, 
      title: 'PARGA',
      description: 'Operador Logístico',
    },
  ];

const carruselRef = useRef(null);
const step = 1;
let intervalo = useRef(null);

useEffect(() => {
  const carrusel = carruselRef.current;

  const duplicarContenido = () => {
    carrusel.innerHTML += carrusel.innerHTML;
  };

  duplicarContenido();

  carrusel.scrollLeft = carrusel.scrollWidth / 2;

  const start = () => {
    intervalo.current = setInterval(() => {
      carrusel.scrollLeft -= step;
      
      if (carrusel.scrollLeft <= 0) {
        carrusel.scrollLeft = carrusel.scrollWidth / 2;
      }
    }, 25);
  };

  const stop = () => {
    clearInterval(intervalo.current);
  };

  carrusel.addEventListener("mouseover", stop);
  carrusel.addEventListener("mouseout", start);

  start();

  return () => {
    stop();
    carrusel.removeEventListener("mouseover", stop);
    carrusel.removeEventListener("mouseout", start);
  };
}, []);



  return (
    <div className="testimonios-container">
      <h2>
        <span className="highlight">Testimonios</span> Inspiradores
      </h2>
      <div className="video-container">
      <iframe width="1000" height="450" src="https://www.youtube.com/embed/Rgh9Lz3BYyY?si=xD_2k8aTCbeg0EKJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
      <div className="otras-voces-container">
        <p className="otras-voces-text">Otras voces ↘</p>
        <div className="logos-container"ref={carruselRef}>
          <div className="logos">
            {logos.map((logo, index) => (
              <div key={index} className="logo-card">
                <img src={logo.img} alt={logo.title} />
                <div className="logo-info">
                  <h3>{logo.title}</h3>
                  <p>{logo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
