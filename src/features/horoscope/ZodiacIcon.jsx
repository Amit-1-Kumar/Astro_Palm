import React from 'react';

const ZodiacIcon = ({ symbol }) => {
  return (
    <div style={{ 
      width: '52px', height: '52px', borderRadius: '50%', 
      background: 'linear-gradient(135deg, rgba(138,43,226,0.3), rgba(64,224,208,0.15))', 
      border: '1px solid rgba(138, 43, 226, 0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '28px', color: 'var(--secondary-accent)',
      boxShadow: '0 0 20px rgba(138, 43, 226, 0.25)',
      marginBottom: '8px'
    }}>
      <span className="animate-pulse">{symbol}</span>
    </div>
  );
};
export default ZodiacIcon;
