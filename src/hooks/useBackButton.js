import { useEffect, useContext, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationContext } from '@/context/NavigationContext';

export const useBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navContext = useContext(NavigationContext);

  const handlePopState = useCallback((e) => {
    if (!navContext) return;
    const { setShowExitDialog, lastBackPress, setLastBackPress } = navContext;

    if (location.pathname === '/home') {
      e.preventDefault();
      const now = Date.now();
      if (now - lastBackPress < 2000) {
        window.history.back(); // Execute real exit if pressed twice in 2s
      } else {
        setLastBackPress(now);
        setShowExitDialog(true);
        // Push state again so back action doesn't actually close app
        window.history.pushState(null, '', window.location.href);
      }
    } else {
      navigate(-1);
    }
  }, [location.pathname, navigate, navContext]);

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [handlePopState]);
};
