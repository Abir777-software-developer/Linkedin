
import { initializeApp } from "firebase/app";
//import {getDatabase} from "firebase/database";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from'firebase/auth';
import {getStorage } from 'firebase/storage';


// const firebaseConfig = {
//   apiKey: "AIzaSyBEQJz4WTkUZ8NjNrw_tbYCqdfuyfH973o",
//   authDomain: "linked-clone-a5858.firebaseapp.com",
//   projectId: "linked-clone-a5858",
//   // storageBucket:  "linked-clone-a5858.appspot.com",
//   //"linked-clone-a5858.firebasestorage.app"
//   messagingSenderId: "37838953413",
//   appId: "1:37838953413:web:1f8cd9fb0059d7773d49ac",
//   measurementId: "G-KP0C3V8V7V",
//   databaseURL: "https://linked-clone-a5858.firebaseio.com" // Add databaseURL
  
// };
const firebaseConfig = {
  apiKey: "AIzaSyAmJNaZd_zPuLMf8AYNatIgCJmtl5b8YkQ",
  authDomain: "linkedin-clone-6b6c5.firebaseapp.com",
  projectId: "linkedin-clone-6b6c5",
  storageBucket: "linkedin-clone-6b6c5.firebasestorage.app",
  messagingSenderId: "97462873378",
  appId: "1:97462873378:web:f16069ab6532952287097b",
  measurementId: "G-9TEDKXCD84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const database=getDatabase(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const storage=getStorage(app);



export{auth,provider,storage};
export default db;