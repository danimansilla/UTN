import React, { Component } from 'react';
// import './../Componentes/Registro.css';
import firebase from '../Componentes/Firebase';


class RegistroPage extends Component{
    constructor(props){
        super(props);
        console.log("registro base");
        console.log(firebase.database());
        // console.log(this.props.title)
        this.handleSubmit =  this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            nombre:'',
            apellido:'',
            email:'',
            password:''
        }
    }
    handleSubmit(e){
        alert('Se registro correctamente: ' + this.state.nombre);
        console.log(this.state)
        firebase.database().ref('usuarios/').set({
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                email: this.state.email,
                password: this.state.password
            });
        // let email = this.state.email;
        // let password = this.state.password;


        // firebase.auth.createUserWithEmailAndPassword(email, password)
        // .then(() =>{
        //     console.log("Usuario creado");
 
        // })
        // .catch((error) =>{
        //     console.log("Error", error);
        // })
        e.preventDefault();
    
    }

  
    handleChange(e){
        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]:value
        })
        e.preventDefault();
    }
        render(){

   
    return(
        <div className="container">
            <form  onSubmit={this.handleSubmit}>
                 <fieldset>
                 <h2 >Registro de Usuario</h2>   
                 <div className="form-group col-sm-12">
                        <label >Nombre</label>
                        <input type="nombre" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Nombres"
                        name="nombre" value={this.state.nombre} onChange={this.handleChange}></input>
                       
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Apellido</label>
                        <input type="apellido" className="form-control" id="apellido" aria-describedby="apellido" 
                        placeholder="Apellido" name="apellido" value={this.state.apellido} onChange={this.handleChange}></input>
                       
                    </div>
                    {/* <div className="form-group col-sm-12">
                        <label >Telefono</label>
                        <input type="telefono" className="form-control" id="telefono" aria-describedby="telefono" 
                        placeholder="Ingresar Email" name="telefono" value={this.state.telefono} onChange={this.handleChange}></input>
                       
                    </div> */}
                    <div className="form-group col-sm-12">
                        <label >Dirección de Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="Ingresar Email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    {/* <div className="form-group col-sm-12">
                        <label >Confirme Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        placeholder="Confirmar Password" name="repassword" value={this.state.repassword} onChange={this.handleChange}></input>
                    </div> */}
                    <div>
                         <button type="submit" className="btn btn-primary ">Guardar</button>
                    </div>
                </fieldset>  
            </form>        
            
        </div>
    )
   }
}

export default RegistroPage;