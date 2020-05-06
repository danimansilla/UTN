import React, {useEffect,useState, Component } from 'react';

// import './../Componentes/Estilo.css'
import firebase from '../Componentes/Firebase';

class PerfilPage extends Component{

    datos;
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            datos :[]
        }
    }

   
    componentDidMount(){
           firebase.database().ref('usuarios/'+this.props.match.params.id).once('value').then(snapshot =>{
               console.log("snapshot",snapshot.val());
               this.setState({
                datos: snapshot.val(),
                isLoaded:true
               } )
           })
        
        
    }
    render(){
        return(
            <div>
                <h3>Detalle de perfil de:   {this.state.datos.nombre} {this.state.datos.apellido} </h3>
                <div>
                     <p>Nombre: {this.state.datos.nombre}</p>
                    <p> Apellido: {this.state.datos.apellido}</p> 
                    <p>Email: {this.state.datos.email}</p> 
                  
                </div>
               <div className="divFoto">
                    <img className="foto" src= "../../img/perfil.jpeg"/>
               </div>
            </div>
        )
    }
}
// function PerfilPage(props){
//     const [datos, setDatos] = useState( );
//     console.log("oooooooooooooooooooooo",props.match.params.id);
//      useEffect(
//          ()=> {
//             console.log("rendirse");

//             var ref = firebase.database().ref("/usuarios/" + +props.match.params.id).once('value').then(function(snapshot) {
//                 console.log("Holllllllll");
//                 console.log(snapshot.val());
//             });
//             firebase.database().ref('usuarios/'+props.match.params.id).once('value').then(snapshot =>{
//                 //   firebase.database.doc("usuarios/"+id)
                
//                 console.log("snapshot",snapshot.val());
//                 setDatos(
//                     datos = snapshot.val()
                  
//                     // datos.nombre= snapshot.val().nombre,
//                     // datos.apellido=snapshot.val().apellido,
//                 )
//                 console.log("datos",datos);
//             }
//             )

//          },[]);
     
    
  

//         return(
//             <div>
//                 <h3>Detalle de perfil de:   {datos.nombre} {datos.apellido} </h3>
//                 <div>
//                     {/* <p>Nombre: {datos.name}</p>
//                     <p> Apellido: {datos.username}</p> */}
//                     {/* <p>Email: {datos.email}</p>
//                     <p>Direccion: {datos.address.street} , {datos.address.suite} , {datos.address.city} , {datos.address.zipcode}</p>  
//                     <p>Telefono: {datos.phone}</p>
//                     <p>Sitio web: {datos.website}</p>
//                    <p>Compania: {datos.company.name} , {datos.company.catchPhrase} , {datos.company.bs}</p> */}
//                 </div>
//                <div className="divFoto">
//                     <img className="foto" src= "../../img/perfil.jpeg"/>
//                </div>
//             </div>
//         )
    

// }
export default PerfilPage;