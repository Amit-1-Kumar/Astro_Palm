import React from 'react';

const NeonButton = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
  const baseStyle = {
    padding: '16px 28px',
    borderRadius: '32px', // Very rounded as requested
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s ease',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  const variants = {
    primary: {
      background: 'linear-gradient(45deg, var(--primary-accent), var(--secondary-accent))',
      color: 'var(--text-main)',
      boxShadow: disabled ? 'none' : '0 4px 20px rgba(64, 224, 208, 0.3)'
    },
    secondary: {
      background: 'rgba(0,0,0,0.04)',
      color: 'var(--text-accent)',
      border: '1px solid rgba(0,0,0,0.12)'
    },
    danger: {
      background: 'rgba(255, 50, 50, 0.1)',
      color: '#FF6B6B',
      border: '1px solid rgba(255, 50, 50, 0.3)'
    }
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      style={{ ...baseStyle, ...variants[variant] }}
      className={`neon-btn ${className}`}
    >
      {children}
    </button>
  );
};
export default NeonButton;
