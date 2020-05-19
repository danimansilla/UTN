import React, { Component } from 'react';
import firebase from '../Config/firebase';
import PerfilesPage from './PerfilesPage';

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
        
        email:'',
        password:''
    }
    
    
  }
  handleSubmit(e){
    console.log(this.state); 
    /*firebase.database().ref("/users/").push({
        nombre: this.state.nombre
    })*/
    let email=this.state.email;
    let password=this.state.password;
    
    firebase.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
       console.log("Login")
       
    })
    .catch(error => {
        //this.setState(byPropKey('error', error));
        console.log("Error",error)
    });

    //console.log(login)
    e.preventDefault();
  }
  handleChange(event) {
    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    
      return (
        <div class="row">
            <div class="col-12  col-sm-6">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input name="email" value={this.state.email} onChange={this.handleChange.bind(this)}  type="text" class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingresar Usuario"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Contraseña</label>
                        <input name="password" value={this.state.password} onChange={this.handleChange.bind(this)}  type="text" class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingresar Usuario"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
      );
    }
  
}

export default LoginPage;
