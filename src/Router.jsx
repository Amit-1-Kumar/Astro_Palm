import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Root Pages
import SplashScreen from '@/pages/SplashScreen';
import LanguageSelection from '@/pages/LanguageSelection';
import Onboarding from '@/pages/Onboarding';
import ProfileSetup from '@/pages/ProfileSetup';
import Home from '@/pages/Home';
import Settings from '@/pages/Settings';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import NotFound from '@/pages/NotFound';

// Features
import HandSelection from '@/features/palm-scan/HandSelection';
import CameraScanner from '@/features/palm-scan/CameraScanner';
import PalmResult from '@/features/palm-scan/PalmResult';
import ChatDashboard from '@/features/ai-chat/ChatDashboard';
import TarotCategories from '@/features/tarot/TarotCategories';
import CardDraw from '@/features/tarot/CardDraw';
import TarotResult from '@/features/tarot/TarotResult';
import LoveReading from '@/features/love-reading/LoveReading';
import DailyGuidance from '@/features/daily-guidance/DailyGuidance';
import ZodiacSelector from '@/features/horoscope/ZodiacSelector';
import HoroscopeResult from '@/features/horoscope/HoroscopeResult';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/language" element={<LanguageSelection />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/setup" element={<ProfileSetup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      
      {/* Palm Scan Flow */}
      <Route path="/palm/select" element={<HandSelection />} />
      <Route path="/palm/scan" element={<CameraScanner />} />
      <Route path="/palm/result" element={<PalmResult />} />
      
      {/* Chat Flow */}
      <Route path="/chat" element={<ChatDashboard />} />
      
      {/* Tarot Flow */}
      <Route path="/tarot" element={<TarotCategories />} />
      <Route path="/tarot/draw" element={<CardDraw />} />
      <Route path="/tarot/result" element={<TarotResult />} />
      
      {/* Specialized Features */}
      <Route path="/love" element={<LoveReading />} />
      <Route path="/daily" element={<DailyGuidance />} />
      
      {/* Horoscope Flow */}
      <Route path="/horoscope" element={<ZodiacSelector />} />
      <Route path="/horoscope/result" element={<HoroscopeResult />} />
      
      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
