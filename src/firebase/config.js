// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu_9OixzdJohJRnWXrrfVCObv1KuUsZRI",
  authDomain: "ecommerceps5.firebaseapp.com",
  projectId: "ecommerceps5",
  storageBucket: "ecommerceps5.appspot.com",
  messagingSenderId: "385951821872",
  appId: "1:385951821872:web:e6ed5694049d9e84a57df5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirestore = () => app