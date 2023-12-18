import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7hc6A774rIuZDnO0UlGri60q-foSiMxE",
  authDomain: "portfollio-20020.firebaseapp.com",
  projectId: "portfollio-20020",
  storageBucket: "portfollio-20020.appspot.com",
  messagingSenderId: "929541948648",
  appId: "1:929541948648:web:d41d2e72c33ea58e30b55d",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
