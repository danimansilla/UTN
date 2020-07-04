import React, { Component } from 'react';
import firebase from '../Config/firebase';


class HomePage extends Component {
  constructor(props){
    super(props)

    this.state = {
        personas:[]
    }

    


    
  }
  componentWillMount(){
    var this_class = this;
    firebase.database().ref("/users/").once('value').then(function(snapshot){
      console.log("dadsdas",snapshot.val())
      this_class.setState({
        personas: snapshot.val()
      })
      
      
    })
  }
  
  render() {
        const prueba = "lea";
        return (
          <div>
              <div>
                Nombre Firebase:
                
              </div>
              
              {
                Object.keys(this.state.personas).map((k, v)=>
                  
                  <div>{this.state.personas[k].nombre}</div>
                )
                              
              }
          </div>
          
        );
      
  }
  
}

export default HomePage;
