import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtoGmJ6xs7GVgexWIdRkiBt47l3t5wuCQ",
  authDomain: "testproj-48f04.firebaseapp.com",
  projectId: "testproj-48f04",
  storageBucket: "testproj-48f04.appspot.com",
  messagingSenderId: "600681312047",
  appId: "1:600681312047:web:b8361cb222490161c1bbda",
  measurementId: "G-GX6ZSN4JH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);
