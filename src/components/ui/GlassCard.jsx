import React from 'react';

const GlassCard = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-panel ${onClick ? 'glass-panel-hover' : ''} ${className}`}
      style={{ padding: '24px', cursor: onClick ? 'pointer' : 'default', transition: 'all 0.3s ease' }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
