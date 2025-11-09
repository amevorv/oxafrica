import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import csr1 from "../images/home/csr/image_21.png"
import csr2 from "../images/home/csr/image_22.jpg"
import csr3 from "../images/home/csr/image_23.jpg"



export const CSRSection = () => {
  return (
    <Container style={{ padding: '50px 0' }}>
      <h2 className="text-center mb-4">OX Africa's Commitment</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={csr1} />
            <Card.Body>
              <Card.Title>Order Your Equipment Online</Card.Title>
              <Card.Text>
                Create an online account and take advantage of our financing suits.
              </Card.Text>
              <Button variant="success">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={csr2} />
            <Card.Body>
              <Card.Title>Speak with Our experts</Card.Title>
              <Card.Text>
                The help you need is just a click away.
              </Card.Text>
              <Button variant="success">Make Appointment</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={csr3} />
            <Card.Body>
              <Card.Title>Ubuntu Africa</Card.Title>
              <Card.Text>
                As the saying goes, I am what I am because of who we all are. There is something for everyone.
              </Card.Text>
              <Button variant="success">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};