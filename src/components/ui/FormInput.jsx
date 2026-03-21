import React from 'react';

const FormInput = ({ label, type = "text", value, onChange, placeholder, required = false }) => {
  return (
    <div style={{ marginBottom: '24px', width: '100%' }}>
      {label && <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-accent)', fontSize: '14px', fontFamily: 'Outfit' }}>{label}</label>}
      <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          padding: '16px',
          background: 'var(--bg-card)',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          borderRadius: '16px',
          color: 'var(--text-main)',
          fontSize: '16px',
          outline: 'none',
          transition: 'border-color 0.3s ease'
        }}
        onFocus={(e) => e.target.style.borderColor = 'var(--secondary-accent)'}
        onBlur={(e) => e.target.style.borderColor = 'rgba(138, 43, 226, 0.3)'}
      />
    </div>
  );
};
export default FormInput;
