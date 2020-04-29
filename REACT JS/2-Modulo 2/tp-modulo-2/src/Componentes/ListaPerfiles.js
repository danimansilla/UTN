import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../Componentes/Estilo.css'
class ListaPerfiles extends Component{
    constructor(props){
        super(props);
        console.log("props", this.props.datos);
      
        this.state = {
            estadoAmigo:"Agregar a mis amigos",
            leyenda: "",
            amigos: []

        }

        this.handleClick = this.handleClick.bind(this)
    }

  
    handleClick(){
                
        if(this.state.estadoAmigo=="Eliminar de mis amigos"){
                this.setState({
                        estadoAmigo:"Agregar a mis amigos",
                        leyenda: ""
                })
        }else{
                this.setState({
                        estadoAmigo:"Eliminar de mis amigos",
                        leyenda: `${this.props.datos.username} , ${this.props.datos.name} ahora es tu amiga/o`,
                        amigos: this.props
                    
                })
                console.log(this.state.amigos);
                
                
        }

    }
    render(){
        return(
           
            <div >
               <div className="divPerfil">

              
                <div className="divAgrupado">
                <p className="campo">Nombre: {this.props.datos.name}</p>
                <p className="campo">Apellido: {this.props.datos.username}</p>
                <div className="divBtnDetalle">
                    <Link to={'/perfil/' + this.props.datos.id}>Ver detalle</Link>
                </div>
                <div className="divBtnAgregarAmigo"> 
                 {/* if ({this.state.leyenda!==""}) { */}
                     <label className="label"> {this.state.leyenda} </label>  <br/>
                         {/* }                */}
                <input type="button" className="btnAgregarAmigo" id="agregarAmigo" value={this.state.estadoAmigo} onClick={this.handleClick}></input>
                   </div>
                </div>
               
                <div className="divFoto">
                    <img className="foto" src= "../../img/perfil.jpeg"/>
               </div>
               </div>
              

            </div>
        )
    }
}
export default ListaPerfiles;