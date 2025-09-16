import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
  const { currentUser } = useAuth();

  // If there's no user, redirect to the login page
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If there is a user, render the child routes
  return <Outlet />;
}

export default ProtectedRoute;