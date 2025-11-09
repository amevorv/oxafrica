import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./LivestockContent.css";

export const IrrigationContent = () => {
  return (
    <div className="livestock-content">
      <Container>
        {/* Introduction Section */}
        <Row className="my-5">
          <Col>
            <h1 className="text-center">Irrigation Equipment</h1>
            <p className="lead text-center">
              Welcome to OX ENGINEERING LIMITED, your trusted partner for
              high-quality irrigation solutions. Whether you&apos;re a farmer,
              landscaper, or homeowner, the right irrigation equipment can make
              all the difference in achieving healthy, thriving plants while
              optimizing water use.
            </p>
          </Col>
        </Row>

        {/* Irrigation Systems Section */}
        <Row>
          <Col>
            <h2 className="text-center">Our Irrigation Systems</h2>
            <p className="text-center mb-4">
              We offer a wide range of irrigation systems to suit your specific
              needs.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Surface Irrigation */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Surface Irrigation Systems</Card.Title>
                <Card.Text>
                  A simple and traditional method where water is distributed
                  over the soil surface by gravity. Ideal for large, flat areas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Drip Irrigation */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Drip Irrigation Systems</Card.Title>
                <Card.Text>
                  A highly efficient system that delivers water directly to the
                  root zone, minimizing waste from evaporation and runoff.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Sprinkler Irrigation */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Sprinkler Irrigation Systems</Card.Title>
                <Card.Text>
                  Mimics rainfall by spraying water across your plants or crops.
                  Versatile and suitable for various types of terrain.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Subsurface Irrigation */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Subsurface Irrigation Systems</Card.Title>
                <Card.Text>
                  Delivers water directly to the root zone beneath the surface,
                  making it one of the most efficient systems available.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Pumps and Water Management */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Pumps and Water Management</Card.Title>
                <Card.Text>
                  Reliable pumping and control equipment to ensure water is
                  delivered efficiently and at the right pressure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Specialized Solutions */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Specialized Solutions</Card.Title>
                <Card.Text>
                  Customized solutions for unique agricultural and landscaping
                  needs, including greenhouse and fertigation systems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <Row className="my-5">
          <Col>
            <h2 className="text-center">Why Choose OX ENGINEERING LIMITED?</h2>
            <p className="text-center mb-4">
              We are committed to providing the best irrigation solutions and
              support.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Quality Products</Card.Title>
                <Card.Text>
                  We only offer tried-and-true equipment from leading brands to
                  ensure long-term reliability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Expert Advice</Card.Title>
                <Card.Text>
                  Our knowledgeable staff is ready to guide you through
                  selecting the right equipment for your project.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Comprehensive Support</Card.Title>
                <Card.Text>
                  From installation to maintenance, we provide full support to
                  keep your irrigation system running smoothly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="my-5">
          <Col className="text-center">
            <h2>Get Started with Your Irrigation Project</h2>
            <p>
              Contact us today to learn more about our irrigation solutions and
              how we can help you achieve optimal water efficiency and plant
              health.
            </p>
            <Button variant="success" size="lg" href="/contact">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};