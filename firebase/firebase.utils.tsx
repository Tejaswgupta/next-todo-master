import firebase from "firebase/app";
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyANI_LCqFo2MgWqUqok1R0ZgPqEvUiDoWc",
  authDomain: "todo-list-9ad01.firebaseapp.com",
  databaseURL: "https://todo-list-9ad01.firebaseio.com",
  projectId: "todo-list-9ad01",
  storageBucket: "todo-list-9ad01.appspot.com",
  messagingSenderId: "978682086077",
  appId: "1:978682086077:web:5e5571466af164004b6dd4",
  measurementId: "G-17V54ZWLL4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();