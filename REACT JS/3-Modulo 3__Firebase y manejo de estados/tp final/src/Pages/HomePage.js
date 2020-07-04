import React, { Component } from 'react';
// import './../Componentes/Estilo.css';
import ListaPerfiles from '../Componentes/ListaPerfiles';
import firebase from '../Componentes/Firebase';

class HomePage extends Component{
    perfiles;
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            perfiles :[]
        }
    }
    componentDidMount(){
        // if(localStorage.getItem("login")){
           firebase.database().ref('usuarios/').once('value')
           .then(
               (snapshot) =>{
                    console.log(snapshot.val());
                    this.setState({
                        perfiles: snapshot.val(),
                        isLoaded:true
                    });
                },
                (error) => {
                    console.log(error)
                                this.setState({
                                    isLoaded : true,
                                    error: error
                                });
                });
    }

    render(){
        const { error, isLoaded, perfiles} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div> Loading...</div>;
        }else{
            if(this.state.perfiles !=undefined){
                return ( 
                    <div>
                          {Object.keys(this.state.perfiles).map((k,v)=>
                          <ListaPerfiles datos={this.state.perfiles[k]}/>)}
                    </div>   )
            }else{
                return(
                <div>
                    <p>No hay usuarios</p>
                </div>)
            }
        }
   
    }
}
export default HomePage ;