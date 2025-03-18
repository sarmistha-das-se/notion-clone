import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2OOQT71bhrL2J1G_SKPIaRxfETR61xgc",
  authDomain: "notion-clone-3b652.firebaseapp.com",
  projectId: "notion-clone-3b652",
  storageBucket: "notion-clone-3b652.firebasestorage.app",
  messagingSenderId: "299068391050",
  appId: "1:299068391050:web:8c991241e261c25fa3b773",
  measurementId: "G-GV865BEQTS"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db };