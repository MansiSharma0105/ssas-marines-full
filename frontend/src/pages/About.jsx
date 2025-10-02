import React from 'react';
import WaveDivider from '../components/WaveDivider.jsx';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <section className="section" aria-labelledby="about-title">
        <div className="container">
          <h1 id="about-title" className="section-title">About SSAS Marine</h1>
          <p className="section-sub">
            Our reputation is built on dependable inspection and survey services, tailored solutions, and a strong commitment to technology and excellence.
          </p>

          <div className="twocol" style={{ marginTop: 12 }}>
            <div className="card">
              <h3>Company & Capabilities</h3>
              <p>
                We work closely with clients to understand specific needs and provide fit-for-purpose solutions. Our team has extensive experience across cargo ships, tankers, and cruise ships, using modern tools to produce accurate, reliable results.
              </p>
              <p>
                We are committed to sustainability—minimizing our footprint, encouraging responsible practices, and continually exploring ways to reduce impact.
              </p>
              <ul>
                <li>Technology-enabled inspections & reporting</li>
                <li>Global network of expert surveyors</li>
                <li>Rapid mobilization for time-critical work</li>
              </ul>
            </div>
            <aside>
              <div className="card">
                <h3>Why Choose Us</h3>
                <ul>
                  <li>Industry-accurate, defensible reporting</li>
                  <li>Clear recommendations and risk closure paths</li>
                  <li>Safety, quality and environmental stewardship</li>
                </ul>
              </div>
              <div className="card" style={{ marginTop: 16 }}>
                <h3>Compliance & Assurance</h3>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {['ISO', 'OCIMF', 'CDI'].map(b => (
                    <span key={b} className="client-badge" aria-label={`${b} badge`}>{b}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="section" style={{ paddingTop: 24 }}>
            <h2 className="section-title">Our Journey</h2>
            <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 12 }}>
              {[
                ['2014', 'Founded with a focus on tanker vetting and superintendent services.'],
                ['2018', 'Expanded into underwater and offshore vessel assurance.'],
                ['2022', 'Adopted digital reporting workflows and remote collaboration tools.'],
                ['Today', 'Trusted partner to clients across the maritime value chain.']
              ].map(([year, text], i) => (
                <motion.div
                  key={year}
                  className="card"
                  initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  aria-label={`Timeline ${year}`}
                >
                  <strong style={{ color: 'var(--brand-600)' }}>{year}</strong>
                  <p style={{ margin: '6px 0 0 0' }}>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider />
    </>
  );
}
