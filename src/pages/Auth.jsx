import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';  

const Auth = () => {
  const [formType, setFormType] = useState('register'); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    try {
      if (formType === 'register') {
        await axios.post('https://superhero-mrqq.vercel.app/api/auth/register', { name, email, password });
         setFormType('login');
        setName('');
        setEmail('');
        setPassword('');
        
        setError('Registration successful! Please log in.');
        navigate('/login')
      } else if (formType === 'login') {
        await axios.post('https://superhero-mrqq.vercel.app/api/auth/login', { email, password });
        navigate('/grievances'); 
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  
  const switchForm = () => {
    setFormType(formType === 'register' ? 'login' : 'register');
    setName(''); 
    setEmail('');
    setPassword('');
    setError(''); 
  };

  return (
    <div className="auth-container">
      <div className="image-section">
       
      </div>
      <div className="form-section">
        <h2>{formType === 'register' ? 'Register' : 'Login'}</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          {formType === 'register' && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{formType === 'register' ? 'Register' : 'Login'}</button>
        </form>
        <button onClick={switchForm}>
          {formType === 'register' ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
