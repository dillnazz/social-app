import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: "AIzaSyAbCS90DmTJm3Vi3Z-ifdfjGljF0Zluw7w",
  // authDomain: "success-653de.firebaseapp.com",
  // projectId: "success-653de",
  // storageBucket: "success-653de.appspot.com",
  // messagingSenderId: "54811787645",
  // appId: "1:54811787645:web:175f7b012b6d0b03088c14",
  // measurementId: "G-T7DPELQPNR"

  apiKey: "AIzaSyDjt8P_NeSfV0Bh9BgqLQLYVBwgiOAZWrs",
  authDomain: "sociallapp-49144.firebaseapp.com",
  projectId: "sociallapp-49144",
  storageBucket: "sociallapp-49144.appspot.com",
  messagingSenderId: "687387179787",
  appId: "1:687387179787:web:85a26d8ea9bbbfdd03000e",
  measurementId: "G-GR0K91C9M4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);







