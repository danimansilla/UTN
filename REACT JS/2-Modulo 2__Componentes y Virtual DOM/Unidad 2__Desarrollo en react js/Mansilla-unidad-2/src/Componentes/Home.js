import React, { Component } from 'react';
import Perfil from './Perfil';
class Home extends Component{
    perfiles;
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            perfiles :[]
        }
    }

    componentWillMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded : true,
                    perfiles : result
                });
            },
            (error) => {
                console.log(error)
                this.setState({
                    isLoaded : true,
                    error
                });
            }
        )
  
    }
    render(){
        const { error, isLoaded, perfiles} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div> Loading...</div>;
        }else{
            return (
                <ul>
                    {perfiles.map(
                        perfil => <Perfil datos={perfil}/>
                    )}
                </ul>
            );
        }
   
    }
}
export default Home ;