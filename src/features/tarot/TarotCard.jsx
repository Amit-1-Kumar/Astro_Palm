import React from 'react';

const TarotCard = ({ card, isRevealed, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`perspective-1000 ${!isRevealed ? 'animate-pulse-border' : ''}`}
      style={{ width: '220px', height: '350px', cursor: onClick ? 'pointer' : 'default', borderRadius: '16px' }}
    >
      <div 
        className="transform-style-3d"
        style={{
          width: '100%', height: '100%', position: 'relative',
          transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Card Backing */}
        <div 
          className="backface-hidden"
          style={{ position: 'absolute', width: '100%', height: '100%', background: 'url(/assets/tarot-back.svg) center/cover', borderRadius: '16px', border: '2px solid rgba(138, 43, 226, 0.5)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
        />
        
        {/* Card Front face */}
        <div 
          className="backface-hidden rotate-y-180"
          style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(135deg, #E2E8F0, var(--bg-dark))', borderRadius: '16px', border: '2px solid var(--secondary-accent)', boxShadow: '0 0 40px rgba(64,224,208,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '24px' }}
        >
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--tertiary-accent)', letterSpacing: '3px' }}>{card.arcana} Arcana</div>
          
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div className="animate-float" style={{ fontSize: '64px', filter: 'drop-shadow(0 0 15px rgba(64,224,208,0.8))' }}>✨</div>
          </div>

          <div style={{ textAlign: 'center', width: '100%' }}>
            <h3 style={{ margin: 0, color: 'var(--text-main)', fontFamily: 'Outfit', fontSize: '20px', lineHeight: 1.3 }}>{card.name}</h3>
            <div style={{ width: '50px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary-accent), transparent)', margin: '16px auto 0' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TarotCard;
