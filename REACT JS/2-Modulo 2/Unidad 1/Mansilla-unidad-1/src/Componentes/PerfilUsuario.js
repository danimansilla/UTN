import React, { Component } from 'react';
import imagenPerfil from '../img/perfil.jpeg';
import './Estilo.css'
class PerfilUsuario extends Component{
        constructor(){
                super()
                this.state = {
                    estadoAmigo:"Agregar a mis amigos",
                    leyenda: ""
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
                                leyenda: "Angela Mansilla ahora es tu amiga"
                        })
                }

            }
            render(){
    
                return(
                        <div className="divPerfil" >
                                <div className="divAgrupado">
                                        <label className="label">Nombre</label>
                                        <input type="text" className="campo" id="nombre" value="Angela Mansilla" disabled></input>
                        
                                        <label className="label">Ciudad</label>
                                        <input type="text" className="campo" id="ciudad" value="Libertad" disabled></input>
                                        <div className="divBtnAgregarAmigo"> 
                                          if ({this.state.leyenda!==""}) {
                                            <label className="label"> {this.state.leyenda}    </label>  
                                         }               
                                        <input type="button" className="btnAgregarAmigo" id="nombre" value={this.state.estadoAmigo} onClick={this.handleClick}></input>

                                        </div>
                                </div>
                                <div className="divFoto" >
                                <img className="foto" src={imagenPerfil} alt="imgenPerfil"></img>
                                
                                </div>
                        
                        </div>
                )
            }

        }
export default PerfilUsuario;


 