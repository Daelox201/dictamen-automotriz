import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmZ7HI9YbFyUuitaiSPzsJ30GWCphz7m8",
  authDomain: "dictamenautomotriz-52b67.firebaseapp.com",
  projectId: "dictamenautomotriz-52b67",
  storageBucket: "dictamenautomotriz-52b67.appspot.com",
  messagingSenderId: "1012750241001",
  appId: "1:1012750241001:web:c89daa6049288430bd7478"
};

const appFirebase = initializeApp(firebaseConfig)

const db = getFirestore(appFirebase);
export default db;
export {appFirebase};