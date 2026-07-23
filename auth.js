import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEZnQRhK5nPoQaZgFX0moKd369Gd0AfAk",
  authDomain: "proscanner-f2b15.firebaseapp.com",
  projectId: "proscanner-f2b15",
  storageBucket: "proscanner-f2b15.firebasestorage.app",
  messagingSenderId: "997903347044",
  appId: "1:997903347044:web:79f3305d71d87bbe65de71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.firebaseAuth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.GoogleAuthProvider = GoogleAuthProvider;
window.signInWithPopup = signInWithPopup;
