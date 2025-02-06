import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtDgFTE9ZwIU_J8_HdFSvMoDhERQhkgJQ",
  authDomain: "login-eddda.firebaseapp.com",
  projectId: "login-eddda",
  storageBucket: "login-eddda.appspot.com",
  messagingSenderId: "128986201297",
  appId: "1:128986201297:web:aa5169c56c43271d3119f0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
