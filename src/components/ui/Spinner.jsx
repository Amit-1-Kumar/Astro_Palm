import React from 'react';

const Spinner = ({ size = 48, message }) => {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
      <svg 
        className="animate-pulse-glow"
        width={size} 
        height={size} 
        viewBox="0 0 50 50" 
        style={{ animation: 'spin 2s linear infinite', borderRadius: '50%' }}
      >
        <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(138, 43, 226, 0.2)" strokeWidth="4" />
        <circle cx="25" cy="25" r="20" fill="none" stroke="url(#spinnerGrad)" strokeWidth="4" strokeDasharray="30 100" strokeLinecap="round" />
        <defs>
          <linearGradient id="spinnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--secondary-accent)"/>
            <stop offset="100%" stop-color="var(--primary-accent)"/>
          </linearGradient>
        </defs>
      </svg>
      {message && <p style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '15px', fontFamily: 'Outfit', animation: 'pulse 1.5s infinite opacity' }}>{message}</p>}
      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
export default Spinner;
