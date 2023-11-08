import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID!,
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export const db = getFirestore(fire);
export const storage = getStorage(fire);
export const auth = getAuth(fire);

export default fire;
