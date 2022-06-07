// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyDR_LEhMsqUO4I59j-PcvCOkf5eHmWdAv0",
  // authDomain: "daraz-app-73432.firebaseapp.com",
  // projectId: "daraz-app-73432",
  // storageBucket: "daraz-app-73432.appspot.com",
  // messagingSenderId: "1073109818211",
  // appId: "1:1073109818211:web:385022f3ba154f01ba9156",
  // measurementId: "G-5P2CYQTVRB",
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
const storage = getStorage(app);
const firestore = getFirestore(app);
export { storage, firestore };
