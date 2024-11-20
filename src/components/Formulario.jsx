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
          
        </div>
      </div>
      <div className="Columna-2 w-full md:w-1/2">
        <div>
          <img src={imagen} alt="Imagen-chica" className='h-[420px] m-auto mt-10'/>
        </div>
        <div className="mt-10">
        <button onClick={onOpen} className='button-open-form m-auto'>
          <p>Contacto</p>
        </button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" backdrop={backdrop} size={size}>
        <ModalContent className='bg-neutral-900'>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-sky-600 justify-center text-center text-4xl gap-1 font-bold">¡Estamos aquí para Ti!</ModalHeader>
              <p className='text-slate-100 font-light text-center text-sm'>Este Formulario se enviara a: correo@gmail.com</p>
              <ModalBody>
                <div className="flex justify-center flex-wrap">
                  <input type="text" placeholder='Nombre' className='input w-full sm:w-5/12'/>
                  <input type="text" placeholder='Apellido' className='input w-full sm:w-5/12'/>
                  <input type="text" placeholder='Email' className='input w-full sm:w-5/12'/>
                  <input type="text" placeholder='Telefono' className='input w-full sm:w-5/12'/>
                  <input type="text" placeholder='Empresa' className='input w-full sm:w-5/12'/>
                  <input type="text" placeholder='Cargo' className='input w-full sm:w-5/12'/>
                </div>
                <textarea className='textarea w-11/12 h-[7rem] resize-none' placeholder='Mensaje'></textarea>
                <div className="flex mx-7 mt-2">
                  <Checkbox defaultSelected></Checkbox>
                  <label className='text-neutral-200'>Acepta los Terminos y condiciones</label>
                </div>
              </ModalBody>
              <ModalFooter>
                <button onClick={onClose} className='button-enviar m-auto'>
                  <p>Enviar</p>
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Formulario;
