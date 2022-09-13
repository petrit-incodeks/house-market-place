import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMVM3Odyw6DURJ3ymTmm4mrKeKsQKwzm4",
  authDomain: "house-marketplace-app-4f60c.firebaseapp.com",
  projectId: "house-marketplace-app-4f60c",
  storageBucket: "house-marketplace-app-4f60c.appspot.com",
  messagingSenderId: "549254846160",
  appId: "1:549254846160:web:c5439216613f49b64cb0d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
