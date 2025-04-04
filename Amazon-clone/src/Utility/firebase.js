import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgXVISjX_pk_OkGMHNZ7orizE0po9I7VM",
  authDomain: "clone-e4c60.firebaseapp.com",
  projectId: "clone-e4c60",
  storageBucket: "clone-e4c60.appspot.com",
  messagingSenderId: "403137433148",
  appId: "1:403137433148:web:459aa2504ed122664cfd39",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export auth and firestore
export const auth = firebase.auth();
export const db = firebase.firestore();
