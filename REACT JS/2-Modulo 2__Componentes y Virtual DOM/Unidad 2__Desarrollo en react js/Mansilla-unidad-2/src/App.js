import React, { Component } from 'react';
import './App.css';
import Home from './Componentes/Home';

class App extends Component {

  
  render (){
    return(
    <div className="App">
    <div className="app container">
    <div className="Titulo" style={{background: "grey", color:"black", padding: "10px", margin: "5px"}}>Perfil de usuario </div> 
    <Home/>
      </div>  
    </div>
    );
  
   }
}

export default App;
