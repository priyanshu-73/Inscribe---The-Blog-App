// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "inscribe-a862c.firebaseapp.com",
  projectId: "inscribe-a862c",
  storageBucket: "inscribe-a862c.appspot.com",
  messagingSenderId: "637467528202",
  appId: "1:637467528202:web:39306a956398f0d446a3f3",
  measurementId: "G-ELE2P34HTG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
