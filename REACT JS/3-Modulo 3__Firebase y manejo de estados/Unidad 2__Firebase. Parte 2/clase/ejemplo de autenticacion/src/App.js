import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import * as firebase from 'firebase'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      opciones:['Contacto','Registro']
    }
  }
  componentWillMount(){
    this.setState({
      opciones:['Contacto','Registro','nuevo']
    });  
  }
  handleAddOption(){
    this.setState({
      opciones:['Contacto','Registro','nuevo']
    });    
  } 
  render() {
    let menuOpciones = this.state.opciones;
    return (
      <div className="App">
        
        <Menu pestanias={menuOpciones} agregar={this.handleAddOption.bind(this)}/>

        
      </div>
     
    );
  }
}

export default App;
