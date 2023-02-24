// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXTnJ_wy2oQ5PdtM_QX3eecflNsH7z2B0",
  authDomain: "netflix-clone-5d767.firebaseapp.com",
  projectId: "netflix-clone-5d767",
  storageBucket: "netflix-clone-5d767.appspot.com",
  messagingSenderId: "9796013418",
  appId: "1:9796013418:web:f7bd568042a7e686b4a913",
  measurementId: "G-62QS80TEYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);