import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import { Hand, Sparkles, Heart, Sun, SearchCode } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const Home = () => {
  const { profile } = useContext(AppContext);
  const navigate = useNavigate();

  const features = [
    { id: 'palm', title: 'Palm Scan', icon: <Hand size={32} color="var(--secondary-accent)"/>, path: '/palm/select', color: 'rgba(64, 224, 208, 0.1)' },
    { id: 'tarot', title: 'Tarot Reading', icon: <Sparkles size={32} color="var(--tertiary-accent)"/>, path: '/tarot', color: 'rgba(238, 130, 238, 0.1)' },
    { id: 'love', title: 'Love Reading', icon: <Heart size={32} color="#FF6B6B"/>, path: '/love', color: 'rgba(255, 107, 107, 0.1)' },
    { id: 'horo', title: 'Horoscope', icon: <SearchCode size={32} color="var(--primary-accent)"/>, path: '/horoscope', color: 'rgba(138, 43, 226, 0.1)' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '24px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '32px', marginTop: '16px' }}>
        <h1 style={{ fontSize: '28px', margin: 0 }}>Welcome, <span style={{ color: 'var(--secondary-accent)' }}>{profile?.name || 'Seeker'}</span></h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>The universe is ready for you today.</p>
      </header>

      {/* Primary Focus: AI Palm Chat */}
      <GlassCard 
        onClick={() => navigate('/chat')} 
        style={{ padding: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '20px', background: 'linear-gradient(135deg, rgba(138,43,226,0.2), rgba(64,224,208,0.1))', border: '1px solid rgba(64,224,208,0.3)' }}
      >
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/palm-logo.svg" alt="AI Chat" style={{ width: '36px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: '20px', color: 'var(--text-main)', fontFamily: 'Outfit' }}>AI Guidance Chat</h2>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--text-accent)' }}>Ask the oracle anything...</p>
        </div>
      </GlassCard>

      {/* Daily Guidance Banner */}
      <div onClick={() => navigate('/daily')} style={{ marginBottom: '32px', padding: '16px 20px', background: 'rgba(0,0,0,0.04)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderLeft: '4px solid var(--tertiary-accent)' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--text-main)', fontFamily: 'Outfit' }}>Your Daily Energy</h3>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>Tap to reveal today's focus</p>
        </div>
        <Sun color="var(--tertiary-accent)" size={24} />
      </div>

      <h3 style={{ fontSize: '18px', marginBottom: '16px', fontFamily: 'Outfit', color: 'var(--text-accent)' }}>Cosmic Pathways</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {features.map(f => (
          <GlassCard key={f.id} onClick={() => navigate(f.path)} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', background: f.color }}>
            {f.icon}
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-main)' }}>{f.title}</span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
export default Home;
