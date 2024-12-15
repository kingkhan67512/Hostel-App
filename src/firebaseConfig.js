// Import the Firebase functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGzDsMrEUEzSPl2G9Zw4kiY71hhuHXvYc",
  authDomain: "hostel-ae88e.firebaseapp.com",
  projectId: "hostel-ae88e",
  storageBucket: "hostel-ae88e.appspot.com", // Fixed "hostel-ae88e.firebasestorage.app"
  messagingSenderId: "957147164662",
  appId: "1:957147164662:web:59032cc064fe165e1561d7",
  measurementId: "G-XWMSJTFVV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Authentication service
const db = getFirestore(app); // Firestore database service

// Export Firebase services for use in other files
export { auth, db };
