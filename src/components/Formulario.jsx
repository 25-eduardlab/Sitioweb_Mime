import React from 'react';
import '../styles/formulario.css';
import Meteors from "../components/magicui/meteors";
import imagen from "../svg/chica.svg"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox} from "@nextui-org/react";

const Formulario = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [backdrop] = React.useState('blur')
  const [size] = React.useState('xl')

  return (
    <div className="formulario-container relative py-10 overflow-hidden" id='seccion-formulario'>
      <Meteors number={60}/>
      <div className="text-content-form flex pb-10">
        <div className="Columna-1 w-full md:w-1/2">
        <div className='text-contactos-form'>
          <h1>Conectate con <span className='text-parpadeo bg-black bg-clip-text'>Nosotros</span></h1>
          <h2>Impulsa tu proyecto con ideas innovadoras y tecnologicas</h2>
          <div className="md:mt-10">
            <h3>Con tan solo un CLICK</h3>
            <div className="flecha bg-black bg-clip-text"></div>
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
