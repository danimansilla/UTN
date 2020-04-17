import React, { Component } from 'react';
import './App.css';
import Menu from './Componentes/Menu';
import Home from './Componentes/Home';
import {BrowserRouter, Route} from "react-router-dom";
import Perfiles from './Componentes/Perfiles';
import DetallePerfil from './Componentes/DetallePerfil';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
class App extends Component {

  
  render (){
    return(
    <div className="App">
    <div className="app container">

    <BrowserRouter>
        <Route component={Menu}/>
        <Route path="/" exact component={Home}/>
        <Route path="/perfiles" exact component={Perfiles}/>     
        <Route path="/detalle-perfil/:id" exact component={DetallePerfil}/>
        <Route path="/login" exact component={Login}/>  
        <Route path="/registro" exact component={Registro}/>  
    </BrowserRouter>
      </div>  
    </div>
    );
  
   }
}

export default App;
