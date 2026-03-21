import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from '@/components/layout/TopHeader';
import GlassCard from '@/components/ui/GlassCard';
import { Heart, Briefcase, Coins, Sparkles } from 'lucide-react';

const TarotCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 'love', title: 'Love & Relationships', icon: <Heart size={32} color="#FF6B6B" />, color: 'rgba(255, 107, 107, 0.12)', desc: 'Seek clarity in matters of the heart and emotional bonds.' },
    { id: 'career', title: 'Career & Ambition', icon: <Briefcase size={32} color="var(--secondary-accent)" />, color: 'rgba(64, 224, 208, 0.12)', desc: 'Uncover the path to professional fulfillment and purpose.' },
    { id: 'finance', title: 'Wealth & Finance', icon: <Coins size={32} color="#FFD700" />, color: 'rgba(255, 215, 0, 0.12)', desc: 'Understand your material flow and energetic prosperity.' },
    { id: 'growth', title: 'Personal Growth', icon: <Sparkles size={32} color="var(--tertiary-accent)" />, color: 'rgba(238, 130, 238, 0.12)', desc: 'Connect with your shadow work and higher self.' }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title="Tarot Paths" />
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1, paddingBottom: '90px' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px', textAlign: 'center', fontSize: '15px', lineHeight: 1.6 }}>
          Select the facet of your life that seeks illumination. The oracle will draw energies surrounding this aspect.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {categories.map(cat => (
            <GlassCard key={cat.id} onClick={() => navigate('/tarot/draw', { state: { category: cat.id, title: cat.title } })} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', background: cat.color }}>
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.04)', borderRadius: '20px' }}>
                {cat.icon}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--text-main)', fontFamily: 'Outfit' }}>{cat.title}</h3>
                <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cat.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TarotCategories;
