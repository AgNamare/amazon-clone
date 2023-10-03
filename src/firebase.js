import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF03ob51SPsift06h4Ldn_gBIu9gGTNEc",
  authDomain: "challenge-a9e46.firebaseapp.com",
  projectId: "challenge-a9e46",
  storageBucket: "challenge-a9e46.appspot.com",
  messagingSenderId: "550038527417",
  appId: "1:550038527417:web:6c676d67464eabeb3d6a68",
  measurementId: "G-0E2CVV7WXE"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = getAuth();


export { auth};