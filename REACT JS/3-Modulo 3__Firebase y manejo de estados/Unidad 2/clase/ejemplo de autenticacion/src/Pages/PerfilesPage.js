import React, { Component } from 'react';

import Perfil from '../Components/Perfil'

class PerfilesPage extends Component {
  constructor(props){
    super(props)
    console.log(props.match.params.id)
    this.state = {
        error: false,
        isLoaded: false,
        perfiles: []
    }
    
  }
  componentWillMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
          this.setState({
            isLoaded: true,
            perfiles: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error)
          this.setState({
            isLoaded: true,
            error: true
          });
        }
      )
  }

  render() {
    const { error, isLoaded, perfiles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        
        <div class="row">

          
        
        
              
            {perfiles.map(
              perfil=><Perfil perfil={perfil}  />)
            }
          
        </div>
        
        
      );
    }
  }
}

export default PerfilesPage;
