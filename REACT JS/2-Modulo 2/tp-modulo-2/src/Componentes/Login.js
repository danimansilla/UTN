import React from 'react';
function Login(){
  return(
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
     
  )
}
export default Login;