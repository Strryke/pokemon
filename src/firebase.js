import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnjAax_1hRuw81gyXOrqIwIEeQa2iNoYA",
  authDomain: "pokedex-c4d6c.firebaseapp.com",
  projectId: "pokedex-c4d6c",
  storageBucket: "pokedex-c4d6c.appspot.com",
  messagingSenderId: "1046147515297",
  appId: "1:1046147515297:web:09e01bafe24e4ae46481e0",
  measurementId: "G-MWM3MTX43M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const signInWithGoogle = async () => {
  try {
    signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, signInWithGoogle };
