import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';

class LoginPage extends Component{
    constructor(props){
    super(props);
    console.log(this.props.title)
    this.handleSubmit =  this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
        usuario:'',
        password:''
    }
}
handleSubmit(e){
    console.log(this.state)
    e.preventDefault();

}
handleChange(e){
    
    const target = e.target;
    const value = target.value
    const name = target.name;
    
    this.setState({
        [name]:value
    })
    e.preventDefault();
}
    render(){

    
    return(
        <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" 
                        name="usuario" value={this.state.usuario} onChange={this.handleChange} />
                       
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