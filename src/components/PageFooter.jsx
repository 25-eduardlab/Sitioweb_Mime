import React from 'react';
import mime from '../img/mime_logo.png'
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import '../styles/footer.css';

const PageFooter = () => {
    const sections = [
        {
            title: "Services",
            links: ["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimisation"]
        },
        {
            title: "Company",
            links: ["About", "Meet the Team", "Accounts Review"]
        },
        {
            title: "Helpful Links",
            links: ["Contact", "FAQs", "Live Chat"]
        },
        {
            title: "Legal",
            links: ["Accessibility", "Returns Policy", "Refund Policy", "Hiring Statistics"]
        }
    ];
    return (
        <footer className="bg-black">
            <div className="content-footer m-auto">
                <div className="content-logos-footer flex justify-between ">
                    <div className="mime-logo">
                        <img src={mime} alt="MIME"/>
                    </div>
                    <ul className="logos-contacts flex justify-start">
                        <li>
                            <a href="#" rel="noreferrer" className='facebook'><span className="bg-blue-600">Facebook</span><FaFacebook size="2rem"/></a>
                        </li>
                        <li>
                            <a href="#" rel="noreferrer" className='instagram'><span className="bg-gradient-to-tr from-[#405de6] via-[#5b51db] via-[#b33ab4] via-[#c135b4] via-[#e1306c] to-[#fd1f1f]">Instagram</span> <FaInstagram size="2rem"/></a>
                        </li>
                        <li>
                            <a href="#" rel="noreferrer" className='whatsapp'><span className="bg-green-600">Whatsapp</span> <FaWhatsapp size="2rem" />
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noreferrer" className='github'><span className="bg-gray-700">GitHub</span> <FaGithub size="2rem"/></a>
                        </li>
                        <li>
                            <a href="#" rel="noreferrer" className='email'><span className="bg-red-700">Email</span> <BiLogoGmail size="2rem"/></a>
                        </li>
                    </ul>
                </div>
                <div className="links-contacts grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <p>{section.title}</p>
                            <ul className="links-enlaces-footer space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <span>{link}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()}. Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};


export default PageFooter;