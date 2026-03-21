import React from 'react';
import BottomNav from './BottomNav';
import Snackbar from '../ui/Snackbar';
import ExitDialog from '../ui/ExitDialog';
import { useBackButton } from '@/hooks/useBackButton';
import CosmicBackground from '../ui/CosmicBackground';

const AppLayout = ({ children }) => {
  // Initialize global hardware back listener
  useBackButton();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
      <CosmicBackground />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: '90px', position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <BottomNav />
      {/* Absolute Overlays */}
      <Snackbar />
      <ExitDialog />
    </div>
  );
};
export default AppLayout;
