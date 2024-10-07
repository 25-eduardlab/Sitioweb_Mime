import React from 'react';
import '../styles/content.css';  // Importamos el archivo de estilos
import Image1 from '../img/como.jpeg'; // Importa la imagen del logo
import Image2 from '../img/hola.png'; // Importa la imagen del logo
import Image3 from '../img/leon.jpeg'; // Importa la imagen del logo
import Image4 from '../img/arbol.jpeg'; // Importa la imagen del logo
import Image5 from '../img/savana.jpeg'; // Importa la imagen del logo
import Image6 from '../img/bosque.jpeg'; // Importa la imagen del logo
import cristhian from '../img/paisaje.jpeg' //Mi imagen :v cristhian



const Content = () => {
  return (
    <div className="content-container">
      {/* Sección de video */}
      <section className="video-section">
        <h2>Conoce Nuestro Video</h2>
        <video className="video-player" controls>
          <source src="ruta-del-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className="image-row flex justify-center space-x-4 mt-8">
          <img src={Image1} alt="Imagen 1" className="custom-image-one w-1/2 h-auto border border-gray-300"/>
          <img src={Image2} alt="Imagen 2" className="custom-image-two w-1/3 h-auto border border-gray-300" />
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="services-section">
        <h2>Lo que ofrecemos</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={cristhian} alt="Servicios TI" />{/*Aqui cambie una imagen (cristhian)*/}
            <h3>Servicios TI</h3>
          </div>
          <div className="service-card">
            <img src={Image3} alt="Infraestructura TI" />
            <h3>Infraestructura TI</h3>
          </div>
          <div className="service-card">
            <img src={Image3} alt="Aplicaciones TI" />
            <h3>Aplicaciones TI</h3>
          </div>
          <div className="service-card">
            <img src={Image3} alt="Distribución de Equipos" />
            <h3>Distribución de Equipos</h3>
          </div>
        </div>
      </section>

    <section className="Testimonio">
      <div className='testimonio-div'><h2 className='Testimonio-style'>Testimonios </h2>
      <h2 className='Testimonio2-style'>inspiradores </h2>
      </div>
       
        <div className="Inspirador">
          <video className="video-player" controls>
          <source src="ruta-del-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
          </video>



        </div>
        <p className='Voces'>Otras voces</p>
    </section>
      
    <section className="image-gallery">
        <h2 >Testimonios inspiradores</h2>
        <div className="custom-gallery-grid">
            <div className="main-image">
                <img src={Image3} alt="Imagen 1" />
                <div className="overlay-text">Haz clic para aprovechar al máximo esta idea con una cuenta gratuita</div>
                <button className="cta-button">Más información</button>
            </div>
            
            <div className="side-images">
                <img src={Image5} alt="Imagen 2" />
                <img src={Image6} alt="Imagen 3" />
            </div>
        </div>
    </section>


      {/* Formulario */}
      <section className="contact-form">
        <h2>Contáctanos</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Correo" />
            <input type="tel" placeholder="Teléfono" />
          </div>
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Content;
