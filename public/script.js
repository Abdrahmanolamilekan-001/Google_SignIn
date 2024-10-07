import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCPD5tShM-gZjlDg2KkZC8BrOwhllyGB8s",
  authDomain: "mixir-5.firebaseapp.com",
  projectId: "mixir-5",
  storageBucket: "mixir-5.appspot.com",
  messagingSenderId: "913309114569",
  appId: "1:913309114569:web:8af68405ecc66aadd2ed18",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential ? credential.accessToken : null;

    const user = result.user;
    console.log("User info:", user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error ${errorCode}: ${errorMessage}`);
  }
};

document
  .getElementById("googleSignInButton")
  .addEventListener("click", signInWithGoogle);
