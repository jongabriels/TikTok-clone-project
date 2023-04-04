
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAsDeBpMRTXOYZVwrfloBmTzTHUHSXVC1I",
  authDomain: "tiktok-clone-e542b.firebaseapp.com",
  projectId: "tiktok-clone-e542b",
  storageBucket: "tiktok-clone-e542b.appspot.com",
  messagingSenderId: "733666880709",
  appId: "1:733666880709:web:ac2af57f2888ccfae494ac"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;