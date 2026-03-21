import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { analyzePalmImage } from '@/services/aiService';
import TopHeader from '@/components/layout/TopHeader';
import LineAnalysisCard from './LineAnalysisCard';
import Spinner from '@/components/ui/Spinner';
import NeonButton from '@/components/ui/NeonButton';
import { Heart, Activity, SearchCode, Compass } from 'lucide-react';

const PalmResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { settings } = useContext(AppContext);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const image = location.state?.image;

  useEffect(() => {
    if (!image) {
      navigate('/palm/select');
      return;
    }

    const fetchAnalysis = async () => {
      try {
        const rawText = await analyzePalmImage(image, settings.language || 'en');
        setAnalysis(rawText);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [image, navigate, settings.language]);

  // Fallback resilient parser to guarantee structured lines as demanded by prompt
  const parseSection = (text, keywords) => {
    if (!text) return "";
    const lowerText = text.toLowerCase();
    let bestIndex = -1;
    let foundWord = "";
    
    for (const kw of keywords) {
      const idx = lowerText.indexOf(kw);
      if (idx !== -1 && (bestIndex === -1 || idx < bestIndex)) {
        bestIndex = idx;
        foundWord = kw;
      }
    }
    
    if (bestIndex === -1) return "Molmo 2 AI integrated visually, but this specific path remained hidden in the ether. Seek guidance directly via Chat.";
    
    const pEnd = text.indexOf('\n\n', bestIndex);
    const snippet = text.substring(bestIndex, pEnd !== -1 ? pEnd : text.length);
    // Remove the heading part e.g. "Heart Line: " 
    return snippet.replace(new RegExp(`^.*${foundWord}.*?:?\\s*`, 'i'), '').trim() || snippet;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title="Cosmic Reading" />
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, paddingBottom: '100px' }}>
        
        {loading && (
          <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
            <Spinner size={64} message="Unlocking the secrets of your palm through Molmo Vision..." />
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <h3 style={{ color: '#FF6B6B', fontSize: '24px', fontFamily: 'Outfit', marginBottom: '16px' }}>Vision Obscured</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>{error}</p>
            <NeonButton onClick={() => navigate(-1)}>Attempt Realignment</NeonButton>
          </div>
        )}

        {analysis && !loading && !error && (
          <div className="animate-fade-in">
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '32px', lineHeight: 1.6, textAlign: 'center', background: 'rgba(0,0,0,0.04)', padding: '16px', borderRadius: '16px' }}>
              The cosmic vision model has traced your astral pathways. Here is your spiritual reflection.
            </p>
            
            <LineAnalysisCard 
              title="Heart Line" 
              color="#FF6B6B" 
              icon={<Heart size={24}/>}
              content={parseSection(analysis, ['heart', 'corazón', 'coeur', 'cuore', '심장', 'हृदय'])}
            />
            <LineAnalysisCard 
              title="Head Line" 
              color="var(--secondary-accent)" 
              icon={<SearchCode size={24}/>}
              content={parseSection(analysis, ['head', 'cabeza', 'tête', 'testa', '머리', 'मस्तिष्क'])}
            />
            <LineAnalysisCard 
              title="Life Line" 
              color="var(--tertiary-accent)" 
              icon={<Activity size={24}/>}
              content={parseSection(analysis, ['life', 'vida', 'vie', 'vita', '생명', 'जीवन'])}
            />
            <LineAnalysisCard 
              title="Fate Line" 
              color="var(--primary-accent)" 
              icon={<Compass size={24}/>}
              content={parseSection(analysis, ['fate', 'destino', 'destin', '운명', 'भाग्य'])}
            />

            <div style={{ marginTop: '48px' }}>
              <NeonButton variant="primary" onClick={() => navigate('/home')}>Acknowledge Reading</NeonButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PalmResult;
