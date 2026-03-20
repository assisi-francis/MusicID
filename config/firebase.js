import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBahy8Tk8K2prYbR0pT2InvxQjQPtunYY4",
  authDomain: "myshazam-ffa49.firebaseapp.com",
  projectId: "myshazam-ffa49",
  storageBucket: "myshazam-ffa49.firebasestorage.app",
  messagingSenderId: "905819240152",
  appId: "1:905819240152:web:c962855e559443c77589ad",
  measurementId: "G-VRZHBS2YEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
