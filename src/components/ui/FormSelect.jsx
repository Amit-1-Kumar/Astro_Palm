import React from 'react';
import { ChevronDown } from 'lucide-react';

const FormSelect = ({ label, value, onChange, options = [] }) => {
  return (
    <div style={{ marginBottom: '24px', width: '100%' }}>
      {label && <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-accent)', fontSize: '14px', fontFamily: 'Outfit' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select 
          value={value}
          onChange={onChange}
          style={{
            width: '100%',
            padding: '16px',
            background: 'var(--bg-card)',
            border: '1px solid rgba(138, 43, 226, 0.3)',
            borderRadius: '16px',
            color: 'var(--text-main)',
            fontSize: '16px',
            appearance: 'none',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.value} style={{ background: 'var(--bg-dark)', color: 'var(--text-main)' }}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={20} color="var(--text-muted)" style={{ position: 'absolute', right: '16px', top: '16px', pointerEvents: 'none' }} />
      </div>
    </div>
  );
};
export default FormSelect;
