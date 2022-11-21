import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBULLnC_uOOs-ayEoisl9rmfnbuOPmv9pg",
  authDomain: "find-your-pet-945c4.firebaseapp.com",
  databaseURL: "https://find-your-pet-945c4-default-rtdb.firebaseio.com",
  projectId: "find-your-pet-945c4",
  storageBucket: "find-your-pet-945c4.appspot.com",
  messagingSenderId: "539561987299",
  appId: "1:539561987299:web:3c076c749388d466f049d6"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export const storage = getStorage(app)

export default database