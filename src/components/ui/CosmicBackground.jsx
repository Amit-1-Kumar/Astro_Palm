import React from 'react';

const CosmicBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Primary Violet Aura */}
      <div style={{
        position: 'absolute',
        top: '-15%', left: '-10%',
        width: '70vw', height: '70vw',
        background: 'radial-gradient(circle, rgba(107, 70, 193, 0.4) 0%, transparent 65%)',
        filter: 'blur(60px)',
        animation: 'floatOrb1 15s infinite ease-in-out alternate'
      }} />
      
      {/* Secondary Teal Aura */}
      <div style={{
        position: 'absolute',
        bottom: '-15%', right: '-10%',
        width: '80vw', height: '80vw',
        background: 'radial-gradient(circle, rgba(49, 151, 149, 0.4) 0%, transparent 65%)',
        filter: 'blur(80px)',
        animation: 'floatOrb2 20s infinite ease-in-out alternate-reverse'
      }} />
      
      {/* Tertiary Pink Aura */}
      <div style={{
        position: 'absolute',
        top: '25%', left: '25%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(213, 63, 140, 0.3) 0%, transparent 65%)',
        filter: 'blur(90px)',
        animation: 'floatOrb3 25s infinite linear'
      }} />
    </div>
  );
};

export default CosmicBackground;
