import React from 'react';
import '../styles/formulario.css';
import Video1 from '../video/Oscuro.mp4'

const Formulario = () => {
  return (
    <div className="formulario-container">
      <video autoPlay loop muted className="video-background"  width="1920" height="1080">
        <source src={Video1} type="video/mp4"/>
      </video>
      <h2>Estamos aquí para ti</h2>
      <div className="Cuadro"> 
        <form className="formulario">
          <div className="form-row">
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Correo Electrónico" required />
            <input type="tel" placeholder="Teléfono" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Empresa" />
            <input type="text" placeholder="Cargo" />
          </div>
          <div className="form-row">
            <textarea placeholder="Mensaje" rows="4"></textarea>
          </div>
          <div className="form-row">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Formulario;
