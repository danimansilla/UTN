import React,{Component} from 'react';
import Perfil from '../Components/Perfil'
import firebase from '../Config/firebase'


class Home extends Component{
    constructor(){
        super()
        this.state={
            perfiles:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        if(localStorage.getItem("login")){
            firebase.db.collection("usuarios")
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
                    dsadas
                    {this.state.perfiles.map((doc)=><Perfil datos={doc.data()} id={doc.id}/>)}
                    
                </div>
            )
        }
        
    }
}

export default Home;