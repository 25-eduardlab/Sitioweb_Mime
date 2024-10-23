import React from 'react';
import '../styles/colaboraciones.css';
import cisco from '../svg/cisco.svg';
import intel from '../svg/intel.svg';
import lenovo from '../svg/lenovo.svg';
import microsoft from '../svg/microsoft.svg';
import ruckus from '../svg/ruckus.svg';

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
      <h2>
        Colaboraciones que Impulsan el Cambio <span className="arrow">↘</span>
      </h2>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default Colaboraciones;
