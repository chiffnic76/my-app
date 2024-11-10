// src/services/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANp50U66L47KwZskNPyCpFkyIZdnU0Ekc",
  authDomain: "my-app-gmao.firebaseapp.com",
  projectId: "my-app-gmao",
  storageBucket: "my-app-gmao.firebasestorage.app",
  messagingSenderId: "845887357177",
  appId: "1:845887357177:web:27d5ed36916bfc31862228",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);