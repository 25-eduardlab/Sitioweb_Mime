import React from 'react';
import mime from '../img/mime_logo.png'
import '../styles/footer.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const PageFooter = () =>{
    const licencias = ["Licencia1","Licencia2","Licencia3","Licencia4","Licencia5","Licencia6"];
    const licencias3 = ["Licencia1","Licencia2","Licencia3","Licencia4","Licencia5","Licencia6"];
    const licencias2 = ["Licencia1","Licencia2","Licencia3","Licencia4","Licencia5","Licencia6"];
    return(
        <div className="pageFooter bg-black p-10 text-white">
            <div className="logo">
                <img src={mime} alt="MimeLogo"/>
            </div>
            <div className="licencias">
                {/*Licencias*/}
                <h2>Sobre nosotros</h2>
                <div className="enlaces">
                    {licencias.map((licencias,index) =>(
                        <p key={index}>{licencias}</p>
                    ))}
                </div>
            </div>
            <div className="licencias">
                {/*Licencias*/}
                <h2>Sobre nosotros</h2>
                <div className="enlaces">
                    {licencias2.map((licencias2,index) =>(
                        <p key={index}>{licencias2}</p>
                    ))}
                </div>
            </div>
            <div className="licencias">
                {/*Licencias*/}
                <h2>Sobre nosotros</h2>
                <div className="enlaces">
                    {licencias3.map((licencias3,index) =>(
                        <p key={index}>{licencias3}</p>
                    ))}
                </div>
            </div>
            <div className="contactos">
                <h3>Contactanos</h3>
                <div className="logotipos">
                    <div className="logo1">
                        <BsFillTelephoneFill className="icon"/>
                        <span>+51 933 529 509</span>
                    </div>
                    <div className="logo2">
                        <MdOutlineEmail className='icon'/>
                        <span>contacto@mimeperu.com</span>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p>Web: www.mimeperu.com</p>
                <p>© Copyright MIME. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default PageFooter;