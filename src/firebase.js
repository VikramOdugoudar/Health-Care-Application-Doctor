import firebase from "firebase";
const config = {
    apiKey: "AIzaSyDoRuHKQTydyMsXTOzfZF6LiP9RZs8fk50",
    authDomain: "health-firebase-doctor.firebaseapp.com",
    projectId: "health-firebase-doctor",
    storageBucket: "health-firebase-doctor.appspot.com",
    messagingSenderId: "639341758673",
    appId: "1:639341758673:web:c2ac6a0f3da79897ef9df0"
  };
  firebase.initializeApp(config);
export default firebase;