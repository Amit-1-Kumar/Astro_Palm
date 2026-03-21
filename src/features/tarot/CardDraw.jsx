import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTarotDraw } from '@/hooks/useTarotDraw';
import TopHeader from '@/components/layout/TopHeader';
import TarotCard from './TarotCard';
import NeonButton from '@/components/ui/NeonButton';

const CardDraw = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category || 'growth';
  const categoryTitle = location.state?.title || 'Tarot Guidance';
  
  const { drawnCards, isShuffling, shuffleAndDraw } = useTarotDraw();
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    // Allow animation to run before calculating text reading
    setTimeout(() => {
      navigate('/tarot/result', { state: { category, cards: drawnCards }, replace: true });
    }, 1200);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <TopHeader title={categoryTitle} />
      
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <p style={{ color: 'var(--text-accent)', marginBottom: '40px', textAlign: 'center', fontSize: '16px', minHeight: '48px', lineHeight: 1.5 }}>
          {drawnCards.length === 0 ? "Focus your energy on your question. The deck awaits your touch." : 
           isShuffling ? "The cosmos is shifting timelines..." : 
           "Your celestial card has been pulled from the ether."}
        </p>

        <div style={{ 
          width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
          perspective: '1200px', position: 'relative', marginBottom: '40px'
        }}>
          {drawnCards.length === 0 ? (
            <div 
              className={isShuffling ? "animate-float" : ""}
              style={{ width: '220px', height: '350px', borderRadius: '16px', background: 'url(/assets/tarot-back.svg) center/cover', boxShadow: '0 0 30px rgba(138,43,226,0.3)', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => { if (!isShuffling) shuffleAndDraw(1); }}
            />
          ) : (
            <TarotCard card={drawnCards[0]} isRevealed={revealed} onClick={handleReveal} />
          )}
        </div>

        <div style={{ width: '100%', maxWidth: '280px' }}>
          {drawnCards.length === 0 ? (
            <NeonButton variant="primary" onClick={() => shuffleAndDraw(1)} disabled={isShuffling}>
              {isShuffling ? "Shuffling..." : "Draw a Card"}
            </NeonButton>
          ) : !revealed ? (
            <div className="animate-fade-in">
              <NeonButton variant="primary" onClick={handleReveal}>
                Reveal Insight
              </NeonButton>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: 'var(--secondary-accent)', animation: 'pulse 1.5s infinite opacity', marginTop: '16px' }}>
              Divining the cosmos...
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
export default CardDraw;
