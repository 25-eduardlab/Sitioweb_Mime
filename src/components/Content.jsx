import React from 'react';
import '../styles/content.css';  // Importamos el archivo de estilos
import Image3 from '../img/leon.jpeg'; // Importa la imagen del logo
import Image4 from '../img/arbol.jpeg'; // Importa la imagen del logo
import Image5 from '../img/savana.jpeg'; // Importa la imagen del logo
import Image6 from '../img/bosque.jpeg'; // Importa la imagen del logo
import cristhian from '../img/paisaje.jpeg' //Mi imagen :v cristhian
import cisco from '../svg/cisco.svg';
import intel from '../svg/intel.svg';
import lenovo from '../svg/lenovo.svg';
import microsoft from '../svg/microsoft.svg';
import ruckus from '../svg/ruckus.svg';




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
        <div className="titulopatro">
          <p>Colaboraciones Que Impulsan El Cambio</p>
        </div>
        <div className="image-row">
          <img src={cisco} className ='patrocinadores'/>
          <img src={intel} className ='patrocinadores '/>
          <img src={lenovo} className ='patrocinadores'/>
          <img src={microsoft} className ='patrocinadores'/>
          <img src={ruckus} className ='patrocinadores'/>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>
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
      
    <section className="image-gallery">
        <h2>Galería de Imágenes</h2>
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
