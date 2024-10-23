import React from 'react';
import '../styles/nuestrosproyectos.css';
import HolaIA from '../img/HolaIA.jpg'
import IA2 from '../img/IA2.jpeg'
import IA4 from '../img/IA4.jpeg'

const NuestrosProyectos = () => {
  return (
    <div className="proyectos-container">
      <h2>
        <span className="highlight">Nuestros</span> proyectos
      </h2>
      <div className="proyectos-grid">
        <div className="proyecto-item proyecto-grande">
          <img src={HolaIA} alt="Proyecto 1" />
        </div>
        <div className="proyecto-item">
          <img src={IA2} alt="Proyecto 2" />
        </div>
        <div className="proyecto-item">
          <img src={IA4}alt="Proyecto 3" />
        </div>
      </div>
    </div>
  );
};

export default NuestrosProyectos;
