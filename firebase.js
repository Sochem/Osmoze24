// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ENV.NEXT_PUBLIC_API_KEY,
  authDomain: "osmoze24-8667f.firebaseapp.com",
  projectId: "osmoze24-8667f",
  storageBucket: "osmoze24-8667f.appspot.com",
  messagingSenderId: "835964102534",
  appId: "1:835964102534:web:d898598ec1b9d250192e07",
  measurementId: "G-ZBKK8WTT0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, db };
