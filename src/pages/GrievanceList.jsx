import React, { useState, useEffect } from 'react';
import './GrievanceList.css'; 
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const API_URL = 'https://superhero-mrqq.vercel.app/api/grievances'; 

const GrievanceList = () => {
  const [grievances, setGrievances] = useState([]);
  const [filteredGrievances, setFilteredGrievances] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState({ id: null, type: '' });
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await axios.get(API_URL);
        setGrievances(response.data);
        setFilteredGrievances(response.data);
      } catch (error) {
        console.error('Error fetching grievances:', error);
        setError('Failed to fetch grievances.');
      }
    };
    fetchGrievances();
  }, []);

  useEffect(() => {
    const filtered = grievances.filter(grievance => {
      const matchesStatus = statusFilter === 'all' || grievance.status === statusFilter;
      const matchesSearch = grievance.title.toLowerCase().includes(searchQuery.toLowerCase()) || grievance.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
    setFilteredGrievances(filtered);
  }, [statusFilter, searchQuery, grievances]);

  
  const handleApprove = async (id) => {
    setIsProcessing({ id, type: 'approve' }); 
    try {
      const response = await fetch(`https://superhero-mrqq.vercel.app/api/grievances/${id}/approve`, {
        method: 'PUT',
      });
      if (response.ok) {
        setMessage('Grievance approved successfully.');
        setGrievances(grievances.map(g => g._id === id ? { ...g, status: 'approved' } : g));
      } else {
        setMessage('Failed to approve grievance.');
      }
    } catch (error) {
      console.error('Error approving grievance:', error);
      setMessage('An error occurred while approving the grievance.');
    } finally {
      setIsProcessing({ id: null, type: '' }); 
      setTimeout(() => setMessage(''), 3000); 
    }
  };

  const handleReject = async (id) => {
    setIsProcessing({ id, type: 'reject' }); 
    try {
      const response = await fetch(`https://superhero-mrqq.vercel.app/api/grievances/${id}/reject`, {
        method: 'PUT',
      });
      if (response.ok) {
        setMessage('Grievance rejected successfully.');
        setGrievances(grievances.map(g => g._id === id ? { ...g, status: 'rejected' } : g));
      } else {
        setMessage('Failed to reject grievance.');
      }
    } catch (error) {
      console.error('Error rejecting grievance:', error);
      setMessage('An error occurred while rejecting the grievance.');
    } finally {
      setIsProcessing({ id: null, type: '' }); 
      setTimeout(() => setMessage(''), 3000); 
    }
  };

  return (
    <>
      <Row>
        <Col xs={3} className="sidebar-col">
          <Sidebar />
        </Col>
        <Col xs={9}>
          <div className="container grievance-list-container">
            <h2 className="text-center text-primary my-4">Grievance List</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}

            {/* Filter and Search Section */}
            <div className="d-flex justify-content-between mb-4">
              <div>
                <label htmlFor="statusFilter" className="me-2">Filter by Status:</label>
                <select
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="form-select"
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label htmlFor="searchQuery" className="me-2">Search:</label>
                <input
                  id="searchQuery"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control"
                  placeholder="Search by title or name"
                />
              </div>
            </div>

            {filteredGrievances.length === 0 ? (
              <p>No grievances found.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGrievances.map(grievance => (
                      <tr key={grievance._id}>
                        <td>{grievance.title}</td>
                        <td>{grievance.name}</td>
                        <td>{grievance.email}</td>
                        <td>{new Date(grievance.date).toLocaleDateString()}</td>
                        <td>{grievance.description}</td>
                        <td>{grievance.status}</td>
                        <td>
                          {grievance.status === 'pending' && (
                            <>
                              <button 
                                onClick={() => handleApprove(grievance._id)} 
                                className="btn btn-success me-2" 
                                disabled={isProcessing.id === grievance._id && isProcessing.type === 'reject'}
                              >
                                {isProcessing.id === grievance._id && isProcessing.type === 'approve' ? 'Approving...' : 'Approve'}
                              </button>
                              <button 
                                onClick={() => handleReject(grievance._id)} 
                                className="btn btn-danger" 
                                disabled={isProcessing.id === grievance._id && isProcessing.type === 'approve'}
                              >
                                {isProcessing.id === grievance._id && isProcessing.type === 'reject' ? 'Rejecting...' : 'Reject'}
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default GrievanceList;
