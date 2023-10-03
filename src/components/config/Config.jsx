import {getDatabase} from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiSHf21b_qb5jHcGEUAO-t6j2A0FKQ08c",
  authDomain: "pjt11-1e0c0.firebaseapp.com",
  databaseURL: "https://pjt11-1e0c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pjt11-1e0c0",
  storageBucket: "pjt11-1e0c0.appspot.com",
  messagingSenderId: "980068833117",
  appId: "1:980068833117:web:372482829aafd671f9fab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);