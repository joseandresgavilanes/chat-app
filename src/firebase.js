import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD21fvpM3tjikZabRgGasaV9_Jj8onrZm8",
  authDomain: "live-chat-bae50.firebaseapp.com",
  projectId: "live-chat-bae50",
  storageBucket: "live-chat-bae50.appspot.com",
  messagingSenderId: "328903766054",
  appId: "1:328903766054:web:d0bf36e5e89dde80e436e7",
  measurementId: "G-72SEWT13ZY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
