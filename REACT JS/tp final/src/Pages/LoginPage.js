import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import firebase from '../Componentes/Firebase';


class LoginPage extends Component{
    constructor(props){
    super(props);
    console.log(this.props.title)
    this.handleSubmit =  this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
        email:'',
        password:''
    }
     this.errores= null;
}
handleSubmit(e){
    console.log(this.state)
    let email=this.state.email;
    let password=this.state.password;
    firebase.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
       console.log("Login")
       
    })
    .catch(error => {
        //this.setState(byPropKey('error', error));

        console.log("Error",error)

        this.errores= error;
        alert(error);
    });

    e.preventDefault();
   

}
handleChange(e){
    
    const target = e.target;
   // const value = target.value
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;
    
    this.setState({
        [name]:value
    })
    e.preventDefault();
}
    render(){
   const { error, isLoaded} = this.state;
   if(error!= undefined){
       return(
                      <div>Error</div>
       )
   }
    return(
       
        <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" 
                        name="email" value={this.state.email} onChange={this.handleChange} />
                       
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña"
                        name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                </Form>

                
        </div>

    )
    }
}


export default LoginPage;