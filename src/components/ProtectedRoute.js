import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role, requiredRole }) => {
  // Simulating a role check (replace this with actual role validation from context/session)
  if (role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
