import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext'; 

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    // Check for user authentication (you might have additional checks here)
    if (!user) {
      // Redirect to login if not authenticated
      return <Navigate to="/login" state={{ from: location }} replace />; 
    }
  }, [user, location]);

  if (user && user.role === 'admin') {
    return <Navigate to="/admin" state={{ from: location }} replace />; 
  } else if (user && user.role === 'user') {
    return <Navigate to="/user" state={{ from: location }} replace />; 
  }

  // If user role is not defined or invalid, handle accordingly 
  return (
    <div>
      {/* Loading or error handling */}
      <p>Invalid user role.</p> 
    </div>
  );
};

export default Dashboard;