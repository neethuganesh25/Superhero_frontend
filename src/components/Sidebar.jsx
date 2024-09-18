import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/admin-login'; 
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-button">
          <i className={`fas ${isCollapsed ? 'fa-bars' : 'fa-times'}`}></i> 
        </button>
        {!isCollapsed && <h2 className='mt-4'>Superhero Dashboard</h2>}
      </div>
      <ul>
        <li>
          <Link to="/admin-dashboard">
            <i className="fas fa-home"></i> {!isCollapsed && 'Dashboard'}
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i className="fas fa-users"></i> {!isCollapsed && 'Users'}
          </Link>
        </li>
        <li>
          <Link to="/grievance">
            <i className="fas fa-file-alt"></i> {!isCollapsed && 'Grievances'}
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            <i className="fas fa-sign-out-alt"></i> {!isCollapsed && 'Logout'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
