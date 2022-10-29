import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9w2l0Dk1MXv6VkAQ3jfbbxskZuIHUHMc",
  authDomain: "live-chat-ab616.firebaseapp.com",
  projectId: "live-chat-ab616",
  storageBucket: "live-chat-ab616.appspot.com",
  messagingSenderId: "60577214185",
  appId: "1:60577214185:web:bdca989f051dc8e12c8a78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
