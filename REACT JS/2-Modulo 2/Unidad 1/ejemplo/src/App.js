import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Registro from './Registro'

class App extends Component{
    constructor(){
        super()
        this.state = {
            titulo:"React app"
        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        
        this.setState({
            titulo:"React app modificado"
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("react utn shouldComponentUpdate App",nextProps,nextState)
        return true
    }
    componentDidUpdate(prevProps, prevState){
        console.log("react utn componentDidUpdate app",prevProps, prevState)
    }
    render(){
        //let titulo = "React app"
        let nombre = "Test"
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
               
                Learn React dsaadasd
                <Login title={this.state.titulo} modificar={this.handleClick} />
                <Registro title={this.state.titulo} nombre={nombre} />
                <button onClick={this.handleClick}>Cambiar Title</button>

            </header>
            </div>
        );
    }
}

export default App;
