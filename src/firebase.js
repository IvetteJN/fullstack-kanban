import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyA0LTCAthwODU2jhDQBvp1x_AF2aeeMGUU",
  authDomain: "kanban-434b8.firebaseapp.com",
  projectId: "kanban-434b8",
  storageBucket: "kanban-434b8.appspot.com",
  messagingSenderId: "907704102423",
  appId: "1:907704102423:web:518bf59ae64a5b00fef652"
};

// Inicializa Firebase 
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === 'development') {
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectFunctionsEmulator(fbFunctions, 'localhost', 5001);
}
