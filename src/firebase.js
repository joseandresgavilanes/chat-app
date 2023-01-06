import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGv9fj7deloiZ5qETkQse_kczdBjG-8s8",
  authDomain: "chat-app-51985.firebaseapp.com",
  projectId: "chat-app-51985",
  storageBucket: "chat-app-51985.appspot.com",
  messagingSenderId: "961449085173",
  appId: "1:961449085173:web:53af787db91e1e10b85dbc",
  measurementId: "G-7KM8P2M4TH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
