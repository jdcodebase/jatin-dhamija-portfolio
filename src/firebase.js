// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7xZOFsk7IU40Tl31NSuf83lYwExSCmeo",
  authDomain: "portfolio-contact-a6303.firebaseapp.com",
  projectId: "portfolio-contact-a6303",
  storageBucket: "portfolio-contact-a6303.firebasestorage.app",
  messagingSenderId: "716587513929",
  appId: "1:716587513929:web:07318d820da14f99156798",
  measurementId: "G-75L3M838YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
