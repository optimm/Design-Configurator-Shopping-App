
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChVXIW9uDZ-GiO-GXKJ8UokV-DXzxn9Vo",
    authDomain: "mcenterprises-45a7d.firebaseapp.com",
    projectId: "mcenterprises-45a7d",
    storageBucket: "mcenterprises-45a7d.appspot.com",
    messagingSenderId: "58030800253",
    appId: "1:58030800253:web:ce825a0a406ea9831ce014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

