import React, { Component } from 'react';
import './App.css';
import PerfilUsuario from './Componentes/PerfilUsuario';

class App extends Component {

  
  render (){
    return(
    <div className="App">
    <div className="app container">
    <div className="Titulo" style={{background: "grey", color:"black", padding: "10px", margin: "5px"}}>Perfil de usuario </div> 
        <PerfilUsuario />
        {/* title={this.state.titulo} modificar={this.handleClick} */}
        
        {/* <button onClick={this.handleClick}>Cambiar Title</button> */}
      </div>  
    </div>
    );
  
   }
}

export default App;
