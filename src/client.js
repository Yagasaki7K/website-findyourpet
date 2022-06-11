import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB305sY0GR-z1lnJx2lqnG0kkAr-JR-IeQ",
  authDomain: "kalify-findyourpet.firebaseapp.com",
  databaseURL: "https://kalify-findyourpet-default-rtdb.firebaseio.com",
  projectId: "kalify-findyourpet",
  storageBucket: "kalify-findyourpet.appspot.com",
  messagingSenderId: "843679913436",
  appId: "1:843679913436:web:55e00dc38e1731adbb6b19"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database