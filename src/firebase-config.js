import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjvDIQhmciiv6TX3KxApDNhup_AyDhkAo",
    authDomain: "musictheory-c4fc7.firebaseapp.com",
    projectId: "musictheory-c4fc7",
    storageBucket: "musictheory-c4fc7.appspot.com",
    messagingSenderId: "197202963290",
    appId: "1:197202963290:web:ea4cad1baf29110dc06163",
    measurementId: "G-VEHWSVL3KT"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
