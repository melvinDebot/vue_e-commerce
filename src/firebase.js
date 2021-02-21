import firebase from "firebase";

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAA_OAMWyXv7zpTz66jZD_yVSboAeQq1fQ",
  authDomain: "vue-commerce-71154.firebaseapp.com",
  projectId: "vue-commerce-71154",
  storageBucket: "vue-commerce-71154.appspot.com",
  messagingSenderId: "266507575803",
  appId: "1:266507575803:web:c8f5a4716a4cd51eabeb5e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export { firebase, auth, db, storage, functions };
