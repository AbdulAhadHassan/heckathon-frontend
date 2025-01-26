import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!user || user.role !== 'user') {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }, [user, location]);

  if (!user || user.role !== 'user') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      {/* User-specific content goes here */}
    </div>
  );
};

export default UserDashboard;