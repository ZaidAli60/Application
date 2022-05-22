// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsmvPHVYBLPhLswAXYaTY4_Y2mYYtolB0",
  authDomain: "e-commerce-5372b.firebaseapp.com",
  projectId: "e-commerce-5372b",
  storageBucket: "e-commerce-5372b.appspot.com",
  messagingSenderId: "845388928178",
  appId: "1:845388928178:web:67790aab2416e6debd65ab",
  measurementId: "G-D7Q19K5MGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
