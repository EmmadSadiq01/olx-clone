import * as firebase from 'firebase/app';
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBKslC45tnirgUOGRNP68nrhIbU6HeZqAc",
    authDomain: "olx-clone-224ca.firebaseapp.com",
    databaseURL: "https://olx-clone-224ca.firebaseio.com",
    projectId: "olx-clone-224ca",
    storageBucket: "olx-clone-224ca.appspot.com",
    messagingSenderId: "499697870867",
    appId: "1:499697870867:web:407eefecd04e6028d6b7e6",
    measurementId: "G-0Y7JBZMFBG"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);