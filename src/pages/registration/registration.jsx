import React, { useState, useContext } from 'react';
import { Navigate, useLocation, Outlet, Link } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext'; 

const Registration = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) { 
    // If user is already logged in, redirect to the dashboard or appropriate page
    return <Navigate to="/dashboard" state={{ from: location }} replace />; 
  }

  return (
    <div> 
      {/* Render registration form */}
      <h2>Registration</h2>
      <form> 
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Register</button> 
      </form>

      <p>Already have an account? <Link to="/login">Login</Link></p> 
    </div>
  );
};

export default Registration;