// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHxcGOH1TBMtrG3I41xqRX_50Zd9se-eg",
  authDomain: "netflix-gpt-bd986.firebaseapp.com",
  projectId: "netflix-gpt-bd986",
  storageBucket: "netflix-gpt-bd986.firebasestorage.app",
  messagingSenderId: "52510482143",
  appId: "1:52510482143:web:a38cffad2aff830f9ed36a",
  measurementId: "G-LFDEEE83K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();