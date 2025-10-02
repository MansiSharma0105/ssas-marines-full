import React from 'react';

function Icon({ name, title }) {
  const common = { width: 28, height: 28, role: 'img', 'aria-label': title };
  switch (name) {
    case 'shield':
      return (
        <svg {...common} viewBox="0 0 24 24"><title>{title}</title>
          <path fill="currentColor" d="M12 2l7 3v6c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V5l7-3z" />
          <path fill="#ffffff" opacity=".15" d="M12 4l5 2v5c0 3.9-2.5 7.5-5 8.6C9.5 18.5 7 14.9 7 11V6l5-2z" />
        </svg>
      );
    case 'compass':
      return (
        <svg {...common} viewBox="0 0 24 24"><title>{title}</title>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M14 10l-2 6-2-2 4-4z" fill="currentColor"/>
        </svg>
      );
    case 'checklist':
      return (
        <svg {...common} viewBox="0 0 24 24"><title>{title}</title>
          <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      );
    case 'sonar':
      return (
        <svg {...common} viewBox="0 0 24 24"><title>{title}</title>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M12 5a7 7 0 110 14" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 8a4 4 0 110 8" stroke="currentColor" strokeWidth="2" fill="none" opacity=".6"/>
        </svg>
      );
    default:
      return (
        <svg {...common} viewBox="0 0 24 24"><title>{title}</title>
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

export default function ServiceCard({ icon, title, summary, blurbs = [] }) {
  return (
    <article className="card service-card" tabIndex="0" aria-labelledby={title.replace(/\s+/g,'-').toLowerCase()}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--brand-700)' }}>
        <Icon name={icon} title={title + ' icon'} />
        <h3 id={title.replace(/\s+/g,'-').toLowerCase()} style={{ margin: 0, fontSize: 'var(--h3)' }}>{title}</h3>
      </div>
      <p className="muted" style={{ marginTop: 8 }}>{summary}</p>
      {blurbs.length > 0 && (
        <ul style={{ margin: '8px 0 0 18px' }}>
          {blurbs.map((b,i)=><li key={i}>{b}</li>)}
        </ul>
      )}
    </article>
  );
}
