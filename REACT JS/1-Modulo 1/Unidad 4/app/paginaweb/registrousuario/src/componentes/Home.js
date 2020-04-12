import React from 'react';
import './Home.css';
import Registro from './Registro';


function Home(){

    function handleClick(e) {
      //  e.preventDefault();
      history.push("/Registro");
    //   window.location("Registro");
     //   console.log('The link was clicked.');
      }
    
      return (
          
       
 
        <div className="col-sm-12 center">
            <div class="jumbotron">
                <h1 class="display-3">¡¡Bienvenido!!</h1>
                <p class="lead">Asistencia al Viajero Un servicio pensado para vos y 
                    ademas esta asistencia al viajero de Europ Assistance te ofrece la más amplia gama de servicios especialmente
                    diseñados para ofrecerte la protección más conveniente..</p>
                <p>La mejor protección en todo momento a solo un click.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="./Registro" onClick={handleClick()} role="button">Registrate</a>
               
                </p>
            </div>
                      
        </div>
    );
}


export default Home;
