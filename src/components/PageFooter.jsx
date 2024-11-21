import React from 'react';  
import mime from '../img/mime_logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import '../styles/footer.css';

const PageFooter = () => {
    const sections = [
        {
            title: "CONTACTANOS",
            links: [
                "Teléfono: +51 933 529 509",
                <a href="https://wa.me/51981247907" target="_blank" rel="noreferrer">Whatsapp: +51 981 247 907</a>,
                "Email: contacto@mimeperu.com",
            ],
        },
        {
            title: "ESTAMOS UBICADOS EN :",
            links: [
                <span className="text-sm">CAL. LA MALVA NRO. 195 DPTO. S01 URB. LIMA POLO AND HUNT CLUB (TORRE C2) LIMA - LIMA - SANTIAGO DE SURCO</span>
            ],
        },
        {
            title: "SIGUENOS",
            links: [
                <a href="https://www.facebook.com/profile.php?id=61558382890813" target="_blank" rel="noreferrer">Facebook: Mime Consultores</a>, 
                <a href="https://www.instagram.com/mimeconsultores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram: mimeconsultores</a>
            ],
        },
    ];

    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-6">
                {/* Logo Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mime-logo mb-6 md:mb-0">
                        <img src={mime} alt="MIME Logo" className="h-16" />
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index} className="space-y-4 text-left items-start">
                            <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <span>{link}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Policies and Social Icons */}
                <div className="footer-links">
                    <div className="politicas-social-icons flex flex-wrap justify-between items-center gap-10 mb-12"> {/* Added mb-12 to give more space */}
                        {/* Políticas de Privacidad */}
                        <div className="politicas flex gap-12">
                            <a href="/politica-de-cookies" className="text-white hover:text-gray-400 text-lg">
                                Política de Cookies
                            </a>
                            <a href="/politica-de-privacidad" className="text-white hover:text-gray-400 text-lg">
                                Política de Privacidad
                            </a>
                        </div>
                        {/* Redes Sociales */}
                        <div className="social-icons flex justify-center gap-12">
                            <a href="https://www.facebook.com/profile.php?id=61558382890813" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                                <FaFacebook size="1.5rem" />
                            </a>
                            <a href="https://www.instagram.com/mimeconsultores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-gradient bg-gradient-to-tr from-[#405de6] via-[#5b51db] via-[#b33ab4] via-[#c135b4] via-[#e1306c] to-[#fd1f1f] hover:text-purple-600">
                                <FaInstagram size="1.5rem" />
                            </a>
                            <a href="https://wa.me/51981247907" target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-800">
                                <FaWhatsapp size="1.5rem" />
                            </a>
                            <a href="mailto:contacto@mimeperu.com" rel="noreferrer" className="text-red-700 hover:text-red-800">
                                <BiLogoGmail size="1.5rem" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="about mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        Somos una empresa dedicada a ofrecer soluciones innovadoras en consultoría empresarial. 
                        Con un enfoque en el desarrollo y crecimiento continuo.
                    </p>
                </div>

                {/* Footer Text */}
                <div className="mt-6 border-t-2 border-gray-700 pt-4 text-left">
                    <p className="text-sm text-gray-400">Todos los derechos reservados</p>
                    <p className="text-sm text-gray-400">MIMECONSULTORESSAC.COM</p>
                </div>
            </div>
        </footer>
    );
};

export default PageFooter;
