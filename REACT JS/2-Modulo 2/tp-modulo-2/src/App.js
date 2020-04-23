import React, { Component } from 'react';
import './App.css';
import Menu from './Layout/Menu';
import Home from './Pages/Home';
import {BrowserRouter, Route} from "react-router-dom";
import Perfiles from './Pages/Perfiles';
import DetallePerfil from './Pages/DetallePerfil';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
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
