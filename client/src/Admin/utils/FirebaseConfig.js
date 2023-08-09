import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAm0FKYsLOH9sPaUQAM5FaqQbeCtF_z0j0",
    authDomain: "bq-express-api-storage.firebaseapp.com",
    projectId: "bq-express-api-storage",
    storageBucket: "bq-express-api-storage.appspot.com",
    messagingSenderId: "372840210312",
    appId: "1:372840210312:web:43d87c37a2f270574e643d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);