import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container, Alert, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar'; 


const API_URL = 'https://superhero-mrqq.vercel.app/api/users'; 

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Row>
        <Col xs={3} className="sidebar-col">
          <Sidebar />
        </Col>
        <Col xs={9}>
          <Container className="mt-4">
            <h2 className="text-center text-primary mb-4">Registered Users</h2>
            
            {loading && <p>Loading...</p>}
            {error && <Alert variant="danger">{error}</Alert>}

            {!loading && !error && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="text-center">No users found.</td>
                    </tr>
                  ) : (
                    users.map(user => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Users;
