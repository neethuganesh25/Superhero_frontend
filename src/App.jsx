import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import GrievanceSubmit from './pages/GrievanceSubmit';
import Auth from './pages/Auth';
import GrievanceList from './pages/GrievanceList';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Users from './pages/Users';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/register" element={<Auth  />} /> 
        <Route path="/login" element={<Auth   />} /> 
       
        <Route path="/grievances" element={<GrievanceSubmit />} />
        <Route path="/grievance" element={<GrievanceList />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
