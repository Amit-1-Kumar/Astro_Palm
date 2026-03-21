import { useContext, useState, useEffect } from 'react';
import { AppContext } from '@/context/AppContext';

export const useTranslation = () => {
  const { settings } = useContext(AppContext);
  const [dict, setDict] = useState({});

  useEffect(() => {
    let active = true;
    const lang = settings?.language || 'en';
    
    import(`../data/locales/${lang}.json`)
      .then((module) => { if (active) setDict(module.default) })
      .catch(() => {
        import('../data/locales/en.json').then((m) => { if (active) setDict(m.default) })
      });
      
    return () => { active = false; };
  }, [settings?.language]);

  const t = (key) => dict[key] || key;

  return { t, language: settings?.language };
};
