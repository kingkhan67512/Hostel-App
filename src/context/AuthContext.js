// src/services/authService.js
// import supabase from './supabaseClient'
import supabase from '../services/supabaseClient';

// Signup function
export async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log('SignUp response:', user, error);  // Log the full response to debug

  if (error) {
    console.error('SignUp Error:', error);  // Log any error returned from Supabase
    throw error;
  }

  return user;  // Return the user object
}

// Check session after sign-up
const { data: session, error: sessionError } = await supabase.auth.getSession();
if (sessionError) {
  console.error('Session Error:', sessionError);
} else {
  console.log('Logged in User after SignUp:', session.user); // Log the current user
}

export async function login(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    console.error('Login Error:', error);
    throw error;
  }

  // Get the session after successful login
  const { data: session, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) {
    console.error('Session Error:', sessionError);
  } else {
    console.log('Logged in User:', user);
    console.log('Session:', session); // Logs the session information
  }

  return user;
}
