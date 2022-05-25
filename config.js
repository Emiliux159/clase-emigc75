import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC7nbz40QQoPq_SmdLyClqr4C_34ApuOOw",
  authDomain: "biblotecadigitalemig.firebaseapp.com",
  projectId: "biblotecadigitalemig",
  storageBucket: "biblotecadigitalemig.appspot.com",
  messagingSenderId: "979567589170",
  appId: "1:979567589170:web:d7a1dfc98b915ac51fc92b"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
