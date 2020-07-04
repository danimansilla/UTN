import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    
  componentWillMount(){
    console.log("componentWillMount");
  }  
  componentDidMount(){
    console.log("componentDidMount");
  }
  //De actualizacion
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps",nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
      
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <Link to='/'>Home</Link>
      
          </a>
          <a class="navbar-brand" href="#">
            <Link to='/Perfiles/'>Perfiles</Link>
      
          </a>
          <a class="navbar-brand" href="#">
            <Link to='/login/'>Login</Link>
      
          </a>
          <a class="navbar-brand" href="#">
            <Link to='/registro/'>Registro</Link>
      
          </a>
        </nav>
      
      </div>
      
    );
  }
}

export default Menu;
