import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from '@/components/ui/TypingIndicator';

const MessageList = ({ messages, isTyping, error }) => {
  const bottomRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, error]);

  return (
    <div style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
      {messages.map((msg, index) => (
        <ChatMessage key={msg.id} message={msg} isLast={index === messages.length - 1} />
      ))}
      
      {isTyping && (
        <div className="animate-fade-in" style={{ alignSelf: 'flex-start' }}>
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px', marginLeft: '12px' }}>Oracle is meditating...</p>
          <TypingIndicator />
        </div>
      )}

      {error && (
        <div className="animate-fade-in" style={{ alignSelf: 'center', textAlign: 'center', padding: '12px 20px', color: '#FF6B6B', fontSize: '13px', border: '1px solid rgba(255,107,107,0.3)', borderRadius: '16px', background: 'rgba(255,107,107,0.05)', maxWidth: '80%' }}>
          {error}
        </div>
      )}
      {/* Padding space so input doesnt cover bottom text */}
      <div ref={bottomRef} style={{ height: '100px' }} />
    </div>
  );
};
export default MessageList;
