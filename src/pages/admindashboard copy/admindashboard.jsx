import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }, [user, location]);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Admin-specific content goes here */}
    </div>
  );
};

export default AdminDashboard;