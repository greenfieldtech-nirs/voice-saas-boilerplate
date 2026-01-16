import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-in-up">
          Transform Your Business with
          <br />
          <span className="highlight">Voice AI Solutions</span>
        </h1>

        <p className="hero-subtitle fade-in-up">
          Build intelligent voice applications with our enterprise-grade SaaS platform.
          Integrate Cloudonix voice services, deploy custom IVRs, and scale globally.
        </p>

        <div className="hero-buttons fade-in-up">
          <button className="btn-primary">
            Start Free Trial
            <span className="arrow">→</span>
          </button>
          <button className="btn-secondary">
            Watch Demo
          </button>
        </div>

        <div className="hero-stats fade-in-up">
          <div className="stat">
            <span className="stat-number">10M+</span>
            <span className="stat-label">Calls Processed</span>
          </div>
          <div className="stat">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Companies</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="floating-card card-1">
          <div className="card-icon">📞</div>
          <div className="card-content">
            <h4>Voice Calls</h4>
            <p>Real-time voice processing</p>
          </div>
        </div>

        <div className="floating-card card-2">
          <div className="card-icon">🤖</div>
          <div className="card-content">
            <h4>AI Integration</h4>
            <p>Smart conversation flows</p>
          </div>
        </div>

        <div className="floating-card card-3">
          <div className="card-icon">☁️</div>
          <div className="card-content">
            <h4>Cloud Native</h4>
            <p>Scalable infrastructure</p>
          </div>
        </div>
      </div>


    </section>
  );
};