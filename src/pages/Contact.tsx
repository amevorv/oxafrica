import { Container, Row, Col } from 'react-bootstrap'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BreadCrumb } from '../components/BreadCrumb'

const Contact = () => {
  const email = 'info@oxafrica.com'
  const phone = '+233531601131'
  const location = 'Tema Industrial Zone, Greater Accra, Ghana'

  return (
    <>
    <div>
      <Header />
      <br/>
      <BreadCrumb target="Contact" />
      <br/>
      <Container className="py-5">  
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="mb-3">Contact Us</h1>
            <p className="mb-4">Get in touch with OX Africa.</p>
            <div className="p-4 border rounded-3 bg-white">
              <dl className="row mb-0">
                <dt className="col-sm-3">Telephone</dt>
                <dd className="col-sm-9">
                  <a href={`tel:${phone}`} className="text-decoration-none" style={{ color: '#c62828' }}>{phone}</a>
                </dd>
                <dt className="col-sm-3">Email</dt>
                <dd className="col-sm-9">
                  <a href={`mailto:${email}`} className="text-decoration-none" style={{ color: '#c62828' }}>{email}</a>
                </dd>
                <dt className="col-sm-3">Location</dt>
                <dd className="col-sm-9">{location}</dd>
              </dl>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
    </>
  )
}

export default Contact
