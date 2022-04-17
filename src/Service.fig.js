// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY6ZLB0SX3rviwzFee714F3EM3vk9NPfU",
  authDomain: "service-provider-55df2.firebaseapp.com",
  projectId: "service-provider-55df2",
  storageBucket: "service-provider-55df2.appspot.com",
  messagingSenderId: "256155650243",
  appId: "1:256155650243:web:f80c4f7f1efa2cb53a7a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth ;