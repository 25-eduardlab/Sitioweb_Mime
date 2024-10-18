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
import Image7 from '../img/Dedos.png';



const Content = ( {sectionRefs}) => {
  return (
    <div className="content-container">  
      {/* Sección de video */}
      <section className="video-section">
        <div className="bienvenida">
          <h1>Impulsa tu Vision</h1>
          <h2>Conectate al futuro con exito</h2>
          <h3>Empieza tu futuro hoy</h3>
          <div className="fondo"></div>
        </div>
        <div className="titulopatro">
          <p>Colaboraciones que impulsan el cambio</p>
        </div>
        <div className="image-row">
          <img src={cisco} className='patrocinadores' />
          <img src={intel} className='patrocinadores ' />
          <img src={lenovo} className='patrocinadores' />
          <img src={microsoft} className='patrocinadores' />
          <img src={ruckus} className='patrocinadores' />
        </div>
      </section>

      {/*Seccion Acerca de MIME*/}
      <section ref={sectionRefs.seccion2}className="informacion-mime">
        <div className="texto-mimeinfo">
          <div className="sub-info">
            <p className="parrafo1">Acerca de</p>
            <div className="sub-titulo">
              <p className="parrafo2">MIME</p>
              <p className="parrafo3">Consultores</p>
            </div>
            <p className="parrafo4">
              En MIME buscamos empoderar a empresas mediante soluciones integrales de informática y electricidad, combinando innovación tecnológica y excelencia en el servicio para garantizar eficiencia, seguridad y sostenibilidad en cada proyecto.
            </p>
          </div>
          <div className="imagen-mimeinfo">
            {/*Seccion de imagen*/}
            <img src={Image7} alt="Dedos"/>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="services-section"> 
        <h2>Nuestros Servicios</h2>
<<<<<<< HEAD
=======
        </section>
      <section className="services-section">
        <h2>Lo que ofrecemos</h2>
>>>>>>> 6f81818222624cd9158191478719c33302faf354
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

      <section ref={sectionRefs.seccion4}className="Testimonio">
        <div className='testimonio-div'><h2 className='Testimonio-style'>Testimonios </h2>
          <h2 className='Testimonio2-style'>inspiradores </h2>
        </div>

        <div className="Inspirador">
          <video className="video-player" controls>
<<<<<<< HEAD
            <source src="ruta-del-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
=======
          <source src="ruta-del-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos pobre :V.
>>>>>>> 6f81818222624cd9158191478719c33302faf354
          </video>
        </div>
        <p className='Voces'>Otras voces</p>
      </section>
    <section className="Testimonio">
        <div className='testimonio-div'><h2 className='Testimonio-style'>Testimonios </h2>
          <h2 className='Testimonio2-style'>inspiradores </h2>
        </div>

        <div className="Inspirador">
          <video className="video-player" controls>
            <source src="ruta-del-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos pobre :V.
          </video>
        </div>
        <p className='Voces'>Otras voces</p>
      </section><section className="image-gallery">
        <h2>Testimonios inspiradores</h2>
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

        <section ref={sectionRefs.seccion5}className="contact-form">
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
