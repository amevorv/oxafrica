import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import './TractorContent.css';
import OXA from "../images/tractor/OXA.jpg"
import OXB from "../images/tractor/OXB.jpg"
// import { BreadCrumb } from './BreadCrumb';

export const TractorContent = () => {
  const features = [
    {
      title: "Power and Performance",
      description: "High-efficiency engine delivering exceptional horsepower for heavy-duty tasks",
      icon: "⚡"
    },
    {
      title: "Fuel Efficiency",
      description: "Advanced fuel optimization technology reducing operational costs by up to 30%",
      icon: "🌱"
    },
    {
      title: "Precision Farming",
      description: "Integrated GPS and smart technology for automated steering and real-time data",
      icon: "📍"
    },
    {
      title: "Comfort & Safety",
      description: "Ergonomic cab design with climate control and advanced safety features",
      icon: "🛡️"
    },
    {
      title: "Heavy-Duty Build",
      description: "Robust chassis and premium components for maximum durability",
      icon: "🔧"
    },
    {
      title: "Versatility",
      description: "Compatible with wide range of attachments and implements",
      icon: "🔀"
    }
  ];

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="mb-5">
        <Col lg={6} className="d-flex flex-column justify-content-center">
          <div className="mb-4">
            <Badge bg="success" className="mb-3">New Release 2024</Badge>
            <h1 className="display-4 fw-bold text-dark mb-3">
              Revolutionary OX Tractor
            </h1>
            <p className="lead text-muted mb-4">
              Experience the future of farming with our cutting-edge tractor technology. 
              Designed for maximum efficiency, power, and precision in modern agriculture.
            </p>
            <div className="d-flex gap-3">
              <Button variant="success" size="lg" className="px-4" href="mailto:info@oxafrica.com">
                Request Quote
              </Button>
              <Button variant="outline-success" size="lg" className="px-4" href="mailto:info@oxafrica.com">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="position-relative">
            <img 
              src={OXB} 
              alt="OX Tractor" 
              className="img-fluid rounded-3 shadow-lg"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <div className="position-absolute top-0 end-0 bg-success text-white p-3 rounded-start">
              <div className="text-center">
                <div className="h5 mb-0">85 HP</div>
                <small>Engine Power</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="mb-5">
        <Col lg={12} className="text-center mb-4">
          <h2 className="display-5 fw-bold text-dark">Advanced Features</h2>
          <p className="text-muted">Cutting-edge technology designed for modern farming</p>
        </Col>
        {features.map((feature, index) => (
          <Col lg={4} md={6} className="mb-4" key={index}>
            <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
                </div>
                <Card.Title className="h5 fw-bold text-dark">{feature.title}</Card.Title>
                <Card.Text className="text-muted">
                  {feature.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Specifications Section */}
      <Row className="mb-5">
        <Col lg={12} className="text-center mb-4">
          <h2 className="display-5 fw-bold text-dark">Technical Specifications</h2>
        </Col>
        <Col lg={6}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">Engine Specifications</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Engine Type</span>
                <strong>4-Cylinder Turbocharged</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Power Output</span>
                <strong>85 HP</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Fuel Tank Capacity</span>
                <strong>120 Liters</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Transmission</span>
                <strong>12F + 12R Synchro</strong>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">Dimensions & Weight</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Overall Length</span>
                <strong>4,200 mm</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Overall Width</span>
                <strong>2,100 mm</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Overall Height</span>
                <strong>2,800 mm</strong>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Operating Weight</span>
                <strong>3,200 kg</strong>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Image Gallery */}
      <Row className="mb-5">
        <Col lg={12} className="text-center mb-4">
          <h2 className="display-5 fw-bold text-dark">In Action</h2>
          <p className="text-muted">See our tractor performing in real farming conditions</p>
        </Col>
        <Col lg={6} className="mb-4">
          <div className="position-relative">
            <img 
              src={OXA} 
              alt="OX Tractor in Field" 
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white p-3 rounded-end">
              <h6 className="mb-0">Field Performance</h6>
              <small>Maximum efficiency in all conditions</small>
            </div>
          </div>
        </Col>
        <Col lg={6} className="mb-4">
          <div className="bg-light p-4 rounded-3 h-100 d-flex flex-column justify-content-center">
            <h4 className="fw-bold text-dark mb-3">Ready for Any Challenge</h4>
            <p className="text-muted mb-4">
              Our tractor is engineered to handle the toughest farming conditions across Africa. 
              From small farms to large commercial operations, it delivers consistent performance 
              and reliability you can depend on.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <div className="text-center p-3 bg-white rounded">
                  <div className="h5 text-success mb-1">95%</div>
                  <small className="text-muted">Customer Satisfaction</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-3 bg-white rounded">
                  <div className="h5 text-success mb-1">24/7</div>
                  <small className="text-muted">Support Available</small>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="mb-5">
        <Col lg={12}>
          <Card className="bg-success text-white border-0">
            <Card.Body className="p-5 text-center">
              <h2 className="display-6 fw-bold mb-3">Ready to Transform Your Farm?</h2>
              <p className="lead mb-4">
                Join thousands of farmers who are already experiencing the OX difference. 
                Get in touch with our team today.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button variant="light" size="lg" className="px-4 fw-bold" href="mailto:info@oxafrica.com">
                  Get Quote
                </Button>
                <Button variant="outline-light" size="lg" className="px-4" href="mailto:info@oxafrica.com">
                  Book Test Drive
                </Button>
                <Button variant="outline-light" size="lg" className="px-4" href="mailto:info@oxafrica.com">
                  Download Brochure
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};