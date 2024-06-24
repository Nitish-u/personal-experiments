// Auth.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('login', true);
    navigate('/home');
  };
  function clearStorage(){
    localStorage.clear();
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={clearStorage}>clear</button>
    </div>
  );
};

export default Auth;
