// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "fir-blog-1ce2f.firebaseapp.com",
  projectId: "fir-blog-1ce2f",
  storageBucket: "fir-blog-1ce2f.appspot.com",
  messagingSenderId: "190345590215",
  appId: "1:190345590215:web:92fcc456a9f563c13ad5e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
