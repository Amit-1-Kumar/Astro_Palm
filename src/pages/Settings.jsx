import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { useTranslation } from '@/hooks/useTranslation';
import TopHeader from '@/components/layout/TopHeader';
import GlassCard from '@/components/ui/GlassCard';
import { shareGuidance } from '@/services/shareService';
import DisclaimerBanner from '@/components/ui/DisclaimerBanner';
import { Globe, Share2, Star, Shield, Trash2 } from 'lucide-react';

const Settings = () => {
  const { profile, settings, setSettings, setProfile } = useContext(AppContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleShare = async () => {
    await shareGuidance("AI Palm Reader", "Discover your cosmic path with personalized AI Tarot & Palmistry!", "https://lumina-palm.app");
  };

  const handleReset = () => {
    if (window.confirm("This will erase your cosmic profile permanently. Are you sure?")) {
      localStorage.clear();
      window.location.href = '/';
    }
  };

  return (
    <div style={{ paddingBottom: '24px' }}>
      <TopHeader title="Settings" showBack={false} />
      <div className="animate-fade-in" style={{ padding: '24px' }}>
        
        <GlassCard style={{ padding: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(45deg, rgba(138,43,226,0.3), rgba(64,224,208,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: '1px solid rgba(64,224,208,0.3)' }}>
              ✨
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '20px', color: 'var(--text-main)', fontFamily: 'Outfit' }}>{profile?.name || 'Seeker'}</h3>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--secondary-accent)' }}>Cosmic Traveler</p>
            </div>
          </div>
          <button onClick={() => navigate('/setup')} style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', color: 'var(--text-main)', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
            Edit Profile
          </button>
        </GlassCard>

        <h3 style={{ fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '12px', paddingLeft: '8px' }}>App Preferences</h3>
        
        <GlassCard style={{ padding: '0', overflow: 'hidden', marginBottom: '32px' }}>
          <div onClick={() => navigate('/language')} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderBottom: '1px solid rgba(0,0,0,0.04)', cursor: 'pointer' }}>
            <Globe size={22} color="var(--primary-accent)" />
            <span style={{ flex: 1, fontSize: '16px' }}>Language</span>
            <span style={{ color: 'var(--secondary-accent)', fontSize: '14px', fontWeight: '600' }}>{settings?.language?.toUpperCase() || 'EN'}</span>
          </div>
          <div onClick={handleShare} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderBottom: '1px solid rgba(0,0,0,0.04)', cursor: 'pointer' }}>
            <Share2 size={22} color="var(--tertiary-accent)" />
            <span style={{ flex: 1, fontSize: '16px' }}>Share App</span>
          </div>
          <div onClick={() => window.open('market://details?id=com.lumina.aipalm', '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderBottom: '1px solid rgba(0,0,0,0.04)', cursor: 'pointer' }}>
            <Star size={22} color="#FFD700" />
            <span style={{ flex: 1, fontSize: '16px' }}>Rate App</span>
          </div>
          <div onClick={() => navigate('/privacy')} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', cursor: 'pointer' }}>
            <Shield size={22} color="var(--secondary-accent)" />
            <span style={{ flex: 1, fontSize: '16px' }}>Privacy Policy</span>
          </div>
        </GlassCard>

        <DisclaimerBanner />

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <button onClick={handleReset} style={{ background: 'none', border: 'none', color: '#FF6B6B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto', padding: '16px', cursor: 'pointer', fontSize: '14px', borderRadius: '12px', width: '100%' }}>
            <Trash2 size={18} /> Erase Cosmic Journey
          </button>
        </div>

      </div>
    </div>
  );
};
export default Settings;
