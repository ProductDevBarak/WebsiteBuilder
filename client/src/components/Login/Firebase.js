import { getAuth,OAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZTxOQnMvfchUO0zGwRwqpkI1kxbAz4EQ",
  authDomain: "ms-login-cd10a.firebaseapp.com",
  projectId: "ms-login-cd10a",
  storageBucket: "ms-login-cd10a.firebasestorage.app",
  messagingSenderId: "4294941252",
  appId: "1:4294941252:web:ba2886fd681e56162afa11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new OAuthProvider('microsoft.com');

export {auth, provider}