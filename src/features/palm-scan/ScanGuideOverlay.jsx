import React from 'react';

const ScanGuideOverlay = ({ hand = 'right' }) => {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 10
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      
      <svg width="100%" height="100%" style={{ position: 'absolute' }}>
        <defs>
          <mask id="cutout">
            <rect width="100%" height="100%" fill="white" />
            <path 
              d={hand === 'left' ? "M 100 600 Q 150 300 130 180 A 30 30 0 0 1 180 160 Q 190 250 210 280 Q 230 150 230 120 A 30 30 0 0 1 280 120 Q 280 250 290 280 Q 320 150 330 130 A 30 30 0 0 1 380 140 Q 370 280 370 320 Q 420 280 440 300 A 30 30 0 0 1 420 350 Q 350 450 350 600 Z" : "M 300 600 Q 250 300 270 180 A 30 30 0 0 0 220 160 Q 210 250 190 280 Q 170 150 170 120 A 30 30 0 0 0 120 120 Q 120 250 110 280 Q 80 150 70 130 A 30 30 0 0 0 20 140 Q 30 280 30 320 Q -20 280 -40 300 A 30 30 0 0 0 -20 350 Q 50 450 50 600 Z"} 
              fill="black" 
              transform="translate(calc(50vw - 200px), calc(50vh - 300px)) scale(0.9)"
            />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="rgba(240, 244, 248, 0.7)" mask="url(#cutout)" />
        
        <path 
          d={hand === 'left' ? "M 100 600 Q 150 300 130 180 A 30 30 0 0 1 180 160 Q 190 250 210 280 Q 230 150 230 120 A 30 30 0 0 1 280 120 Q 280 250 290 280 Q 320 150 330 130 A 30 30 0 0 1 380 140 Q 370 280 370 320 Q 420 280 440 300 A 30 30 0 0 1 420 350 Q 350 450 350 600 Z" : "M 300 600 Q 250 300 270 180 A 30 30 0 0 0 220 160 Q 210 250 190 280 Q 170 150 170 120 A 30 30 0 0 0 120 120 Q 120 250 110 280 Q 80 150 70 130 A 30 30 0 0 0 20 140 Q 30 280 30 320 Q -20 280 -40 300 A 30 30 0 0 0 -20 350 Q 50 450 50 600 Z"} 
          fill="none" stroke="var(--secondary-accent)" strokeWidth="3" strokeDasharray="10 15"
          className="animate-pulse-border"
          transform="translate(calc(50vw - 200px), calc(50vh - 300px)) scale(0.9)"
        />
      </svg>
      <div style={{ position: 'absolute', top: '20%', textAlign: 'center', width: '100%' }}>
        <p style={{ color: 'var(--text-accent)', fontSize: '18px', fontWeight: '500', textShadow: '0 2px 4px rgba(0,0,0,0.8)', fontFamily: 'Outfit' }}>Align your {hand} hand</p>
      </div>
    </div>
  );
};
export default ScanGuideOverlay;
