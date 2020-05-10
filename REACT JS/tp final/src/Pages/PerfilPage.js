import React, {useEffect,useState, Component } from 'react';
import firebase from '../Componentes/Firebase';

class PerfilPage extends Component{

    datos;
    constructor(props){
        super(props);
        console.log("perfil page", props);
        this.state = {
            error : null,
            isLoaded : false,
            datos :[]
        }
    }

   
    componentDidMount(){
          // firebase.database().ref('usuarios/'+this.props.match.params.id).once('value').then(snapshot =>{
      

            firebase.database().ref('usuarios/'+this.props.match.params.email).once('value').then(snapshot =>{
               console.log("snapshot",snapshot.val());
               this.setState({
                datos: snapshot.val(),
                isLoaded:true
               } )
           })
        
        
    }
    render(){

        const { error, isLoaded} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div> Loading...</div>;
        }else{
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
}

export default PerfilPage;