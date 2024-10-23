import React from 'react';
import Header from './components/Header';
import PageFooter from './components/PageFooter';
import Conectate from './components/conectate';
import Colaboraciones from './components/colaboraciones';
import Acercamime from './components/acercamime';
import Ofrecemos from './components/Ofrecemos';

import './App.css';
import Testimonios from './components/Testimonios';
import NuestrosProyectos from './components/Nuestrosproyectos';
import Formulario from './components/Formulario';

const App = () => {


 
  return (
    <>
      <Header />
      <Conectate />
      <Colaboraciones />
      <Acercamime />
      <Ofrecemos />
      <Testimonios />
      <NuestrosProyectos />
      <Formulario />
      <PageFooter />
      {/* Aquí puedes agregar más componentes */}
    </>
  );
};

export default App;