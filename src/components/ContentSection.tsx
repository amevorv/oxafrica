import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ContentSection = () => {
  return (
    <Container style={{ padding: '50px 0' }}>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>OX is changing agriculture in Africa</Card.Title>
              <Card.Text>
                Discover how our innovative solutions are transforming the agricultural landscape across the continent.
              </Card.Text>
              <Button variant="primary" as={Link} to={'/oxischangingafrica'}>See How</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Field Support Systems</Card.Title>
              <Card.Text>
                Explore our comprehensive field support systems designed to maximize your productivity and efficiency.
              </Card.Text>
              <Button variant="primary" as={Link} to={'/comingsoon'}>Explore</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://placehold.co/1200x400" />
            <Card.Body>
              <Card.Title>Trade your old Equipment for a new one</Card.Title>
              <Card.Text>
                Upgrade your equipment and take your farming to the next level with our trade-in program.
              </Card.Text>
              <Button variant="primary" as={Link} to={'/upgrade'}>Upgrade</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};