import React from 'react';
import { Container } from 'react-bootstrap';
import heroImg from '../images/poultry/poultry_hero_2.jpg';
import houseImg1 from '../images/poultry/breedinghouse.jpg';
// import houseImg2 from '../images/poultry/breedinghouse_2.jpg';
import './LivestockContent.css';
import { BreadCrumb } from './BreadCrumb';

export const PoultryContent: React.FC = () => {
  return (
    <div className="poultry-page">
      {/* Hero Section */}
      <Container fluid
        className="hero-section text-white text-center py-5"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-overlay">
          <h1 className="display-5 fw-bold">Poultry Farm Solutions</h1>
          <p className="lead">End-to-end systems for modern and efficient poultry operations</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <a href="/poultry" className="btn btn-success btn-lg btn-hover-effect">Explore Solutions</a>
            <a href="#contact" className="btn btn-outline-light btn-lg btn-hover-effect">Talk to an Expert</a>
          </div>
        </div>
      </Container>

      <BreadCrumb target="Poultry" />

      {/* Why Choose OX Poultry */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Why Choose OX Poultry Solutions?</h2>
        <p className="text-center text-muted mb-5">Reliable systems designed for performance, animal welfare, and biosecurity.</p>
        <div className="row g-4">
          {[
            { title: 'Climate Control', desc: 'Balanced ventilation, temperature, and humidity for bird comfort.', icon: '🌡️' },
            { title: 'Biosecurity', desc: 'Designs and protocols that minimize disease risk and contamination.', icon: '🛡️' },
            { title: 'Automation', desc: 'Automated feeding and drinking systems to improve consistency.', icon: '⚙️' },
            { title: 'Efficient Layouts', desc: 'Optimized house layouts to reduce labor and increase throughput.', icon: '📐' },
            { title: 'Durability', desc: 'High-quality materials engineered for long-term use.', icon: '🔧' },
            { title: 'Scalability', desc: 'Modular systems that grow with your production needs.', icon: '📈' },
          ].map((f, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card equipment-card h-100 shadow-sm">
                <div className="card-body">
                  <div className="equipment-icon mb-3" aria-hidden>{f.icon}</div>
                  <h5 className="card-title fw-semibold">{f.title}</h5>
                  <p className="card-text text-muted">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Poultry House Equipment Systems */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4 fw-bold">Poultry House Equipment Systems</h2>
        <div className="row g-4">
          {[
            { title: 'Ventilation & Inlet Systems', desc: 'Fans, air inlets, tunnel ventilation for uniform airflow.', icon: '🌀' },
            { title: 'Feeding Systems', desc: 'Automatic feeders with adjustable pans and feed lines.', icon: '🥣' },
            { title: 'Drinking Systems', desc: 'Nipple drinkers and lines ensuring clean, reliable water supply.', icon: '💧' },
            { title: 'Manure Removal', desc: 'Scraper conveyors and belts for efficient manure handling.', icon: '🧹' },
            { title: 'Egg Collection', desc: 'Nest systems and belts designed for minimal breakage.', icon: '🥚' },
            { title: 'Lighting & Control', desc: 'LED lighting, timers, and controllers to optimize growth.', icon: '💡' },
          ].map((sys, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card equipment-card h-100 shadow-sm">
                <div className="card-body">
                  <div className="equipment-icon mb-3" aria-hidden>{sys.icon}</div>
                  <h5 className="card-title fw-semibold">{sys.title}</h5>
                  <p className="card-text text-muted">{sys.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Poultry House Gallery</h2>
        <div className="row g-4">
          {[houseImg1].map((img, i) => (
            <div className="col-md-6" key={i}>
              <div className="gallery-item shadow-sm">
                <img src={img} alt={`Poultry house ${i + 1}`} className="img-fluid" />
                <div className="gallery-overlay">Modern house designs for productivity and welfare</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4 fw-bold">Additional Systems & Services</h2>
        <div className="row g-4">
          {[
            { title: 'Disinfection & Hygiene', desc: 'Footbaths, sprayers, and protocols for disease prevention.', icon: '🧴' },
            { title: 'Biosecurity Design', desc: 'Segregation, controlled entry, and sanitary workflows.', icon: '🚪' },
            { title: 'Water Treatment', desc: 'Filtration and dosing for safe and consistent water quality.', icon: '🚰' },
          ].map((svc, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card service-card h-100 shadow-sm">
                <div className="card-body">
                  <div className="service-icon mb-3" aria-hidden>{svc.icon}</div>
                  <h5 className="card-title fw-semibold">{svc.title}</h5>
                  <p className="card-text text-muted">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section text-white text-center py-5">
        <h2 className="fw-bold">One-Stop Service for Poultry Farm Needs</h2>
        <p className="lead mb-4">From design to installation and training, we cover it all.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="mailto:info@oxafrica.com" className="btn btn-success btn-lg btn-hover-effect">Get Free Consultation</a>
          <a href="/poultry" className="btn btn-outline-light btn-lg btn-hover-effect">View Solutions</a>
        </div>
      </div>
    </div>
  );
};