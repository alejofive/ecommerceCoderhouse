// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJCIHQd9W_-OS9zM05v2uGyN-4e7zJnWU",
  authDomain: "ecomerce-141b2.firebaseapp.com",
  projectId: "ecomerce-141b2",
  storageBucket: "ecomerce-141b2.appspot.com",
  messagingSenderId: "900552474621",
  appId: "1:900552474621:web:39098bfedcbc5125482394",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFireBase = () => app