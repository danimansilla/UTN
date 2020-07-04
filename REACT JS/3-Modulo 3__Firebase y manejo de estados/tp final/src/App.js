import React, { Component } from 'react';
import './App.css';
import Menu from './Layout/Menu';
import Home from './Pages/HomePage';
import {BrowserRouter, Route} from "react-router-dom";
import Perfil from './Pages/PerfilPage';
import Login from './Pages/LoginPage';
import Registro from './Pages/RegistroPage';

import 'firebase/firestore';


class App extends Component {

  constructor(){
    super();
  

  }
  render (){
    return(
    <div className="App">
    <div className="app container">

    <BrowserRouter>
        <Route component={Menu}/>
        <Route path="/" exact component={Home}/>
        <Route path="/perfil/:id" exact component={Perfil}/>
        <Route path="/login" exact component={Login}/>  
        <Route path="/registro" exact component={Registro}/>  
    </BrowserRouter>
      </div>  
    </div>
    );
  
   }
}

export default App;
