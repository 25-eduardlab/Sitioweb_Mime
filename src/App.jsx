import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import PageFooter from './components/PageFooter'
import Conectate from './components/conectate';
import Colaboraciones from './components/colaboraciones';
import Acercamime from './components/acercamime';
import Ofrecemos from './components/Ofrecemos';
import './App.css';

const App = () => {


 
  return (
    <>
      <Header />
      <Conectate />
    
      <PageFooter />
      {/* Aquí puedes agregar más componentes */}
    </>
  );
};

export default App;