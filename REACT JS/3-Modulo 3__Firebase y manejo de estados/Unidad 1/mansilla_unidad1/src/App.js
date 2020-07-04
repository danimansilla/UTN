import React, { Component } from 'react';
import './App.css';
import Menu from './Layout/Menu';
import Home from './Pages/Home';
import {BrowserRouter, Route} from "react-router-dom";
import Perfil from './Pages/Perfil';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAXKxi0-9qu4Z8GMXQ-zbKOfHH_YUWwy5w",
  authDomain: "react-ca191.firebaseapp.com",
  databaseURL: "https://react-ca191.firebaseio.com",
  projectId: "react-ca191",
  storageBucket: "react-ca191.appspot.com",
  messagingSenderId: "156074816083",
  appId: "1:156074816083:web:e937b4e9a06a414d764ca6"
};
class App extends Component {

  constructor(){
    super();
  
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      console.log(firebase);
    }
  }
  render (){
    return(
    <div className="App">
    <div className="app container">

    <BrowserRouter>
        <Route component={Menu}/>
        <Route path="/" exact component={Home}/>
        <Route path="/perfil/:id" exact component={Perfil}/>
        <Route path="/login" exact component={Login}/>  
        <Route path="/registro" exact component={Registro}/>  
    </BrowserRouter>
      </div>  
    </div>
    );
  
   }
}

export default App;
