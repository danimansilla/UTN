import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Estilo.css'

class Menu extends Component{
    render(){
        return(
            <div className="titulo">
                    <ul>
                         <li className="li"><Link to={'/'}>Home</Link></li> 
                         <li className="li"><Link to={'/perfiles'}>Perfiles</Link></li>
                    </ul>
               
            </div>
        )
    }

}
export default Menu;