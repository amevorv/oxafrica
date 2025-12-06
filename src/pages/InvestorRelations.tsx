import React, { useMemo } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
// import { BreadCrumb } from '../components/BreadCrumb';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrendingUp, Wrench, Layers, Users } from 'lucide-react';
import './InvestorRelations.css';

const InvestorRelations: React.FC = () => {
  const introParas = useMemo(() => [
    'At Ox Engineering Ltd, we are building the future of African agriculture through innovative, affordable, and locally engineered mechanization solutions.',
    'Through our work in agricultural machinery manufacturing, mechanization centers, irrigation solutions, and digital farm tools, we deliver products that directly address Africa’s most urgent agricultural challenges—labour shortages, low yields, and limited access to modern machinery.',
    'Our Investor Relations platform exists to provide clear, transparent, and timely information to investors, partners, and stakeholders who share our vision of a mechanized, food-secure Africa.'
  ], []);

  const whyInvestContent = useMemo(() => ([
    {
      title: 'A Fast-Growing Market Opportunity',
      icon: <TrendingUp className="ir-icon" aria-hidden="true" />,
      bullets: [
        'Africa has over 250M farmers; mechanization penetration < 30%.',
        'Demand for affordable tractors, implements, irrigation is expanding.',
        'Ox Engineering is positioned at the center of this growth.'
      ]
    },
    {
      title: 'Locally Engineered, Africa-Fit Solutions',
      icon: <Wrench className="ir-icon" aria-hidden="true" />,
      bullets: [
        'Designed for African soil, climate, and operations.',
        'Reliable, serviceable, and cost-effective versus imports.'
      ]
    },
    {
      title: 'Scalable Business Model',
      icon: <Layers className="ir-icon" aria-hidden="true" />,
      bullets: [
        'Manufacturing + Service Centers + Digital Tools.',
        'Recurring revenue: sales, parts, servicing, MAAS, training.'
      ]
    },
    {
      title: 'Strong Social and Economic Impact',
      icon: <Users className="ir-icon" aria-hidden="true" />,
      bullets: [
        'Jobs for Ghanaian youth; increased productivity and rural incomes.',
        'Stronger food systems; industrial capacity (SDG 1, 2, 8, 9, 12).'
      ]
    }
  ]), []);

  const commitmentContent = useMemo(() => ([
    { title: 'Transparency', copy: 'Clear reporting, open communication, accountable governance.' },
    { title: 'Sustainable Growth', copy: 'Long-term value through innovation and operational excellence.' },
    { title: 'Impact Measurement', copy: 'Track economic, social, and environmental value created.' },
    { title: 'Governance', copy: 'Leadership with engineering, manufacturing, and agribusiness expertise.' }
  ]), []);

  const investmentOpportunities = useMemo(() => ([
    { key: 'equity', title: 'Equity Investment', details: 'Partner via equity to scale manufacturing and service operations across Africa.', },
    { key: 'venture', title: 'Venture/Seed Capital', details: 'Support new product development, digital tools, and early-stage deployments.', },
    { key: 'impact', title: 'Impact Financing', details: 'Align capital with measurable social, economic, and environmental outcomes.', },
    { key: 'jv', title: 'Joint Ventures & Tech Partnerships', details: 'Collaborate to localize technology and expand distribution.', },
    { key: 'project', title: 'Project Financing (Mechanization Centers)', details: 'Finance regional hubs for MAAS, training, and servicing.', },
    { key: 'working', title: 'Working/Expansion Capital', details: 'Accelerate growth in parts, servicing, and MAAS operations.', }
  ]), []);

  const email = 'investors@oxafrica.com';
  const phone = '+233531601131';
  const web = 'https://www.oxafrica.com/investors';

  return (
    <div>
      <Header />

      <section className="ir-hero" aria-label="Investor Relations hero">
        <Container>
          <div className="ir-hero-content">
            <h1 className="ir-hero-title">Investor Relations</h1>
            <p className="ir-hero-subtitle">Partnering to Transform Agriculture Across Africa</p>
            <div className="ir-hero-actions">
              <Button
                variant="success"
                className="ir-btn"
                as="a"
                href={`mailto:${email}?subject=Investor%20Pack%20Request`}
                aria-label="Request investor pack via email"
              >
                Request Investor Pack
              </Button>
              <Button
                variant="outline-success"
                className="ir-btn"
                as="a"
                href={`tel:${phone}`}
                aria-label="Call investor relations team"
              >
                Contact Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* <nav aria-label="breadcrumb">
        <BreadCrumb target="Investor Relations" />
      </nav> */}

      <Container className="ir-section" as="section" aria-labelledby="ir-intro">
        <h2 id="ir-intro" className="ir-section-title">Partnering to Transform Agriculture Across Africa</h2>
        {introParas.map((p, i) => (
          <p key={i} className="ir-paragraph">{p}</p>
        ))}
      </Container>

      <Container className="ir-section" as="section" aria-labelledby="ir-why">
        <h2 id="ir-why" className="ir-section-title">Why Invest in Ox Engineering Ltd?</h2>
        <Row>
          {whyInvestContent.map((item, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card className="ir-card" tabIndex={0} aria-label={item.title}>
                <Card.Body>
                  <div className="ir-card-icon" aria-hidden="true">{item.icon}</div>
                  <Card.Title>{item.title}</Card.Title>
                  <ul className="ir-list">
                    {item.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="ir-section" as="section" aria-labelledby="ir-commit">
        <h2 id="ir-commit" className="ir-section-title">Our Commitment to Investors</h2>
        <Row>
          {commitmentContent.map((t, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card className="ir-tile" tabIndex={0} aria-label={t.title}>
                <Card.Body>
                  <Card.Title>{t.title}</Card.Title>
                  <p className="ir-tile-copy">{t.copy}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="ir-section" as="section" aria-labelledby="ir-opps">
        <h2 id="ir-opps" className="ir-section-title">Investment Opportunities</h2>
        <Accordion alwaysOpen>
          {investmentOpportunities.map((op, idx) => (
            <Accordion.Item eventKey={String(idx)} key={op.key}>
              <Accordion.Header>{op.title}</Accordion.Header>
              <Accordion.Body>
                <p className="ir-paragraph">{op.details}</p>
                <div className="ir-accordion-actions">
                  <Button
                    variant="success"
                    className="ir-btn"
                    as="a"
                    href={`mailto:${email}?subject=${encodeURIComponent('Interest: ' + op.title)}`}
                    aria-label={`Email investor relations about ${op.title}`}
                  >
                    Express Interest
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      <section className="ir-cta-banner" aria-label="Get involved">
        <Container>
          <h3 className="ir-cta-title">Join us in shaping Africa’s agricultural future</h3>
          <p className="ir-cta-copy">Request investor packs, financials, or project proposals.</p>
          <div className="ir-hero-actions">
            <Button
              variant="success"
              className="ir-btn"
              as="a"
              href={`mailto:${email}?subject=Investor%20Pack%20Request`}
              aria-label="Request investor pack via email"
            >
              Request Investor Pack
            </Button>
            <Button
              variant="outline-success"
              className="ir-btn"
              as="a"
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open investor portal in new tab"
            >
              Visit Investor Portal
            </Button>
          </div>
        </Container>
      </section>

      <Container className="ir-section" as="section" aria-labelledby="ir-contact">
        <h2 id="ir-contact" className="ir-section-title">Contact Investor Relations</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Button
              type="button"
              className="w-100 ir-btn"
              variant="success"
              as="a"
              href={`mailto:${email}`}
              aria-label="Email investor relations"
            >
              Email: {email}
            </Button>
          </Col>
          <Col md={4} className="mb-3">
            <Button
              type="button"
              className="w-100 ir-btn"
              variant="outline-success"
              as="a"
              href={`tel:${phone}`}
              aria-label="Call investor relations"
            >
              Phone: +233 (0) 531601131
            </Button>
          </Col>
          <Col md={4} className="mb-3">
            <Button
              type="button"
              className="w-100 ir-btn"
              variant="outline-success"
              as="a"
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open investor portal in new tab"
            >
              Web: oxafrica.com/investors
            </Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default InvestorRelations;