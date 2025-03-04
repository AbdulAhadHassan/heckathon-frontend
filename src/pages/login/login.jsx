import React, { useState } from 'react';
import { Link } from 'react-router'; 

const Login = () => {
  

  return (
    <div>
      <h2>Login</h2>
      <form> 
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p> 
    </div>
  );
};

export default Login;