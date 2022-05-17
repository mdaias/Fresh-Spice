// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNL2qStD2M018-yGaNZZRWHL1DEbJ8Oy8",
  authDomain: "spice-warehouse-8f352.firebaseapp.com",
  projectId: "spice-warehouse-8f352",
  storageBucket: "spice-warehouse-8f352.appspot.com",
  messagingSenderId: "1027529845331",
  appId: "1:1027529845331:web:344683728958254c76f4a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;