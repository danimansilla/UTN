import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../Componentes/Estilo.css'
function ListaPerfiles({datos,id}){
  
        return(
           
            <div >
               <div className="divPerfil">

              
                <div className="divAgrupado">
                <p className="campo">Nombre de producto: {datos.nombre}</p>
                <p className="campo">Descripcion: {datos.descripcion}</p>
                <div className="divBtnDetalle">
                   
                    <Link to={'/perfil/' + id}>Ver detalle</Link>
                </div>
              
               
                <div className="divFoto">
                    <img className="foto" src= "../../img/perfil.jpeg"/>
               </div>
               </div>
              

            </div>
            </div>
        ) 
}
export default ListaPerfiles;