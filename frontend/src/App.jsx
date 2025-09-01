import React from "react";
import { Navbar, Nav, Container, Button, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaGithub, FaStar, FaChartBar, FaCheck } from "react-icons/fa";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">CrimePredict</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Prediction</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="fw-bold">Predict Crime Rates in Your City</h1>
              <p className="text-muted">
                Leverage data-driven insights to anticipate crime trends, allocate resources effectively,
                and build safer communities. Fast, accurate, and easy to use.
              </p>
              <div className="d-flex gap-2">
                <Button variant="primary">Start Predicting</Button>
                <Button variant="outline-secondary">Learn More</Button>
              </div>
            </Col>
            <Col md={5} className="text-center">
              <div className="border rounded p-5 shadow-sm">
                <FaChartBar size={60} color="blue" />
                <p className="mt-2">Preview analytics and projections displayed here.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Use CrimePredict */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Why Use CrimePredict?</h2>
          <p className="text-center text-muted mb-5">Three reasons users love it</p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <FaStar color="blue" size={24} className="mb-2" />
                  <Card.Title>Accurate Predictions</Card.Title>
                  <Card.Text>
                    Models analyze historical data and trends to deliver reliable projections you can act
                    on with confidence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <FaCheck color="blue" size={24} className="mb-2" />
                  <Card.Title>Easy to Use</Card.Title>
                  <Card.Text>
                    Clean interface and guided steps so you can start predicting in minutes — no data
                    science background required.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <FaChartBar color="blue" size={24} className="mb-2" />
                  <Card.Title>Actionable Insights</Card.Title>
                  <Card.Text>
                    Visualize hotspots and trends to allocate resources and plan interventions effectively.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-light text-center">
        <Container>
          <h4 className="fw-bold">Ready to see predictions?</h4>
          <p className="text-muted">Begin by selecting your city and timeframe.</p>
          <Button variant="primary">Get in Touch</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 border-top">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <h5>CrimePredict</h5>
            <p className="mb-0">contact@crimepredict.example</p>
            <p className="mb-0">123 Data Lane, Insights City</p>
            <p className="text-muted mt-2 mb-0">© 2025 CrimePredict. All rights reserved.</p>
          </div>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaLinkedin size={20} /></a>
            <a href="#"><FaGithub size={20} /></a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;

