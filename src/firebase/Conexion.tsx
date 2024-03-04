import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQ4jHwYiDkoaexZFUwBiIAlFCUDrTL_Jk",
  authDomain: "dictamenautomotriz-25d84.firebaseapp.com",
  projectId: "dictamenautomotriz-25d84",
  storageBucket: "dictamenautomotriz-25d84.appspot.com",  // Corrige esta línea
  messagingSenderId: "264265139590",
  appId: "1:264265139590:web:31119481a61804fa005807"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase); // Agrega esta línea para el servicio de almacenamiento

export { appFirebase, db, storage };
