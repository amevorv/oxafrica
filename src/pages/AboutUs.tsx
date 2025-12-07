// ...existing code...
import React from 'react';
import { BreadCrumb } from '../components/BreadCrumb';
import { HeroImage2 } from '../components/HeroImage2';
import { Footer } from '../components/Footer';
import './AboutUs.css';
// ...existing code...

const AboutUs: React.FC = () => {
  const sections = [
    {
      heading: "Our Mission",
      content: "Ox Engineering Ltd is a Ghanaian-owned agricultural machinery and technology company dedicated to transforming farming across Africa. Founded with the vision of empowering farmers through innovation, quality, and affordability."
    },
    {
      heading: "What We Offer",
      content: "From compact tractors and implements to irrigation systems, harvesters, and mechanization service centres, our solutions are engineered to boost productivity, reduce labour, and promote sustainable food production."
    },
    {
      heading: "Our Impact",
      content: "Headquartered in the Tema Industrial Zone, we drive Africa's agricultural industrialization by increasing local manufacturing capacity, creating youth employment, and reducing dependency on imported equipment."
    },
    {
      heading: "Our Commitment",
      content: "We believe mechanization is the foundation of Africa's food security. By partnering with global manufacturers and investing in local talent, we are building a future where African farmers have the tools they need."
    }
  ];

  // small helper to create anchor ids
  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const styles: { [k: string]: React.CSSProperties } = {
    page: { fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', color: '#000' },
    container: { maxWidth: 1100, margin: '0 auto', padding: '24px' },
    intro: { marginTop: -20, marginBottom: 20, lineHeight: 1.6, color: '#000' },
    toc: { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 },
    tocLink: { background: '#fff', padding: '8px 12px', border: '1px solid var(--brand-green)', borderRadius: 6, cursor: 'pointer', fontSize: 14, color: 'var(--brand-green)' },
    sections: { display: 'grid', gap: 18, marginTop: 8 },
    card: { display: 'flex', gap: 16, alignItems: 'flex-start', padding: 18, borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', background: '#fff' },
    cardAlt: { flexDirection: 'row-reverse' as const },
    heading: { margin: 0, fontSize: 20, color: 'var(--brand-green)' },
    contentText: { marginTop: 8, color: '#000', lineHeight: 1.6 },
    ctaBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28, paddingTop: 18, borderTop: '1px solid #eee' },
    ctaButton: { background: 'var(--brand-green)', color: '#fff', padding: '10px 14px', borderRadius: 6, textDecoration: 'none' }
  };

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={styles.page}>
      <HeroImage2 url="/assets/hero-about.jpg" />
      <BreadCrumb target="About Us" />
      <div style={styles.container}>
        <header>
          <h1 style={{ marginBottom: 8 }}>About Ox Engineering Ltd</h1>
        </header>

        <nav aria-label="On this page" style={styles.toc}>
          {sections.map(s => {
            const id = slugify(s.heading);
            return (
              <button
                key={id}
                onClick={() => onNav(id)}
                style={styles.tocLink}
                className="about-toc-link"
                aria-controls={id}
              >
                {s.heading}
              </button>
            );
          })}
        </nav>

        <main style={styles.sections}>
          {sections.map((section, index) => {
            const id = slugify(section.heading);
            const isAlt = index % 2 === 1;
            return (
              <section
                key={id}
                id={id}
                style={{ ...styles.card, ...(isAlt ? styles.cardAlt : undefined) }}
                aria-labelledby={`${id}-heading`}
              >
                <div style={{ flex: 1 }}>
                  <h2 id={`${id}-heading`} style={styles.heading}>{section.heading}</h2>
                  <p style={styles.contentText}>{section.content}</p>
                </div>

                {/* optional small visual / icon placeholder */}
                <div style={{ width: 120, textAlign: 'center', color: '#6b6b6b', fontSize: 13 }}>
                  <div style={{ width: 80, height: 80, margin: '0 auto', borderRadius: 8, background: '#f2f6fb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* lightweight SVG icon to avoid asset dependencies */}
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 12h18" stroke="#008000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 8l6-4 6 4" stroke="#008000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 16l6 4 6-4" stroke="#008000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </section>
            );
          })}
        </main>

        <div style={styles.ctaBar}>
          <p style={{ margin: 0, color: '#333' }}>Want to discuss a project or request a demo?</p>
          <a href="mailto:info@oxengineering.com" style={styles.ctaButton} className="about-cta-btn">Contact Us</a>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
