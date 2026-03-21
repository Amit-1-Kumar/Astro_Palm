import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from '@/components/layout/TopHeader';
import GlassCard from '@/components/ui/GlassCard';

const HandSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (hand) => {
    // Pass the selected hand as state to the scanner
    navigate('/palm/scan', { state: { hand } });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title="Palm Selection" />
      <div className="animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        
        <h2 style={{ textAlign: 'center', marginBottom: '16px', fontFamily: 'Outfit', fontSize: '26px' }}>Which path shall we read?</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px', fontSize: '16px', lineHeight: 1.6 }}>
          Your <strong style={{ color: 'var(--secondary-accent)' }}>left hand</strong> shows the traits you were born with, while the <strong style={{ color: 'var(--tertiary-accent)' }}>right hand</strong> reveals your conscious path and choices.
        </p>

        <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
          <GlassCard onClick={() => handleSelect('left')} style={{ flex: 1, padding: '32px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', background: 'rgba(64, 224, 208, 0.08)', border: '1px solid rgba(64,224,208,0.2)' }}>
            <span style={{ fontSize: '56px', filter: 'drop-shadow(0 0 10px rgba(64,224,208,0.5))' }}>✋</span>
            <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '16px' }}>Left Hand</span>
          </GlassCard>
          
          <GlassCard onClick={() => handleSelect('right')} style={{ flex: 1, padding: '32px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', background: 'rgba(238, 130, 238, 0.08)', border: '1px solid rgba(238,130,238,0.2)' }}>
            <span style={{ fontSize: '56px', transform: 'scaleX(-1)', filter: 'drop-shadow(0 0 10px rgba(238,130,238,0.5))' }}>✋</span>
            <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '16px' }}>Right Hand</span>
          </GlassCard>
        </div>

        <div style={{ marginTop: '48px', padding: '20px', background: 'rgba(0,0,0,0.02)', borderRadius: '20px', borderLeft: '4px solid var(--primary-accent)' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
            Ensure you have good natural lighting before proceeding. The AI oracle requires a clear view of your planetary lines.
          </p>
        </div>

      </div>
    </div>
  );
};
export default HandSelection;
