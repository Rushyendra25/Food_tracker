import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCiqZxSTBxHvcsMaw0Pr_YBvyaXTa8DjXQ",
    authDomain: "organsdonation-8cb39.firebaseapp.com",
    projectId: "organsdonation-8cb39",
    storageBucket: "organsdonation-8cb39.appspot.com",
    messagingSenderId: "108493180280",
    appId: "1:108493180280:web:56eca0d3e2a4b5ad618c8d",
    measurementId: "G-098PY2CL2X"
  };
  const app=initializeApp(firebaseConfig)
  export const auth = getAuth(app);
  