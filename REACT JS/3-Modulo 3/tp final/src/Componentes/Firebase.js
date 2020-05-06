import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAXKxi0-9qu4Z8GMXQ-zbKOfHH_YUWwy5w",
    authDomain: "react-ca191.firebaseapp.com",
    databaseURL: "https://react-ca191.firebaseio.com",
    projectId: "react-ca191",
    storageBucket: "react-ca191.appspot.com",
    messagingSenderId: "156074816083",
    appId: "1:156074816083:web:e937b4e9a06a414d764ca6"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.auth = firebase.auth();
    console.log(firebase);
    
  }
  export default firebase;