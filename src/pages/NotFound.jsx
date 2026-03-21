import React from 'react';
import { useNavigate } from 'react-router-dom';
import NeonButton from '@/components/ui/NeonButton';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center', background: 'radial-gradient(circle at center, #E2E8F0 0%, var(--bg-dark) 100%)' }}>
      <h1 className="animate-float" style={{ fontSize: '100px', margin: 0, color: 'transparent', WebkitTextStroke: '2px var(--primary-accent)', fontFamily: 'Outfit', lineHeight: 1 }}>404</h1>
      <h2 style={{ color: 'var(--text-accent)', marginBottom: '16px', fontSize: '24px', marginTop: '16px' }}>Lost in the void</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '16px' }}>This path is not actively written in the stars.</p>
      <div style={{ width: '100%', maxWidth: '240px' }}>
        <NeonButton onClick={() => navigate('/home')} variant="primary">
          Return to Center
        </NeonButton>
      </div>
    </div>
  );
};
export default NotFound;
