import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Estilo.css'
class Home extends Component{
    render(){
      return(
      <div className="col-sm-12 center">
               
            <div class="jumbotron">
                <h1 class="display-3">¡¡Bienvenido!!</h1>
                <p class="lead">Quedate en casa es un servicio pensado para vos y 
                    ademas te ofrece la más amplia gama de servicios especialmente
                    diseñados para ofrecerte la protección más conveniente..</p>
                <p>La mejor red social en todo momento a solo un click.</p>
                <p class="lead">
                <Link to={'/perfiles'}>Ver lista de perfiles</Link>
               
                </p>
            </div>
                      
        </div>
          
      )
   
    }
}
export default Home ;