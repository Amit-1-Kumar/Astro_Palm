import React, { useContext } from 'react';
import { NavigationContext } from '@/context/NavigationContext';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';
import { useTranslation } from '@/hooks/useTranslation';

const ExitDialog = () => {
  const { showExitDialog, setShowExitDialog } = useContext(NavigationContext);
  const { t } = useTranslation();

  if (!showExitDialog) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(240, 244, 248, 0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: '24px'
    }}>
      <GlassCard className="animate-fade-in" style={{ width: '100%', maxWidth: '340px', textAlign: 'center', padding: '32px 24px' }}>
        <h3 style={{ marginBottom: '16px', color: 'var(--text-accent)', fontSize: '24px' }}>{t('exitAppTitle') || "Leave the Cosmos?"}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '16px', lineHeight: 1.5 }}>
          {t('exitAppDesc') || "Are you sure you want to end your journey today?"}
        </p>
        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <NeonButton variant="primary" onClick={() => setShowExitDialog(false)}>
            {t('stay') || "Stay on Path"}
          </NeonButton>
          <NeonButton variant="secondary" onClick={() => window.close() || window.history.go(-1)}> 
            {t('exit') || "Exit App"}
          </NeonButton>
        </div>
      </GlassCard>
    </div>
  );
};
export default ExitDialog;
