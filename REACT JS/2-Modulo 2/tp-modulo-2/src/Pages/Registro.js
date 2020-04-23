import React from 'react';
import './../Componentes/Registro.css';


function Registro(){
    return(
        <div className="container">
            <form >
                 <fieldset>
                 <h2 className="titulo" >Registro de Usuario</h2>   
                 <div className="form-group col-sm-12">
                        <label >Nombre</label>
                        <input type="nombre" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Nombres"></input>
                       
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Apellido</label>
                        <input type="apellido" className="form-control" id="apellido" aria-describedby="apellido" placeholder="Apellido"></input>
                       
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Telefono</label>
                        <input type="telefono" className="form-control" id="telefono" aria-describedby="telefono" placeholder="Ingresar Email"></input>
                       
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Dirección de Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar Email"></input>
                        {/* <small id="emailHelp" className="form-text text-muted">Ingrese una dirección valida.</small> */}
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Confirme Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirmar Password"></input>
                    </div>
                    <div className="col-sm-12">
                         <button type="button" className="btn btn-primary btn-lg btn-block">Guardar</button>
                    </div>
                </fieldset>  
            </form>        
            
        </div>
    )
}

export default Registro;