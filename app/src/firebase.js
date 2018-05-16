import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBdH2eUT7bwjTpJJYvodw-bWICrBtn-kt0",
    authDomain: "react-firebase-demo-e50b4.firebaseapp.com",
    databaseURL: "https://react-firebase-demo-e50b4.firebaseio.com",
    projectId: "react-firebase-demo-e50b4",
    storageBucket: "react-firebase-demo-e50b4.appspot.com",
    messagingSenderId: "681310198576"
  };

firebase.initializeApp(config);
export default firebase;