// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdOGvkFZefLlMbl6SyRs6_0kUTgtOFbhA",
  authDomain: "riverbank-82aaa.firebaseapp.com",
  projectId: "riverbank-82aaa",
  storageBucket: "riverbank-82aaa.firebasestorage.app",
  messagingSenderId: "730193947963",
  appId: "1:730193947963:web:28774f9a1d7ef513455b1e",
  measurementId: "G-3NS24810Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance
