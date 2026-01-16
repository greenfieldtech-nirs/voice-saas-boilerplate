import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Transform Your Voice Services?</h2>
        <p>
          Join hundreds of companies already using VoiceFlow to build intelligent voice applications.
          Start your free trial today and see the difference.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">
            Start Free Trial
          </button>
          <button className="btn-secondary">
            Schedule Demo
          </button>
        </div>

        <div className="cta-features">
          <div className="feature">
            <span className="check">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="feature">
            <span className="check">✓</span>
            <span>Full access to all features</span>
          </div>
          <div className="feature">
            <span className="check">✓</span>
            <span>24/7 support included</span>
          </div>
        </div>
      </div>
    </section>
  );
};