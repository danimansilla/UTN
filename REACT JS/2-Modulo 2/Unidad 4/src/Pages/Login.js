import React,{Component} from 'react';


class Login extends Component{
    constructor(props){
        super(props);
        console.log(this.props.title)
        this.handleSubmit =  this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state={
            usuario:'a',
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
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Usuario</label>
                        <input type="text" name="usuario" value={this.state.usuario} onChange={this.handleChange}></input>
                    </div>
                    
                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
                
            </div>
        )
    }
}

export default Login;