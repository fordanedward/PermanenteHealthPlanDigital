// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1h8RGTuXDc-iN8w6zQdd7--gNWca5Zfc",
  authDomain: "permanentedb.firebaseapp.com",
  projectId: "permanentedb",
  storageBucket: "permanentedb.firebasestorage.app",
  messagingSenderId: "440366211775",
  appId: "1:440366211775:web:2a27df3427cf75b2fa9c0a",
  measurementId: "G-H1MN2BS98Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);