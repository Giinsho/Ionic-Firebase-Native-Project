import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getFirestore, orderBy} from "@firebase/firestore"
import { getMessaging, getToken, onMessage } from 'firebase/messaging';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    generatedVapidKey:"BCkd5ANwQoahbkRLAjqcAoeN5vJXLKHqvuhfi_MV4C4E030d0UObBu0R6Bi9DA5QcGg82crlVceTv8dk8qQ9je4",

};

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: "BCkd5ANwQoahbkRLAjqcAoeN5vJXLKHqvuhfi_MV4C4E030d0UObBu0R6Bi9DA5QcGg82crlVceTv8dk8qQ9je4" })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("payload", payload)
        resolve(payload);
      });
    });

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);


export const auth = firebase.auth();
export const db = getFirestore(app);


export default app;