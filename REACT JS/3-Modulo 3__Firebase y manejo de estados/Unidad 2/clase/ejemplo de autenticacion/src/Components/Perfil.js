import React, { Component } from 'react';
import './Perfil.css';
import {Link} from 'react-router-dom';

class Perfil extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state = {
      leyenda: "Agregar Amigo",
      class: "btn btn-primary",
      class_alert: "alert alert-primary oculto"
    }
  }
  agregarAmigoHandle(event){
    
    this.setState({
      leyenda: "Somos Amigos",
      class: "btn btn-danger",
      class_alert: "alert alert-primary"
    })
  }
  
  render() {
    return (
      <div class="col-12  col-sm-6">
        <div class={this.state.class_alert}>
            Amigo Agregado
        </div>
        <div >
          
          <div class="card" >
            <img class="card-img-top" src="http://2.bp.blogspot.com/-itYtAL5lBeE/TkFdlIhhacI/AAAAAAAABHI/HYGHzdl85UI/s400/111433_aerogenerador.jpg" alt="Card image cap"></img>
            <div class="card-body">
              <Link to='/perfil/'><h5 class="card-title">{this.props.perfil.name}</h5></Link>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a onClick={this.agregarAmigoHandle.bind(this)} class={this.state.class}>{this.state.leyenda}</a>
            </div>
          </div>
          
        </div>
      </div>  
     
    );
  }
}

export default Perfil;
