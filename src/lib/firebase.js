import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3X0OrH3K1QMQWO8nbN42fIP2ZbcXTP1A",
  authDomain: "art-shop-91c06.firebaseapp.com",
  projectId: "art-shop-91c06",
  storageBucket: "art-shop-91c06.appspot.com",
  messagingSenderId: "1026100870907",
  appId: "1:1026100870907:web:a41bd4fd40549b90a13a5e",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
