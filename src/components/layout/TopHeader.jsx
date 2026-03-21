import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const TopHeader = ({ title, showBack = true, rightAction }) => {
  const navigate = useNavigate();
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(240, 244, 248, 0.85)', backdropFilter: 'blur(16px)',
      padding: '16px', paddingTop: 'max(16px, env(safe-area-inset-top))',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: '1px solid rgba(0,0,0,0.04)'
    }}>
      <div style={{ width: '48px' }}>
        {showBack && (
          <button onClick={() => navigate(-1)} style={{ 
            background: 'rgba(0,0,0,0.04)', border: 'none', 
            borderRadius: '50%', width: '40px', height: '40px',
            color: 'var(--text-accent)', cursor: 'pointer', display: 'flex', 
            alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s'
          }}>
            <ChevronLeft size={24} />
          </button>
        )}
      </div>
      <h2 style={{ fontSize: '18px', color: 'var(--text-main)', margin: 0, flex: 1, textAlign: 'center', fontFamily: 'Outfit', letterSpacing: '0.5px' }}>{title}</h2>
      <div style={{ width: '48px', display: 'flex', justifyContent: 'flex-end' }}>
        {rightAction}
      </div>
    </header>
  );
};
export default TopHeader;
