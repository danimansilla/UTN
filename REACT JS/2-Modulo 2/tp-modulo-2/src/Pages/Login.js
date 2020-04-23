import React from 'react';
import './../Componentes/Estilo.css';
function Login(){
  return(
<div>

   <div className="divLogin">
     
       <form className="form">
            <div >
            <label>Usuario</label><br/>
            <input type="text" className="campo1" placeholder="Ingresar el usuario con el cual se registro"></input>           
            </div>
            <div>
            <label>contraseña</label>
            <input className="campo1" type="text" placeholder="Ingresar la contraseña"></input>           
            </div>
            <div>
                <input type="button" value="Ingresar" />
            </div>
       </form>
       
       
   </div>
   </div>
  )
}
export default Login;