
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRJ1LxDxeFEmS57YDhIq3lue4xgVFhjiY",
  authDomain: "photofolio-cb3a8.firebaseapp.com",
  projectId: "photofolio-cb3a8",
  storageBucket: "photofolio-cb3a8.appspot.com",
  messagingSenderId: "975323201029",
  appId: "1:975323201029:web:b4058f881efc24b20d666c",
  measurementId: "G-PN8EK0PC8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
