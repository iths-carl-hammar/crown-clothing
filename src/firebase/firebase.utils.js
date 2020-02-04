import firebase from 'firebase/app'; // firebase is keyword so all is contect to the keyword. 
import 'firebase/firestore'; // man importerar vad man vill ha 
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyCa14fuB_I_k2m-gVGFfkJEB7cXvaC8etQ",
    authDomain: "crwn-db-be8c5.firebaseapp.com",
    databaseURL: "https://crwn-db-be8c5.firebaseio.com",
    projectId: "crwn-db-be8c5",
    storageBucket: "crwn-db-be8c5.appspot.com",
    messagingSenderId: "610682633250",
    appId: "1:610682633250:web:f54b0c345dc7cc94699e7b",
    measurementId: "G-ERBDGQF79X"
  };

  firebase.initializeApp(config); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;




