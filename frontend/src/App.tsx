import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <i className="bi bi-cloud me-2"></i>
            Cloudonix Boilerplate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#tenants">Tenants</Nav.Link>
              <Nav.Link href="#routing">Routing</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-light" size="sm">
                <i className="bi bi-person-circle me-1"></i>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col>
            <h1 className="mb-4">
              <i className="bi bi-house-door text-primary me-2"></i>
              Voice Service SaaS Boilerplate
            </h1>
            <p className="lead">
              A production-ready boilerplate for multi-tenant voice services integrated with Cloudonix.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <i className="bi bi-building display-4 text-primary mb-3"></i>
                <Card.Title>Multi-Tenant</Card.Title>
                <Card.Text>
                  Secure tenant isolation with role-based access control and dedicated resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <i className="bi bi-telephone display-4 text-success mb-3"></i>
                <Card.Title>Voice Services</Card.Title>
                <Card.Text>
                  Full Cloudonix integration with CXML voice applications and webhook processing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <i className="bi bi-shield-check display-4 text-warning mb-3"></i>
                <Card.Title>Production Ready</Card.Title>
                <Card.Text>
                  Built with Laravel, React, and modern security practices for enterprise deployment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
