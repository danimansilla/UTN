import React,{Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        console.log(this.props.title)
    }
    componentWillMount(){
        console.log("react utn componentWillMount")
    }
    componentDidMount(){
        console.log("react utn componentDidMount")
    }
    componentWillReceiveProps(nextProps){
        console.log("react utn componentWillReceiveProps",nextProps)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("react utn shouldComponentUpdate",nextProps,nextState)
        return false
    }
    componentWillUpdate(nextProps, nextState){
        console.log("react utn componentWillUpdate",nextProps,nextState)
    }
    componentDidUpdate(prevProps, prevState){
        console.log("react utn componentDidUpdate",prevProps, prevState)
    }


    render(){
    
        return(
            <div>
                Login
                {this.props.title}
                <button onClick={this.props.modificar}>Cambiar Title App</button>
            </div>
        )
    }
}

export default Login;