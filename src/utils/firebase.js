// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxbd4iqAFcj_Zp3uPzYlhIBhiYAt8ilbk",
  authDomain: "netflix-project-c335b.firebaseapp.com",
  projectId: "netflix-project-c335b",
  storageBucket: "netflix-project-c335b.firebasestorage.app",
  messagingSenderId: "560949353201",
  appId: "1:560949353201:web:625a565f54279f831ea750",
  measurementId: "G-1TJB10LLEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication
const auth = getAuth(app);

// Export the initialized `auth` object
export { auth };
