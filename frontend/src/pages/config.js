import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBUtSKT96HgJ7hnIhqFRL5G3_-CDhwpNos",
  authDomain: "soc-audiohive.firebaseapp.com",
  databaseURL: "https://soc-audiohive-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "soc-audiohive",
  storageBucket: "soc-audiohive.appspot.com",
  messagingSenderId: "881472567929",
  appId: "1:881472567929:web:e76a498c93a8f79737b2a8"
}

const FirebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth()
console.log(auth, provider)

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
.then((result)=>{
  const username = result.user.displayName
  const email = result.user.email
  const profilePic = result.user.photoURL
  
  localStorage.setItem("name", username)
  localStorage.setItem("email", email)
  localStorage.setItem("profilePic", profilePic)
});
export const db = getFirestore(FirebaseApp);


export const createUserDocumentFromAuth = async (userAuth)=>{
  console.log(userAuth)
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)
 
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try {await setDoc(userDocRef, {displayName, email, createdAt })}
    catch (error){console.log("EERRRRRRRORR!!")}
  }
}