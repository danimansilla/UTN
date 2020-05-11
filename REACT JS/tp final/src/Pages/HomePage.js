import React, { Component } from 'react';
// import './../Componentes/Estilo.css';
import ListaPerfiles from '../Componentes/ListaPerfiles';
import firebase from '../Componentes/Firebase';

class HomePage extends Component{
    constructor(){
        super()
        this.state={
            perfiles:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        if(localStorage.getItem("login")){
            firebase.db.collection("Productos")
            .get()
            .then(querySnapshot=>{
                console.log("dsads",querySnapshot.docs)
                this.setState({
                    perfiles:querySnapshot.docs,
                    isLoaded:true
                })
                
                
            })
        }
        
    }
    render(){
        if(!this.state.isLoaded){
            return (
                <div>
                    Loading                
                </div>
            )
        }else{
            return(
                <div>
                    {this.state.perfiles.map((doc)=><ListaPerfiles datos={doc.data()} id={doc.id}/>)}
                    
                </div>
            )
        }
        
    }
}
export default HomePage ;