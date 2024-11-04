// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOoSeikKngzmok7cjM7eOHeQIWzSYJ18E",
  authDomain: "riverbank-fb00a.firebaseapp.com",
  projectId: "riverbank-fb00a",
  storageBucket: "riverbank-fb00a.appspot.com",
  messagingSenderId: "980325991036",
  appId: "1:980325991036:web:acc5d97e4611f01a58fff9"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
