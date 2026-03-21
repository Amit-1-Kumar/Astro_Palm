import React, { useState } from 'react';
import { SendIcon } from 'lucide-react';

const MessageInput = ({ onSend, disabled }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(240, 244, 248, 0.95)', backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(0,0,0,0.04)',
      padding: '16px', paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
      zIndex: 50
    }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', maxWidth: '800px', margin: '0 auto' }}>
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask the cosmos for guidance..."
          disabled={disabled}
          rows={text.split('\n').length > 1 ? Math.min(text.split('\n').length, 4) : 1}
          style={{
            flex: 1, padding: '14px 20px', background: 'rgba(0,0,0,0.04)',
            border: '1px solid rgba(138, 43, 226, 0.4)', borderRadius: '24px',
            color: 'var(--text-main)', fontSize: '15px', resize: 'none', outline: 'none',
            fontFamily: 'Inter', overflow: 'hidden', minHeight: '52px'
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button 
          type="submit" 
          disabled={disabled || !text.trim()}
          style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: disabled || !text.trim() ? 'rgba(0,0,0,0.04)' : 'linear-gradient(45deg, var(--primary-accent), var(--secondary-accent))',
            border: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: disabled || !text.trim() ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s', flexShrink: 0
          }}
        >
          <SendIcon size={20} style={{ marginLeft: '4px' }} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
