import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDowGHrpTUt9quaAD3iG4Tz3UgOFQ5p6Fs",
    authDomain: "save-my-recipes.firebaseapp.com",
    projectId: "save-my-recipes",
    storageBucket: "save-my-recipes.appspot.com",
    messagingSenderId: "261002355259",
    appId: "1:261002355259:web:d7ec1c548b42f033a4b21e"
};

// Init firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore and timestamp
const db = getFirestore(app)
const timestamp = serverTimestamp();

// Initialize authentication
const auth: Auth = getAuth(app);

const storage = getStorage(app);

export { db, timestamp, auth, storage }