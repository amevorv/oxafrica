import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import combineImage from '../images/combine_harvestors/OX5.jpeg';
import galleryImage1 from '../images/combine_harvestors/image.jpg';
import './CombineHarvestorContent.css';

import './CombineHarvestorContent.css';
import { BreadCrumb } from './BreadCrumb';

export const CombineHarvestorContent: React.FC = () => {
  return (
    <div className="combine-harvester-page">
      {/* Hero Section */}
      <Container fluid className="hero-section text-white text-center py-5" style={{ backgroundImage: `url(${combineImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay">
          <h1 className="display-4 fw-bold">OX-5 Combine Harvester</h1>
          <p className="lead">The Future of Efficient Harvesting</p>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <Button variant="success" size="lg" className="shadow-lg">Request a Quote</Button>
            <Button variant="outline-light" size="lg" className="shadow-lg">Schedule a Demo</Button>
          </div>
        </div>
      </Container>

      <BreadCrumb target="Combine Harvestors"/>

      {/* Advanced Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Advanced Features</h2>
        <Row className="g-4">
          {[
            { title: 'High-Capacity Threshing', description: 'Boost your productivity with our state-of-the-art threshing system.', icon: '🌾' },
            { title: 'Intelligent Grain Handling', description: 'Automated systems for sorting and handling grains with minimal loss.', icon: '🧠' },
            { title: 'All-Terrain Capability', description: 'Navigate any field condition with superior stability and traction.', icon: '🏞️' },
            { title: 'Fuel-Efficient Engine', description: 'Powerful yet economical engine for longer operation and lower costs.', icon: '⛽' },
            { title: 'Precision Agriculture Ready', description: 'Integrates seamlessly with GPS and other precision farming technologies.', icon: '🛰️' },
            { title: 'Operator Comfort', description: 'Spacious and ergonomic cab design for a comfortable working environment.', icon: '🧑‍🌾' }
          ].map((feature, index) => (
            <Col md={6} lg={4} key={index} className="d-flex align-items-stretch">
              <Card className="feature-card h-100 shadow-sm fadeInUp">
                <Card.Body className="d-flex flex-column">
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <Card.Title as="h4" className="fw-semibold">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Technical Specifications Section */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-5 fw-bold">Technical Specifications</h2>
        <Row>
          <Col md={6}>
            <Card className="spec-card shadow-sm mb-4">
              <Card.Header as="h5" className="fw-bold bg-dark text-white">Engine</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Model:</strong> OX-H-Engine-V8</ListGroup.Item>
                <ListGroup.Item><strong>Power:</strong> 350 HP</ListGroup.Item>
                <ListGroup.Item><strong>Fuel Capacity:</strong> 600 Liters</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="spec-card shadow-sm mb-4">
              <Card.Header as="h5" className="fw-bold bg-dark text-white">Harvesting Unit</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Cutting Width:</strong> 7.5 meters</ListGroup.Item>
                <ListGroup.Item><strong>Threshing Type:</strong> Axial Flow</ListGroup.Item>
                <ListGroup.Item><strong>Grain Tank Capacity:</strong> 9000 Liters</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Gallery and Stats Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Gallery & Performance</h2>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="gallery-card shadow">
              <Card.Img variant="top" src={galleryImage1} alt="Combine in action" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end text-white p-4">
                <Card.Title as="h3" className="fw-bold">Harvesting Excellence</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col lg={6}>
            <Row>
              <Col sm={6} className="mb-4">
                <Card className="stat-card text-center h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title as="h2" className="fw-bold text-success">99.8%</Card.Title>
                    <Card.Text>Grain Purity</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-4">
                <Card className="stat-card text-center h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title as="h2" className="fw-bold text-success">24/7</Card.Title>
                    <Card.Text>Customer Support</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="cta-section text-center py-5 text-white">
        <h2 className="fw-bold">Ready to Revolutionize Your Harvest?</h2>
        <p className="lead mb-4">Contact us today to learn more about the OX-5 Combine Harvester.</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="success" size="lg">Get a Quote</Button>
          <Button variant="outline-light" size="lg">Download Brochure</Button>
        </div>
      </Container>
    </div>
  );
};