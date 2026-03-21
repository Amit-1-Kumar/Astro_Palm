import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { getAITextGuidance } from '@/services/aiService';
import TopHeader from '@/components/layout/TopHeader';
import Spinner from '@/components/ui/Spinner';
import NeonButton from '@/components/ui/NeonButton';
import TarotCard from './TarotCard';

const TarotResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, settings } = useContext(AppContext);
  const [reading, setReading] = useState(null);
  const [loading, setLoading] = useState(true);

  const category = location.state?.category || 'general';
  const cards = location.state?.cards || [];
  const primaryCard = cards[0];

  useEffect(() => {
    if (!primaryCard) {
      navigate('/tarot');
      return;
    }

    const fetchReading = async () => {
      const prompt = `Seeker's Name: ${profile?.name || 'Unknown'}. 
      Reading Context: ${category}. 
      The Seeker has drawn the physical card: "${primaryCard.name}" (${primaryCard.arcana} Arcana). 
      Provide a deep, profoundly spiritual, and thoroughly structured tarot reading interpreting this card specifically for their context. No short answers. Output paragraphs clearly. Remember the strict rule: No absolute predictions.`;
      
      try {
        const text = await getAITextGuidance(prompt, settings.language || 'en');
        setReading(text);
      } catch (err) {
        setReading("The astral connection faded. The Oracle could not transmit the message. Return to the center and try drawing again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReading();
  }, [primaryCard, category, profile?.name, settings.language, navigate]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title="Tarot Insight" />
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center', marginBottom: '-20px' }}>
          {primaryCard && <TarotCard card={primaryCard} isRevealed={true} />}
        </div>

        {loading ? (
          <div style={{ marginTop: '20px', width: '100%' }}>
            <Spinner size={50} message="The Oracle translates the symbols..." />
          </div>
        ) : (
          <div className="animate-fade-in" style={{ width: '100%', background: 'rgba(255, 255, 255,0.6)', backdropFilter: 'blur(16px)', padding: '24px', borderRadius: '24px', borderTop: '2px solid rgba(64,224,208,0.4)', marginTop: '10px' }}>
            <h2 style={{ fontSize: '24px', fontFamily: 'Outfit', color: 'var(--secondary-accent)', marginBottom: '24px', textAlign: 'center' }}>
              Wisdom of the {primaryCard?.name}
            </h2>
            <div style={{ color: 'var(--text-accent)', fontSize: '15.5px', lineHeight: 1.8 }}>
              {reading?.split('\n').map((paragraph, i) => {
                if (!paragraph.trim()) return null;
                return <p key={i} style={{ marginBottom: '20px' }}>{paragraph}</p>
              })}
            </div>
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
              <NeonButton variant="primary" onClick={() => navigate('/home')} style={{ width: 'auto', minWidth: '200px' }}>
                Acknowledge
              </NeonButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TarotResult;
