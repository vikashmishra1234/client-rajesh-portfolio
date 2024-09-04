import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAicUOWkFKlhd06zrY5gO-ewzFtp_jSWn8",
  authDomain: "clone-18491.firebaseapp.com",
  projectId: "clone-18491",
  storageBucket: "clone-18491.appspot.com",
  messagingSenderId: "953903878162",
  appId: "1:953903878162:web:9007fcd73935df0e56c8cb"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, collection,auth, addDoc, ref, uploadBytes, getDownloadURL };