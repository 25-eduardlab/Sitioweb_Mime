import React from 'react';
import Header from './components/Header';
import PageFooter from './components/PageFooter'
import './App.css';
import Conectate from './components/Conectate';
import Colaboraciones from './components/Colaboraciones';
import Acercamime from './components/Acercamime';
import Ofrecemos from './components/Ofrecemos';


const App = () => {


 
  return (
    <>
      <Header />
      <div className="content-container">
      <Conectate/>
      <Colaboraciones/>
      <Acercamime/>
      <Ofrecemos/>
      </div>   
      <PageFooter/>
      
      
    </>
  );
};

export default App;
