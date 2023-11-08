// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VIYE_FIREVASE_API_KEY,
  authDomain: "easystate-e032d.firebaseapp.com",
  projectId: "easystate-e032d",
  storageBucket: "easystate-e032d.appspot.com",
  messagingSenderId: "1079759229747",
  appId: "1:1079759229747:web:1ec2e5cd4c67613cb46446"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);