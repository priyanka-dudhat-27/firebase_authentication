/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBdeyXULMZ7pJ-rw85QYPXhnv2HPLorFA",
  authDomain: "auth-proj-a632a.firebaseapp.com",
  projectId: "auth-proj-a632a",
  storageBucket: "auth-proj-a632a.appspot.com",
  messagingSenderId: "829027959522",
  appId: "1:829027959522:web:5922497a00a18f833f54bb",
  measurementId: "G-N1X3T90P17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider()