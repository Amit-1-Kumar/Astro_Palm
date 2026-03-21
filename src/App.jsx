import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import { NavigationProvider } from '@/context/NavigationContext';
import AppLayout from '@/components/layout/AppLayout';
import Router from './Router';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <NavigationProvider>
          <BrowserRouter>
            <AppLayout>
              <Router />
            </AppLayout>
          </BrowserRouter>
        </NavigationProvider>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
