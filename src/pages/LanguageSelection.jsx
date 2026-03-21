import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import GlassCard from '@/components/ui/GlassCard';

const LanguageSelection = () => {
  const navigate = useNavigate();
  const { setSettings } = useContext(AppContext);

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'es', label: 'Spanish', native: 'Español' },
    { code: 'fr', label: 'French', native: 'Français' },
    { code: 'it', label: 'Italian', native: 'Italiano' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'ko', label: 'Korean', native: '한국어' }
  ];

  const handleSelect = (code) => {
    setSettings({ language: code });
    navigate('/onboarding');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '28px' }}>Choose Language</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px' }}>Your cosmic journey begins here</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {languages.map(lang => (
          <GlassCard key={lang.code} onClick={() => handleSelect(lang.code)} style={{ padding: '20px', textAlign: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--text-accent)' }}>{lang.native}</h3>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>{lang.label}</span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
export default LanguageSelection;
