import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/database";

var firebaseConfig = {
  apiKey: "AIzaSyBJUjLSZBgotiUQdMLtBxbIHqgAYQYAvAM",
  authDomain: "cityvieww-a36c1.firebaseapp.com",
  databaseURL:
    "https://cityvieww-a36c1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cityvieww-a36c1",
  storageBucket: "cityvieww-a36c1.appspot.com",
  messagingSenderId: "499662423217",
  appId: "1:499662423217:web:35dc23482021e9883dce90",
  measurementId: "G-W25JGN17XC",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, database };
