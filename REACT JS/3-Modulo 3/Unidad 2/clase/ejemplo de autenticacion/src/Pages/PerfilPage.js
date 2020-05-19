import React, { Component } from 'react';

import Perfil from '../Components/Perfil'

class PerfilPage extends Component {
  constructor(props){
    super(props)
    console.log(props.match.params.id)
    this.state = {
        error: false,
        isLoaded: false,
        perfiles: []
    }
    
  }

  render() {
      let perfil = {name: "Leandro"}
     return (
        
        
        <div class="row">
            <Perfil perfil={perfil}  />
          
        </div>
        
        
      );
    
  }
}

export default PerfilPage;
