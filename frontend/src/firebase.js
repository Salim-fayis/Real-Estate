// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-174fe.firebaseapp.com",
  projectId: "mern-estate-174fe",
  storageBucket: "mern-estate-174fe.appspot.com",
  messagingSenderId: "236342964062",
  appId: "1:236342964062:web:d9b9ed901c0e0687ce69cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);