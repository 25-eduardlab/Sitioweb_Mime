import React, { useState, useEffect } from 'react';
import '../styles/nuestrosproyectos.css';
import HolaIA from '../img/HolaIA.jpg';
import IA2 from '../img/IA2.jpeg';
import IA4 from '../img/IA4.jpeg';
import IA1 from '../img/IA1.jpg';

const NuestrosProyectos = () => {
  // Estado para el índice del slider de la primera imagen
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Aquí es donde puedes agregar más imágenes al slider
  const sliderImages = [HolaIA, IA1, IA2, IA4]; // Imágenes para el slider
  
  // Función para cambiar la imagen del slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  // Función para manejar las teclas del teclado (flechas)
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  // Cambiar la imagen del slider cada 3 segundos automáticamente
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  // Añadir el escuchador de eventos para las teclas del teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Limpiar el escuchador cuando el componente se desmonte
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
        {/* Contenedor principal con Grid */}
        <div className="left-side">
          {/* Slider solo para la primera imagen */}
          <div className="slider-container">
            <div className="slider">
            
              <img src={sliderImages[currentIndex]} alt={`Proyecto ${currentIndex + 1}`} />
            </div>

            {/* Controles de navegación ocultos */}
            <button className="prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div>

        {/* Lado derecho con imágenes estáticas */}
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
