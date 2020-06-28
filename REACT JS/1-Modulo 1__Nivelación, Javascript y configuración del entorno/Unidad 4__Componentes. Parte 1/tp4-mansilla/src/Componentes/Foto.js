import React from 'react';
import imagenPerfil from '../img/perfil.jpeg';
const elemento= <div> HoLA</div>
function Foto(){
    return(
    
         <img className="imagen" src={imagenPerfil} alt="imgenPerfil" style={{ height: "100%", borderRadius: "100px"}}></img>
  
    )
}
export default Foto;





