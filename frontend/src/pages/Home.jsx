import React from 'react';
import Hero from '../components/Hero.jsx';
import WaveDivider from '../components/WaveDivider.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import Testimonial from '../components/Testimonial.jsx';
import { motion } from 'framer-motion';

const services = [
  { icon: 'shield', title: 'Tanker Vetting', summary: 'Independent evaluation aligned to OCIMF, SIRE & TMSA expectations.', blurbs: ['Pre-inspection readiness', 'Gap closure actions']},
  { icon: 'checklist', title: 'Survey & Investigation', summary: 'On-site inspections, casualty investigations, loss assessment and reporting.', blurbs: ['Root-cause analysis', 'Clear, defensible reports']},
  { icon: 'compass', title: 'Dry Bulk Vetting', summary: 'End-to-end risk assessment for vessels & terminals in the dry bulk chain.'},
  { icon: 'checklist', title: 'Cargo Superintendency', summary: 'Supervision throughout loading/discharge to protect cargo quality and interests.'},
  { icon: 'sonar', title: 'Underwater Surveys', summary: 'UWILD, hull & propeller assessment with certified divers & ROV partners.'},
  { icon: 'shield', title: 'Project & Risk Management', summary: 'Structured hazard identification and mitigation across marine projects.'}
];

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider flip/>

      <section className="section">
        <div className="container">
          <header>
            <h2 className="section-title">About SSAS Marine</h2>
            <p className="section-sub">
              SSAS Marine Services is a marine and tanker consultancy and surveying firm, offering consultancy services primarily to Oil Majors, Charterers, Shipowners, P&I clubs, Underwriters, Lawyers, Loss Adjusters and the Chemical Distribution Institute (CDI).
              Our survey services cover all vessel types—cargo, tankers, and cruise—using the latest technology to deliver reliable results that ensure safety and quality.
            </p>
          </header>
          <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 12 }}>
            <p>
              We understand that clients rely on clear, defensible insights. Our reputation is built on dependable inspection and survey services, tailored solutions, and a strong commitment to technology and excellence.
            </p>
            <p>
              SSAS Marine is committed to sustainability. We recognize the impact our industry can have on the environment and work to minimize our footprint, promote sustainable practices, and continually improve.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider  />

      <section className="section alt" id="services">
        <div className="container">
          <h2 className="section-title">Core Services</h2>
          <p className="section-sub">Targeted expertise to protect people, assets, cargo, and reputation.</p>
          <div className="services-grid" role="list">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                role="listitem"
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip/>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Sustainability & Commitment</h2>
          <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 12 }}>
            <p>
              Our commitment to responsible operations means minimizing environmental impact while maximizing safety and quality for clients and crews.
            </p>
            <ul>
              <li>Cut emissions and waste across engagements.</li>
              <li>Promote sustainable practices with clients and suppliers.</li>
              <li>Continuously improve via technology and training.</li>
            </ul>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="section alt">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonials">
            <Testimonial quote="Professional, thorough, and fast—exactly what we needed before port call." author="Operations Lead, Oil Major" role="Vetting Lead" />
            <Testimonial quote="Clear recommendations and practical risk controls saved us days at berth." author="Fleet Manager" role="Tanker Operator" />
            <Testimonial quote="Reliable documentation that stood up to scrutiny—highly recommended." author="Claims Adjuster" role="P&I Club" />
          </div>
        </div>
      </section>



      <section className="section">
        <div className="container">
          <h2 className="section-title">Selected Clients</h2>
          <p className="section-sub">A snapshot of organizations we support across the value chain.</p>
          <div className="clients" aria-label="Client logos">
            {['CDI', 'P&I', 'Oil Major', 'Charterers', 'Shipowners', 'Underwriters'].map((c) => (
              <div key={c} className="client-badge" aria-label={c}>{c}</div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
