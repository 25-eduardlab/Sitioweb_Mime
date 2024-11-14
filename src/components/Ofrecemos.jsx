import React from 'react';
import '../styles/ofrecemos.css';
import SparklesText from "../components/magicui/sparkles-text";
import BlurIn from "../components/magicui/blur-in";
import AI1  from'../img/Servicios.jpg'
import AI2  from'../img/infraestructura.jpeg'
import AI3  from'../img/Aplicaciones.jpg'
import AI4  from'../img/Distribucion.jpg'
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";

const Ofrecemos = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
    <div className="ofrecemos-container" id='Seccion-Servicios'>
      <h2>Lo que ofrecemos</h2>
      <div className="cards">
        {services.map((service, index) => (
          <div key={index} className="card p-3" onClick={onOpen}>
            <div className="card-image">
              <img src={service.img} alt={service.title} />
              <div className="card-overlay cursor-pointer">
                <BlurIn className="w-full h-full">
                  <div className='justify-items-center'>
                    <SparklesText text={service.title} className='titulo-services my-10'/>
                    <p>{service.description}</p>
                  </div>
                </BlurIn>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <a href='#seccion-formulario' color="primary" onClick={onClose} className='boton-formulario'>
                  Solicitar
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Ofrecemos;
