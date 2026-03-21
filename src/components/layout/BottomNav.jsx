import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Sparkles, Moon, Settings as SettingsIcon } from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, path: '/home', label: 'Home' },
    { id: 'tarot', icon: Sparkles, path: '/tarot', label: 'Tarot' },
    { id: 'daily', icon: Moon, path: '/daily', label: 'Daily' },
    { id: 'settings', icon: SettingsIcon, path: '/settings', label: 'Settings' }
  ];

  // Hidden on splash, language, onboarding, and setup
  const hiddenPaths = ['/', '/language', '/onboarding', '/setup'];
  if (hiddenPaths.includes(location.pathname)) return null;
  // Also hide inside nested full-screen flows like camera
  if (location.pathname.includes('/palm/scan')) return null;

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: 'rgba(240, 244, 248, 0.95)', backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(0,0,0,0.04)',
      paddingBottom: 'max(env(safe-area-inset-bottom), 8px)',
      paddingTop: '12px',
      zIndex: 50,
      boxShadow: '0 -4px 30px rgba(0,0,0,0.4)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {navItems.map(item => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              style={{
                background: 'none', border: 'none', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '6px', cursor: 'pointer',
                color: isActive ? 'var(--secondary-accent)' : '#718096',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ 
                padding: '8px', 
                borderRadius: '16px', 
                background: isActive ? 'rgba(64, 224, 208, 0.15)' : 'transparent',
                transition: 'all 0.3s'
              }}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} style={{ filter: isActive ? 'drop-shadow(0 0 8px rgba(64,224,208,0.6))' : 'none' }} />
              </div>
              <span style={{ fontSize: '11px', fontWeight: isActive ? '600' : '500' }}>{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  );
};
export default BottomNav;
