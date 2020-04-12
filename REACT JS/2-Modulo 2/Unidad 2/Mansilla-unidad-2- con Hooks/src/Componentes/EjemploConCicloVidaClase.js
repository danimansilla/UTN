import React, { Component } from 'react';


class EjemploConCicloVidaClase extends Component{

    constructor(props){
        super(props);
        this.state ={
            count : 0
        };
    }
    componentDidMount(){
        document.title= `Vos clicleaste ${this.state.count}`;
    }
    componentDidUpdate(){
        document.title= `Vos clicleaste ${this.state.count}`;

    }
    render(){
        return(
            <div>
                <p>Tu clic {this.state.count} con clases y ciclo de vida</p>
                <button onClick={()=> this.setState({count: this.state.count + 1})}>
                    Clicleame
                </button>
            </div>
        )
    }
}
export default EjemploConCicloVidaClase;