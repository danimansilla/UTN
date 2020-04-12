import React, { Component } from 'react';
import './App.css';
import Menu from './Componentes/Menu';
import Home from './Componentes/Home';
import {BrowserRouter, Route} from "react-router-dom";
import Perfiles from './Componentes/Perfiles';
class App extends Component {

  
  render (){
    return(
    <div className="App">
    <div className="app container">
    <div className="Titulo" style={{background: "grey", color:"black", padding: "10px", margin: "5px"}}>Perfil de usuario </div> 

    <BrowserRouter>
        <Route component={Menu}/>
        <Route path="/" exact component={Home}/>
        <Route path="/perfiles" exact component={Perfiles}/>      
    </BrowserRouter>
      </div>  
    </div>
    );
  
   }
}

export default App;
