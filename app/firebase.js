// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXm8hOpKR_AvJg8aOMGynG1UIU2uqzt3U",
  authDomain: "mini-pocket-weather-app.firebaseapp.com",
  projectId: "mini-pocket-weather-app",
  storageBucket: "mini-pocket-weather-app.appspot.com",
  messagingSenderId: "510246866717",
  appId: "1:510246866717:web:f7ac84babfafe5adea9bf4",
  measurementId: "G-TVMYDFLSEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);