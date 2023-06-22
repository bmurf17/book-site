// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCggvcFkdZZGsdv4Tb2-1n9dcWbiTBC7Ao",
    authDomain: "booksite-2aa2a.firebaseapp.com",
    projectId: "booksite-2aa2a",
    storageBucket: "booksite-2aa2a.appspot.com",
    messagingSenderId: "613987919684",
    appId: "1:613987919684:web:5706f435743722658cd911",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
