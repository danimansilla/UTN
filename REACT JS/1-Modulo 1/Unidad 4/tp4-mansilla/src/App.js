import React from 'react';
import './App.css';
import PerfilUsuario from './Componentes/PerfilUsuario';

function App() {
  return (
    <div className="App">
    <div className="app container">
    <div className="Titulo" style={{background: "grey", color:"black", padding: "10px", margin: "5px"}}>Perfil de usuario </div> 
        <PerfilUsuario />
      </div>  
    </div>
  );
}

export default App;
