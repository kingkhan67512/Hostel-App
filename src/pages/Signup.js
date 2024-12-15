import React, { useState } from 'react';
import { signUp } from '../services/authService'; // Import the signUp function
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default to 'student'
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password, role); // Call the signUp function
      setMessage('Signup successful! Please login.');
      navigate('/login'); // Redirect to the login page after successful signup
    } catch (error) {
      setMessage('Signup failed: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="form-card" onSubmit={handleSignup}>
        <h1>Signup</h1>
        {message && <p>{message}</p>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <button className="btn-primary" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
