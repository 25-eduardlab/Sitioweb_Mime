
import React, {useState} from 'react';
import '../styles/ofrecemos.css';
import SparklesText from "../components/magicui/sparkles-text";
import BlurIn from "../components/magicui/blur-in";
import AI1  from'../img/Servicios.jpg'
import AI2  from'../img/infraestructura.jpeg'
import AI3  from'../img/Aplicaciones.jpg'
import AI4  from'../img/Distribucion.jpg'
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure,Button} from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Ofrecemos = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const services = [
    {
      title: 'Servicios TI',
      description: 'Ofrecemos soluciones integrales en tecnología de la información, ayudando a empresas a optimizar sus procesos.',
      mainImg: AI1,
      images: [
        AI1,
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      modalDescription: 'Descripcion detallada de los servicios TI que ofrecemos..'
    },
    {
      title: 'Infraestructura TI',
      description: 'Implementamos infraestructura tecnológica segura y eficiente, garantizando la conectividad y el rendimiento de su empresa.',
      mainImg: AI2,
      images: [
        AI2,
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'

      ],
      modalDescription: 'Descripcion detallada de la Infraestructura TI que ofrecemos..'
    },
    {
      title: 'Aplicaciones TI',
      description: 'Desarrollamos aplicaciones personalizadas para automatizar procesos y mejorar la experiencia del usuario.',
      mainImg: AI3,
      images: [
        AI3,
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      modalDescription: 'Descripcion detallada de las Aplicaciones TI que ofrecemos..'
    },
    {
      title: 'Distribución de Equipos',
      description: 'Suministramos equipos tecnológicos de alta calidad para el correcto funcionamiento de su empresa.',
      mainImg: AI4,
      images: [
        AI4,
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      modalDescription: 'Descripcion detallada de nuestra distribucion de equipos..'
    },
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
    onOpen();
  };

  const handlePrevImage = (e) =>{
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedService.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev)=>
      prev === selectedService.images.length - 1 ? 0 : prev + 1
    ); 

  };

  return (
    <div className="ofrecemos-container" id='Seccion-Servicios'>
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Lo que ofrecemos</h2>
      <div className="cards">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="card p-3 cursor-pointer" 
            onClick={() => handleCardClick(service)}
          >
            <div className="card-image">
              <img 
                src={service.mainImg} 
                alt={service.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="card-overlay">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-lg">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal 
        size="2xl" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedService?.title}
              </ModalHeader>
              
              <ModalBody>
                {selectedService && (
                  <>
                    <div className="relative w-full h-96">
                      <img
                        src={selectedService.images[currentImageIndex]}
                        alt={`${selectedService.title} - imagen ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <Button
                          isIconOnly
                          variant="flat"
                          className="bg-black/50 text-white hover:bg-black/70"
                          onClick={handlePrevImage}
                        >
                          <ChevronLeft size={24} />
                        </Button>
                        
                        <Button
                          isIconOnly
                          variant="flat"
                          className="bg-black/50 text-white hover:bg-black/70"
                          onClick={handleNextImage}
                        >
                          <ChevronRight size={24} />
                        </Button>
                      </div>
                      
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {selectedService.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              currentImageIndex === idx ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-lg">
                      {selectedService.modalDescription}
                    </p>
                  </>
                )}
              </ModalBody>
              
              <ModalFooter>
                <Button 
                  as="a" 
                  href="#seccion-formulario"
                  color="primary"
                  onClick={onClose}
                  className="boton-formulario"
                >
                  Solicitar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Ofrecemos;
