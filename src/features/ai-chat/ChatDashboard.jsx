import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { getAITextGuidance } from '@/services/aiService';
import TopHeader from '@/components/layout/TopHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Trash2 } from 'lucide-react';

const ChatDashboard = () => {
  const { profile, settings } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: 'welcome',
        sender: 'ai',
        text: `Welcome ${profile?.name || 'Seeker'}. I am Lumina, your cosmic oracle. How may I illuminate your path today?`,
        timestamp: new Date()
      }]);
    }
  }, [messages.length, profile?.name]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    
    const userMsg = { id: Date.now().toString(), sender: 'user', text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setError(null);

    try {
      // Build context history for continuous conversation
      let prompt = `Seeker's Name: ${profile?.name || 'Unknown'}. Energy alignment: ${profile?.gender || 'Neutral'}. Context history:\n`;
      messages.slice(-8).forEach(m => {
        prompt += `${m.sender === 'ai' ? 'Oracle' : 'Seeker'}: ${m.text}\n`;
      });
      prompt += `Seeker: ${text}\nOracle:`;

      const response = await getAITextGuidance(prompt, settings.language || 'en');
      
      const aiMsg = { id: (Date.now()+1).toString(), sender: 'ai', text: response, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setError("The connection to the astral plane was disrupted. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    if (window.confirm("Clear this spectral session? Your energy tie will be reset.")) {
      setMessages([]);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 100 }}>
      <TopHeader 
        title="Cosmic Oracle" 
        rightAction={<button onClick={handleClear} style={{ background: 'none', border: 'none', color: '#FF6B6B', cursor: 'pointer' }}><Trash2 size={24}/></button>} 
      />
      
      <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        {/* Subtle background overlay specifically for Chat */}
        <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/cosmic-bg.webp) center/cover', opacity: 0.1, zIndex: 0 }} />
        <MessageList messages={messages} isTyping={isTyping} error={error} />
      </div>
      
      <MessageInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
};
export default ChatDashboard;
