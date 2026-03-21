import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '@/components/ui/NeonButton';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Discover Your Path",
      desc: "Unlock the ancient secrets written on your palm using modern AI vision.",
      icon: "✋"
    },
    {
      title: "Tarot Wisdom",
      desc: "Draw cards to find clarity in love, career, and personal growth.",
      icon: "✨"
    },
    {
      title: "Cosmic Connection",
      desc: "Receive daily guidance without fear, focused entirely on your spiritual alignment.",
      icon: "🌌"
    }
  ];

  const nextStep = () => {
    if (step < slides.length - 1) setStep(step + 1);
    else navigate('/setup');
  };

  return (
    <div className="animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '24px', justifyContent: 'center' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '40px', filter: 'drop-shadow(0 0 20px var(--primary-accent))' }}>
          {slides[step].icon}
        </div>
        <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '16px', minHeight: '36px', fontFamily: 'Outfit' }}>
          {slides[step].title}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6, maxWidth: '280px', minHeight: '80px' }}>
          {slides[step].desc}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: i === step ? '24px' : '8px', height: '8px', borderRadius: '4px',
            background: i === step ? 'var(--secondary-accent)' : 'rgba(0,0,0,0.16)',
            transition: 'all 0.3s ease'
          }} />
        ))}
      </div>

      <NeonButton onClick={nextStep} variant="primary">
        {step === slides.length - 1 ? "Begin Journey" : "Continue"}
      </NeonButton>
    </div>
  );
};
export default Onboarding;
