
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; 
import Footer from './Footer'
import Header from './Header'
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'password'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
       setMessage('Login successful!');
      navigate('/admin-dashboard'); 
    } else {
      
      setMessage('Invalid username or password.');
    }
  };

  return (
    <> <Header/>
    <div className="admin-login-container">
    <h2>Admin Login</h2>
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button type="submit" className="login-button">Login</button>
      {message && <div className="alert">{message}</div>}
    </form>
  </div>
  <Footer/>
    </>
  );
};

export default AdminLogin;
