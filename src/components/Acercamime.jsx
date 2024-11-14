import React from "react";
import '../styles/acercamime.css';
import Image7 from '../img/Dedos.png';
import FlipText2 from "../components/magicui/flip-text2";
import FlipText from "../components/magicui/flip-text"

const Acercamime = () => {
    return (
        <div className="content-container" id="Seccion-Nosotros">
            {/* Sección Acerca de MIME */}
            <section className="informacion-mime">
                <div className="texto-mimeinfo">
                    <div className="sub-info">
                        <h1 className="parrafo1"><FlipText2 className="" word="Acerca de"/></h1>
                        <div className="sub-titulo">
                            <h2 className="parrafo2"><FlipText2 word="MIME"/></h2>
                            <h2 className="parrafo3"><FlipText2 word="Consultores"/></h2>
                        </div>
                        <p className="parrafo4">
                        <FlipText className="text-4xl"
                            word="En MIME buscamos empoderar a empresas mediante soluciones integrales de informática y electricidad, combinando innovación tecnológica y excelencia en el servicio para garantizar eficiencia, seguridad y sostenibilidad en cada proyecto."
                            />
                        </p>
                    </div>
                    <div className="imagen-mimeinfo">
                        {/* Sección de imagen */}
                        <img src={Image7} alt="Dedos" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Acercamime;
