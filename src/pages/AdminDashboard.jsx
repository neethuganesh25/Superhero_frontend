import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const [recentGrievances, setRecentGrievances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recentRes = await axios.get('https://superhero-mrqq.vercel.app/api/grievances/recent');
        setRecentGrievances(Array.isArray(recentRes.data) ? recentRes.data : []);
      } catch (error) {
        console.error('Error fetching recent grievances:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col xs={3} className="sidebar-col">
          <Sidebar />
        </Col>
        <Col xs={9} className="content-col">
          <h2 className="dashboard-title mt-5 text-center text-primary">Admin Dashboard</h2>
          <Row className="justify-content-center">
            {/* Welcome Card */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="welcome-card shadow-sm">
                <Card.Body>
                  <Card.Title>Welcome Back!</Card.Title>
                  <Card.Text>
                    <p>Here’s a quick overview of your tasks and recent activities.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Actions Card */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="actions-card shadow-sm">
                <Card.Body>
                  <Card.Title>Actions</Card.Title>
                  <Link to="/grievance">
                    <Button variant="primary" className="mb-2 w-100">
                      View All Grievances
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Recent Grievances */}
          <Row>
            {recentGrievances.length > 0 ? (
              recentGrievances.map((grievance, index) => (
                <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                  <Card className="recent-grievances-card shadow-lg">
                    <Card.Body>
                      <Card.Title className="grievance-title">{grievance.title}</Card.Title>
                      <Card.Text className="grievance-description">
                        <p>{grievance.description}</p>
                        <small className="grievance-status">Status: {grievance.status}</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <Card className="recent-grievances-card shadow-lg">
                  <Card.Body>
                    <Card.Text>No recent grievances to display.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
