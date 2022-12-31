
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBTIDx9T3yIApHnPtX0-z9h6uc65wYH8QQ",
  authDomain: "proyectoreact-ec171.firebaseapp.com",
  projectId: "proyectoreact-ec171",
  storageBucket: "proyectoreact-ec171.appspot.com",
  messagingSenderId: "565150892144",
  appId: "1:565150892144:web:1999f522794dad571d34b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)