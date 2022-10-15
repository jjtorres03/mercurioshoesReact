// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArHQWMeC7AGdSWFMTuuz367AH3kjvjw9U",
  authDomain: "mercurioshoes.firebaseapp.com",
  projectId: "mercurioshoes",
  storageBucket: "mercurioshoes.appspot.com",
  messagingSenderId: "773238293801",
  appId: "1:773238293801:web:cc409d1ffe77bb6145a338"
};

// Initialize Firebase
initializeApp(firebaseConfig);

var db = getFirestore()
export {db};