import React, { createContext, useState } from 'react';

// Centralised state for the "Double Back to Exit" requirement
export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [lastBackPress, setLastBackPress] = useState(0);
  
  return (
    <NavigationContext.Provider value={{ showExitDialog, setShowExitDialog, lastBackPress, setLastBackPress }}>
      {children}
    </NavigationContext.Provider>
  );
};
