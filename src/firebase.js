import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  getDoc,
} from "firebase/firestore";
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
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();
console.log(auth.currentUser);
console.log();

const signInWithGoogle = async () => {
  try {
    signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const sendPokemon = (pokemon) => async () => {
//   console.log("hello");
//   await setDoc(doc(db, "users"), {
//     pokemon,
//   });
//   console.log(pokemon);
// };

async function sendPokemon(pokemon) {
  const ref = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    await updateDoc(ref, {
      pokemons: arrayUnion(pokemon),
    });
  } else {
    await setDoc(doc(db, "users", auth.currentUser.uid), pokemon);
  }
}

async function getPokemon() {
  const ref = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data().pokemons;
  } else {
    // doc.data() will be undefined in this case
    return null;
  }
}

function SignOut() {
  const onSignOut = () => {
    auth.signOut();
    window.location.replace("/");
  };
  return (
    auth.currentUser && (
      <button className="btn btn-primary" onClick={onSignOut}>
        Sign Out
      </button>
    )
  );
}

export { auth, signInWithGoogle, sendPokemon, getPokemon, SignOut };
