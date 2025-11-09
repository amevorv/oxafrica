import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './LivestockContent.css'; // Reusing the same CSS for a consistent look

// Import images for the gallery
import img1 from '../images/steelstruct/img18_2.jpg';
import img2 from '../images/steelstruct/img21_1.jpg';
import img3 from '../images/steelstruct/img21.jpg';
import img4 from '../images/steelstruct/img18.jpg';

export const SteelStructuresContent: React.FC = () => {
    return (
        <div className="livestock-content">
            {/* Hero Section */}
            {/* <header className="hero-section text-center py-5">
                <Container>
                    <h1 className="display-4">Steel Structures</h1>
                    <p className="lead">Durable and reliable steel buildings for various agricultural and industrial needs.</p>
                </Container>
            </header> */}

            {/* Introduction Section */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto text-center">
                            <h2>Why Choose OX Steel Structures?</h2>
                            <p className="lead">
                                We have various kinds of steel structures ranging from livestock to warehouses and more. Our rich experience in prefabricated light steel construction helps us to deliver high-quality products at a lower cost.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Types of Steel Structures */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Our Steel Structure Solutions</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Warehouses</Card.Title>
                                    <Card.Text>
                                        Custom-designed warehouses to meet your storage and logistical needs. Our steel structures provide large, open spaces and are built to last.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Agricultural Buildings</Card.Title>
                                    <Card.Text>
                                        From barns to equipment storage, our agricultural buildings are designed to protect your assets and improve your operational efficiency.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Custom Projects</Card.Title>
                                    <Card.Text>
                                        Have a unique project in mind? We can design and fabricate custom steel structures to your exact specifications.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Gallery Section */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">Project Gallery</h2>
                    <Row>
                        <Col md={3} sm={6} className="mb-4">
                            <img src={img1} alt="Steel Structure 1" className="img-fluid" />
                        </Col>
                        <Col md={3} sm={6} className="mb-4">
                            <img src={img2} alt="Steel Structure 2" className="img-fluid" />
                        </Col>
                        <Col md={3} sm={6} className="mb-4">
                            <img src={img3} alt="Steel Structure 3" className="img-fluid" />
                        </Col>
                        <Col md={3} sm={6} className="mb-4">
                            <img src={img4} alt="Steel Structure 4" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 text-center text-white">
                <Container>
                    <h2>Ready to Start Your Project?</h2>
                    <p className="lead">Contact us today for a free consultation and quote.</p>
                    <Button variant="light" size="lg">Get in Touch</Button>
                </Container>
            </section>
        </div>
    );
};