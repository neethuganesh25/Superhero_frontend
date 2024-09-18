import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="p-3" style={{ backgroundColor: '#2772c1', height: '15vh' }}>
        <Container>
          <Navbar.Brand className='text-dark' as={Link} to="/">Grievance Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='text-dark fw-bold' as={Link} to="/">Home</Nav.Link>
              <Nav.Link className='text-dark fw-bold' as={Link} to="/about">About</Nav.Link>
              
              
              <NavDropdown title="Login" id="basic-nav-dropdown" className='text-dark fw-bold'>
                <NavDropdown.Item as={Link} to="/login">Login as User</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin-login">Login as Admin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
