import React from 'react';
import cattleHero from '../images/livestock/cattleLive.jpg';
import goatImg from '../images/livestock/goatLive.jpg';
import cattleImg from '../images/livestock/cattleLive.jpg';
import './LivestockContent.css';
import { Container } from 'react-bootstrap';
import { BreadCrumb } from './BreadCrumb';

export const CattleGoatContent: React.FC = () => {
  return (
    <div className="cattle-goat-page">
      {/* Hero Section */}
      <Container fluid
        className="hero-section text-white text-center py-5"
        style={{ backgroundImage: `url(${cattleHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-overlay">
          <h1 className="display-5 fw-bold">Cattle & Goat Housing Systems</h1>
          <p className="lead">Comfortable, durable and efficient housing for ruminants</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <a href="/cattleandgoat" className="btn btn-success btn-lg btn-hover-effect">Explore Solutions</a>
            <a href="#contact" className="btn btn-outline-light btn-lg btn-hover-effect">Talk to an Expert</a>
          </div>
        </div>
      </Container>

      <BreadCrumb target="Cattle & Goat" />

      {/* Why Choose OX Livestock Housing */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Why Choose OX Livestock Housing?</h2>
        <p className="text-center text-muted mb-5">Systems tailored for animal welfare, operational efficiency, and longevity.</p>
        <div className="row g-4">
          {[
            { title: 'Ventilation & Climate', desc: 'Stable temperatures and fresh air for healthy animals.', icon: '🌬️' },
            { title: 'Comfort & Welfare', desc: 'Bedding, cubicles and space planning for behavior needs.', icon: '🛏️' },
            { title: 'Efficient Feeding', desc: 'Troughs, headlocks and waterers positioned for easy access.', icon: '🥛' },
            { title: 'Hygiene & Manure', desc: 'Scrapers, alleys and drainage for clean environments.', icon: '🧹' },
            { title: 'Durable Materials', desc: 'Galvanized steel, concrete and treated wood structures.', icon: '🏗️' },
            { title: 'Scalable Designs', desc: 'Modular layouts to expand as herds grow.', icon: '📈' },
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

      {/* Cattle Housing Systems */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4 fw-bold">Cattle Housing Systems</h2>
        <div className="row g-4">
          {[
            { title: 'Free-stall Barns', desc: 'Cubicles, bedding and alleys optimized for comfort and hygiene.', icon: '🐄' },
            { title: 'Tie-stall Barns', desc: 'Individual stalls with feeding and watering arrangements.', icon: '🔗' },
            { title: 'Feeding & Watering', desc: 'Headlocks, feed bunks and automatic waterers.', icon: '🥤' },
            { title: 'Manure Management', desc: 'Scrapers, gutters and storage for clean operations.', icon: '🧼' },
            { title: 'Calf Pens', desc: 'Safe enclosures with ventilation and easy cleaning.', icon: '🐮' },
            { title: 'Shade & Shelter', desc: 'Covered areas to protect from heat and rain.', icon: '⛱️' },
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

      {/* Goat Housing Solutions */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Goat Housing Solutions</h2>
        <div className="row g-4">
          {[
            { title: 'Raised Floor Houses', desc: 'Dry floors with ventilation for hoof and respiratory health.', icon: '🐐' },
            { title: 'Paddock Fencing', desc: 'Secure pens with gates and shade structures.', icon: '🚧' },
            { title: 'Feed Troughs & Waterers', desc: 'Easy access feeding and clean water supply.', icon: '🥣' },
            { title: 'Shelter Ventilation', desc: 'Cross-ventilation and openings for fresh air.', icon: '🪟' },
            { title: 'Kidding Pens', desc: 'Dedicated spaces for mother and kids with hygiene focus.', icon: '👶' },
            { title: 'Walkways & Handling', desc: 'Alleys and handling systems for smooth movement.', icon: '🚶' },
          ].map((sys, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card service-card h-100 shadow-sm">
                <div className="card-body">
                  <div className="service-icon mb-3" aria-hidden>{sys.icon}</div>
                  <h5 className="card-title fw-semibold">{sys.title}</h5>
                  <p className="card-text text-muted">{sys.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4 fw-bold">Gallery</h2>
        <div className="row g-4">
          {[cattleImg, goatImg].map((img, i) => (
            <div className="col-md-6" key={i}>
              <div className="gallery-item shadow-sm">
                <img src={img} alt={i === 0 ? 'Cattle housing' : 'Goat housing'} className="img-fluid" />
                <div className="gallery-overlay">Robust housing designed for welfare and performance</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section text-white text-center py-5">
        <h2 className="fw-bold">One-Stop Service for Livestock Housing</h2>
        <p className="lead mb-4">Design, materials, installation and training handled by our team.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#contact" className="btn btn-success btn-lg btn-hover-effect">Get Free Consultation</a>
          <a href="/cattleandgoat" className="btn btn-outline-light btn-lg btn-hover-effect">View Solutions</a>
        </div>
      </div>
    </div>
  );
};