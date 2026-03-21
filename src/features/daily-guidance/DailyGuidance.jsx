import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { getAITextGuidance } from '@/services/aiService';
import { shareGuidance } from '@/services/shareService';
import TopHeader from '@/components/layout/TopHeader';
import Spinner from '@/components/ui/Spinner';
import NeonButton from '@/components/ui/NeonButton';
import DailyEnergyCard from './DailyEnergyCard';
import { Sun, Moon, Sparkles, AlertCircle, Share2, Star } from 'lucide-react';

const DailyGuidance = () => {
  const { profile, settings } = useContext(AppContext);
  const [guidance, setGuidance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDaily = async () => {
      const todayStr = new Date().toDateString();
      const prompt = `Seeker's Name: ${profile?.name || 'Seeker'}. Date: ${todayStr}.
      Provide a highly precise Daily Spiritual Guidance consisting of EXACTLY these 4 sections, separated exclusively by "---".
      1. Today's Energy (General aura)
      2. Emotional Focus (What to feel)
      3. Embrace / Avoid (Specific distinct actions)
      4. Lucky Element (A color, crystal, or symbol)
      Format output purely as:
      [Text]
      ---
      [Text]
      ---
      [Text]
      ---
      [Text]
      Do not include numbers 1. 2. 3. 4. in the final text strings. Keep the tone completely nurturing and spiritual.`;

      try {
        const text = await getAITextGuidance(prompt, settings.language || 'en');
        const sections = text.split('---').map(s => s.replace(/^\d+\.\s*/, '').trim());
        setGuidance({
          energy: sections[0] || "The energy is flowing calmly. Align with the present moment.",
          focus: sections[1] || "Focus on deep inner peace and emotional balance today.",
          embrace: sections[2] || "Embrace stillness and mindful breathing. Avoid rushing into chaos.",
          element: sections[3] || "Amethyst or calm Indigo shades."
        });
      } catch (err) {
        setError("The daily cosmic currents are currently unreadable due to heavy solar flares (connection issue).");
      } finally {
        setLoading(false);
      }
    };

    fetchDaily();
  }, [profile?.name, settings.language]);

  const handleShare = () => {
    if (!guidance) return;
    const text = `Today's Energy: ${guidance.energy}\n\nDiscover your full daily guidance on Lumina: AI Palm Reader.`;
    shareGuidance("My Cosmic Daily Guidance", text);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader 
        title="Daily Cosmic Guidance"
        rightAction={<button onClick={handleShare} style={{ background: 'none', border: 'none', color: 'var(--secondary-accent)', cursor: 'pointer' }}><Share2 size={22}/></button>}
      />
      
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, paddingBottom: '100px' }}>
        
        {loading ? (
          <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
            <Spinner size={64} message="Reading the planetary alignments for today..." />
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
             <AlertCircle size={48} color="#FF6B6B" style={{ marginBottom: '16px' }} />
             <p style={{ color: 'var(--text-muted)' }}>{error}</p>
          </div>
        ) : (
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '26px', fontFamily: 'Outfit', color: 'var(--text-main)', marginBottom: '8px' }}>
              Blessings, <span style={{ color: 'var(--secondary-accent)' }}>{profile?.name || 'Seeker'}</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>

            <DailyEnergyCard 
              title="Today's Energy" 
              content={guidance.energy} 
              icon={<Sun color="#FFD700" size={24} />} 
              color="#FFD700" 
            />
            <DailyEnergyCard 
              title="Emotional Focus" 
              content={guidance.focus} 
              icon={<Moon color="var(--secondary-accent)" size={24} />} 
              color="var(--secondary-accent)" 
            />
            <DailyEnergyCard 
              title="Embrace & Avoid" 
              content={guidance.embrace} 
              icon={<Sparkles color="var(--tertiary-accent)" size={24} />} 
              color="var(--tertiary-accent)" 
            />
            <DailyEnergyCard 
              title="Lucky Element" 
              content={guidance.element} 
              icon={<Star color="var(--primary-accent)" size={24} />} 
              color="var(--primary-accent)" 
            />

            <div style={{ marginTop: '48px' }}>
              <NeonButton variant="secondary" onClick={handleShare}>
                <Share2 size={18} /> Share Today's Light
              </NeonButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DailyGuidance;
