import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import '../Componentes/Estilo.css';
import {Nav, Navbar} from 'react-bootstrap'

class Menu extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" > 
                <Navbar.Brand href="#home">AmigosEnCuarentena</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                <Nav.Link><Link to={'/registro'}>Registro</Link></Nav.Link>
                <Nav.Link><Link to={'/login'}>Login</Link></Nav.Link>
                </Nav>
            
            </Navbar>
          </div>
        )
    }

}
export default Menu;