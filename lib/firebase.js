import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZo0LLtDem0wULeC2C4VjH1gZPp4dEJF8",
  authDomain: "upsc-94707.firebaseapp.com",
  projectId: "upsc-94707",
  storageBucket: "upsc-94707.appspot.com",
  messagingSenderId: "435736968193",
  appId: "1:435736968193:web:d73c8bd975366300f71400",
  measurementId: "G-3W13ZEW5YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
