import React, { useState, useEffect } from 'react';
import '../styles/nuestrosproyectos.css';
import HolaIA from '../img/HolaIA.jpg';
import IA2 from '../img/IA2.jpeg';
import IA4 from '../img/IA4.jpeg';
import IA1 from '../img/IA1.jpg';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const NuestrosProyectos = () => {
  const images = [
    HolaIA,
    IA2,
    IA4,
    IA1,
    HolaIA,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white p-10">
      <h1>Nuestros <span>Proyectos</span></h1>
    <div className="proyectos-container">
    <div className="proyectos-1">
    <div className="img-proyect1 h-full transition-transform duration-700 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`,}}>
      {images.map((src, index) => (
        <div key={index} className="w-full shrink-0">
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full bg-cover rounded-[30px]"/>
        </div>
      ))}
    </div>
    <div className="circular-button space-x-3">
      {images.map((_, index) => (
        <button
          key={index}
          aria-label={`Slide ${index + 1}`}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? "bg-blue-600" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
    <button onClick={handlePrev} className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
      <span className="button-span">
        <FaAngleLeft size="2rem" color='white'/>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button onClick={handleNext} className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="button-span">
          <FaAngleRight size="2rem" color='white'/>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
  <div className="proyectos-2">
    <img src={IA1} alt="" className='w-full'/>
    <img src={IA2} alt="" className='w-full'/>
  </div>
  </div>
  </div>
  );
};

export default NuestrosProyectos;
