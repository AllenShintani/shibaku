"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = exports.firebaseConfig = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
console.log(9);
//環境変数から読み込むとできなかったので直接書き込んでGitignore
exports.firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    //なんだこれmeasurementId: 'G-D15NBQV17E',
};
console.log(2);
console.log(exports.firebaseConfig);
const app = (0, app_1.initializeApp)(exports.firebaseConfig);
const auth = (0, auth_1.getAuth)(app);
exports.auth = auth;
const db = (0, firestore_1.getFirestore)();
exports.db = db;
/*function getFirestore(app: FirebaseApp) {
  throw new Error('Function not implemented.')
}*/
//appをexportしてinitializeできるようにする
// Initialize Firebase
//export const auth = firebase.auth()
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import firebase from 'firebase/compat/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJxTcezuGGtbXFIRUK9fiIZF2jBSDc788',
  authDomain: 'shibaku-892f3.firebaseapp.com',
  projectId: 'shibaku-892f3',
  storageBucket: 'shibaku-892f3.appspot.com',
  messagingSenderId: '221279536313',
  appId: '1:221279536313:web:d2d8208e3d5a33ed3bc768',
  measurementId: 'G-ECQMMQRBK8',
}

// Initialize Firebase
export const initializers = () => {
  if (firebase.apps.length === 0) {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
    return app
  }
}
export const auth = firebase.auth()
*/
