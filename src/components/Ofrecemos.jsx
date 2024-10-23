import React from 'react';
import '../styles/ofrecemos.css';
import AI1  from'../img/IA1.jpg'
import AI2  from'../img/IA2.jpeg'
import AI3  from'../img/IA3.jpeg'
import AI4  from'../img/IA4.jpeg'

const Ofrecemos = () => {
  const services = [
    {
      title: 'Servicios TI',
      description: 'Ofrecemos soluciones integrales en tecnología de la información, ayudando a empresas a optimizar sus procesos.',
      img: AI1,
    },
    {
      title: 'Infraestructura TI',
      description: 'Implementamos infraestructura tecnológica segura y eficiente, garantizando la conectividad y el rendimiento de su empresa.',
      img: AI2,
    },
    {
      title: 'Aplicaciones TI',
      description: 'Desarrollamos aplicaciones personalizadas para automatizar procesos y mejorar la experiencia del usuario.',
      img: AI3,
    },
    {
      title: 'Distribución de Equipos',
      description: 'Suministramos equipos tecnológicos de alta calidad para el correcto funcionamiento de su empresa.',
      img: AI4,
    },
  ];

  return (
    <div className="ofrecemos-container">
      <h2>Lo que ofrecemos</h2>
      <div className="cards">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={service.img} alt={service.title} />
              <div className="card-overlay">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofrecemos;
