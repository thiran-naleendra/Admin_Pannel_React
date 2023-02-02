import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTDBt-oKNlaUQDsgdIqyT2Edr-1dOd_cc",
    authDomain: "fir-react-cdc34.firebaseapp.com",
    databaseURL: "https://fir-react-cdc34-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-react-cdc34",
    storageBucket: "fir-react-cdc34.appspot.com",
    messagingSenderId: "213763925205",
    appId: "1:213763925205:web:b794be6bc72842286dae5c"
  };

  const app = initializeApp(firebaseConfig);

 export  const db = getFirestore()