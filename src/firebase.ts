import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv1ZIEU_7Jop_K4s96oFaTx0Iz2baL3SE",
  authDomain: "finance-app-8f598.firebaseapp.com",
  projectId: "finance-app-8f598",
  storageBucket: "finance-app-8f598.firebasestorage.app",
  messagingSenderId: "35451020139",
  appId: "1:35451020139:web:63cd15038c00f131ec622e",
  measurementId: "G-DWTDM5X16H",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
