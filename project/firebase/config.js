// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcavw5nWZUrKrP5uqfHpdc5f56SChdNqs",
    authDomain: "wastix.firebaseapp.com",
    projectId: "wastix",
    storageBucket: "wastix.appspot.com",
    messagingSenderId: "1087731574938",
    appId: "1:1087731574938:web:5f1511d322cced9f879723",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
