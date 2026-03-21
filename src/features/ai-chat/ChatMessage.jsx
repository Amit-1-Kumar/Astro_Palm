import React from 'react';

const ChatMessage = ({ message, isLast }) => {
  const isAI = message.sender === 'ai';
  
  // Format pure text with paragraphs natively 
  const formattedText = message.text.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i !== message.text.split('\n').length - 1 && <div style={{ height: '12px' }} />}
    </React.Fragment>
  ));

  return (
    <div className={isLast ? "animate-fade-in" : ""} style={{
      alignSelf: isAI ? 'flex-start' : 'flex-end',
      maxWidth: '88%',
      padding: '16px 20px',
      borderRadius: '24px',
      borderBottomLeftRadius: isAI ? '6px' : '24px',
      borderBottomRightRadius: !isAI ? '6px' : '24px',
      background: isAI ? 'rgba(138, 43, 226, 0.15)' : 'linear-gradient(135deg, rgba(64, 224, 208, 0.15), rgba(64, 224, 208, 0.05))',
      border: `1px solid ${isAI ? 'rgba(138, 43, 226, 0.3)' : 'rgba(64, 224, 208, 0.3)'}`,
      color: 'var(--text-main)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      fontSize: '15px',
      lineHeight: 1.6,
      backdropFilter: 'blur(8px)'
    }}>
      {formattedText}
      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '8px', textAlign: isAI ? 'left' : 'right' }}>
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};
export default ChatMessage;
