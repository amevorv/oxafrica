import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-success text-white mt-5 py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Products & Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">Equipment</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">Buy Parts</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">Find a Dealer</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">Buy Online</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Company Information</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">About Our Company</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">Investor Relations</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover:text-white">News & Publications</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Connect with Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 text-decoration-none hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-white-50 text-decoration-none hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-white-50 text-decoration-none hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" className="text-white-50 text-decoration-none hover:text-white"><FaLinkedin size={24} /></a>
            </div>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <p className="text-white-50 mb-3">Stay up to date with our latest news and offers.</p>
            <Form>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control type="email" placeholder="Enter email" className="bg-light text-dark border-0" />
              </Form.Group>
              <Button variant="light" type="submit" className="w-100 text-primary fw-bold">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 OX Engineering. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};