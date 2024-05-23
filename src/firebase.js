// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgu3gQDUOQXIUxCtr2LfGRYYJrps-rqIg",
  authDomain: "my-project-827a4.firebaseapp.com",
  projectId: "my-project-827a4",
  storageBucket: "my-project-827a4.appspot.com",
  messagingSenderId: "1059168517810",
  appId: "1:1059168517810:web:3deafa54189438239053ab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

const firestore = firebase.firestore();
export const database = {
  users : firestore.collection('users')
}

//storage 
export const storage = firebase.storage();