import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "authaiexamnote.firebaseapp.com",
  projectId: "authaiexamnote",
  storageBucket: "authaiexamnote.firebasestorage.app",
  messagingSenderId: "289078059815",
  appId: "1:289078059815:web:85d2b59182cff64f407f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider=new GoogleAuthProvider();

export {auth, provider};

