// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk57XVS1CJ4vEL5SkY5yNe9-J-NjnnGqw",
  authDomain: "proyectoprueba-42d56.firebaseapp.com",
  projectId: "proyectoprueba-42d56",
  storageBucket: "proyectoprueba-42d56.appspot.com",
  messagingSenderId: "622644990250",
  appId: "1:622644990250:web:90415c6ffe255556550e53"
};

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db}*/



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);
