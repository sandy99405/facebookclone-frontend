import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBV4PzsLp_KUUc0f2sQi5Yy_q2fw4EW92E",
  authDomain: "facebook-clone2-26e8f.firebaseapp.com",
  projectId: "facebook-clone2-26e8f",
  storageBucket: "facebook-clone2-26e8f.appspot.com",
  messagingSenderId: "358903849656",
  appId: "1:358903849656:web:0ec9f6c9d4f6eae67f0a4d",
  measurementId: "G-CW5FMGLZ4X"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app); 