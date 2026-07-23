import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
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

// Protect the dashboard
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    const heading = document.querySelector("h2");
    if (heading) {
      heading.textContent = `Welcome 👋 ${user.email}`;
    }
  }
});

// Logout
window.logout = async function () {
  await signOut(auth);
  window.location.href = "index.html";
};
