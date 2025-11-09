import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export const CSRSection = () => {
  return (
    <Container style={{ padding: '50px 0' }}>
      <h2 className="text-center mb-4">OX Africa's Commitment</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Order Your Equipment Online</Card.Title>
              <Card.Text>
                Create an online account and take advantage of our financing suits.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Speak with Our experts</Card.Title>
              <Card.Text>
                The help you need is just a click away.
              </Card.Text>
              <Button variant="primary">Make Appointment</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Ubuntu Africa</Card.Title>
              <Card.Text>
                As the saying goes, I am what I am because of who we all are. There is something for everyone.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};