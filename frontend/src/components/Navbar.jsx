import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className="navbar" role="banner">
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label="SSAS Marine Services Home">
          <img src="/assets/logo-ssas.png" alt="SSAS Marine logo" loading="eager" decoding="async" />
          <span>SSAS Marine</span>
        </Link>

      

        <nav id="primary-navigation" aria-label="Primary" style={{ display: open ? 'block' : undefined }}>
          <div className="nav-links" role="menubar">
            <NavLink to="/" end role="menuitem" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
            <NavLink to="/services" role="menuitem" className={({ isActive }) => isActive ? 'active' : undefined}>Services</NavLink>
            <NavLink to="/about" role="menuitem" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
            <NavLink to="/contact" role="menuitem" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
            <a href="/contact#form" className="btn primary" role="menuitem">Get Quote</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
