import React from 'react';

const TypingIndicator = () => {
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '16px 20px', background: 'rgba(138, 43, 226, 0.1)', border: '1px solid rgba(138, 43, 226, 0.2)', borderRadius: '24px', width: 'fit-content', borderBottomLeftRadius: '4px' }}>
      <div className="dot" style={{ width: '8px', height: '8px', background: 'var(--secondary-accent)', borderRadius: '50%' }}></div>
      <div className="dot" style={{ width: '8px', height: '8px', background: 'var(--tertiary-accent)', borderRadius: '50%', animationDelay: '0.2s' }}></div>
      <div className="dot" style={{ width: '8px', height: '8px', background: 'var(--primary-accent)', borderRadius: '50%', animationDelay: '0.4s' }}></div>
      <style>{`
        .dot { animation: bounce 1.4s infinite ease-in-out both; } 
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); opacity: 0.5; } 40% { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};
export default TypingIndicator;
