import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Menu extends Component{
    render(){
        return(
            <div>
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'/perfiles'}>Perfiles</Link></div>
            </div>
        )
    }

}
export default Menu;