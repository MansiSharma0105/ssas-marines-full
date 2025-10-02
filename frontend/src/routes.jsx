import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
