import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { useTarotDraw } from '@/hooks/useTarotDraw';
import TopHeader from '@/components/layout/TopHeader';
import TarotCard from '@/features/tarot/TarotCard';
import NeonButton from '@/components/ui/NeonButton';
import { Heart } from 'lucide-react';

const LoveReading = () => {
  const navigate = useNavigate();
  const { profile } = useContext(AppContext);
  const { drawnCards, isShuffling, shuffleAndDraw } = useTarotDraw();
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => {
      navigate('/tarot/result', { state: { category: 'Love, Soulmates & Twin Flames', cards: drawnCards }, replace: true });
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title="Path of the Heart" />
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div className="animate-float" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 107, 107, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 0 40px rgba(255, 107, 107, 0.3)' }}>
          <Heart size={40} color="#FF6B6B" />
        </div>

        <h2 style={{ fontSize: '26px', fontFamily: 'Outfit', textAlign: 'center', marginBottom: '16px' }}>
          Soul Connection
        </h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '40px', fontSize: '15px', lineHeight: 1.6 }}>
          Focus deeply on your heart chakra. Draw a single card to reveal the romantic energies currently surrounding your true path, {profile?.name || 'Seeker'}.
        </p>

        <div style={{ 
          width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
          perspective: '1200px', position: 'relative', marginBottom: '48px'
        }}>
          {drawnCards.length === 0 ? (
            <div 
              className={isShuffling ? "animate-float" : "glass-panel"}
              style={{ width: '220px', height: '350px', borderRadius: '16px', background: 'url(/assets/tarot-back.svg) center/cover', boxShadow: '0 0 30px rgba(255,107,107,0.3)', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => { if (!isShuffling) shuffleAndDraw(1); }}
            />
          ) : (
            <TarotCard card={drawnCards[0]} isRevealed={revealed} onClick={handleReveal} />
          )}
        </div>

        <div style={{ width: '100%', maxWidth: '280px' }}>
          {drawnCards.length === 0 ? (
            <NeonButton variant="primary" onClick={() => shuffleAndDraw(1)} disabled={isShuffling} style={{ background: 'linear-gradient(45deg, #FF6B6B, var(--tertiary-accent))', boxShadow: '0 4px 20px rgba(255, 107, 107, 0.4)' }}>
              {isShuffling ? "Connecting..." : "Draw Love Card"}
            </NeonButton>
          ) : !revealed ? (
            <div className="animate-fade-in">
              <NeonButton variant="primary" onClick={handleReveal} style={{ background: 'linear-gradient(45deg, #FF6B6B, var(--tertiary-accent))', boxShadow: '0 4px 20px rgba(255, 107, 107, 0.4)' }}>
                Reveal Heart's Truth
              </NeonButton>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#FF6B6B', animation: 'pulse 1.5s infinite opacity', marginTop: '16px' }}>
              Reading the stars...
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
export default LoveReading;
