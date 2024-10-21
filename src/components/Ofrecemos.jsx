import React from "react";
import '../styles/ofrecemos.css'
import tecnologia from '../img/tecnologia.jpg'


const Ofrecemos = () => {
    return (
        <>
        <section className="ofrecemos"><h1>Sección Ofrecemos</h1> {/* Esto es solo para depurar */}
        <section className="services-ofrecer"> 
          <h2>Nuestros Servicios</h2>
        </section>
        <section className="services-section">
          <h2>Lo que ofrecemos</h2>

          <div className="services-grid">
            <div className="service-card">
              <h3>Servicios TI</h3>
              <img src={tecnologia} alt="Servicios" />
            </div>
            <div className="service-card">
            <img src={tecnologia} alt="Infraestructura" />
              <h3>Infraestructura TI</h3>
            </div>
            <div className="service-card">
            <img src={tecnologia} alt="Aplicaciones" />
              <h3>Aplicaciones TI</h3>
            </div>
            <div className="service-card">
            <img src={tecnologia} alt="Distribución de Equipos" />
              <h3>Distribución de Equipos</h3>
            </div>
          </div>
        </section>
        </section>
      </>
    );
  };

  export default Ofrecemos;