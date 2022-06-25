
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuNmDlln6xWec7NFQh56MhwxHt9zWwN6U",
    authDomain: "mcenterprises-2218a.firebaseapp.com",
    projectId: "mcenterprises-2218a",
    storageBucket: "mcenterprises-2218a.appspot.com",
    messagingSenderId: "953087380035",
    appId: "1:953087380035:web:68c7f3203fccfa43e5e2f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);