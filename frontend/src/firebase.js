import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Use your actual Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyDN7t_4CY_U43CQFY9ukM2Zpu9m4SGm0Do",
    authDomain: "pearlhacks-64d69.firebaseapp.com",
    projectId: "pearlhacks-64d69",
    storageBucket: "pearlhacks-64d69.firebasestorage.app",
    messagingSenderId: "887917129575",
    appId: "1:887917129575:web:85cae0bdd7a5e22cac89c2"
  };
  

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
