// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVhTkTSM00H1m76bgyyL0XL20EZz7a30A",
  authDomain: "module-49-react-private-auth.firebaseapp.com",
  projectId: "module-49-react-private-auth",
  storageBucket: "module-49-react-private-auth.firebasestorage.app",
  messagingSenderId: "593023034959",
  appId: "1:593023034959:web:e7e656529c0611874eac3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)