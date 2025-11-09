import React from 'react';
import pigHero from '../images/piggery/animal_pig_farm.webp';
import pigImg from '../images/livestock/piggeryLive.jpg';
import './LivestockContent.css';
import { Container } from 'react-bootstrap';
import { BreadCrumb } from './BreadCrumb';

export const PiggeryContent: React.FC = () => {
  return (
    <div className="piggery-page">
      {/* Hero Section */}
      <Container fluid
        className="hero-section text-white text-center py-5"
        style={{ backgroundImage: `url(${pigHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-overlay">
          <h1 className="display-5 fw-bold">Pig Farm Solutions</h1>
          <p className="lead">Efficient housing and systems for healthy, productive pigs</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <a href="/piggery" className="btn btn-success btn-lg btn-hover-effect">Explore Solutions</a>
            <a href="#contact" className="btn btn-outline-light btn-lg btn-hover-effect">Talk to an Expert</a>
          </div>
        </div>
      </Container>

      <BreadCrumb target="Piggery" />

      {/* Why Choose OX Pig Farm Solutions */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Why Choose OX Pig Farm Solutions?</h2>
        <p className="text-center text-muted mb-5">Robust systems that improve welfare, performance and hygiene.</p>
        <div className="row g-4">
          {[
            { title: 'Comfort & Welfare', desc: 'Flooring, pens and space for behavior and rest.', icon: '🛏️' },
            { title: 'Efficient Feeding', desc: 'Troughs, dry/wet feeders and dosing systems.', icon: '🍽️' },
            { title: 'Clean Water', desc: 'Nipple drinkers and water treatment for health.', icon: '💧' },
            { title: 'Hygiene & Manure', desc: 'Slatted floors and slurry management systems.', icon: '🧼' },
            { title: 'Climate Control', desc: 'Ventilation and heating for optimal pig comfort.', icon: '🌡️' },
            { title: 'Durable Materials', desc: 'Corrosion-resistant equipment for long life.', icon: '🏗️' },
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

      {/* Pig Production Housing Systems */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4 fw-bold">Pig Production Housing Systems</h2>
        <div className="row g-4">
          {[
            { title: 'Breeding/Gestating Pens', desc: 'Comfortable pens with feeding and water access.', icon: '🐷' },
            { title: 'Farrowing Crates', desc: 'Safe environment for sow and piglets with heating.', icon: '👶' },
            { title: 'Nursery Pens', desc: 'Controlled climate and hygiene for early growth.', icon: '🏠' },
            { title: 'Finishing Pens', desc: 'Efficient layouts for growth and manure handling.', icon: '📈' },
            { title: 'Slatted Flooring', desc: 'Hygienic floors designed for easy waste removal.', icon: '🧹' },
            { title: 'Feeding & Water Lines', desc: 'Automated feed delivery and reliable water supply.', icon: '🥤' },
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

      {/* Environmental Control Systems */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Environmental Control Systems</h2>
        <div className="row g-4">
          {[
            { title: 'Ventilation & Air Inlets', desc: 'Fans, inlets and controllers for uniform airflow.', icon: '🌀' },
            { title: 'Heating & Insulation', desc: 'Brooders, heaters and insulated panels.', icon: '🔥' },
            { title: 'Cooling & Misting', desc: 'Evaporative cooling, misters and shade systems.', icon: '💦' },
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

      {/* Gallery */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4 fw-bold">Gallery</h2>
        <div className="row g-4">
          {[pigImg].map((img, i) => (
            <div className="col-md-6" key={i}>
              <div className="gallery-item shadow-sm">
                <img src={img} alt="Pig farm" className="img-fluid" />
                <div className="gallery-overlay">Clean, efficient and scalable pig farm solutions</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section text-white text-center py-5">
        <h2 className="fw-bold">One-Stop Service for Pig Farm Needs</h2>
        <p className="lead mb-4">Design, installation and training by experienced professionals.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#contact" className="btn btn-success btn-lg btn-hover-effect">Get Free Consultation</a>
          <a href="/piggery" className="btn btn-outline-light btn-lg btn-hover-effect">View Solutions</a>
        </div>
      </div>
    </div>
  );
};