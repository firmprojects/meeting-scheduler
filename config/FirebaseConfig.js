// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKy32Gl3AqMohqWZJwXar6qXfGjxG7TD0",
  authDomain: "firmscheduler-3f496.firebaseapp.com",
  projectId: "firmscheduler-3f496",
  storageBucket: "firmscheduler-3f496.appspot.com",
  messagingSenderId: "794850565478",
  appId: "1:794850565478:web:851b6baaa33ddf292efca7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
