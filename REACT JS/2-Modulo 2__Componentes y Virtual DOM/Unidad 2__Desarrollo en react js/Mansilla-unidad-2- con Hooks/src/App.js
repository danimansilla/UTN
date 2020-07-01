import React, { Component } from 'react';
import './App.css';
import Home from './Componentes/Home';
import EjemploConHook from './Componentes/EjemploConHook';
import EjemploConCicloVidaClase from './Componentes/EjemploConCicloVidaClase';

function App() {

    return(
    <div className="App">
    <div className="app container">
    <div className="Titulo" style={{background: "grey", color:"black", padding: "10px", margin: "5px"}}>Perfil de usuario </div> 
    <EjemploConHook/>
    <EjemploConCicloVidaClase/>
    <Home/>
      </div>  
    </div>
    );
  
   
}

export default App;
