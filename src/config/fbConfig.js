import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAvpCPZIXZobErOBI6jkSJnvA31Rs0051A",
    authDomain: "wippo-c6ee3.firebaseapp.com",
    databaseURL: "https://wippo-c6ee3.firebaseio.com",
    projectId: "wippo-c6ee3",
    storageBucket: "wippo-c6ee3.appspot.com",
    messagingSenderId: "177517400758"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
