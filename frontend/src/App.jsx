import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import AppRoutes from './routes.jsx';
import { useLocation } from 'react-router-dom';

/** Route meta for titles/descriptions */
const routeMeta = {
  '/': {
    title: 'SSAS Marine Services | Marine & Tanker Consultancy',
    desc: 'Trusted marine and tanker consultancy & surveying firm delivering accurate, reliable results for oil majors, charterers, shipowners, and more.'
  },
  '/services': {
    title: 'Services | SSAS Marine Services',
    desc: 'Comprehensive tanker vetting, surveys, risk management, audits, underwater surveys, and more by seasoned marine professionals.'
  },
  '/about': {
    title: 'About Us | SSAS Marine Services',
    desc: 'Our story, capabilities, technology focus, reliability and sustainability commitments in marine surveying and consultancy.'
  },
  '/contact': {
    title: 'Get a Quote | SSAS Marine Services',
    desc: 'Request a tailored survey or consultancy quote. Talk to a surveyor and we will get back to you promptly.'
  }
};

export default function App() {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const { pathname, hash } = location;
    const meta = routeMeta[pathname] || routeMeta['/'];
    document.title = meta.title;
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', 'description');
      document.head.appendChild(el);
    }
    el.setAttribute('content', meta.desc);

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <AppRoutes />
      </main>
      <Footer />
      {showTop && <BackToTop />}
    </>
  );
}
