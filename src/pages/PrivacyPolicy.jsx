import React from 'react';
import TopHeader from '@/components/layout/TopHeader';
import GlassCard from '@/components/ui/GlassCard';

const PrivacyPolicy = () => {
  return (
    <>
      <TopHeader title="Privacy Policy" />
      <div className="animate-fade-in" style={{ padding: '24px', lineHeight: 1.6 }}>
        <GlassCard style={{ padding: '24px' }}>
          <h3 style={{ color: 'var(--secondary-accent)', marginBottom: '12px', fontFamily: 'Outfit' }}>Data Collection</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '14px' }}>
            We only collect basic profile information (name, dob, gender) which is stored STRICTLY ON YOUR DEVICE. We do not maintain any centralized user databases.
          </p>
          
          <h3 style={{ color: 'var(--tertiary-accent)', marginBottom: '12px', fontFamily: 'Outfit' }}>Palm Image Processing</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '14px' }}>
            Images captured for palm reading are sent temporarily to our AI provider (OpenRouter/Molmo) for purely visual analysis and are NEVER stored upon completion of the reading. We do not use your scans for training.
          </p>

          <h3 style={{ color: 'var(--primary-accent)', marginBottom: '12px', fontFamily: 'Outfit' }}>Diagnostics & Analytics</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            We use zero trackers, zero cookies, and zero third-party behavior analytics. Your spiritual journey remains strictly private to you.
          </p>
        </GlassCard>
      </div>
    </>
  );
};
export default PrivacyPolicy;
