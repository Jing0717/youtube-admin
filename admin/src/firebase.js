// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAeeVcxbg--yD31CdVNYmVK4Ex-WJwHABg",
    authDomain: "netflix-b2366.firebaseapp.com",
    projectId: "netflix-b2366",
    storageBucket: "netflix-b2366.appspot.com",
    messagingSenderId: "976965620677",
    appId: "1:976965620677:web:39098d0a3f87980d2db1ac",
    measurementId: "G-1C4ME3D9B6"
};

// const app = initializeApp(firebaseConfig);
// const storage = getDatabase(app);
// export default storage;
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;