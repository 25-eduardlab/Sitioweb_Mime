import React from "react";
import '../styles/colaboraciones.css'
import cisco from '../svg/cisco.svg';
import intel from '../svg/intel.svg';
import lenovo from '../svg/lenovo.svg';
import microsoft from '../svg/microsoft.svg';
import ruckus from '../svg/ruckus.svg';

const Colaboraciones = () => {

    return (
        
        <section className="section_colaborar">
          <div className="titulopatro">
            
          </div>
          <div className="image-row">
            <img src={cisco} className='patrocinadores' />
            <img src={intel} className='patrocinadores ' />
            <img src={lenovo} className='patrocinadores' />
            <img src={microsoft} className='patrocinadores' />
            <img src={ruckus} className='patrocinadores' />
          </div>
        </section>
        
        );
     };

export default Colaboraciones;