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
  onAuthStateChanged,
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

const signInWithGoogle = async () => {
  try {
    signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

async function sendPokemon(pokemon) {
  const uid = localStorage.getItem("uid");
  const ref = doc(db, "users", uid);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    console.log(pokemon, uid);
    await updateDoc(ref, {
      pokemons: arrayUnion(pokemon),
    });
  } else {
    console.log(uid);
    await setDoc(ref, {
      pokemons: [pokemon],
    });
    // await updateDoc(ref, {
    //   pokemons: arrayUnion(pokemon),
    // });
  }
}

async function getPokemon() {
  const uid = localStorage.getItem("uid");
  // console.log(typeof uid);
  // console.log(typeof auth.currentUser.uid);
  const ref = doc(db, "users", uid);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
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
    localStorage.clear();
  };
  return (
    <button className="nav-link active btn" onClick={onSignOut}>
      Sign Out
    </button>
  );
}

export { auth, signInWithGoogle, sendPokemon, getPokemon, SignOut };
