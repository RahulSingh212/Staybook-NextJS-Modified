// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3MjpR_Ta6LRfoMOaoX-b-kTlVHuiuHtw",
  authDomain: "staybook-de712.firebaseapp.com",
  databaseURL: "https://staybook-de712-default-rtdb.firebaseio.com",
  projectId: "staybook-de712",
  storageBucket: "staybook-de712.appspot.com",
  messagingSenderId: "946000733513",
  appId: "1:946000733513:web:662ce04b970b3d8eb66698",
  measurementId: "G-V29JV44EFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();