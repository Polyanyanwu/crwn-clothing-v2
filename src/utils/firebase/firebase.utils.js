import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCufpu9V6pW1zewkaoC0b016Qba7LwivA4",
  authDomain: "crown-clothing-db-85826.firebaseapp.com",
  projectId: "crown-clothing-db-85826",
  storageBucket: "crown-clothing-db-85826.appspot.com",
  messagingSenderId: "158666256773",
  appId: "1:158666256773:web:08ac3ce6801c94d9a094ec",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, 
  additionalInformation={}) => {
  console.log("additional information", additionalInformation);
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // check if user does not exists, create it
  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    }catch (error){
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
