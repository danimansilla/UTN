import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../Componentes/Estilo.css';

class Menu extends Component{
    render(){
        return(
            <div className="titulo">
                    <ul>
                         <li className="li"><Link to={'/'}>Home</Link></li> 
                         <li className="li"><Link to={'/registro'}>Registro</Link></li>
                         <li className="li"><Link to={'/login'}>Login</Link></li>
                    </ul>
               
            </div>
        )
    }

}
export default Menu;