import React from "react";
import'../styles/acercamime.css'
import Image7 from '../img/Dedos.png';


const Acercamime = () => {
    return (
    <div className="content-container">
      {/* Sección Acerca de MIME */}
      <section className="informacion-mime">
      <div className="texto-mimeinfo">
        <div className="sub-info">
          <p className="parrafo1">Acerca de</p>
          <div className="sub-titulo">
            <p className="parrafo2">MIME</p>
            <p className="parrafo3">Consultores</p>
          </div>
          <p className="parrafo4">
            En MIME buscamos empoderar a empresas mediante soluciones integrales de informática y electricidad.
          </p>
        </div>
        <div className="imagen-mimeinfo">
          {/* Sección de imagen */}
          <img src={Image7} alt="Dedos"/>
        </div>
      </div>
    </section>
    </div>
    );
};

export default Acercamime;