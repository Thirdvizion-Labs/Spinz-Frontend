// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsUpJZH6l6bN0rRChhJxbCENOBRWsj0II",
  authDomain: "spinzadmin.firebaseapp.com",
  projectId: "spinzadmin",
  storageBucket: "spinzadmin.firebasestorage.app",
  messagingSenderId: "517448980279",
  appId: "1:517448980279:web:dc7fed6273c459f596ecb2",
  measurementId: "G-XDZK73QZNM"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };