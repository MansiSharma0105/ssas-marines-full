import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container content">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1>Marine & Tanker surveys and Consultancy</h1>
          <p>
            We deliver accurate, reliable marine surveys and consultancy for Oil Majors, Charterers, Shipowners,
            P&I clubs, Underwriters, Lawyers, Loss Adjusters and CDI—powered by seasoned experts and modern tech.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn primary" href="/contact#form">Get Quote</a>
            <a className="btn secondary" href="/contact">Contact Us</a>
          </div>
        </motion.div>

        <motion.img
          src="/assets/logo-ssas.png"
          alt="SSAS Marine crest"
          loading="lazy"
          decoding="async"
          style={{ width: 68, height: 68, marginTop: 18, opacity: 0.9 }}
          aria-hidden="true"
          initial={{ y: 0 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
