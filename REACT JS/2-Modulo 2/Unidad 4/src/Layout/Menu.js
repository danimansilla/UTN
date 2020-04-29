import React from 'react';
import {Link} from "react-router-dom";
function Menu(){

    return(
        <div>
            <div><Link to={'/'}  target="_blank">Home</Link></div>
            <div><Link to={'/registro'}>Registro</Link></div>  
            <div><Link to={'/login'}>Login</Link></div>        
        </div>
    )
}

export default Menu;