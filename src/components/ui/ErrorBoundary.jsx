import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Cosmic Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-main)', background: 'var(--bg-dark)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontFamily: 'Outfit', color: 'var(--tertiary-accent)' }}>The stars have misaligned...</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>An unexpected disturbance occurred in your cosmic journey.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '12px 24px', background: 'linear-gradient(45deg, var(--primary-accent), var(--secondary-accent))', color: 'white', border: 'none', borderRadius: '24px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
            Realign Journey
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
