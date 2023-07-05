// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUtSKT96HgJ7hnIhqFRL5G3_-CDhwpNos",
  authDomain: "soc-audiohive.firebaseapp.com",
  projectId: "soc-audiohive",
  storageBucket: "soc-audiohive.appspot.com",
  messagingSenderId: "881472567929",
  appId: "1:881472567929:web:e76a498c93a8f79737b2a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};