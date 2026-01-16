import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <span className="brand-icon">🎙️</span>
          <span className="brand-text">VoiceFlow</span>
        </div>

        <div className="navbar-menu">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#testimonials" className="navbar-link">Testimonials</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>

        <div className="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>


    </nav>
  );
};