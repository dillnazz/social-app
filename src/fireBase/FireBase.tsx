import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCOq4PJo_nv1Wy6u1INFMyhipg2v4DLObQ",
  authDomain: "autorization-b4b58.firebaseapp.com",
  projectId: "autorization-b4b58",
  storageBucket: "autorization-b4b58.appspot.com",
  messagingSenderId: "108977281127",
  appId: "1:108977281127:web:5426770682d6e448badcc2",
  measurementId: "G-TDBQFXTF0V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'it';

