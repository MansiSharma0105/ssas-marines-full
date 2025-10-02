import React from 'react';

export default function BackToTop() {
  return (
    <button
      className="backtotop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
    >
      ↑
    </button>
  );
}
