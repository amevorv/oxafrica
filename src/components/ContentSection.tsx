import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import content1 from "../images/home/content/image_17.jpg"
import content2 from "../images/home/content/image_18.jpg"
import content3 from "../images/home/content/image_19.jpg"
// import content4 from "../images/home/content/image_20.jpg"



export const ContentSection = () => {
  return (
    <Container style={{ padding: '50px 0' }}>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src={content1} />
            <Card.Body>
              <Card.Title>OX is changing agriculture in Africa</Card.Title>
              <Card.Text>
                Discover how our innovative solutions are transforming the agricultural landscape across the continent.
              </Card.Text>
              <Button variant="success">
                <Link to="/oxischangingafrica" className="btn btn-success">See How</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img variant="top" src={content2} />
            <Card.Body>
              <Card.Title>Field Support Systems</Card.Title>
              <Card.Text>
                Explore our comprehensive field support systems designed to maximize your productivity and efficiency.
              </Card.Text>
              <Button variant="success">
                <Link to="/comingsoon" className="btn btn-success">Explore</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Img variant="top" src={content3} />
            <Card.Body>
              <Card.Title>Trade your old Equipment for a new one</Card.Title>
              <Card.Text>
                Upgrade your equipment and take your farming to the next level with our trade-in program.
              </Card.Text>
              <Button variant="success">
                <Link to="/upgrade" className="btn btn-success">Upgrade</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};