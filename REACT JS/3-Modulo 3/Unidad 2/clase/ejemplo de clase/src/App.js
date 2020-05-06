import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Registro from './Pages/Registro'
import Menu from './Layout/Menu'
import Login from './Pages/Login'
import DetallePerfil from './Pages/DetallePerfil'
import { BrowserRouter, Route} from "react-router-dom";



  
class App extends Component{
    constructor(){
        super()
        // Initialize Firebase
        
    }
    
    render(){

        return (
            <div className="App">
                
                <BrowserRouter>
                    <Route  component={Menu} />
                    <Route path="/" exact  component={Home} />
                    <Route path="/login" exact  component={()=> <Login title={'test'} />} />
                    <Route path="/registro" exact  component={Registro} />
                    <Route path="/detalle-perfil/:id" exact  component={DetallePerfil} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
