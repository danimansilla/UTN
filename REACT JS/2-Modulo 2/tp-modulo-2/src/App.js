import React, { Component } from 'react';
import './App.css';
import Menu from './Layout/Menu';
import Home from './Pages/Home';
import {BrowserRouter, Route} from "react-router-dom";
import Perfil from './Pages/Perfil';
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
