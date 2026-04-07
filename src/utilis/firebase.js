// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbmBesF5ILW5D1eZPoeOl34Jk7qibc18w",
  authDomain: "netflixgpt-d28ca.firebaseapp.com",
  projectId: "netflixgpt-d28ca",
  storageBucket: "netflixgpt-d28ca.firebasestorage.app",
  messagingSenderId: "608535775375",
  appId: "1:608535775375:web:6329b2896019e3d83288fa",
  measurementId: "G-J9WG4EGGHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();