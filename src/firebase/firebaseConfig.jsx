import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAAtC2s57RuEUO5hKtgVUKgx5aWDFu9RQ4",
  authDomain: "payoutautomationsystem.firebaseapp.com",
  projectId: "payoutautomationsystem",
  storageBucket: "payoutautomationsystem.firebasestorage.app",
  messagingSenderId: "217689683621",
  appId: "1:217689683621:web:d5de0c6dd78831535eff4c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app);
