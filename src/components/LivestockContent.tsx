import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import livestockHero from '../images/livestock/livestock_2.jpg';
import cattleImage from '../images/livestock/cattleLive.jpg';
import goatImage from '../images/livestock/goatLive.jpg';
import poultryImage from '../images/livestock/poultryLive.jpg';
import piggeryImage from '../images/livestock/piggeryLive.jpg';
import { BreadCrumb } from '../components/BreadCrumb';

import './LivestockContent.css';

export const LivestockContent: React.FC = () => {
  return (
    <div className="livestock-page">
      {/* Hero Section */}
      <Container fluid className="hero-section text-white text-center py-5" style={{ backgroundImage: `url(${livestockHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay">
          <h1 className="display-4 fw-bold">Comprehensive Livestock Solutions</h1>
          <p className="lead">Advanced housing systems for modern farming operations</p>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <Button variant="success" size="lg" className="shadow-lg">Explore Solutions</Button>
            <Button variant="outline-light" size="lg" className="shadow-lg">Contact Expert</Button>
          </div>
        </div>
      </Container>

      <BreadCrumb target="Livestock" />

      {/* Livestock Categories Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Our Livestock Solutions</h2>
        <Row className="g-4">
          {[
            { 
              title: 'Poultry Systems', 
              description: 'Complete poultry housing solutions with climate control, feeding systems, and biosecurity measures.', 
              icon: '🐔',
              image: poultryImage,
              link: '/poultry'
            },
            { 
              title: 'Cattle Housing', 
              description: 'Durable and comfortable cattle housing with proper ventilation and easy maintenance design.', 
              icon: '🐄',
              image: cattleImage,
              link: '/cattleandgoat'
            },
            { 
              title: 'Piggery Solutions', 
              description: 'Advanced pig farming systems with automated feeding, waste management, and health monitoring.', 
              icon: '🐷',
              image: piggeryImage,
              link: '/piggery'
            },
            { 
              title: 'Goat Housing', 
              description: 'Specialized goat housing systems designed for optimal comfort and productivity.', 
              icon: '🐐',
              image: goatImage,
              link: '/cattleandgoat'
            }
          ].map((category, index) => (
            <Col md={6} lg={3} key={index} className="d-flex align-items-stretch">
              <Card className="category-card h-100 shadow-sm fadeInUp">
                <Card.Img variant="top" src={category.image} alt={category.title} className="category-image" />
                <Card.Body className="d-flex flex-column">
                  <div className="category-icon mb-3">{category.icon}</div>
                  <Card.Title as="h4" className="fw-semibold">{category.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{category.description}</Card.Text>
                  <Button variant="outline-success" className="mt-auto" href={category.link}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Key Features Section */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-5 fw-bold">Key Features of Our Systems</h2>
        <Row className="g-4">
          {[
            { title: 'Climate Control', description: 'Automated ventilation and temperature control systems for optimal animal comfort.', icon: '🌡️' },
            { title: 'Biosecurity', description: 'Advanced biosecurity measures to prevent disease and ensure animal health.', icon: '🛡️' },
            { title: 'Automated Feeding', description: 'Precision feeding systems that reduce waste and improve feed conversion.', icon: '🥄' },
            { title: 'Easy Maintenance', description: 'Designs that facilitate easy cleaning and maintenance operations.', icon: '🧹' },
            { title: 'Durability', description: 'High-quality materials ensuring long-lasting performance in all conditions.', icon: '🔧' },
            { title: 'Scalability', description: 'Modular designs that can be easily expanded as your operation grows.', icon: '📈' }
          ].map((feature, index) => (
            <Col md={6} lg={4} key={index} className="d-flex align-items-stretch">
              <Card className="feature-card h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <Card.Title as="h5" className="fw-semibold">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Benefits Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4">Why Choose OX Livestock Solutions?</h2>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex align-items-center border-0 px-0">
                {/* <span className="benefit-icon me-3">✅</span> */}
                <div>
                  <h6 className="mb-1">Increased Productivity</h6>
                  <p className="mb-0 text-muted">Optimized environments lead to better animal performance and higher yields.</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center border-0 px-0">
                {/* <span className="benefit-icon me-3">✅</span> */}
                <div>
                  <h6 className="mb-1">Reduced Operating Costs</h6>
                  <p className="mb-0 text-muted">Efficient systems minimize waste and reduce labor requirements.</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center border-0 px-0">
                {/* <span className="benefit-icon me-3">✅</span> */}
                <div>
                  <h6 className="mb-1">Improved Animal Welfare</h6>
                  <p className="mb-0 text-muted">Comfortable and healthy environments promote animal well-being.</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center border-0 px-0">
                {/* <span className="benefit-icon me-3">✅</span> */}
                <div>
                  <h6 className="mb-1">Expert Support</h6>
                  <p className="mb-0 text-muted">Professional guidance from design through implementation and beyond.</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={6}>
            <Card className="stats-card shadow">
              <Card.Body className="text-center">
                <Row>
                  <Col sm={6} className="mb-3">
                    <h2 className="fw-bold text-success">30+</h2>
                    <p className="mb-0">Countries Served</p>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <h2 className="fw-bold text-success">500+</h2>
                    <p className="mb-0">Projects Completed</p>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <h2 className="fw-bold text-success">24/7</h2>
                    <p className="mb-0">Support Available</p>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <h2 className="fw-bold text-success">10+</h2>
                    <p className="mb-0">Years Experience</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="cta-section text-center py-5 bg-dark text-white">
        <h2 className="fw-bold">Ready to Upgrade Your Livestock Operation?</h2>
        <p className="lead mb-4">Contact our experts to design a custom solution for your farm.</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="success" size="lg">Get Free Consultation</Button>
          <Button variant="outline-light" size="lg">View Case Studies</Button>
        </div>
      </Container>
    </div>
  );
};