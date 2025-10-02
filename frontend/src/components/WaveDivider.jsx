import React from 'react';

export default function WaveDivider({ flip = false }) {
  return (
    <svg
      className={`wave ${flip ? 'flip' : ''}`}
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0,64 C180,100 360,100 540,76 C720,52 900,0 1080,8 C1260,16 1350,54 1440,72 L1440,120 L0,120 Z"
        fill="#eef4ff"
      />
    </svg>
  );
}
