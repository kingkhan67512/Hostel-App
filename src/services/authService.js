import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { saveUserRole } from "./firebaseService"; // Import saveUserRole
import { auth, db } from "../firebaseConfig";

// Sign Up function

export const signUp = async (email, password, role) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserRole(user.uid, role); // Save the role to Firestore
    return user;
  } catch (error) {
    console.error("Error during signup:", error.message);
    throw error;
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};