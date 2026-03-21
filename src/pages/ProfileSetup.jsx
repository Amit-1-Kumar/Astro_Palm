import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';
import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import NeonButton from '@/components/ui/NeonButton';
import TopHeader from '@/components/layout/TopHeader';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const { setProfile, setSettings } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: '', dob: '', time: '', gender: 'neutral' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    setProfile(formData);
    setSettings({ seenOnboarding: true });
    navigate('/home');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title="Your Cosmic Profile" showBack={false} />
      <div className="animate-fade-in" style={{ padding: '24px', flex: 1 }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '15px', lineHeight: 1.5 }}>
          This information is used exclusively to align the AI's spiritual tone with your unique energetic signature.
        </p>
        <form onSubmit={handleSubmit}>
          <FormInput 
            label="What should we call you?" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
            required 
          />
          <FormInput 
            label="Date of Birth (Optional)" 
            type="date" 
            value={formData.dob} 
            onChange={e => setFormData({...formData, dob: e.target.value})} 
          />
          <FormInput 
            label="Time of Birth (Optional)" 
            type="time" 
            value={formData.time} 
            onChange={e => setFormData({...formData, time: e.target.value})} 
          />
          <FormSelect 
            label="Energy / Gender" 
            value={formData.gender}
            onChange={e => setFormData({...formData, gender: e.target.value})}
            options={[
              { label: 'Neutral / Fluid', value: 'neutral' },
              { label: 'Feminine', value: 'feminine' },
              { label: 'Masculine', value: 'masculine' }
            ]}
          />
          <div style={{ marginTop: '48px' }}>
            <NeonButton type="submit" disabled={!formData.name}>
              Align Stars & Enter
            </NeonButton>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfileSetup;
