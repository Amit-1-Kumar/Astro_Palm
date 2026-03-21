import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCamera } from '@/hooks/useCamera';
import TopHeader from '@/components/layout/TopHeader';
import ScanGuideOverlay from './ScanGuideOverlay';
import ImageUploader from './ImageUploader';
import NeonButton from '@/components/ui/NeonButton';
import Spinner from '@/components/ui/Spinner';
import { Sparkles, X } from 'lucide-react';

const CameraScanner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handState = location.state?.hand || 'right';
  const { videoRef, startCamera, stopCamera, takePhoto, error, isLive } = useCamera();
  const [capturedImg, setCapturedImg] = useState(null);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  const handleCapture = () => {
    const imgData = takePhoto();
    if (imgData) {
      setCapturedImg(imgData);
      stopCamera();
    }
  };

  const handleAnalyze = () => {
    navigate('/palm/result', { state: { image: capturedImg, hand: handState }, replace: true });
  };

  const handleRetake = () => {
    setCapturedImg(null);
    startCamera();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column' }}>
      <TopHeader title={`Scanning ${handState === 'left' ? 'Left' : 'Right'} Hand`} showBack={true} />
      
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!capturedImg ? (
          <>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transform: handState === 'left' ? 'scaleX(-1)' : 'none' }} 
            />
            {isLive && <ScanGuideOverlay hand={handState} />}
            {error && (
              <div style={{ position: 'absolute', padding: '24px', textAlign: 'center', background: 'rgba(240, 244, 248,0.8)', borderRadius: '16px' }}>
                <p style={{ color: '#FF6B6B', marginBottom: '16px' }}>{error}</p>
                <ImageUploader onImageReady={(img) => setCapturedImg(img)} />
              </div>
            )}
          </>
        ) : (
          <div className="animate-fade-in" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img src={capturedImg} alt="Captured Palm" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(138,43,226,0.3)', mixBlendMode: 'overlay' }} />
          </div>
        )}
      </div>

      <div style={{ padding: '32px 24px', background: 'var(--bg-dark)', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', zIndex: 20, boxShadow: '0 -10px 30px rgba(0,0,0,0.5)' }}>
        {!capturedImg ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            {isLive ? (
              <button 
                onClick={handleCapture}
                style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'transparent', border: '5px solid var(--secondary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--text-main)' }} className="animate-pulse-glow" />
              </button>
            ) : (
              <Spinner size={30} message="Initializing cosmic lens..." />
            )}
            {!error && <ImageUploader onImageReady={setCapturedImg} />}
          </div>
        ) : (
          <div className="animate-fade-in" style={{ display: 'flex', gap: '16px' }}>
            <NeonButton variant="secondary" onClick={handleRetake} style={{ flex: 0.4 }}>
              <X size={20} /> Retake
            </NeonButton>
            <NeonButton variant="primary" onClick={handleAnalyze} style={{ flex: 1 }}>
              <Sparkles size={20} /> Read My Lines
            </NeonButton>
          </div>
        )}
      </div>
    </div>
  );
};
export default CameraScanner;
