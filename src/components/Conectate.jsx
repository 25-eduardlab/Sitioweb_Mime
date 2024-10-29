
import React from 'react';
import '../styles/conectate.css'



const Conectate =()=>{
    return (
      <section className="conectate-container relative bg-cover bg-center bg-no-repeat">
        <div className="fondo-nigth absolute inset-0"></div>
        <div className="main-content relative flex items-center">
          <div className="text-container max-w-xl">
            <h1 className="titulo-principal">
              Piensa a lo Grande<span>Domina las Nuevas Tecnologias</span>
            </h1>
            <p className="descripcion">Juntos, transformaremos tu Vision en Realidad.</p>
            <div className="button-container">
              <a href="#" className="contactanos">Contactanos</a>
              <a href="#" className="empieza-ahora">Empieza ahora</a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Conectate;