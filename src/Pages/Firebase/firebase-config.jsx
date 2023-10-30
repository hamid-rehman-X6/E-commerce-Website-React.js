import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCV613DGkxX8GbXki_A1g4r-eTI7nwcBA",
  authDomain: "e-commerce-authenticatio-526cd.firebaseapp.com",
  projectId: "e-commerce-authenticatio-526cd",
  storageBucket: "e-commerce-authenticatio-526cd.appspot.com",
  messagingSenderId: "1078789218699",
  appId: "1:1078789218699:web:74efb9bb31140f42df8f8e",
  measurementId: "G-MM3DF96ZNH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
