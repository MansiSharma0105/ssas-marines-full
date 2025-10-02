import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonial({ quote, author, role }) {
  return (
    <motion.figure
      className="card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-label={`Testimonial by ${author}`}
    >
      <blockquote style={{ margin: 0, fontStyle: 'italic' }}>“{quote}”</blockquote>
      <figcaption style={{ marginTop: 10, fontWeight: 700 }}>{author}</figcaption>
      <div className="muted" aria-hidden="true">{role}</div>
    </motion.figure>
  );
}
