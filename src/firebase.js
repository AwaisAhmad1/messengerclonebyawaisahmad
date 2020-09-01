import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
 {
    apiKey: "AIzaSyDNLPX_i1m3VXz63MiT0j0dT32Bt6AWGzU",
    authDomain: "messanger-clone-awaisahmad.firebaseapp.com",
    databaseURL: "https://messanger-clone-awaisahmad.firebaseio.com",
    projectId: "messanger-clone-awaisahmad",
    storageBucket: "messanger-clone-awaisahmad.appspot.com",
    messagingSenderId: "938946642953",
    appId: "1:938946642953:web:d3741e11cf5e3841f1e4d8"
  });
  const db = firebaseApp.firestore();
export default db;
