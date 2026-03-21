import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Info } from 'lucide-react';

const DisclaimerBanner = () => {
  const { t } = useTranslation();
  return (
    <div style={{
      padding: '16px',
      background: 'rgba(138, 43, 226, 0.08)',
      borderLeft: '4px solid rgba(138, 43, 226, 0.8)',
      borderRadius: '12px',
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      margin: '24px 0',
      border: '1px solid rgba(138, 43, 226, 0.15)'
    }}>
      <Info size={20} color="var(--tertiary-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
        {t('disclaimer') || "For entertainment and spiritual reflection only. AI guidance should not replace professional medical, legal, or psychological advice. No guarantees of predictions."}
      </p>
    </div>
  );
};
export default DisclaimerBanner;
