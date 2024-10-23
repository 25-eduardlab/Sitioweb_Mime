import React from 'react';
import '../styles/formulario.css';

const Formulario = () => {
  return (
    <div className="formulario-container">
      <h2>Estamos aquí para ti</h2>
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
  );
};

export default Formulario;
