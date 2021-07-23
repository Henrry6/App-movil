import firebase from 'firebase'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyC7TP0fzHRgsX_j0TSD_iCWm4C7ry42w5o",
  authDomain: "uber-27285.firebaseapp.com",
  projectId: "uber-27285",
  storageBucket: "uber-27285.appspot.com",
  messagingSenderId: "121855271639",
  appId: "1:121855271639:web:46b9137eb1170c49aa8692"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default{
  firebase,
  db,
} 