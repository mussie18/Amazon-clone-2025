// Example firebase.js using v9 modular SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgXVISjX_pk_OkGMHNZ7orizE0po9I7VM",
  authDomain: "clone-e4c60.firebaseapp.com",
  projectId: "clone-e4c60",
  storageBucket: "clone-e4c60.appspot.com",
  messagingSenderId: "403137433148",
  appId: "1:403137433148:web:459aa2504ed122664cfd39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
