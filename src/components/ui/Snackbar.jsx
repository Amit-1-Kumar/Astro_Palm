import React, { useEffect, useState, useContext } from 'react';
import { NavigationContext } from '@/context/NavigationContext';

const Snackbar = () => {
  const { lastBackPress } = useContext(NavigationContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (lastBackPress > 0) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [lastBackPress]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)',
      background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)',
      border: '1px solid rgba(138, 43, 226, 0.5)', borderRadius: '24px',
      padding: '12px 24px', color: 'var(--text-main)', fontSize: '14px', zIndex: 1000,
      fontFamily: 'Inter', pointerEvents: 'none',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      Press back again to exit
    </div>
  );
};
export default Snackbar;
