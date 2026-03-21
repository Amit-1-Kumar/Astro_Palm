import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from '@/components/layout/TopHeader';
import GlassCard from '@/components/ui/GlassCard';
import { zodiacSigns } from '@/data/zodiacData';
import ZodiacIcon from './ZodiacIcon';

const ZodiacSelector = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title="Zodiac Horoscope" />
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, paddingBottom: '100px' }}>
        
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '32px', fontSize: '15px', lineHeight: 1.5 }}>
          Select your sun sign to reveal the celestial influences guiding your specific timeline today.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {zodiacSigns.map(sign => (
            <GlassCard 
              key={sign.id} 
              onClick={() => navigate('/horoscope/result', { state: { sign } })}
              style={{ padding: '20px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <ZodiacIcon symbol={sign.symbol} />
              <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-accent)', textAlign: 'center' }}>{sign.name}</span>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{sign.date}</span>
            </GlassCard>
          ))}
        </div>

      </div>
    </div>
  );
};
export default ZodiacSelector;
