import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { BreadCrumb } from '../components/BreadCrumb';
import './Careers.css';

const Careers: React.FC = () => {
  const email = 'careers@oxafrica.com';

  return (
    <div>
      <Header />

      <section className="careers-hero" aria-label="Careers hero">
        <Container>
          <div className="careers-hero-content">
            <h1 className="careers-hero-title">Careers</h1>
            <p className="careers-hero-subtitle">Join a purpose-driven engineering company building Africa’s agricultural future</p>
            <div className="careers-hero-actions">
              {/* <Button variant="success" className="careers-btn" as="a" href="/comingsoon" aria-label="View open roles">View Open Roles</Button> */}
              <Button variant="outline-success" className="careers-btn" as="a" href={`mailto:${email}?subject=CV%20Submission`} aria-label="Send CV via email">Send Your CV</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* <nav aria-label="breadcrumb">
        <BreadCrumb target="Careers" />
      </nav> */}

      <Container className="careers-section" as="section" aria-labelledby="careers-intro">
        <h2 id="careers-intro" className="careers-section-title">Build Your Impact With Ox Engineering Ltd</h2>
        <Row>
          <Col md={12}>
            <p className="careers-paragraph">At Ox Engineering Ltd, our people are our greatest strength. We are committed to attracting, developing, and retaining exceptional talent across engineering, operations, technology, and management. As we expand our manufacturing capabilities and mechanization footprint across Africa, we seek professionals who embody excellence, innovation, and integrity.</p>
            <p className="careers-paragraph">Working at Ox Engineering means joining a purpose-driven organization where your expertise contributes directly to food security, industrialization, and sustainable development. We offer competitive growth opportunities, a collaborative work culture, continuous learning, and the chance to be part of a bold African success story.</p>
          </Col>
        </Row>
      </Container>

      <Container className="careers-section" as="section" aria-labelledby="careers-values">
        <h2 id="careers-values" className="careers-section-title">What We Value</h2>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card className="careers-card" tabIndex={0} aria-label="Excellence">
              <Card.Body>
                <Card.Title>Excellence</Card.Title>
                <p className="careers-card-copy">We deliver quality engineering and reliable solutions for African farms.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="careers-card" tabIndex={0} aria-label="Innovation">
              <Card.Body>
                <Card.Title>Innovation</Card.Title>
                <p className="careers-card-copy">We design Africa-fit machinery and services that scale impact.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="careers-card" tabIndex={0} aria-label="Integrity">
              <Card.Body>
                <Card.Title>Integrity</Card.Title>
                <p className="careers-card-copy">We operate with transparency and accountability in all we do.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="careers-card" tabIndex={0} aria-label="Growth">
              <Card.Body>
                <Card.Title>Growth</Card.Title>
                <p className="careers-card-copy">We invest in people through learning, leadership, and opportunity.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Container className="careers-section" as="section" aria-labelledby="careers-cta">
        <h2 id="careers-cta" className="careers-section-title">Ready to Build With Us?</h2>
        <div className="careers-hero-actions">
          <Button variant="success" className="careers-btn" as="a" href="/comingsoon" aria-label="View open roles">View Open Roles</Button>
          <Button variant="outline-success" className="careers-btn" as="a" href={`mailto:${email}?subject=CV%20Submission`} aria-label="Send CV via email">Send Your CV</Button>
        </div>
      </Container> */}

      <Footer />
    </div>
  );
};

export default Careers;