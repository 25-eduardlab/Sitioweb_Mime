import React from 'react';
import '../styles/conectate.css'
import WordPullUp from "../components/magicui/word-pull-up";
import TypingAnimation from "../components/magicui/typing-animation";


const Conectate =()=>{
    return (
      <section className="conectate-container relative bg-cover bg-center bg-no-repeat">
        <div className="fondo-nigth absolute inset-0"></div>
        <div className="main-content relative flex items-center">
          <div className="text-container max-w-xl">
            <h1 className="titulo-principal">
            <WordPullUp className="text-left" words="Piensa a lo Grande"/>
            <WordPullUp className="text-left Domina-Nuevas" words="Domina las Nuevas Tecnologias"/>
            </h1>
            <p className='descripcion'>
              <TypingAnimation className="text-3xl" text="Juntos, transformaremos tu Vision en Realidad."/>
            </p>
            
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