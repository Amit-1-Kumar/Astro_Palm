import React from 'react';
import GlassCard from '@/components/ui/GlassCard';

const DailyEnergyCard = ({ title, content, icon, color }) => {
  return (
    <GlassCard style={{ padding: '24px', marginBottom: '20px', borderLeft: `4px solid ${color}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <div style={{ padding: '10px', background: `${color}20`, borderRadius: '12px' }}>
          {icon}
        </div>
        <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--text-main)', fontFamily: 'Outfit' }}>{title}</h3>
      </div>
      <p style={{ color: 'var(--text-accent)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
        {content}
      </p>
    </GlassCard>
  );
};
export default DailyEnergyCard;
