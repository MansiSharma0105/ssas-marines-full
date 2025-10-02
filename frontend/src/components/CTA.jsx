import React from 'react';

export default function CTA() {
  return (
    <div className="card" style={{ display: 'grid', gap: 10 }}>
      <h3 style={{ margin: 0 }}>Talk to a Surveyor</h3>
      <p className="muted" style={{ margin: 0 }}>
        Have a time-sensitive requirement? Our team can guide you on the right scope and deliverables.
      </p>
      <a className="btn primary" href="/contact#form">Get a Quote</a>
      <a className="btn secondary" href="/contact">Contact Us</a>
    </div>
  );
}
