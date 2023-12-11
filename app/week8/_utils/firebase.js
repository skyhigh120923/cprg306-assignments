// firebase.js
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsgPCQ778TN_3WzpxrDV45829n2l0nrKw",
  authDomain: "cprg306-assignments-9384c.firebaseapp.com",
  projectId: "cprg306-assignments-9384c",
  storageBucket: "cprg306-assignments-9384c.appspot.com",
  messagingSenderId: "363432008342",
  appId: "1:363432008342:web:90743be1fa94e43500c0b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
