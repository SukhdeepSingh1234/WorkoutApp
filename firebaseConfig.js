
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD8ORCUdpASczfdYakce3nCCh5YpZg_QFs",
  authDomain: "workoutapp-617d9.firebaseapp.com",
  projectId: "workoutapp-617d9",
  storageBucket: "workoutapp-617d9.appspot.com",
  messagingSenderId: "746467140924",
  appId: "1:746467140924:web:3e9dbf39b43714a006ea39"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// ios ->  230397393530-05crnfvetcs761rlv6mm07n2mutmkc5c.apps.googleusercontent.com
// android -> 230397393530-3qgp2sdhdm28jecnfc28a8cf78b9hlic.apps.googleusercontent.com