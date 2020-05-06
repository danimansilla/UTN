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
           firebase.database().ref('usuarios/').once('value').then(snapshot =>{
               console.log(snapshot.val());
               this.setState({
                perfiles: snapshot.val(),
                isLoaded:true
               } )
           })
            // firebase.db.collection('usuarios/')
            // .get()
            // .then(querySnapshot=>{
            //     console.log("dsads",querySnapshot.docs)
            //     this.setState({
            //         perfiles:querySnapshot.docs,
            //         isLoaded:true
            //     })
                
              
                
            // })
          //  console.log( 'estado'+this.state.perfiles);
        // }
        
    }
    // componentWillMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             console.log(result)
    //             this.setState({
    //                 isLoaded : true,
    //                 perfiles : result
    //             });
    //         },
    //         (error) => {
    //             console.log(error)
    //             this.setState({
    //                 isLoaded : true,
    //                 error
    //             });
    //         }
    //     )
  
    // }
    render(){
        const { error, isLoaded, perfiles} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div> Loading...</div>;
        }else{
            return (
              <div>
                    {Object.keys(this.state.perfiles).map((k,v)=>
                    <ListaPerfiles datos={this.state.perfiles[k]}/>)}
              </div>
                  
               
                    
            
            );
        }
   
    }
}
//     render(){
//       return(
//       <div className="col-sm-12 center">
               
//             {/* <div className="jumbotron">
//                 <h1 className="display-3">¡¡Bienvenido!!</h1>
//                 <p className="lead">Quedate en casa es un servicio pensado para vos y 
//                     ademas te ofrece la más amplia gama de servicios especialmente
//                     diseñados para ofrecerte la protección más conveniente..</p>
//                 <p>La mejor red social en todo momento a solo un click.</p>
//                 <p className="lead">
//                 <Link to={'/perfiles'}>Ver lista de perfiles</Link><br/>
//                 <Link to={'/registro'}>Registrarse</Link><br/>
//                 <Link to={'/login'}>Login</Link><br/>
//                 </p>
//             </div> */}       
//         </div>        )
   
//     }
// }
export default HomePage ;