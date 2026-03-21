import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // In a real app we'd check if profile exists, but routing to language first per requirements
      navigate('/language');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(circle at center, #EDF2F7 0%, var(--bg-dark) 100%)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div className="animate-float" style={{ zIndex: 10 }}>
        <img src="/assets/palm-logo.svg" alt="Cosmic Palm" style={{ width: '120px', height: '120px', filter: 'drop-shadow(0 0 20px rgba(64, 224, 208, 0.6))' }} />
      </div>
      <h1 className="animate-fade-in" style={{ 
        marginTop: '32px', fontSize: '32px', color: 'var(--text-main)', 
        textShadow: '0 0 10px rgba(138, 43, 226, 0.8)', zIndex: 10,
        fontFamily: 'Outfit', fontWeight: '700', letterSpacing: '2px'
      }}>
        LUMINA
      </h1>
      <p className="animate-fade-in" style={{
        marginTop: '8px', color: 'var(--secondary-accent)', fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', animationDelay: '0.3s', opacity: 0
      }}>
        Cosmic Guidance
      </p>
    </div>
  );
};
export default SplashScreen;
