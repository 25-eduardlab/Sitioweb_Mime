import React, {useRef} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import PageFooter from './components/PageFooter'
import './App.css';

const App = () => {
  const seccion1Ref = useRef(null);
  const seccion2Ref = useRef(null);
  const seccion3Ref = useRef(null);
  const seccion4Ref = useRef(null);
  const seccion5Ref = useRef(null);

  const sectionRefs = {
    seccion1: seccion1Ref,
    seccion2: seccion2Ref,
    seccion3: seccion3Ref,
    seccion4: seccion4Ref,
    seccion5: seccion5Ref,

  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      
      
        <Header scrollToSection={scrollToSection} />
        <Content sectionRefs={sectionRefs} />
        <PageFooter />
      {/* Aquí puedes agregar más componentes */}
    </>
  );
};

export default App;
