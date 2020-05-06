import * as firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDTBifG9hGKRqTfnY9TWx0iJv_9jHpop_0",
  authDomain: "react-74ab8.firebaseapp.com",
  databaseURL: "https://react-74ab8.firebaseio.com",
  projectId: "react-74ab8",
  storageBucket: "react-74ab8.appspot.com",
  messagingSenderId: "306351405488"
};
firebase.initializeApp(config);
firebase.auth = firebase.auth();
export default firebase;
