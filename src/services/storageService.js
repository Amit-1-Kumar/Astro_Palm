export const saveProfile = (data) => {
  localStorage.setItem('aipalm_profile', JSON.stringify(data));
};

export const getProfile = () => {
  const data = localStorage.getItem('aipalm_profile');
  return data ? JSON.parse(data) : null;
};

export const saveSettings = (data) => {
  localStorage.setItem('aipalm_settings', JSON.stringify(data));
};

export const getSettings = () => {
  const data = localStorage.getItem('aipalm_settings');
  return data ? JSON.parse(data) : { language: 'en', seenOnboarding: false };
};

export const saveHistory = (key, data) => {
  const history = JSON.parse(localStorage.getItem(`aipalm_history_${key}`) || '[]');
  history.unshift({ ...data, date: new Date().toISOString() });
  localStorage.setItem(`aipalm_history_${key}`, JSON.stringify(history.slice(0, 20))); // Keep last 20
};

export const getHistory = (key) => {
  return JSON.parse(localStorage.getItem(`aipalm_history_${key}`) || '[]');
};
