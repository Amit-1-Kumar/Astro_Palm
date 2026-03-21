import React, { createContext, useState, useEffect } from 'react';
import { getProfile, getSettings, saveProfile, saveSettings } from '@/services/storageService';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [profile, setProfileState] = useState(getProfile());
  const [settings, setSettingsState] = useState(getSettings());

  const setProfile = (data) => {
    setProfileState(data);
    saveProfile(data);
  };

  const setSettings = (data) => {
    const newSettings = { ...settings, ...data };
    setSettingsState(newSettings);
    saveSettings(newSettings);
  };

  return (
    <AppContext.Provider value={{ profile, setProfile, settings, setSettings }}>
      {children}
    </AppContext.Provider>
  );
};
