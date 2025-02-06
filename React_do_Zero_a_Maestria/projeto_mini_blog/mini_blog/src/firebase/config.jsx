// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgOr61odthoAZ8tZU9UgufhFTETH7U2pE",
  authDomain: "miniblog-ref-adb4c.firebaseapp.com",
  projectId: "miniblog-ref-adb4c",
  storageBucket: "miniblog-ref-adb4c.firebasestorage.app",
  messagingSenderId: "485662441265",
  appId: "1:485662441265:web:bc3a5b13a4a88024607a10",
  measurementId: "G-57M1CL40KR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
