import React from 'react';
import {Link} from "react-router-dom";

function Perfil({datos}){

    return(
        <div>
            <div>{datos.name}</div>
            <div>{datos.email}</div>
            <Link to={'detalle-perfil/'+datos.id}>Ver Detalle</Link>
        </div>
    )
}

export default Perfil;