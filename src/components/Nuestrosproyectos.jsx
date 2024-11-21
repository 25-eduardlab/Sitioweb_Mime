import React, { useState, useEffect } from 'react';
import '../styles/nuestrosproyectos.css';
import HolaIA from '../img/HolaIA.jpg';
import IA2 from '../img/IA2.jpeg';
import IA4 from '../img/IA4.jpeg';
import IA1 from '../img/IA1.jpg';

const NuestrosProyectos = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const sliderImages = [HolaIA, IA1, IA2, IA4]; 
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="proyectos-container">
      <h2>
        <span className="highlight">Nuestros</span> proyectos
      </h2>
      <div className="proyectos-grid">
        <div className="left-side">
          <div className="slider-container">
            <div className="slider">
            
              <img src={sliderImages[currentIndex]} alt={`Proyecto ${currentIndex + 1}`} />
            </div>

            <button className="prev button-imagenes-pryects" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="next button-imagenes-pryects" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div>

        <div className="right-side">
          <div className="proyecto-item">
            <img src={IA2} alt="Proyecto 2" />
          </div>
          <div className="proyecto-item">
            <img src={IA4} alt="Proyecto 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosProyectos;
