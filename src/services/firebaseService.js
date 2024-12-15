import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js"; // Import Firebase Auth instance
import { setDoc,getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig.js"; // Import Firestore instance

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get the user's role from Firestore
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const role = docSnap.data().role;
      return { user, role };
    } else {
      throw new Error("No user data found in Firestore");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
export const saveUserRole = async (userId, role) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, { role });
    console.log("User role saved to Firestore");
  } catch (error) {
    console.error("Error saving user role:", error.message);
    throw error;
  }
};

