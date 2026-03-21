import React, { useRef } from 'react';
import NeonButton from '@/components/ui/NeonButton';
import { Upload } from 'lucide-react';

const ImageUploader = ({ onImageReady }) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageReady(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input 
        type="file" 
        accept="image/*" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileChange} 
      />
      <NeonButton variant="secondary" onClick={() => fileInputRef.current?.click()} style={{ display: 'inline-flex', width: 'auto' }}>
        <Upload size={18} /> Or Upload Image
      </NeonButton>
    </div>
  );
};
export default ImageUploader;
