// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKX6qIUfHsACkObjyJzapF6PLoSG5i7xw",
  authDomain: "fir-crownclothing-dec.firebaseapp.com",
  projectId: "fir-crownclothing-dec",
  storageBucket: "fir-crownclothing-dec.appspot.com",
  messagingSenderId: "281539300655",
  appId: "1:281539300655:web:666bf948f784ff12baa5da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

// Google Auth 
export const auth = getAuth();
export const signInWithGooglePop = () => signInWithPopup(auth, provider);

//Firestore db

export const db = getFirestore();

export const createUserDocFromAuth = async (user, additionalInformation={}) => {

  if(!user) return;
  const userDocRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user doesnt exists create user doc
   if(!userSnapshot.exists()) {
      const { displayName, email } = user;
      const createdAt = new Date();
      
      try {
        await setDoc(userDocRef, {
          createdAt,
          displayName,
          email,
          ...additionalInformation
        })
      }catch(error) {
        console.log("error creating user", error)
      }

      return userDocRef;
  }
}


export const createAuthUserFromEmailPassword = async (email,password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email,password)

}

export const signInWithFirebaseEmailPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
}