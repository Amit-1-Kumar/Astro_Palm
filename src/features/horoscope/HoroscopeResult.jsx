import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { getAITextGuidance } from '@/services/aiService';
import TopHeader from '@/components/layout/TopHeader';
import Spinner from '@/components/ui/Spinner';
import ZodiacIcon from './ZodiacIcon';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import { AlertCircle } from 'lucide-react';

const HoroscopeResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, settings } = useContext(AppContext);
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sign = location.state?.sign;

  useEffect(() => {
    if (!sign) {
      navigate('/horoscope');
      return;
    }

    const fetchHoroscope = async () => {
      const todayStr = new Date().toDateString();
      const prompt = `Seeker: ${profile?.name || 'Seeker'}. Date: ${todayStr}. Zodiac Sign: ${sign.name}.
      Provide a highly precise daily Horoscope with exactly these 4 sections separated by "---":
      1. General Mood
      2. Love & Relationships
      3. Career & Creativity
      4. Cosmic Advice
      Do not output section numbers from the final text blocks. Ensure the output strictly applies to the archetypal energy of ${sign.name}. NO FEAR DRIVEN OR ABSOLUTE PREDICTIONS. Keep it deeply spiritual.`;

      try {
        const text = await getAITextGuidance(prompt, settings.language || 'en');
        const sections = text.split('---').map(s => s.replace(/^\d+\.\s*/, '').trim());
        setHoroscope({
          mood: sections[0] || "The celestial layout suggests profound peace.",
          love: sections[1] || "The stars point to warm connections.",
          career: sections[2] || "Creative energies are highly potent today.",
          advice: sections[3] || "Surrender to the cosmic currents."
        });
      } catch (err) {
        setError("The alignment is currently blocking oracle transmissions.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [sign, profile?.name, settings.language, navigate]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title={`${sign?.name} Horoscope`} />
      
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, paddingBottom: '90px' }}>
        
        {loading ? (
          <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
            <Spinner size={64} message={`Tracking planetary paths for ${sign?.name}...`} />
          </div>
        ) : error ? (
           <div style={{ textAlign: 'center', marginTop: '60px' }}>
             <AlertCircle size={48} color="#FF6B6B" style={{ marginBottom: '16px' }} />
             <p style={{ color: 'var(--text-muted)' }}>{error}</p>
          </div>
        ) : horoscope && (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
              <ZodiacIcon symbol={sign?.symbol} />
              <h2 style={{ fontSize: '26px', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '4px 0 0' }}>{sign?.name}</h2>
              <p style={{ color: 'var(--secondary-accent)', fontSize: '14px', letterSpacing: '1px' }}>{new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>

            <GlassCard style={{ padding: '24px', marginBottom: '16px', borderLeft: '4px solid var(--primary-accent)' }}>
              <h3 style={{ color: 'var(--primary-accent)', fontSize: '15px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Outfit' }}>General Mood</h3>
              <p style={{ color: 'var(--text-accent)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{horoscope.mood}</p>
            </GlassCard>

            <GlassCard style={{ padding: '24px', marginBottom: '16px', borderLeft: '4px solid #FF6B6B' }}>
              <h3 style={{ color: '#FF6B6B', fontSize: '15px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Outfit' }}>Love & Connections</h3>
              <p style={{ color: 'var(--text-accent)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{horoscope.love}</p>
            </GlassCard>

            <GlassCard style={{ padding: '24px', marginBottom: '16px', borderLeft: '4px solid var(--secondary-accent)' }}>
              <h3 style={{ color: 'var(--secondary-accent)', fontSize: '15px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Outfit' }}>Career & Creativity</h3>
              <p style={{ color: 'var(--text-accent)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{horoscope.career}</p>
            </GlassCard>

            <GlassCard style={{ padding: '24px', marginBottom: '40px', borderLeft: '4px solid var(--tertiary-accent)' }}>
              <h3 style={{ color: 'var(--tertiary-accent)', fontSize: '15px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Outfit' }}>Cosmic Advice</h3>
              <p style={{ color: 'var(--text-accent)', fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>"{horoscope.advice}"</p>
            </GlassCard>

            <NeonButton onClick={() => navigate('/home')} variant="primary">Acknowledge Fate</NeonButton>
          </div>
        )}

      </div>
    </div>
  );
};
export default HoroscopeResult;
