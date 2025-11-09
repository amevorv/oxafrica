import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './LivestockContent.css'; // Reusing the same CSS for a consistent look

export const UpgradeContent: React.FC = () => {
    return (
        <div className="livestock-content">
            {/* Hero Section */}
            <header className="hero-section text-center py-5">
                <Container>
                    <h1 className="display-4">Tractor Trade-In Program</h1>
                    <p className="lead">Upgrade to a new, more efficient model with our flexible trade-in options.</p>
                </Container>
            </header>

            {/* How It Works Section */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">How Our Trade-In Program Works</h2>
                    <Row>
                        <Col md={3} className="text-center mb-4">
                            <div className="mb-3"><span className="fs-1">1</span></div>
                            <h5>Submit Your Request</h5>
                            <p>Fill out our online form with your tractor's details or bring it in for an on-site evaluation.</p>
                        </Col>
                        <Col md={3} className="text-center mb-4">
                            <div className="mb-3"><span className="fs-1">2</span></div>
                            <h5>Receive a Fair Offer</h5>
                            <p>We'll assess your tractor's value and provide a competitive trade-in offer.</p>
                        </Col>
                        <Col md={3} className="text-center mb-4">
                            <div className="mb-3"><span className="fs-1">3</span></div>
                            <h5>Apply Your Credit</h5>
                            <p>Use your trade-in credit towards the purchase of a new tractor from our range.</p>
                        </Col>
                        <Col md={3} className="text-center mb-4">
                            <div className="mb-3"><span className="fs-1">4</span></div>
                            <h5>Upgrade Your Tractor</h5>
                            <p>Choose a new model that fits your needs, with financing options available.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Trade In Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Why Trade In with OX Engineering?</h2>
                    <Row>
                        <Col md={3} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Fair Market Value</Card.Title>
                                    <Card.Text>We offer competitive trade-in values based on market conditions.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Hassle-Free Process</Card.Title>
                                    <Card.Text>Our trade-in process is fast, straightforward, and handled by professionals.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Latest Technology</Card.Title>
                                    <Card.Text>Upgrade to a newer tractor with enhanced features and better fuel efficiency.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Environmentally Friendly</Card.Title>
                                    <Card.Text>We refurbish and recycle parts, contributing to a more sustainable ecosystem.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Eligibility Section */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto text-center">
                            <h2>What Tractors Are Eligible?</h2>
                            <p className="lead">
                                We accept a wide variety of tractors in our trade-in program, regardless of make or model. Whether your current tractor is in excellent condition or has seen better days, we’ll evaluate its value and offer a fair trade-in credit.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 text-center bg-primary text-white">
                <Container>
                    <h2>Ready to Upgrade?</h2>
                    <p className="lead">Contact us today for a personalized trade-in evaluation.</p>
                    <Button variant="light" size="lg" className="mx-2">Trade-In Form</Button>
                    <Button variant="outline-light" size="lg" className="mx-2">Contact Us</Button>
                </Container>
            </section>
        </div>
    );
};