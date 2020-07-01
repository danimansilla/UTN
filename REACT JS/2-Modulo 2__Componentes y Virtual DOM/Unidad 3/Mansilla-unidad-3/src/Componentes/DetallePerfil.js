import React, {useEffect,useState } from 'react';
import './Estilo.css'
function DetallePerfil(props){
     const [datos, setDatos] = useState({address:{city:null}, company:{name:null}});
     useEffect(
         ()=> {
             fetch("https://jsonplaceholder.typicode.com/users/"+props.match.params.id)
             .then(res=>res.json())
             .then(
                 (result) => {
                     console.log(result);
                     setDatos(result);
                 },
                 (error) => {
                    console.log(error);
                 }
             )

         },[]);
     
    
  
        return(
            <div>
                <h3>Detalle de perfil de:   {datos.name} {datos.username} </h3>
                <div>
                    <p>Nombre: {datos.name}</p>
                    <p> Apellido: {datos.username}</p>
                    <p>Email: {datos.email}</p>
                    <p>Direccion: {datos.address.street} , {datos.address.suite} , {datos.address.city} , {datos.address.zipcode}</p>  
                    <p>Telefono: {datos.phone}</p>
                    <p>Sitio web: {datos.website}</p>
                   <p>Compania: {datos.company.name} , {datos.company.catchPhrase} , {datos.company.bs}</p>
                </div>
               <div className="divFoto">
                    <img className="foto" src= "../../img/perfil.jpeg"/>
               </div>
            </div>
        )
    

}
export default DetallePerfil;