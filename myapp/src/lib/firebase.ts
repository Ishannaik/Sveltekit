// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZefLMoCltV6PbiX2LKMZ_OJ0QLHTHlHc",
  authDomain: "svelte-course-a3b4b.firebaseapp.com",
  projectId: "svelte-course-a3b4b",
  storageBucket: "svelte-course-a3b4b.appspot.com",
  messagingSenderId: "248709013254",
  appId: "1:248709013254:web:2083161d2e46207e844887",
  measurementId: "G-4J7HGRTVQT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
