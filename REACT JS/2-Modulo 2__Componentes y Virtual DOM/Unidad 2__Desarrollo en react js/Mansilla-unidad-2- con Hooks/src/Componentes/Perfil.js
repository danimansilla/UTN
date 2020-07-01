import React, { Component } from 'react';
import './Estilo.css'
class Perfil extends Component{
    constructor(props){
        super(props);
        console.log("props", this.props.datos);
    }
    render(){
        return(
            <div>
                
                <p>Nombre: {this.props.datos.name}</p>
                <p>Apellido: {this.props.datos.username}</p>
                <div className="divFoto">
                    <img className="foto" src= "../../img/perfil.jpeg"/>
                    </div>
                {/* <p>Nombre: {this.props.datos.nombre}</p>
                <p>Apellido: {this.props.datos.apellido}</p>
                <div className="divFoto">
                    <img className="foto" src={this.props.datos.foto}/>
                    </div> */}
            </div>
        )
    }
}
export default Perfil ;