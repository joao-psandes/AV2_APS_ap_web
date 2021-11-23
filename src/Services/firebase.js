import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZo5pgCzXnJU8Gb1z49Z4_Eh01_fZFAxA",
  authDomain: "projeto-mvp-web-30238.firebaseapp.com",
  projectId: "projeto-mvp-web-30238",
  storageBucket: "projeto-mvp-web-30238.appspot.com",
  messagingSenderId: "109034969402",
  appId: "1:109034969402:web:455db54ae5826ab8af5803"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp