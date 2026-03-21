import React from 'react';
import GlassCard from '@/components/ui/GlassCard';

const LineAnalysisCard = ({ title, content, color, icon }) => {
  return (
    <GlassCard style={{ padding: '24px', marginBottom: '20px', borderTop: `4px solid ${color}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, transform: 'scale(3)' }}>
        {icon}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
        <div style={{ background: `${color}20`, padding: '12px', borderRadius: '16px', color: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>
        <h3 style={{ margin: 0, fontSize: '20px', color: 'var(--text-main)', fontFamily: 'Outfit' }}>{title}</h3>
      </div>
      <div style={{ color: 'var(--text-accent)', fontSize: '15px', lineHeight: 1.7, whiteSpace: 'pre-wrap', position: 'relative', zIndex: 2, opacity: 0.9 }}>
        {content || "The lines are currently veiled in stardust. The oracle sees no immediate message here."}
      </div>
    </GlassCard>
  );
};
export default LineAnalysisCard;
