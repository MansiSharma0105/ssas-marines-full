import React from 'react';
import WaveDivider from './WaveDivider.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <WaveDivider flip />
      <div className="container section">
        <div className="cols">
          <section aria-labelledby="locate">
            <h4 id="locate">Locate Us</h4>
            <p>Applaud 38, Mukadam Compound, New Link Road <br/>Goregaon, Mumbai Maharashtra 400063<br/>India</p>
          </section>
          <section aria-labelledby="reach">
            <h4 id="reach">Reach Us</h4>
            <p><a href="tel:+912233445566">+912235648539</a><br/><a href="mailto:info@ssasmarine.com">info@ssasmarine.com</a></p>
            <p className="muted">Mon–Fri, 09:00–18:00 IST</p>
          </section>
          <nav aria-labelledby="nav">
            <h4 id="nav">Navigation</h4>
            <p><a href="/">Home</a><br/><a href="/services">Services</a><br/><a href="/about">About</a><br/><a href="/contact">Contact</a></p>
          </nav>
        </div>
        <div className="bottom">
          © <span id="year">{new Date().getFullYear()}</span> SSAS Marine Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
