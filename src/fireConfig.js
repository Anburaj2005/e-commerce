// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChO1mqvsB1aF1kIj-29O3CiPkgyVBbicE",
  authDomain: "e-commerce-6fb37.firebaseapp.com",
  projectId: "e-commerce-6fb37",
  storageBucket: "e-commerce-6fb37.appspot.com",
  messagingSenderId: "589075198717",
  appId: "1:589075198717:web:925a9ab82cd806e301c494",
  measurementId: "G-ZC3792H54F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB;